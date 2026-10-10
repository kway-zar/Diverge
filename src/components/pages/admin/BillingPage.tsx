import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import BillingStatus from "../../modals/BillingStatus";
import type { Invoice } from "../../types/invoice";
import { publishDataChange, useDataRefresh } from "@/hooks/useDataRefresh";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001";
const PAGE_SIZE = 25;

type BillingSummary = {
  collectedThisMonth: number;
  pendingAmount: number;
  overdueAmount: number;
  creditNotesIssuedThisMonth: number;
  overdue31DayAccountCount: number;
  suspendedAccountCount: number;
};

const emptySummary: BillingSummary = {
  collectedThisMonth: 0,
  pendingAmount: 0,
  overdueAmount: 0,
  creditNotesIssuedThisMonth: 0,
  overdue31DayAccountCount: 0,
  suspendedAccountCount: 0,
};

function getCurrentPeriod() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "2-digit",
  }).format(new Date());
}

function formatCurrency(cents: number) {
  return `₱${(cents / 100).toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;
}

function BillingPage() {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [summary, setSummary] = useState<BillingSummary>(emptySummary);
  const [period, setPeriod] = useState(getCurrentPeriod);
  const [dueFrom, setDueFrom] = useState("");
  const [dueTo, setDueTo] = useState("");
  const [page, setPage] = useState(1);
  const [totalInvoices, setTotalInvoices] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [notice, setNotice] = useState("");
  const [isRunningSuspension, setIsRunningSuspension] = useState(false);

  const loadBillingData = async () => {
    const token = localStorage.getItem("diverge_token");
    if (!token) {
      setInvoices([]);
      setTotalInvoices(0);
      setSummary(emptySummary);
      setErrorMessage("Sign in as an administrator to view billing data.");
      return;
    }

    setIsLoading(true);
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const invoiceParams = new URLSearchParams({ page: String(page), limit: String(PAGE_SIZE) });
      if (dueFrom) invoiceParams.set("dueFrom", dueFrom);
      if (dueTo) invoiceParams.set("dueTo", dueTo);
      const [invoiceResponse, summaryResponse] = await Promise.all([
        fetch(`${API_BASE_URL}/api/v1/admin/billing/invoices?${invoiceParams.toString()}`, { headers }),
        fetch(`${API_BASE_URL}/api/v1/admin/billing/summary?period=${period}`, { headers }),
      ]);
      const failedResponse = [invoiceResponse, summaryResponse].find((response) => !response.ok);
      if (failedResponse?.status === 401 || failedResponse?.status === 403) {
        throw new Error("Your administrator session is invalid or no longer has billing access. Sign out and sign in again.");
      }
      if (failedResponse) throw new Error(`Unable to load billing data (HTTP ${failedResponse.status}).`);

      const [invoicePayload, summaryPayload] = await Promise.all([
        invoiceResponse.json(),
        summaryResponse.json(),
      ]);
      setInvoices(Array.isArray(invoicePayload?.data) ? invoicePayload.data : []);
      setTotalInvoices(Number(invoicePayload?.total ?? 0));
      setSummary(summaryPayload?.data ?? emptySummary);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to load billing data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadBillingData();
  }, [page, period, dueFrom, dueTo]);
  useDataRefresh(loadBillingData);

  const handleRefreshCycle = async () => {
    const token = localStorage.getItem("diverge_token");
    if (!token) return;

    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/admin/billing/refresh-cycle`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ period }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message ?? "Billing cycle could not be processed.");
      publishDataChange();
      await loadBillingData();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Billing cycle could not be processed.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleIssueCreditNote = async (invoiceID: string, amountCents: number, reason: string) => {
    const token = localStorage.getItem("diverge_token");
    if (!token) throw new Error("Sign in as an administrator to issue a credit note.");

    const response = await fetch(`${API_BASE_URL}/api/v1/admin/billing/invoices/${encodeURIComponent(invoiceID)}/credit-notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ amountCents, reason }),
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload?.message ?? "Unable to issue credit note.");

    publishDataChange();
    await loadBillingData();
    setSelectedInvoice(null);
    setIsModalOpen(false);
  };

  const handleRunSuspension = async () => {
    const token = localStorage.getItem("diverge_token");
    if (!token) return;

    setIsRunningSuspension(true);
    setErrorMessage("");
    setNotice("");
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/admin/billing/br-01/run-suspensions`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message ?? "BR-01 suspension scan failed.");
      setNotice(payload?.message ?? "BR-01 suspension scan completed.");
      publishDataChange();
      await loadBillingData();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "BR-01 suspension scan failed.");
    } finally {
      setIsRunningSuspension(false);
    }
  };

  const warningMessage = summary.overdue31DayAccountCount > 0
    ? `${summary.overdue31DayAccountCount} account${summary.overdue31DayAccountCount === 1 ? " is" : "s are"} 31+ days overdue. Review suspension eligibility and provisioning status.`
    : "No accounts are beyond the 31-day overdue threshold.";

  const stats = [
    { title: "Collected This Month", amount: formatCurrency(summary.collectedThisMonth), border: "58, 207, 152" },
    { title: "Pending Invoices", amount: formatCurrency(summary.pendingAmount), border: "34, 100, 231" },
    { title: "Overdue Payments", amount: formatCurrency(summary.overdueAmount), border: "255, 24, 28" },
    { title: "Credit Notes Issued", amount: formatCurrency(summary.creditNotesIssuedThisMonth), border: "255, 216, 24" },
  ];

  function getStatusBadge(status: Invoice["status"]) {
    switch (status) {
      case "Paid": return "bg-[#4BE0A9]/20";
      case "Pending": return "bg-[#7C7C7C]/20";
      case "Overdue": return "bg-[#B00049]/20";
    }
  }

  const totalPages = Math.max(1, Math.ceil(totalInvoices / PAGE_SIZE));

  return (
    <div className="w-full pr-10 mb-20">
      <div className="mb-8 flex w-full items-start justify-between gap-4">
        <div className="flex flex-col items-start text-left">
          <h1 className="text-[36px] font-bold leading-none tracking-[0.05em] text-white opacity-75">
            Billing Management
          </h1>
          <p className="mt-1 text-[18px] font-light italic leading-none tracking-[0.05em] text-white opacity-40">
            {new Date().toLocaleString("en-PH", { dateStyle: "full", timeStyle: "short", timeZone: "Asia/Manila" })} PHT
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-end justify-end gap-3">
          <label className="flex flex-col gap-1 text-[11px] font-light tracking-wide text-white/50">
            Due from
            <input
              aria-label="Filter invoices due from"
              type="date"
              value={dueFrom}
              max={dueTo || undefined}
              onChange={(event) => {
                setPage(1);
                setDueFrom(event.target.value);
              }}
              className="h-11 rounded-lg border border-white/15 bg-[#121212] px-3 text-white"
            />
          </label>
          <label className="flex flex-col gap-1 text-[11px] font-light tracking-wide text-white/50">
            Due to
            <input
              aria-label="Filter invoices due until"
              type="date"
              value={dueTo}
              min={dueFrom || undefined}
              onChange={(event) => {
                setPage(1);
                setDueTo(event.target.value);
              }}
              className="h-11 rounded-lg border border-white/15 bg-[#121212] px-3 text-white"
            />
          </label>
          <label className="flex flex-col gap-1 text-[11px] font-light tracking-wide text-white/50">
            Billing period
            <input
              aria-label="Billing period"
              type="month"
              value={period}
              onChange={(event) => {
                setPage(1);
                setPeriod(event.target.value);
              }}
              className="h-11 rounded-lg border border-white/15 bg-[#121212] px-3 text-white"
            />
          </label>
          <Button
            onClick={handleRefreshCycle}
            disabled={isLoading}
            className="h-11 w-[220px] rounded-xl border-none bg-[#3ACF98]/25 text-[16px] font-normal tracking-wide text-white shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black hover:bg-[#3ACF98]/35"
          >
            {isLoading ? "Processing..." : "Refresh Billing Cycle"}
          </Button>
        </div>
      </div>

      {errorMessage && <p role="alert" className="mb-5 text-left text-sm text-red-300">{errorMessage}</p>}
      {notice && <p role="status" className="mb-5 text-left text-sm text-emerald-300">{notice}</p>}

      <div className="mb-8 grid w-full grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="relative flex h-[135px] flex-col items-start justify-center overflow-hidden rounded-[5px] border-0 bg-transparent pl-6 text-left shadow-none ring-0">
            <span
              className="absolute bottom-0 left-0 top-0 w-[11px] rounded-l-[5px] shadow-glassy-jeri"
              style={{ backgroundColor: `rgba(${stat.border}, 0.4)`, ["--glassy-color" as string]: stat.border }}
            />
            <CardHeader className="m-0 w-full space-y-0 p-0 text-left">
              <CardTitle className="text-[20px] font-light leading-[100%] tracking-[0.05em] text-white opacity-60">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="m-0 w-full p-0 pt-1 text-left">
              <p className="text-[34px] font-bold leading-[100%] tracking-[0.05em] text-white opacity-70">
                {stat.amount}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mb-8 flex min-h-[83px] w-full items-center gap-4 rounded-xl border border-red-900/40 bg-[#2C0A0E] px-5 py-3.5 shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black">
        <AlertTriangle className="h-12 w-12 shrink-0 text-amber-500" />
        <div className="flex-1 text-left">
          <h2 className="text-[21px] font-bold leading-tight tracking-[0.05em] text-[#E18E08] opacity-75">
            BR-01 Past Due Suspension
          </h2>
          <p className="mt-2 text-sm leading-snug tracking-[0.05em] text-[#E18E08] opacity-75">{warningMessage}</p>
          <p className="mt-1 text-xs leading-snug tracking-[0.05em] text-[#E18E08]/70">
            {summary.suspendedAccountCount} account{summary.suspendedAccountCount === 1 ? "" : "s"} currently suspended.
          </p>
        </div>
        <Button
          onClick={handleRunSuspension}
          disabled={isRunningSuspension}
          className="h-11 shrink-0 rounded-xl border border-amber-500/40 bg-amber-500/20 px-4 text-sm font-normal tracking-wide text-amber-200 shadow-glassy-jeri hover:bg-amber-500/30"
        >
          {isRunningSuspension ? "Running..." : "Run suspension check"}
        </Button>
      </div>

      <div className="w-full">
        <h2 className="mb-3 text-left text-[24px] font-medium italic leading-[100%] tracking-[0.05em] text-white opacity-40">
          Invoices
        </h2>
        <div className="w-full overflow-x-auto rounded-[16px] border border-white/10 bg-[#121212] px-6 py-3 shadow-2xl">
          <Table className="w-full text-xs">
            <TableHeader>
              <TableRow className="border-b border-white/10 hover:bg-transparent">
                {["INVOICE ID", "ACCOUNT", "PLAN", "AMOUNT", "DUE DATE", "PAYMENT METHOD", "STATUS"].map((heading) => (
                  <TableHead key={heading} className="text-center text-[16px] font-light leading-[100%] tracking-[0.05em] text-white opacity-40">{heading}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow
                  key={invoice.invoiceID}
                  onClick={() => {
                    setSelectedInvoice(invoice);
                    setIsModalOpen(true);
                  }}
                  className="cursor-pointer border-b border-white/5 text-center transition-colors hover:bg-white/5"
                >
                  <TableCell className="py-3 text-center text-[16px] font-medium text-[#3ACF98] opacity-75">{invoice.invoiceID}</TableCell>
                  <TableCell className="max-w-[180px] truncate py-3 text-center text-[16px] font-medium text-[#C4C4C4]">{invoice.account}</TableCell>
                  <TableCell className="max-w-[180px] truncate py-3 text-center text-[16px] font-light text-[#C4C4C4]/90">{invoice.plan}</TableCell>
                  <TableCell className="py-3 text-center text-[15px] font-medium text-[#C4C4C4]">{invoice.amount}</TableCell>
                  <TableCell className="py-3 text-center text-[15px] font-light text-[#C4C4C4]">{new Date(invoice.dueDate).toLocaleDateString("en-PH", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}</TableCell>
                  <TableCell className="py-3 text-center text-[15px] font-light text-[#C4C4C4]">{invoice.paymentMethod}</TableCell>
                  <TableCell className="py-3 text-center">
                    <span className={`inline-block w-[90px] rounded-full px-3 py-2 text-center text-[14px] leading-[100%] text-[#C4C4C4] ${getStatusBadge(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
              {!invoices.length && (
                <TableRow>
                  <TableCell colSpan={7} className="py-10 text-center text-white/50">
                    {isLoading ? "Loading invoices..." : "No invoices found for this page."}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/60">
            <span>{totalInvoices} invoice{totalInvoices === 1 ? "" : "s"}</span>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" disabled={page <= 1 || isLoading} onClick={() => setPage((current) => current - 1)}>Previous</Button>
              <span>Page {page} of {totalPages}</span>
              <Button variant="outline" size="sm" disabled={page >= totalPages || isLoading} onClick={() => setPage((current) => current + 1)}>Next</Button>
            </div>
          </div>
        </div>
      </div>
      <BillingStatus
        invoice={selectedInvoice}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onIssueCreditNote={handleIssueCreditNote}
      />
    </div>
  );
}

export default BillingPage;
