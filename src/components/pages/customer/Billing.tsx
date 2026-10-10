import { useEffect, useState } from "react";
import { Badge } from "../../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import PayNowModal from "../../modals/PayNowModal";
import { buildPaymentHistory, resolveInvoiceStatus } from "../../data/billingData";
import type { Invoice } from "../../types/invoice";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table";
import { publishDataChange, useDataRefresh } from "@/hooks/useDataRefresh";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001";
type ActivePlan = { id: string; name: string; speed: string | null; cost: number | null; status: string };

function mapInvoice(invoice: Record<string, unknown>): Invoice {
  const dueDate = String(invoice.dueDate ?? "");
  const rawStatus = invoice.status === "Paid" ? "Paid" : invoice.status === "Overdue" ? "Overdue" : "Pending";
  return {
    invoiceID: String(invoice.invoiceID ?? ""),
    account: String(invoice.account ?? ""),
    email: String(invoice.email ?? ""),
    contact: String(invoice.contact ?? ""),
    plan: String(invoice.plan ?? "Unassigned"),
    amount: String(invoice.amount ?? "₱0.00"),
    dueDate,
    paymentMethod: (invoice.paymentMethod ?? "-") as Invoice["paymentMethod"],
    status: resolveInvoiceStatus(rawStatus, dueDate),
  };
}

function Billing() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [activePlan, setActivePlan] = useState<ActivePlan | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [notice, setNotice] = useState("");

  async function loadCustomerBilling() {
    const token = localStorage.getItem("diverge_token");
    if (!token) {
      setErrorMessage("Sign in to view your billing account.");
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/customers/me/billing`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message ?? "Unable to load your billing account.");
      setInvoices(Array.isArray(payload?.data) ? payload.data.map(mapInvoice) : []);
      setActivePlan(payload?.activePlan ?? null);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to load your billing account.");
    } finally {
      setIsLoading(false);
    }
  }

  useDataRefresh(loadCustomerBilling);
  useEffect(() => { void loadCustomerBilling(); }, []);

  const currentBill = invoices.find((invoice) => invoice.status !== "Paid");
  const paymentHistory = buildPaymentHistory(invoices);
  const activePlanCost = activePlan?.cost == null
    ? "Not available"
    : `₱${(activePlan.cost / 100).toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;

  async function recordPayment({ invoiceId, method }: { invoiceId?: string; amount: string; method: "GCASH" | "MAYA" | "CARD" }) {
    const token = localStorage.getItem("diverge_token");
    if (!token || !invoiceId) throw new Error("Sign in to settle an invoice.");
    setNotice("");
    const response = await fetch(`${API_BASE_URL}/api/customers/me/billing/pay`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ invoiceId, paymentMode: "INTERNAL_DEMO", method }),
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload?.message ?? "Unable to process payment.");
    await loadCustomerBilling();
    setNotice(payload?.message ?? "Payment recorded. The invoice has been settled.");
    publishDataChange();
    return { paymentReference: String(payload?.paymentReference ?? "Recorded") };
  }

  return (
    <main className="w-full min-w-0 px-4 py-6 text-left font-ubuntu text-white sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
        <h1 className="text-xl font-medium tracking-wide sm:text-2xl">Billing &amp; Payments</h1>
        {errorMessage && <p role="alert" className="text-sm text-red-300">{errorMessage}</p>}
        {notice && <p role="status" className="text-sm text-emerald-300">{notice}</p>}

        <Card className="gap-4 rounded-lg border-white/10 bg-white/5 py-4 text-white shadow-glassy-jeri ring-0 [--glassy-color:79_79_79] sm:py-5">
          <CardHeader className="px-4 sm:px-5">
            <p className="font-ubuntu-mono text-[10px] uppercase tracking-[0.12em] text-white/50">Active subscription</p>
            {activePlan ? (
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <CardTitle className="mt-1 text-xl font-semibold sm:text-2xl">{activePlan.name}</CardTitle>
                  <p className="mt-1 text-sm text-white/60">{activePlan.speed ?? "Plan speed not listed"}</p>
                </div>
                <p className="text-xl font-semibold tabular-nums">{activePlanCost}<span className="ml-1 text-sm font-normal text-white/50">/month</span></p>
              </div>
            ) : <p className="mt-1 text-sm text-white/60">No active subscription was found.</p>}
          </CardHeader>
          <CardContent className="px-4 sm:px-5">
            {isLoading ? <p className="text-sm text-white/60">Loading billing records...</p> : currentBill ? (
              <div className="flex flex-wrap items-end justify-between gap-4 border-t border-white/10 pt-4">
                <div>
                  <p className="font-ubuntu-mono text-[10px] uppercase text-white/50">Outstanding invoice</p>
                  <p className="mt-1 text-sm text-white/75">{currentBill.invoiceID} · Due {currentBill.dueDate}</p>
                  <p className="mt-1 text-2xl font-semibold tabular-nums">{currentBill.amount}</p>
                  <p className="text-xs text-white/45">Issued plan snapshot: {currentBill.plan}</p>
                </div>
                <PayNowModal
                  accountNumber={currentBill.account}
                  invoiceId={currentBill.invoiceID}
                  billingPeriod={new Date(`${currentBill.dueDate}T00:00:00Z`).toLocaleDateString("en-PH", { month: "long", year: "numeric", timeZone: "UTC" })}
                  dueDate={currentBill.dueDate}
                  amount={currentBill.amount}
                  planName={currentBill.plan}
                  onPaymentSuccess={recordPayment}
                />
              </div>
            ) : !isLoading && (
              <p className="border-t border-white/10 pt-4 text-sm text-white/60">No outstanding invoices. The active plan and next invoice will update on the next billing cycle.</p>
            )}
          </CardContent>
        </Card>

        <Card className="gap-0 overflow-hidden rounded-lg border-white/10 bg-white/5 py-0 text-white shadow-glassy-jeri ring-0 [--glassy-color:79_79_79]">
          <CardHeader className="border-b border-white/15 px-4 py-3 sm:px-5">
            <CardTitle className="font-ubuntu text-sm font-medium">Invoice history</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="overflow-x-auto">
              <Table className="min-w-[680px] font-ubuntu-mono text-xs">
                <TableHeader className="bg-white/[0.04]">
                  <TableRow className="border-white/10 hover:bg-transparent">
                    <TableHead className="h-8 px-4 text-[10px] font-medium uppercase tracking-wider text-white/60 sm:px-5">Invoice</TableHead>
                    <TableHead className="h-8 text-[10px] font-medium uppercase tracking-wider text-white/60">Plan at issue</TableHead>
                    <TableHead className="h-8 text-[10px] font-medium uppercase tracking-wider text-white/60">Amount</TableHead>
                    <TableHead className="h-8 text-[10px] font-medium uppercase tracking-wider text-white/60">Due date</TableHead>
                    <TableHead className="h-8 text-[10px] font-medium uppercase tracking-wider text-white/60">Method</TableHead>
                    <TableHead className="h-8 pr-4 text-[10px] font-medium uppercase tracking-wider text-white/60 sm:pr-5">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentHistory.map((payment) => (
                    <TableRow key={payment.invoice} className="border-white/10 hover:bg-white/[0.04]">
                      <TableCell className="px-4 py-2 font-medium text-[#3ACF98] sm:px-5">{payment.invoice}</TableCell>
                      <TableCell className="max-w-[150px] truncate py-2 text-white/80">{payment.plan}</TableCell>
                      <TableCell className="max-w-[110px] truncate py-2 tabular-nums">{payment.amount}</TableCell>
                      <TableCell className="max-w-[150px] truncate py-2 text-white/80">{payment.due}</TableCell>
                      <TableCell className="max-w-[150px] truncate py-2 text-white/80">{payment.method}</TableCell>
                      <TableCell className="py-2 pr-4 sm:pr-5"><Badge variant="outline" className={payment.status === "Paid" ? "h-5 rounded-full border-[#3ACF98]/30 bg-[#3ACF98]/10 px-2 text-[10px] text-[#3ACF98]" : "h-5 rounded-full border-white/20 bg-white/[0.06] px-2 text-[10px] text-white/70"}>{payment.status}</Badge></TableCell>
                    </TableRow>
                  ))}
                  {!isLoading && invoices.length === 0 && <TableRow><TableCell colSpan={6} className="py-8 text-center text-white/50">No invoices have been issued yet.</TableCell></TableRow>}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default Billing;
