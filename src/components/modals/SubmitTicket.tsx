
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Customer } from "../types/customer";


function ManageAccount({
  customer,
  onClose,
}: {
  customer: Customer;
  onClose: () => void;
}) {
  void customer;
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212]/50">
        <Card className="relative w-[600px] h-auto  ring-0 bg-white/5 shadow-glassy-jeri rounded-[2vw] opacity-80 gap-2 max-sm:w-[calc(100vw-2rem)] max-sm:max-h-[90vh] max-sm:overflow-y-auto">
          <CardHeader className="flex flex-col ml-4 font-medium">
            <CardTitle className="font-ubuntu text-[20px] font-light font-white opacity-30">SUBMIT A TICKET</CardTitle>
            <Button
              className="absolute top-4 right-5 text-white rounded-full w-6 h-6 p-0 text-lg hover-glass-rim shrink-0"
              onClick={onClose}
            >
              X
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col mt-0 mr-8">
            <div className="grid grid-cols-1">
              <div>
                <h2 className="flex ml-4 mb-1 font-bold text-xs text-[#C4C4C4]">
                 CATEGORY
                </h2>
                <Input type="text" placeholder="Input category" className="bg-[#D9D9D9]/20 shadow-glassy-jeri rounded-[10px] border-0 italic focus-visible:ring-0 flex-1 min-w-0 h-6 ml-4 mb-2 text-xs"/>
                <h2 className="flex ml-4 mb-1 font-bold text-xs text-[#C4C4C4] ">
                  SUBJECT
                </h2>
                <Input type="text" placeholder="Type here" className="bg-[#D9D9D9]/20 shadow-glassy-jeri rounded-[10px] border-0 italic focus-visible:ring-0 flex-1 min-w-0 h-6 ml-4 mb-2 text-xs"/>
                <h2 className="flex ml-4 mb-1 font-bold text-xs text-[#C4C4C4] ">
                  DESCRIPTION
                </h2>
                <Textarea placeholder="Describe the issue" className="bg-[#D9D9D9]/20 shadow-glassy-jeri rounded-[10px] border-0 italic focus-visible:ring-0 flex-1 min-w-0 h-20 ml-4 mb-2 text-xs py-1.5 field-sizing-fixed resize-none"/>
              </div>
            </div>
          </CardContent>

            <div className="flex justify-center">
              <Button className="bg-[#3ACF98] font-light w-40 rounded-2xl items-center justify-center shadow-glassy-jeri text-xs tracking-widest">
                  Submit Ticket
              </Button>
            </div>
        </Card>
      </div>
    </>
  );
}

export default ManageAccount;
