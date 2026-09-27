import { Button } from "@/components/ui/button";
import type { Tickets } from "@/components/types/tickets"

function CustomerTickets() {
   
   const tickets: Tickets[] = [
     {
         ticketID: "TICK-1001",
         issue: "No Internet",
         status: "Open",
         created: "Sep 18, 08:03",
         subscriber: "",
         category: "",
         priority: "Low",
         assignedTo: "",
         SLA: "",
         updated: "Ticket received. Our team will be in touch shortly."
     },
    {
        ticketID: "TICK-1002",
        issue: "Connection Drops",
        status: "Pending",
        created: "Sep 20, 10:30",
        subscriber: "",
        category: "",
        priority: "Low",
        assignedTo: "",
        SLA: "",
        updated: "Waiting for technician action/visit"
    },
    {
        ticketID: "TICK-1003",
        issue: "Plan Change",
        status: "Resolved",
        created: "Nov, 1:45",
        subscriber: "",
        category: "",
        priority: "Low",
        assignedTo: "",
        SLA: "",
        updated: "Resolved by billing team. Refund processed."
    },
  ];

   function getStatusBadge(status: Tickets["status"]) {
      switch (status) {
        case "In Progress":
          return "bg-emerald-500/10 text-emerald-400 border-emerald-500/60";
        case "Pending":
          return "bg-amber-500/10 text-amber-400 border-amber-500/60";
        case "Resolved":
          return "bg-rose-500/10 text-rose-400 border-rose-500/60";
        case "Open":
            return "bg-[#197AF9]/10 text-[#197AF9] border-[#197AF9]/60";
      }
    }

  return (
    <>
      <div className="bg-[#121212] flex flex-col w-full px-4 sm:px-6 lg:px-10 py-6">
        <div className="mr-3 w-full max-w-6xl flex flex-col">
          <div className="mb-5 justify-between items-center w-full flex gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-white text-2xl font-medium tracking-wider text-left">
                My Support Ticket
              </h1>
            </div>
            <div>
              <Button className="h-8 rounded-[10px] px-4 font-ubuntu bg-[#3ACF98]/30 text-white shadow-glassy-jeri">
                + New Ticket
              </Button>
            </div>
          </div>
          <div>
            <div className="w-full bg-emerald-500/25 text-emerald-400 border-emerald-500/60 border-2 rounded-[12px] text-start">
              <p className="m-1 tracking-widest text-sm">
                ✓ Your ticket has been submitted. A support agent will respond
                within 2 business hours.
              </p>
            </div>

            {tickets.map((ticket) => (
              <div
                key={ticket.ticketID}
                className="w-full bg-white/5 shadow-glassy-jeri rounded-[1vw] mt-5 p-5"
              >
                <h1 className="font-mono text-emerald-400 text-start">{ticket.ticketID}</h1>
                <div className="justify-between items-center w-full flex gap-4">
                  <h2 className="font-bold text-[20px]">{ticket.issue}</h2>
                  <span className={`h-8 flex items-center justify-center px-3 font-ubuntu border-2 text-[12px] whitespace-nowrap rounded-[12px] shadow-glassy-jeri ${getStatusBadge(ticket.status)}`}>
                    {ticket.status}
                  </span>
                
                </div>
                <p className="text-start font-light text-[15px] mb-10">
                  {ticket.updated}
                </p>
                <p className="text-start font-light opacity-60 text-[15px]">
                  {ticket.created}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default CustomerTickets;
