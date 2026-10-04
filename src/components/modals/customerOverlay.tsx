import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { Customer } from "../types/customer";
import ManageAccount from "./manageAccount";

function CustomerOverlay({
  customer,
  onClose,
}: {
  customer: Customer;
  onClose: () => void;
}) {
  const [showManage, setShowManage] = useState(false);

  if (showManage) {
    return <ManageAccount customer={customer} onClose={() => setShowManage(false)} />;
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="min-w-[1090px] max-w-none h-[648px] bg-[#121212] text-white py-5 px-12 rounded-[30px] border-0 shadow-[0_0_12px_rgba(80,42,42,0.15)] [&>button]:hidden outline-none ring-0 focus:ring-0 focus-visible:ring-0">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2 items-left">
              <p className="text-[32px] font-light text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-30 uppercase">
                Customer Profile
              </p>
              <h2 className="text-[40px] font-medium text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-75 mt-3">
                {customer.name}
              </h2>
              <p className="text-[20px] font-medium text-[#3ACF98] opacity-75 leading-[100%] tracking-[0.05em]">
                {customer.accountID}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-1 cursor-pointer"
              aria-label="Close customer overlay"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-6">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]">
                  EMAIL
                </span>
                <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-70 ml-1">
                  {customer.email}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]">
                  TYPE
                </span>
                <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-70 ml-1">
                  {customer.type}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]">
                  PLAN
                </span>
                <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-70 ml-1">
                  {customer.plan}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]">
                  BALANCE
                </span>
                <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-70 ml-1">
                  {customer.balance}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]">
                  USAGE
                </span>
                <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-70 ml-1">
                  {customer.usage}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]">
                  STATUS
                </span>
                <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-70 ml-1">
                  {customer.status}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]">
                  AREA
                </span>
                <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-70 ml-1">
                  {customer.area}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]">
                  SINCE
                </span>
                <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-70 ml-1">
                  {customer.since}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-6 mt-2">
            <Button
              onClick={() => setShowManage(true)}
              className="w-[399px] h-[71px] bg-[#B00049]/20 rounded-[30px] text-[32px] font-regular font-ubuntu-mono text-[#FFFFFF]/75 cursor-pointer border-none shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black hover:bg-[#B00049]/35"
            >
              Manage Account
            </Button>
            <Button
              type="button"
              className="w-[399px] h-[71px] bg-[#3ACF98]/20 rounded-[30px] text-[32px] font-regular font-ubuntu-mono text-[#FFFFFF]/75 cursor-pointer border-none shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black hover:bg-[#3ACF98]/35"
            >
              Create Ticket
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CustomerOverlay;
