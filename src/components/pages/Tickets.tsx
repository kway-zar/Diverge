import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Tickets as Ticket } from "../types/tickets";
import TicketStatus from "../modals/ticketStatus";

const filterOptions = ["All", "Open", "In Progress", "Resolved", "Escalated"];

const intensityFilter = ["All", "Low", "Medium", "High", "Critical"];

function Tickets() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeIntensity, setActiveIntensity] = useState("All");
  const [selectedSubscriber, setSelectedSubscriber] = useState<Ticket | null>(null);
  const tickets: Ticket[] = [
    {
      ticketID: "TICK-1001",
      subscriber: "Jonathan Landoy",
      issue: "No Internet",
      category: "Technical",
      priority: "High",
      assignedTo: "Rizal Tech Team",
      status: "In Progress",
      SLA: "2h remaining",
      created: "Sep 18, 08:03",
      updated: "2026-09-26 08:30 AM",
    },
    {
      ticketID: "TICK-1002",
      subscriber: "Guiller Santos",
      issue: "Connection Drops",
      category: "Hardware",
      priority: "Medium",
      assignedTo: "Manila Support",
      status: "Pending",
      SLA: "5h remaining",
      created: "Sep 20, 10:30",
      updated: "2026-09-25 04:15 PM",
    },
    {
      ticketID: "TICK-1003",
      subscriber: "Vanna Mae",
      issue: "Plan Change",
      category: "Billing",
      priority: "Low",
      assignedTo: "Finance Team",
      status: "Resolved",
      SLA: "Breached",
      created: "Noc, 1:45",
      updated: "2026-09-24 11:00 AM",
    },
  ];

  function getStatusBadge(status: Ticket["status"]) {
    switch (status) {
      case "In Progress":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/60";
      case "Pending":
        return "bg-amber-500/10 text-amber-400 border-amber-500/60";
      case "Resolved":
        return "bg-rose-500/10 text-rose-400 border-rose-500/60";
    }
  }

  function getPriority(priority: Ticket["priority"]) {
    switch (priority) {
      case "High":
        return "text-[#3ACF98] font-semibold";
      case "Medium":
        return "text-[#DE0961] font-semibold";
      case "Low":
        return "text-[#FFB800] font-semibold";
    }
  }
  return (
    <>
      <div className="bg-[#121212] w-full">
        <div className="w-full overflow-y-auto overflow-x-auto no-scrollbar font font-ubuntu flex flex-col items-start px-4 lg:px-0 ">
          <div className="mb-5 lg:ml-2 flex justify-between items-center w-full">
            <div>
              <h1 className="text-white text-2xl font-bold tracking-wider text-left">
                Support Ticketing
              </h1>
              <p className="text-white opacity-30 italic text-xs sm:text-sm  font-mono">
                Wednesday, September 16, 2026 12:31AM PHT
              </p>
            </div>
            <div className="px-5">
              <Button className="w-30 h-8 rounded-[10px] font-ubuntu bg-[#3ACF98]/30 text-white shadow-glassy-jeri">
                + New Ticket
              </Button>
            </div>
          </div>

          <div className="mb-5 pr-10 flex flex-wrap justify-center items-center gap-2 w-full">
            <div className="w-45 h-25 shadow-glassy-jeri rounded-[15px] content-center bg-[#C4C4C4]/20">
              <h1 className="font-bold text-[35px] mt-2">4</h1>
              <h2 className="font-light text-[20px] text-[#FFFF] mt-5">Open</h2>
            </div>
            <div className="w-45 h-25 shadow-glassy-jeri rounded-[15px] content-center bg-[#C4C4C4]/20">
              <h1 className="font-bold text-[35px] mt-2">5</h1>
              <h2 className="font-light text-[20px] text-[#FFFF] mt-5">
                In Progress
              </h2>
            </div>
            <div className="w-45 h-25 shadow-glassy-jeri rounded-[15px] content-center bg-[#C4C4C4]/20">
              <h1 className="font-bold text-[35px] mt-2">6</h1>
              <h2 className="font-light text-[20px] text-[#FFFF] mt-5">
                Resolved Today
              </h2>
            </div>
            <div className="w-45 h-25 shadow-glassy-jeri rounded-[15px] content-center bg-[#C4C4C4]/20">
              <h1 className="font-bold text-[35px] mt-2">1</h1>
              <h2 className="font-light text-[20px] text-[#FFFF] mt-5">
                Escalated
              </h2>
            </div>
            <div className="w-45 h-25 shadow-glassy-jeri rounded-[15px] content-center bg-[#C4C4C4]/20">
              <h1 className="font-bold text-[35px] mt-2">6</h1>
              <h2 className="font-light text-[20px] text-[#FFFF] mt-5">
                SLA Breached
              </h2>
            </div>
          </div>

          <div className="flex flex-row gap-3 w-full justify-left items-center ml-10">
            <div className="flex flex-row items-center shadow-glassy-jeri rounded-[40px]">
              {filterOptions.map((filter) => {
                const isActive = activeIntensity === filter;
                return (
                  <Button
                    key={filter}
                    onClick={() => setActiveIntensity(filter)}
                    className={`w-25 rounded-[40px] font-ubuntu transition-colors duration-200 ease-in-out text-white text-[18px]  ${isActive
                        ? "bg-[#3ACF98]/30 text-white shadow-glassy-jeri"
                        : "bg-transparent text-white opacity-30 hover:bg-white/10"
                      }`}
                  >
                    {filter}
                  </Button>
                );
              })}
            </div>

            <div className="flex flex-row items-center shadow-glassy-jeri rounded-[40px]">
              {intensityFilter.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <Button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`w-20 rounded-[40px] font-ubuntu transition-colors duration-200 ease-in-out text-white  text-[18px] ${isActive
                        ? "bg-[#3ACF98]/30 text-white shadow-glassy-jeri"
                        : "bg-transparent text-white opacity-30 hover:bg-white/10"
                      }`}
                  >
                    {filter}
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="w-full max-w-[11000px] mx-auto px-1 overflow-x-auto mt-5">
            <Table className="grow bg-white/5 shadow-glassy-jeri rounded-[1vw] text-[10px] sm:text-xs md:text-sm ">
              <TableHeader>
                <TableRow className="border-b border-white/10">
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
                    TICKET ID
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
                    SUBSCRIBER
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
                    ISSUE
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
                    CATEGORY
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
                    PRIORITY
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
                    ASSIGNED TO
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
                    STATUS
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
                    SLA
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
                    UPDATED
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((tickets: Ticket) => (
                  <TableRow className="border-b  border-white/10  text-slate-300">
                    <TableCell className="text-center font-mono whitespace-nowrap text-[#3ACF98]">
                      {tickets.ticketID}
                    </TableCell>
                    <TableCell className="text-center max-w-[150px] cursor-pointer" onClick={() => setSelectedSubscriber(tickets)}>
                      <div className="flex flex-col truncate">
                        <span className="font-semibold text-slate-100 truncate">
                          {tickets.subscriber}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center whitespace-nowrap">
                      <span>{tickets.issue}</span>
                    </TableCell>
                    <TableCell className="text-center max-w-[160px] truncate text-[#C4C4C4] font-light">
                      {tickets.category}
                    </TableCell>
                    <TableCell
                      className={`text-center whitespace-nowrap ${getPriority(tickets.priority)}`}
                    >
                      {tickets.priority}
                    </TableCell>
                    <TableCell className="text-center whitespace-nowrap text-[#C4C4C4] font-light">
                      {tickets.assignedTo}
                    </TableCell>
                    <TableCell className="text-center whitespace-nowrap">
                      <span
                        className={`px-2 py-0.5 rounded-full border-2 text-[10px] ${getStatusBadge(tickets.status)}`}
                      >
                        {tickets.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-center whitespace-nowrap text-[#C4C4C4] font-light">
                      {tickets.SLA}
                    </TableCell>
                    <TableCell className="text-center font-mono whitespace-nowrap text-[#C4C4C4] font-light">
                      {tickets.updated}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex flex-row mt-5 gap-3">
            <div className="w-full min-w-[640px]  h-auto overflow-hidden shadow-glassy-jeri rounded-[15px] content-center  bg-white/5 shadow-glassy-jeri p-4">
              <h1 className="text-white text-xl font-bold tracking-wider text-left">
                Auto - Assignment
              </h1>
              <Table className="w-full mt-1 text-start">
                <TableBody>
                  <TableRow className="border-b border-white/10">
                    <TableCell className="pr-40">
                      <h1 className="text-[12px]">Antipolo / Rodriguez</h1>
                      <p className="text-[11px] font-bold text-[#235ED4]">
                        Technician 2
                      </p>
                    </TableCell>
                    <TableCell className="text-center">
                      <h1 className="text-[12px]">Queue</h1>
                      <p className="text-[11px] font-bold text-[#235ED4]">
                        5
                      </p>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-white/10">
                    <TableCell className="pr-40">
                      <h1 className="text-[12px]">Antipolo / Rodriguez</h1>
                      <p className="text-[11px] font-bold text-[#235ED4]">
                        Technician 2
                      </p>
                    </TableCell>
                    <TableCell className="text-center">
                      <h1 className="text-[12px]">Queue</h1>
                      <p className="text-[11px] font-bold text-[#235ED4]">
                        5
                      </p>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-white/10">
                    <TableCell className="pr-40">
                      <h1 className="text-[12px]">Antipolo / Rodriguez</h1>
                      <p className="text-[11px] font-bold text-[#235ED4]">
                        Technician 2
                      </p>
                    </TableCell>
                    <TableCell className="text-center">
                      <h1 className="text-[12px]">Queue</h1>
                      <p className="text-[11px] font-bold text-[#235ED4]">
                        5
                      </p>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="w-full min-w-[640px] h-auto overflow-hidden shadow-glassy-jeri rounded-[15px] content-center  bg-white/5 shadow-glassy-jeri p-4">
              <h1 className="text-white text-xl font-bold tracking-wider text-left">
                Escalation Matrix
              </h1>
              <Table className="w-full mt-1 text-start">
                <TableBody>
                  <TableRow className="border-b border-white/10">
                    <TableCell className="pr-30">
                      <h1 className="text-[13px]">Unresolved &gt; 1h</h1>
                      <p className="text-[16px] font-bold text-[#FFFF]">
                        Helpdesk → Technical
                      </p>
                    </TableCell>
                    <TableCell className="text-center">
                      <h1 className="text-[13px]">Stand By</h1>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-white/10">
                    <TableCell className="pr-30">
                      <h1 className="text-[13px]">Unresolved &gt; 1h</h1>
                      <p className="text-[16px] font-bold text-[#FFFF]">
                        Helpdesk → Technical
                      </p>
                    </TableCell>
                    <TableCell className="text-center">
                      <h1 className="text-[13px]">Triggered</h1>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-white/10">
                    <TableCell className="pr-30">
                      <h1 className="text-[13px]">Unresolved &gt; 1h</h1>
                      <p className="text-[16px] font-bold text-[#FFFF]">
                        Helpdesk → Technical
                      </p>
                    </TableCell>
                    <TableCell className="text-center">
                      <h1 className="text-[13px]">Stand By</h1>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>

      {selectedSubscriber && (
        <TicketStatus ticket={selectedSubscriber} onClose={() => setSelectedSubscriber(null)} />
      )}
    </>
  );
}

export default Tickets;
