import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Tickets } from "../types/tickets";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


function TicketStatus({
    ticket,
    onClose,
}: {
    ticket: Tickets;
    onClose: () => void;
}) {

    const status = [
    { value: "In Progress", label: "In Progress" },
    { value: "Open", label: "Open" },
    { value: "Pending", label: "Pending" },
    { value: "Resolved", label: "Resolved" },
  ];

    const [, setShowTicketStatus] = useState(false);
    return(
        <>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212]/50">
        <Card className="relative w-[550px] h-auto  ring-0 bg-[#121212] shadow-glassy-jeri rounded-[2vw] opacity-80 gap-2">
          <CardHeader className="flex flex-col ml-4 font-medium">
            <CardTitle className="font-ubuntu font-light opacity-30 text-[20px]">TICKET STATUS</CardTitle>
            <CardTitle className="font-ubuntu tracking-wider text-[25px]">{ticket.issue}</CardTitle>
            <CardDescription className="font-ubuntu text-[#3ACF98]">
              {ticket.ticketID}
            </CardDescription>
            <Button
              className="absolute top-4 right-5 text-white rounded-full w-6 h-6 p-0 text-lg hover-glass-rim shrink-0"
              onClick={onClose}
            >
              X
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <h2 className="flex ml-4 mb-0.5 text-[12px] font-bold text-[#C4C4C4] ">
                  SUBSCRIBER
                </h2>
                <p className="flex ml-10 mb-0.5 font-ubuntu-mono text-[15px] text-[#FFFFFF]">
                  {ticket.subscriber}
                </p>
                <h2 className="flex ml-4 mb-0.5 text-[12px] font-bold text-[#C4C4C4] ">
                  CATEGORY
                </h2>
                <p className="flex ml-10 mb-0.5 font-ubuntu-mono text-[15px] text-[#FFFFFF]">
                  {ticket.category}
                </p>
                <h2 className="flex ml-4 mb-0.5 text-[12px] font-bold text-[#C4C4C4] ">
                  PRIORITY
                </h2>
                <p className="flex ml-10 mb-0.5 font-ubuntu-mono text-[15px] text-[#FFFFFF]">
                  {ticket.priority}
                </p>
                <h2 className="flex ml-4 mb-0.5 text-[12px] font-bold text-[#C4C4C4]">
                  ASSIGNED TO
                </h2>
                <p className="flex ml-10 mb-0.5 font-ubuntu-mono text-[15px] text-[#FFFFFF]">
                  {ticket.assignedTo}
                </p>
              </div>
              <div className="ml-5">
                <h2 className="flex ml-4 mb-0.5 text-[12px] font-bold text-[#C4C4C4] ">
                  STATUS
                </h2>
                 <Select items={status} defaultValue="Update Status" >
                  <SelectTrigger id="form-plan" className="w-full max-w-45 bg-[#D9D9D9]/20  shadow-glassy-jeri rounded-[10px] border-0 italic focus-visible:ring-0 flex-1 min-w-0 ml-4 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] shadow-glassy rounded-[10px] border border-white/10 ring-0 text-white">
                    <SelectGroup>
                      {status.map((status) => (
                        <SelectItem key={status.value} value={status.value} className="text-white focus:bg-white/10 focus:text-white">
                          {status.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <h2 className="flex ml-4 mb-0.5 text-[12px] font-bold text-[#C4C4C4] ">
                  SLA
                </h2>
                <p className="flex ml-10 mb-0.5 font-ubuntu-mono text-[15px] text-[#FFFFFF]">
                  {ticket.SLA}
                </p>
                <h2 className="flex ml-4 mb-0.5 text-[12px] font-bold text-[#C4C4C4] ">
                  CREATED
                </h2>
                <p className="flex ml-10 mb-0.5 font-ubuntu-mono text-[15px] text-[#FFFFFF]">
                  {ticket.created}
                </p>
                <h2 className="flex ml-4 mb-0.5 text-[12px] font-bold text-[#C4C4C4]">
                    LAST UPDATED
                </h2>
                <p className="flex ml-10 mb-0.5 font-ubuntu-mono text-[15px] text-[#FFFFFF]">
                  {ticket.updated}
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-10 mt-5">
              <Button className="bg-[#B00049] font-light w-40 rounded-2xl shadow-glassy-jeri text-xs tracking-widest" onClick={() => setShowTicketStatus(true)}>
                Escalate
              </Button>
              <Button className="bg-[#3ACF98] font-light w-40 rounded-2xl shadoe-glassy-jeri text-xs tracking-widest">
                Update Status
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
        </>
    )
}

export default TicketStatus;
