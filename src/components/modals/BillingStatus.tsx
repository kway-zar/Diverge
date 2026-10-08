import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import {X} from "lucide-react";
import {useState, useEffect} from "react";
import type { Invoice, InvoiceStatus } from "../types/invoice";
import { Button } from "@/components/ui/button"

const STATUS_OPTIONS: InvoiceStatus[] = [
  "Paid",
  "Pending",
  "Overdue",
];

interface BillingStatusProps {
  invoice: Invoice | null;
  isOpen: boolean;
  onClose: () => void;
  onStatusChange: (
    invoiceID: string,
    status: InvoiceStatus
  ) => void;
  onDelete?: (invoiceID: string) => void;
}

function BillingStatus({
  invoice,
  isOpen,
  onClose,
  onStatusChange,
  onDelete,
}: BillingStatusProps) {
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

const handleDelete = () => {
  if (onDelete) {
    onDelete(invoice.invoiceID)
  }
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
          <div className="flex justify-between gap-4">
            <Button onClick={handleDelete} className="w-[250px] h-[71px] bg-[#B00049]/20 rounded-[30px] text-[24px] font-regular font-ubuntu-mono text-[#FFFFFF]/75 cursor-pointer border-none shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black hover:bg-[#B00049]/35">
              Delete
            </Button>
            <Button onClick={onClose} className="w-[250px] h-[71px] bg-[#B00049]/20 rounded-[30px] text-[24px] font-regular font-ubuntu-mono text-[#FFFFFF]/75 cursor-pointer border-none shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black hover:bg-[#B00049]/35">
              Cancel
            </Button>
            <Button onClick={handleSave} className="w-[250px] h-[71px] bg-[#3ACF98]/20 rounded-[30px] text-[24px] font-regular font-ubuntu-mono text-[#FFFFFF]/75 cursor-pointer border-none shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black hover:bg-[#3ACF98]/35">
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default BillingStatus;