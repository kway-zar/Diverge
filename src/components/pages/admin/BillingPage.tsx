import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Invoice, InvoiceStatus } from "../../types/invoice";
import {X} from "lucide-react";
import {useState, useEffect} from "react";


import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"


const STATUS_OPTIONS: InvoiceStatus[] = ["Paid", "Pending", "Overdue"]

function BillingStatusModal({
  invoice,
  isOpen,
  onClose,
  onStatusChange,
}: {
  invoice: Invoice | null
  isOpen: boolean
  onClose: () => void
  onStatusChange: (invoiceID: string, status: InvoiceStatus) => void
}) {
  const [selectedStatus, setSelectedStatus] = useState<InvoiceStatus>(
    invoice?.status ?? "Pending"
  )

  useEffect(() => {
    if (invoice) {
      setSelectedStatus(invoice.status)
    }
  }, [invoice])

    if (!invoice) return null

const handleSave = () => {
  onStatusChange(invoice.invoiceID, selectedStatus)
  onClose()
}
 
  return(
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
    className="min-w-[1090px] max-w-none h-[648px] bg-[#121212] text-white py-5 px-12 rounded-[30px] border-0 shadow-[0_0_12px_rgba(80,42,42,0.15)] [&>button]:hidden outline-none ring-0 focus:ring-0 focus-visible:ring-0">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between ">
          <div className="flex flex-col gap-2 items-left">
            <p className="text-[32px] font-light text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-30 uppercase">
              Billing Status
            </p>
            <h2 className="text-[40px] font-medium text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-75 mt-3">
              {invoice.account}
            </h2>
            <p className="text-[20px] font-medium text-[#3ACF98] opacity-75 leading-[100%] tracking-[0.05em]">
              {invoice.invoiceID}
            </p>
          </div>
          <div className="top-0">
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-white transition-colors p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
          </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-6">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]"> 
                    EMAIL
                  </span>
                  <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-70 ml-1">
                    {invoice.email}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]"> 
                    CONTACT
                  </span>
                  <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-70 ml-1">
                    {invoice.contact}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]"> 
                    PLAN
                  </span>
                  <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-70 ml-1">
                    {invoice.plan}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]"> 
                    AMOUNT
                  </span>
                  <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-70 ml-1">
                    {invoice.amount}
                  </p>
                </div>
              </div>
            <div className="flex flex-col gap-3">
              <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]"> 
                STATUS
              </span>
              <select
                value={selectedStatus}
                onChange={(e) =>  {
          
                  setSelectedStatus(e.target.value as InvoiceStatus);
                }}
                className="w-[310px] h-[35px] rounded-lg bg-[#D9D9D9]/20 radius-[10px] shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] font-regular text-[#FFFFFF] text-[24px] font-ubuntu-mono opacity-75 px-4 outline-none cursor-pointer"
              >
                {STATUS_OPTIONS.map((status) => (
                <option key={status} value={status} className="bg-[#1E1E1E] text-[24px] font-regular text-[#FFFFFF] font-ubuntu-mono opacity-75">
                  {status}
                </option>
                ))}
              </select>
              <div className="flex flex-col gap-1">
                  <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]"> 
                    DUE DATE
                  </span>
                  <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-70 ml-1">
                    {invoice.dueDate}
                  </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <Button onClick={onClose} className="w-[399px] h-[71px] bg-[#B00049]/20 rounded-[30px] text-[32px] font-regular font-ubuntu-mono text-[#FFFFFF]/75 cursor-pointer border-none shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black hover:bg-[#B00049]/35">
              Cancel
            </Button>
            <Button onClick={handleSave} className="w-[399px] h-[71px] bg-[#3ACF98]/20 rounded-[30px] text-[32px] font-regular font-ubuntu-mono text-[#FFFFFF]/75 cursor-pointer border-none shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black hover:bg-[#3ACF98]/35">
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function BillingPage() {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleRowClick = (invoice: Invoice) => {
    setSelectedInvoice(invoice)
    setIsModalOpen(true)
  }
  const stats = [
    { title: "Collected Weekly", amount: "₱305, 000", border: "58, 207, 152" },
    { title: "Pending Invoices", amount: "₱180, 200", border: "34, 100, 231" },
    { title: "Overdue Payments", amount: "₱60, 900", border: "255, 24, 28" },
    { title: "Refunds Issued", amount: "₱9, 102", border: "255, 216, 24" },
  ]

const [invoices, setInvoices] = useState<Invoice[]>([
  { invoiceID: "INV-231231-01", account: "Vanna Hernandez", email: "vanna@example.com", contact: "+63 912345678", plan: "Diverge Netflix", amount: "₱1,499", dueDate: "Sep 24, 2026", paymentMethod: "-", status: "Pending" },
  { invoiceID: "INV-231231-02", account: "Jonathan Landoy", email: "jonathan@example.com", contact: "+63 912345678", plan: "Fiber 50 Mbps", amount: "₱999", dueDate: "Sep 22, 2026", paymentMethod: "-", status: "Pending" },
  { invoiceID: "INV-231231-03", account: "Clifford Galvez", email: "clifford@example.com", contact: "+63 912345678", plan: "Super FiberX", amount: "₱2,199", dueDate: "Sep 20, 2026", paymentMethod: "-", status: "Pending" },
  { invoiceID: "INV-231231-04", account: "Francis Lasay", email: "francis@example.com", contact: "+63 912345678", plan: "Fiber 50 Mbps", amount: "₱999", dueDate: "Sep 19, 2026", paymentMethod: "Gcash", status: "Paid" },
  { invoiceID: "INV-231231-05", account: "Guiller Dela Cruz", email: "guiller@example.com", contact: "+63 912345678", plan: "Super FiberX", amount: "₱2,199", dueDate: "Sep 18, 2026", paymentMethod: "Bank Transfer", status: "Paid" },
  { invoiceID: "INV-231231-06", account: "Alex Ogbac", email: "alex@example.com", contact: "+63 912345678", plan: "Fiber 50 Mbps", amount: "₱999", dueDate: "Sep 18, 2026", paymentMethod: "-", status: "Pending" },
  { invoiceID: "INV-231231-07", account: "Jeriana Maranguis", email: "jeriana@example.com", contact: "+63 912345678", plan: "Super FiberX", amount: "₱2,199", dueDate: "Sep 10, 2026", paymentMethod: "-", status: "Overdue" },
  { invoiceID: "INV-231231-08", account: "Christian Devera", email: "christian@example.com", contact: "+63 912345678", plan: "Fiber 50 Mbps", amount: "₱999", dueDate: "Sep 8, 2026", paymentMethod: "Maya", status: "Paid" },
  { invoiceID: "INV-231231-09", account: "Robi Luna", email: "robi@example.com", contact: "+63 912345678", plan: "Diverge Netflix", amount: "₱1,499", dueDate: "Sep 5, 2026", paymentMethod: "-", status: "Overdue" },
  { invoiceID: "INV-231231-10", account: "Cedrick Millonte", email: "cedrick@example.com", contact: "+63 912345678", plan: "Fiber 50 Mbps", amount: "₱999", dueDate: "Aug 30, 2026", paymentMethod: "Gcash", status: "Paid" },
  { invoiceID: "INV-231231-11", account: "Wil Manalang", email: "wil@example.com", contact: "+63 912345678", plan: "Fiber 50 Mbps", amount: "₱999", dueDate: "Aug 28, 2026", paymentMethod: "Bank Transfer", status: "Paid" },
]);

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

  const handleStatusChange = (
    invoiceID: string,
    newStatus: InvoiceStatus
    ) => {
    setInvoices((prevInvoices) =>
    prevInvoices.map((invoice) =>
      invoice.invoiceID === invoiceID
        ? { ...invoice, status: newStatus }
        : invoice
    )
  );
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
                <TableCell className="py-3 text-[20px] font-medium leading-[100%] tracking-[0.05em] text-[#C4C4C4] text-center">{inv.account}</TableCell>
                <TableCell className="py-3 text-[20px] font-light leading-[100%] tracking-[0.05em] text-[#C4C4C4]/92 text-center">{inv.plan}</TableCell>
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
      <BillingStatusModal
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