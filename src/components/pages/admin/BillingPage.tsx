import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {useEffect, useState} from "react";
import type { Invoice, InvoiceStatus } from "../../types/invoice";
import BillingStatus from "../../modals/BillingStatus";
import {
  getStoredBillingInvoices,
  parseCurrencyAmount,
  persistBillingInvoices,
} from "../../data/billingData";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001";

function BillingPage() {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [invoices, setInvoices] = useState<Invoice[]>(() => getStoredBillingInvoices());

  useEffect(() => {
    let isMounted = true;
    const token = localStorage.getItem("diverge_token");

    async function loadBillingInvoices() {
      if (!token) {
        setInvoices(getStoredBillingInvoices());
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/customers/billing`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Billing fetch failed: ${response.status}`);
        }

        const payload = await response.json();
        const nextInvoices = Array.isArray(payload?.data)
          ? payload.data.map((invoice: any) => ({
              invoiceID: invoice.invoiceID,
              account: invoice.account,
              email: invoice.email,
              contact: invoice.contact,
              plan: invoice.plan,
              amount: invoice.amount,
              dueDate: invoice.dueDate,
              paymentMethod: invoice.paymentMethod ?? "-",
              status: invoice.status === "Paid" ? "Paid" : invoice.status === "Overdue" ? "Overdue" : "Pending",
            }))
          : getStoredBillingInvoices();

        if (isMounted) {
          setInvoices(nextInvoices);
          persistBillingInvoices(nextInvoices);
        }
      } catch {
        if (isMounted) {
          setInvoices(getStoredBillingInvoices());
        }
      }
    }

    void loadBillingInvoices();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleRowClick = (invoice: Invoice) => {
    setSelectedInvoice(invoice)
    setIsModalOpen(true)
  }

  const formatCurrency = (value: number) => `₱${value.toLocaleString("en-PH")}`;

  const totalPaid = invoices
    .filter((invoice) => invoice.status === "Paid")
    .reduce((sum, invoice) => sum + parseCurrencyAmount(invoice.amount), 0);
  const totalPending = invoices
    .filter((invoice) => invoice.status === "Pending")
    .reduce((sum, invoice) => sum + parseCurrencyAmount(invoice.amount), 0);
  const totalOverdue = invoices
    .filter((invoice) => invoice.status === "Overdue")
    .reduce((sum, invoice) => sum + parseCurrencyAmount(invoice.amount), 0);

  const stats = [
    { title: "Collected Weekly", amount: formatCurrency(totalPaid), border: "58, 207, 152" },
    { title: "Pending Invoices", amount: formatCurrency(totalPending), border: "34, 100, 231" },
    { title: "Overdue Payments", amount: formatCurrency(totalOverdue), border: "255, 24, 28" },
    { title: "Refunds Issued", amount: "₱9, 102", border: "255, 216, 24" },
  ];

  function getStatusBadge(status: Invoice["status"]) {
    switch (status) {
      case "Paid":
        return "bg-[#4BE0A9]/20";
      case "Pending":
        return "bg-[#7C7C7C]/20";
      case "Overdue":
        return "bg-[#B00049]/20";
    }
  }

  const handleStatusChange = async (invoiceID: string, newStatus: InvoiceStatus) => {
    const token = localStorage.getItem("diverge_token");

    setInvoices((prevInvoices) => {
      const updatedInvoices = prevInvoices.map((invoice) =>
        invoice.invoiceID === invoiceID ? { ...invoice, status: newStatus } : invoice
      );

      persistBillingInvoices(updatedInvoices);
      return updatedInvoices;
    });

    if (!token) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/customers/billing/${invoiceID}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error();
      }

      const payload = await response.json();
      const updatedInvoice = payload?.data;

      if (updatedInvoice) {
        setInvoices((prevInvoices) => {
          const updatedInvoices = prevInvoices.map((invoice) =>
            invoice.invoiceID === updatedInvoice.invoiceID ? {
              ...invoice,
              status: updatedInvoice.status,
              paymentMethod: updatedInvoice.paymentMethod ?? invoice.paymentMethod,
              amount: updatedInvoice.amount ?? invoice.amount,
            } : invoice,
          );

          persistBillingInvoices(updatedInvoices);
          return updatedInvoices;
        });
      }
    } catch {
      // keep local fallback state for offline or permission issues
    }
  };

  const handleGenerateInvoice = () => {
    const generatedInvoice: Invoice = {
      invoiceID: `INV-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-${String(invoices.length + 1).padStart(3, "0")}`,
      account: "New Diverge Customer",
      email: "new.customer@example.com",
      contact: "+63 955 123 4567",
      plan: "Diverge Netflix",
      amount: "₱1,499",
      dueDate: "Oct 15, 2026",
      paymentMethod: "-",
      status: "Pending",
    };

    setInvoices((prevInvoices) => {
      const updatedInvoices = [generatedInvoice, ...prevInvoices];
      persistBillingInvoices(updatedInvoices);
      return updatedInvoices;
    });
  };

  return (
    <div className="w-full pr-10 mb-20 ">
      <div className="w-full flex items-start justify-between mb-8">
        <div className="flex flex-col items-start text-left">
          <h1 className="text-[36px] font-bold leading-none tracking-[0.05em] opacity-75 text-[#FFFFFF]">
            Billing Management
          </h1>
          <p className="text-[24px] font-light italic leading-none tracking-[0.05em] text-[#FFFFFF] opacity-30 mt-1">
            Wednesday, September 16, 2026 12:31 AM PHT
          </p>
        </div>

        <Button 
          onClick={handleGenerateInvoice}
          className="shrink-0 w-[200px] h-[44px] bg-[#3ACF98]/25 rounded-[12px] text-[18px] font-normal tracking-wide text-white cursor-pointer border-none shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black hover:bg-[#3ACF98]/35">
          Generate Invoice
        </Button>
      </div>
      
      <div className="grid grid-cols-4 gap-6 w-full mb-8">
        {stats.map((stat, i) => (
          <Card
            key={i}
            className="relative overflow-hidden h-[135px] !py-0 rounded-[5px] !border-0 !shadow-none !ring-0 !bg-transparent pl-6 flex flex-col items-start text-left justify-center"
          >
            <span 
            className="absolute left-0 top-0 bottom-0 w-[11px] rounded-l-[5px] shadow-glassy-jeri" 
            style={{ 
              backgroundColor: `rgba(${stat.border}, 0.4)`,
              ['--glassy-color' as string]: stat.border
            }}
            />
            <CardHeader className="!p-0 !m-0 space-y-0 w-full text-left">
              <CardTitle className="text-[24px] font-light leading-[100%] tracking-[0.05em] text-[#FFFFFF] opacity-60">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="!p-0 !m-0 pt-1 w-full text-left">
              <p className="text-[40px] font-bold leading-[100%] tracking-[0.05em] text-[#FFFFFF] opacity-60">
                {stat.amount}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="w-full bg-[#B00049]/30 rounded-xl h-[83px] border border-red-900/40 bg-[#2C0A0E] px-5 py-3.5 flex items-center gap-4 mb-8 shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black">
        <AlertTriangle className="w-[64px] h-[59px] text-amber-500 shrink-0" />
        <div className="text-left mb-2">
          <h3 className="text-[24px] font-bold leading-[100%] tracking-[0.05em] text-[#E18E08] opacity-75">
            BR-01 Past Due Suspension
          </h3>
          <p className="text-[16px] font-regular leading-[100%] mt-3 tracking-[0.05em] text-[#E18E08] opacity-75">
            18 accounts are 31+ days overdue. Automatic account suspension for today at 12:00AM PHT per BR-01.
          </p>
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-[24px] text-left font-medium italic leading-[100%] tracking-[0.05em] text-[#FFFFFF] opacity-40 mb-3">
          Invoices
        </h2>
        <div className="w-full rounded-[16px] bg-[#121212] border border-white/10 px-6 py-3 shadow-2xl overflow-x-auto flex">
        <Table className="w-full text-xs">
          <TableHeader>
            <TableRow className="border-b border-white/10 hover:bg-transparent">
              <TableHead className="text-center text-[20px] font-light leading-[100%] tracking-[0.05em] text-[#FFFFFF] opacity-30">INVOICE ID</TableHead>
              <TableHead className="text-center text-[20px] font-light leading-[100%] tracking-[0.05em] text-[#FFFFFF] opacity-30">ACCOUNT</TableHead>
              <TableHead className="text-center text-[20px] font-light leading-[100%] tracking-[0.05em] text-[#FFFFFF] opacity-30">PLAN</TableHead>
              <TableHead className="text-center text-[20px] font-light leading-[100%] tracking-[0.05em] text-[#FFFFFF] opacity-30">AMOUNT</TableHead>
              <TableHead className="text-center text-[20px] font-light leading-[100%] tracking-[0.05em] text-[#FFFFFF] opacity-30">DUE DATE</TableHead>
              <TableHead className="text-center text-[20px] font-light leading-[100%] tracking-[0.05em] text-[#FFFFFF] opacity-30">PAYMENT METHOD</TableHead>
              <TableHead className="text-center text-[20px] font-light leading-[100%] tracking-[0.05em] text-[#FFFFFF] opacity-30">STATUS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="w-full">
            {invoices.map((inv, index) => (
              <TableRow key={`${inv.invoiceID}-${index}`} onClick={() => handleRowClick(inv)} className="border-b border-white/5 hover:bg-white/5 transition-colors text-center cursor-pointer">
                <TableCell className="w-[126px] py-3 text-[20px] font-medium leading-[100%] tracking-[0.05em] text-[#3ACF98] opacity-60 text-center ">{inv.invoiceID}</TableCell>
                <TableCell className="max-w-[180px] truncate py-3 text-[20px] font-medium leading-[100%] tracking-[0.05em] text-[#C4C4C4] text-center">{inv.account}</TableCell>
                <TableCell className="max-w-[180px] truncate py-3 text-[20px] font-light leading-[100%] tracking-[0.05em] text-[#C4C4C4]/92 text-center">{inv.plan}</TableCell>
                <TableCell className="py-3 text-[16px] font-medium leading-[100%] tracking-[0.05em] text-[#C4C4C4] text-center">{inv.amount}</TableCell>
                <TableCell className="py-3 text-[16px] font-light leading-[100%] tracking-[0.05em] text-[#C4C4C4] text-center">{inv.dueDate}</TableCell>
                <TableCell className="py-3 text-[16px] font-light leading-[100%] tracking-[0.05em] text-[#C4C4C4] text-center">{inv.paymentMethod}</TableCell>
                <TableCell className="py-3 text-center">
                  <span 
                  
                  className={`px-3 py-2 border-none w-[90px] rounded-full border text-[16px] font-normal text-[#C4C4C4] leading-[100%] tracking-[0.05em] text-center radius-[41px] shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black inline-block ${getStatusBadge(inv.status)}`}>
                    {inv.status}
                    
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
        
      </div>
      <BillingStatus
        key={selectedInvoice?.invoiceID}
        invoice={selectedInvoice}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onStatusChange={handleStatusChange}
      />       
    </div>
  )
}

export default BillingPage