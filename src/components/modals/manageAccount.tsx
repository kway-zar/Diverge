import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Customer } from "../types/customer";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ManageAccount({
  customer,
  onClose,
}: {
  customer: Customer;
  onClose: () => void;
}) {
  const type = [
    { value: "Residential", label: "Residential" },
    { value: "Commercial", label: "Commercial" },
  ];

  const plan = [
    { value: "Diverge Netflix", label: "Diverge"},
    { value: "Fiber 50 MBps", label: "Fiber 50 MBps" } ,

  ]

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212]/50">
        <Card className="relative w-[600px] h-auto  ring-0 bg-[#121212] shadow-glassy rounded-[2vw] opacity-80 gap-2">
          <CardHeader className="flex flex-col ml-4 font-medium">
            <CardTitle className="font-ubuntu">{customer.name}</CardTitle>
            <CardDescription className="font-ubuntu-mono text-[#DE0961]">
              {customer.accountID}
            </CardDescription>
            <Button
              className="absolute top-4 right-5 text-white rounded-full w-6 h-6 p-0 text-lg hover-glass-rim shrink-0"
              onClick={onClose}
            >
              X
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col mt-0 mr-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <h2 className="flex ml-4 mb-0.5 font-bold text-xs text-[#C4C4C4]">
                  EMAIL
                </h2>
                <Input type="text" placeholder="name@example.com" className="bg-[#D9D9D9]/20 shadow-glassy rounded-[10px] border-0 italic focus-visible:ring-0 flex-1 min-w-0 h-6 ml-4 text-xs"/>
                <h2 className="flex ml-4 mb-0.5 font-bold text-xs text-[#C4C4C4] ">
                  TYPE
                </h2>
                <Select items={type} defaultValue="Residential">
                  <SelectTrigger id="form-type" className="w-full bg-[#D9D9D9]/20 shadow-glassy rounded-[10px] border-0 italic focus-visible:ring-0 flex-1 min-w-0 h-2 ml-4 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] shadow-glassy rounded-[1vw] border border-white/10 ring-0 text-white">
                    <SelectGroup>
                      {type.map((type) => (
                        <SelectItem key={type.value} value={type.value} className="text-white focus:bg-white/10 focus:text-white">
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <h2 className="flex ml-4 mb-0.5 font-bold text-xs text-[#C4C4C4] ">
                  PLAN
                </h2>
                <Select items={plan} defaultValue="Default MBps" >
                  <SelectTrigger id="form-plan" className="w-full bg-[#D9D9D9]/20  shadow-glassy rounded-[10px] border-0 italic focus-visible:ring-0 flex-1 min-w-0 h-2 ml-4 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] shadow-glassy rounded-[10px] border border-white/10 ring-0 text-white">
                    <SelectGroup>
                      {plan.map((plan) => (
                        <SelectItem key={plan.value} value={plan.value} className="text-white focus:bg-white/10 focus:text-white">
                          {plan.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <h2 className="flex ml-4 mb-0.5 font-bold text-xs text-[#C4C4C4]">
                  BALANCE
                </h2>
                <Input type="text" placeholder="Php 10,000.00" className="bg-[#D9D9D9]/20 shadow-glassy rounded-[10px] border-0 italic focus-visible:ring-0 flex-1 min-w-0 h-6 ml-4 text-xs"/>
              </div>
              <div className="ml-5">
                <h2 className="flex ml-4 mb-0.5 font-bold text-xs text-[#C4C4C4] ">
                  USAGE
                </h2>
                <Input type="text" placeholder="100 MB" className="bg-[#D9D9D9]/20  shadow-glassy rounded-[10px] border-0 italic focus-visible:ring-0 flex-1 min-w-0 h-6 ml-4 text-xs" />
                <h2 className="flex ml-4 mb-0.5 font-bold text-xs text-[#C4C4C4] ">
                  STATUS
                </h2>
                <Input type="text" placeholder="Suspended" className="bg-[#D9D9D9]/20 shadow-glassy rounded-[10px] border-0 italic focus-visible:ring-0 flex-1 min-w-0 h-6 ml-4 text-xs"/>
                <h2 className="flex ml-4 mb-0.5 font-bold text-xs text-[#C4C4C4] ">
                  AREA
                </h2>
                      <Input type="text" placeholder="Bulacan"className="bg-[#D9D9D9]/20  shadow-glassy rounded-[10px] border-0 italic focus-visible:ring-0 flex-1 min-w-0 h-6 ml-4 text-xs"/>
                <h2 className="flex ml-4 mb-0.5 font-bold text-xs text-[#C4C4C4]">
                  SINCE
                </h2>
                <Input type="text" placeholder="August 2012" className="bg-[#D9D9D9]/20 shadow-glassy rounded-[10px] border-0 italic focus-visible:ring-0 flex-1 min-w-0 h-6 ml-4 text-xs"/>
              </div>
            </div>

            <div className="flex justify-center gap-10 mt-5">
              <Button className="bg-[#B00049] font-light w-40 rounded-2xl shadow-glassy text-xs tracking-widest">
                Cancel
              </Button>
              <Button className="bg-[#3ACF98] font-light w-40 rounded-2xl shadoe-glassy text-xs tracking-widest">
                Create Ticket
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default ManageAccount;
