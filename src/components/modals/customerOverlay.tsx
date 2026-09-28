import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Customer } from "../types/customer";
import ManageAccount from "./manageAccount";

function CustomerOverlay({
  customer,
  onClose,
}: {
  customer: Customer;
  onClose: () => void;
}) 

{

  const [showManage, setShowManage] = useState(false);

  return (
    <>
    {showManage ? (<ManageAccount customer={customer} onClose={() => setShowManage(false)}/> ):
      (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212]/50">
        <Card className="relative w-[500px] h-auto  ring-0 bg-[#121212] shadow-glassy-jeri rounded-[2vw] opacity-80 gap-2">
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
          <CardContent className="flex flex-col mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <h2 className="flex ml-4 mb-0.5 font-light text-[#C4C4C4] ">
                  EMAIL
                </h2>
                <p className="flex ml-10 mb-0.5 font-ubuntu-mono text-xs text-[#FFFFFF]">
                  {customer.email}
                </p>
                <h2 className="flex ml-4 mb-0.5 font-light text-[#C4C4C4] ">
                  TYPE
                </h2>
                <p className="flex ml-10 mb-0.5 font-ubuntu-mono text-xs text-[#FFFFFF]">
                  {customer.type}
                </p>
                <h2 className="flex ml-4 mb-0.5 font-light text-[#C4C4C4] ">
                  PLAN
                </h2>
                <p className="flex ml-10 mb-0.5 font-ubuntu-mono text-xs text-[#FFFFFF]">
                  {customer.plan}
                </p>
                <h2 className="flex ml-4 mb-0.5 font-light text-[#C4C4C4]">
                  BALANCE
                </h2>
                <p className="flex ml-10 mb-0.5 font-ubuntu-mono text-xs text-[#FFFFFF]">
                  {customer.balance}
                </p>
              </div>
              <div className="ml-5">
                <h2 className="flex ml-4 mb-0.5 font-light text-[#C4C4C4] ">
                  USAGE
                </h2>
                <p className="flex ml-10 mb-0.5 font-ubuntu-mono text-xs text-[#FFFFFF]">
                  {customer.usage}
                </p>
                <h2 className="flex ml-4 mb-0.5 font-light text-[#C4C4C4] ">
                  STATUS
                </h2>
                <p className="flex ml-10 mb-0.5 font-ubuntu-mono text-xs text-[#FFFFFF]">
                  {customer.status}
                </p>
                <h2 className="flex ml-4 mb-0.5 font-light text-[#C4C4C4] ">
                  AREA
                </h2>
                <p className="flex ml-10 mb-0.5 font-ubuntu-mono text-xs text-[#FFFFFF]">
                  {customer.area}
                </p>
                <h2 className="flex ml-4 mb-0.5 font-light text-[#C4C4C4]">
                  SINCE
                </h2>
                <p className="flex ml-10 mb-0.5 font-ubuntu-mono text-xs text-[#FFFFFF]">
                  {customer.since}
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-10 mt-5">
              <Button className="bg-[#B00049] font-light w-40 rounded-2xl shadow-glassy-jeri text-xs tracking-widest" onClick={() => setShowManage(true)}>
                Manage Account
              </Button>
              <Button className="bg-[#3ACF98] font-light w-40 rounded-2xl shadoe-glassy-jeri text-xs tracking-widest">
                Create Ticket
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      )}
      
    </>
  );
}

export default CustomerOverlay;
