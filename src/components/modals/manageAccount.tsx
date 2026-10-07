import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import type { Customer } from "../types/customer";

function ManageAccount({
  customer,
  onClose,
  onSave,
}: {
  customer: Customer;
  onClose: () => void;
  onSave: (updatedCustomer: Customer) => void;
}) {
  const typeOptions = ["Residential", "Commercial", "Government", "Business"];
  const statusOptions = ["Active", "Pending", "Suspended", "Inactive"];
  const planOptions = useMemo<string[]>(
    () =>
      Array.from(
        new Set(
          [customer.plan, "Diverge Netflix", "Fiber 50 MBps", "Business Pro", "Premium"].filter(
            (plan): plan is string => Boolean(plan),
          ),
        ),
      ),
    [customer.plan],
  );

  const [formData, setFormData] = useState({
    email: customer.email,
    type: customer.type,
    plan: customer.plan,
    balance: customer.balance,
    usage: customer.usage,
    status: customer.status,
    area: customer.area,
    since: customer.since,
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!customer.id) {
      onClose();
      return;
    }

    setIsSaving(true);

    try {
      const response = await fetch(`http://localhost:4001/api/customers/${customer.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          name: customer.name,
          since: formData.since || customer.since,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || "Unable to save customer changes.");
      }

      const payload = await response.json();
      const updatedCustomer = {
        ...customer,
        ...formData,
        ...payload.data,
      } as Customer;

      onSave(updatedCustomer);
    } catch (error) {
      console.error("Failed to save customer changes:", error);
      alert(error instanceof Error ? error.message : "Unable to save customer changes.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="min-w-[1090px] max-w-none h-[648px] bg-[#121212] text-white py-5 px-12 rounded-[30px] border-0 shadow-[0_0_12px_rgba(80,42,42,0.15)] [&>button]:hidden outline-none ring-0 focus:ring-0 focus-visible:ring-0">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2 items-left">
              <p className="text-[32px] font-light text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-30 uppercase">
                Manage Account
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
              aria-label="Close manage account"
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
                <Input
                  type="text"
                  value={formData.email}
                  onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                  className="bg-[#D9D9D9]/20 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] border-0 italic focus-visible:ring-0 h-12 text-[18px] text-white"
                />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]">
                  TYPE
                </span>
                <Select
                  value={formData.type}
                  onValueChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      type: (value ?? prev.type) as Customer["type"],
                    }))
                  }
                >
                  <SelectTrigger id="form-type" className="w-full bg-[#D9D9D9]/20 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] border-0 italic focus-visible:ring-0 h-12 text-[18px] text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] shadow-glassy rounded-[10px] border border-white/10 ring-0 text-white">
                    <SelectGroup>
                      {typeOptions.map((value) => (
                        <SelectItem key={value} value={value} className="text-white focus:bg-white/10 focus:text-white">
                          {value}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]">
                  PLAN
                </span>
                <Select
                  value={formData.plan}
                  onValueChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      plan: value ?? prev.plan,
                    }))
                  }
                >
                  <SelectTrigger id="form-plan" className="w-full bg-[#D9D9D9]/20 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] border-0 italic focus-visible:ring-0 h-12 text-[18px] text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] shadow-glassy rounded-[10px] border border-white/10 ring-0 text-white">
                    <SelectGroup>
                      {planOptions.map((plan) => (
                        <SelectItem key={plan} value={plan} className="text-white focus:bg-white/10 focus:text-white">
                          {plan}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]">
                  BALANCE
                </span>
                <Input
                  type="text"
                  value={formData.balance}
                  onChange={(event) => setFormData((prev) => ({ ...prev, balance: event.target.value }))}
                  className="bg-[#D9D9D9]/20 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] border-0 italic focus-visible:ring-0 h-12 text-[18px] text-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]">
                  USAGE
                </span>
                <Input
                  type="text"
                  value={formData.usage}
                  onChange={(event) => setFormData((prev) => ({ ...prev, usage: event.target.value }))}
                  className="bg-[#D9D9D9]/20 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] border-0 italic focus-visible:ring-0 h-12 text-[18px] text-white"
                />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]">
                  STATUS
                </span>
                <Select
                  value={formData.status}
                  onValueChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      status: (value ?? prev.status) as Customer["status"],
                    }))
                  }
                >
                  <SelectTrigger className="w-full bg-[#D9D9D9]/20 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] border-0 italic focus-visible:ring-0 h-12 text-[18px] text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] shadow-glassy rounded-[10px] border border-white/10 ring-0 text-white">
                    <SelectGroup>
                      {statusOptions.map((value) => (
                        <SelectItem key={value} value={value} className="text-white focus:bg-white/10 focus:text-white">
                          {value}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]">
                  AREA
                </span>
                <Input
                  type="text"
                  value={formData.area}
                  onChange={(event) => setFormData((prev) => ({ ...prev, area: event.target.value }))}
                  className="bg-[#D9D9D9]/20 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] border-0 italic focus-visible:ring-0 h-12 text-[18px] text-white"
                />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]">
                  SINCE
                </span>
                <Input
                  type="text"
                  value={formData.since}
                  onChange={(event) => setFormData((prev) => ({ ...prev, since: event.target.value }))}
                  className="bg-[#D9D9D9]/20 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] border-0 italic focus-visible:ring-0 h-12 text-[18px] text-white"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-6 mt-2">
            <Button
              onClick={onClose}
              className="w-[399px] h-[71px] bg-[#B00049]/20 rounded-[30px] text-[32px] font-regular font-ubuntu-mono text-[#FFFFFF]/75 cursor-pointer border-none shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black hover:bg-[#B00049]/35"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="w-[399px] h-[71px] bg-[#3ACF98]/20 rounded-[30px] text-[32px] font-regular font-ubuntu-mono text-[#FFFFFF]/75 cursor-pointer border-none shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black hover:bg-[#3ACF98]/35 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ManageAccount;
