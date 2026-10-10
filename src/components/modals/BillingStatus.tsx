import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import {X} from "lucide-react";
import {useState} from "react";
import type { Invoice } from "../types/invoice";
import { Button } from "@/components/ui/button"

interface BillingStatusProps {
  invoice: Invoice | null;
  isOpen: boolean;
  onClose: () => void;
  onIssueCreditNote: (invoiceID: string, amountCents: number, reason: string) => Promise<void>;
}

function BillingStatus({
  invoice,
  isOpen,
  onClose,
  onIssueCreditNote,
}: BillingStatusProps) {
  const [creditAmount, setCreditAmount] = useState("");
  const [creditReason, setCreditReason] = useState("");
  const [creditError, setCreditError] = useState("");
  const [isIssuingCredit, setIsIssuingCredit] = useState(false);

  if (!invoice) return null

  const handleIssueCredit = async () => {
    const amountCents = Math.round(Number(creditAmount) * 100);
    if (!Number.isSafeInteger(amountCents) || amountCents <= 0 || creditReason.trim().length < 5) {
      setCreditError("Enter a positive amount and a reason of at least five characters.");
      return;
    }

    setIsIssuingCredit(true);
    setCreditError("");
    try {
      await onIssueCreditNote(invoice.invoiceID, amountCents, creditReason.trim());
      setCreditAmount("");
      setCreditReason("");
    } catch (error) {
      setCreditError(error instanceof Error ? error.message : "Unable to issue credit note.");
    } finally {
      setIsIssuingCredit(false);
    }
  };

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
              <p className="w-fit rounded-lg bg-[#D9D9D9]/10 px-4 py-2 font-ubuntu-mono text-[24px] text-white/75">
                {invoice.status}
              </p>
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
          <div className="grid grid-cols-[1fr_2fr_auto] items-end gap-4 border-t border-white/10 pt-5">
            <label className="flex flex-col gap-2 text-sm text-white/65">
              Credit amount (PHP)
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={creditAmount}
                onChange={(event) => setCreditAmount(event.target.value)}
                className="h-10 rounded-md border border-white/15 bg-white/5 px-3 text-white"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-white/65">
              Reason
              <input
                value={creditReason}
                maxLength={500}
                onChange={(event) => setCreditReason(event.target.value)}
                className="h-10 rounded-md border border-white/15 bg-white/5 px-3 text-white"
              />
            </label>
            <Button onClick={handleIssueCredit} disabled={isIssuingCredit} className="h-10 bg-amber-500/15 px-4 text-amber-200 hover:bg-amber-500/25">
              {isIssuingCredit ? "Issuing..." : "Issue Credit"}
            </Button>
          </div>
          {creditError && <p role="alert" className="text-sm text-red-300">{creditError}</p>}
          <div className="flex justify-end">
            <Button onClick={onClose} className="w-[250px] h-[60px] bg-[#3ACF98]/20 rounded-[20px] text-[20px] font-regular font-ubuntu-mono text-[#FFFFFF]/75 cursor-pointer border-none shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black hover:bg-[#3ACF98]/35">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default BillingStatus;