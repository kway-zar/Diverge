import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Tickets as Ticket } from "../../types/tickets";
import TicketStatus from "../../modals/ticketStatus";
import SubmitTicket from "../../modals/SubmitTicket";
import { publishDataChange, useDataRefresh } from "@/hooks/useDataRefresh";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001";

const filterOptions = ["All", "Open", "In Progress", "Pending", "Resolved"];

const intensityFilter = ["All", "Low", "Medium", "High", "Critical"];
type TechnicianOption = { id: string; name: string; location: string; status: string; queueCount: number };

function Tickets() {
  const [activeStatusFilter, setActiveStatusFilter] = useState<"All" | Ticket["status"]>("All");
  const [activePriorityFilter, setActivePriorityFilter] = useState<"All" | Ticket["priority"]>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubscriber, setSelectedSubscriber] = useState<Ticket | null>(null);
  const [showSubmitTicket, setShowSubmitTicket] = useState(false);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [technicians, setTechnicians] = useState<TechnicianOption[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [notice, setNotice] = useState("");
  const [isAutoAssigning, setIsAutoAssigning] = useState(false);
  const [isEscalating, setIsEscalating] = useState(false);
  const [slaOnly, setSlaOnly] = useState(false);

  async function loadTickets() {
    const token = localStorage.getItem("diverge_token");
    if (!token) {
      setErrorMessage("Administrator sign-in is required to view tickets.");
      return;
    }
    try {
      const [response, technicianResponse] = await Promise.all([
        fetch(`${API_BASE_URL}/api/v1/admin/tickets`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${API_BASE_URL}/api/v1/admin/tickets/technicians`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);
      const payload = await response.json();
      const technicianPayload = await technicianResponse.json();
      if (!response.ok || !technicianResponse.ok) throw new Error(payload?.message ?? technicianPayload?.message ?? "Unable to load ticket support data.");
      setTickets(Array.isArray(payload?.data) ? payload.data : []);
      setTechnicians(Array.isArray(technicianPayload?.data) ? technicianPayload.data : []);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to load tickets.");
    }
  }

  async function updatePriority(ticket: Ticket, priority: Ticket["priority"]) {
    const token = localStorage.getItem("diverge_token");
    if (!token || !ticket.id) return;
    setErrorMessage("");
    setNotice("");
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/admin/tickets/${ticket.id}/priority`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ priority: priority.toUpperCase() }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message ?? "Unable to update ticket priority.");
      publishDataChange();
      await loadTickets();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to update ticket priority.");
    }
  }

  async function autoAssignTickets() {
    const token = localStorage.getItem("diverge_token");
    if (!token) return;
    setIsAutoAssigning(true);
    setErrorMessage("");
    setNotice("");
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/admin/tickets/auto-assign`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message ?? "Auto-assignment failed.");
      setNotice(`${payload?.data?.assignedCount ?? 0} ticket(s) assigned; ${payload?.data?.unassignedCount ?? 0} left unassigned.`);
      publishDataChange();
      await loadTickets();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Auto-assignment failed.");
    } finally {
      setIsAutoAssigning(false);
    }
  }

  async function escalateTickets(ticketId?: string) {
    const token = localStorage.getItem("diverge_token");
    if (!token) return;
    setIsEscalating(true);
    setErrorMessage("");
    setNotice("");
    try {
      const url = ticketId
        ? `${API_BASE_URL}/api/v1/admin/tickets/${ticketId}/escalate`
        : `${API_BASE_URL}/api/v1/admin/tickets/escalate-overdue`;
      const response = await fetch(url, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message ?? "Escalation failed.");
      setNotice(payload?.message ?? "Ticket escalated.");
      publishDataChange();
      await loadTickets();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Escalation failed.");
    } finally {
      setIsEscalating(false);
    }
  }

  useDataRefresh(loadTickets);
  useEffect(() => { void loadTickets(); }, []);

  const filteredTickets = tickets.filter((ticket) => {
    const matchesStatus = activeStatusFilter === "All" || ticket.status === activeStatusFilter;
    const matchesPriority = activePriorityFilter === "All" || ticket.priority === activePriorityFilter;
    const matchesSla = !slaOnly || ticket.SLA === "Breached";
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const matchesSearch =
      normalizedSearch.length === 0 ||
      [ticket.ticketID, ticket.subscriber, ticket.issue, ticket.category]
        .some((value) => value.toLowerCase().includes(normalizedSearch));

    return matchesStatus && matchesPriority && matchesSla && matchesSearch;
  });

  function getStatusBadge(status: Ticket["status"]) {
    switch (status) {
      case "In Progress":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/60";
      case "Open":
        return "bg-[#197AF9]/10 text-[#197AF9] border-[#197AF9]/60";
      case "Pending":
        return "bg-amber-500/10 text-amber-400 border-amber-500/60";
      case "Resolved":
        return "bg-rose-500/10 text-rose-400 border-rose-500/60";
      default:
        return "bg-slate-500/10 text-slate-300 border-slate-500/60";
    }
  }

  const openCount = tickets.filter((ticket) => ticket.status === "Open").length;
  const inProgressCount = tickets.filter((ticket) => ticket.status === "In Progress").length;
  const resolvedCount = tickets.filter((ticket) => ticket.status === "Resolved" && new Date(ticket.updated).toDateString() === new Date().toDateString()).length;
  const escalatedCount = tickets.filter((ticket) => ticket.isEscalated || ticket.priority === "Critical").length;
  const breachedTickets = tickets.filter((ticket) => ticket.SLA === "Breached" && ticket.status !== "Resolved");
  const unassignedCount = tickets.filter((ticket) => ticket.status === "Open" && ticket.assignedTo === "Unassigned").length;
  return (
    <>
      <div className="bg-[#121212] w-full">
        <div className="w-full overflow-y-auto overflow-x-auto no-scrollbar font font-ubuntu flex flex-col items-start px-4 lg:px-0 ">
          <div className="mb-5 lg:ml-2 flex justify-between items-center w-full">
            <div>
              <h1 className="text-white text-2xl font-bold tracking-wider text-left">
                Support Ticketing
              </h1>
              <p className="text-white opacity-30 italic text-xs sm:text-sm font-mono">{tickets.length} recorded tickets</p>
            </div>
            <div className="px-5">
              <Button
                onClick={() => setShowSubmitTicket(true)}
                className="w-30 h-8 rounded-[10px] font-ubuntu bg-[#3ACF98]/30 text-white shadow-glassy-jeri"
              >
                + New Ticket
              </Button>
            </div>
          </div>

          <div className="mb-5 pr-10 flex flex-wrap justify-center items-center gap-2 w-full">
            <button type="button" onClick={() => { setActiveStatusFilter(activeStatusFilter === "Open" ? "All" : "Open"); setActivePriorityFilter("All"); setSlaOnly(false); }} aria-pressed={activeStatusFilter === "Open"} className="w-45 h-25 shadow-glassy-jeri rounded-[15px] content-center bg-[#C4C4C4]/20">
              <h1 className="font-bold text-[35px] mt-2">{openCount}</h1>
              <h2 className="font-light text-[20px] text-[#FFFF] mt-5">Open</h2>
            </button>
            <button type="button" onClick={() => { setActiveStatusFilter(activeStatusFilter === "In Progress" ? "All" : "In Progress"); setActivePriorityFilter("All"); setSlaOnly(false); }} aria-pressed={activeStatusFilter === "In Progress"} className="w-45 h-25 shadow-glassy-jeri rounded-[15px] content-center bg-[#C4C4C4]/20">
              <h1 className="font-bold text-[35px] mt-2">{inProgressCount}</h1>
              <h2 className="font-light text-[20px] text-[#FFFF] mt-5">
                In Progress
              </h2>
            </button>
            <button type="button" onClick={() => { setActiveStatusFilter(activeStatusFilter === "Resolved" ? "All" : "Resolved"); setActivePriorityFilter("All"); setSlaOnly(false); }} aria-pressed={activeStatusFilter === "Resolved"} className="w-45 h-25 shadow-glassy-jeri rounded-[15px] content-center bg-[#C4C4C4]/20">
              <h1 className="font-bold text-[35px] mt-2">{resolvedCount}</h1>
              <h2 className="font-light text-[20px] text-[#FFFF] mt-5">
                Resolved Today
              </h2>
            </button>
            <button type="button" onClick={() => { setActiveStatusFilter("All"); setActivePriorityFilter(activePriorityFilter === "Critical" ? "All" : "Critical"); setSlaOnly(false); }} aria-pressed={activePriorityFilter === "Critical"} className="w-45 h-25 shadow-glassy-jeri rounded-[15px] content-center bg-[#C4C4C4]/20">
              <h1 className="font-bold text-[35px] mt-2">{escalatedCount}</h1>
              <h2 className="font-light text-[20px] text-[#FFFF] mt-5">
                Escalated
              </h2>
            </button>
            <button type="button" onClick={() => { setActiveStatusFilter("All"); setActivePriorityFilter("All"); setSlaOnly(!slaOnly); }} aria-pressed={slaOnly} className="w-45 h-25 shadow-glassy-jeri rounded-[15px] content-center bg-[#C4C4C4]/20">
              <h1 className="font-bold text-[35px] mt-2">{tickets.filter((ticket) => ticket.SLA === "Breached").length}</h1>
              <h2 className="font-light text-[20px] text-[#FFFF] mt-5">
                SLA Breached
              </h2>
            </button>
          </div>

          {errorMessage && <p role="alert" className="mb-3 text-sm text-red-300">{errorMessage}</p>}

          <div className="mb-4 ml-10 flex w-full flex-wrap items-center gap-3">
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by ticket ID, customer, or issue"
              className="w-full max-w-md rounded-[14px] border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
          </div>

          <div className="flex flex-row gap-3 w-full justify-left items-center ml-10">
            <div className="flex flex-row items-center shadow-glassy-jeri rounded-[40px]">
              {filterOptions.map((filter) => {
                const isActive = activeStatusFilter === filter;
                return (
                  <Button
                    key={filter}
                    onClick={() => setActiveStatusFilter(filter as "All" | Ticket["status"])}
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
                const isActive = activePriorityFilter === filter;
                return (
                  <Button
                    key={filter}
                    onClick={() => setActivePriorityFilter(filter as "All" | Ticket["priority"])}
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
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">ESCALATION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTickets.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={10} className="py-8 text-center text-slate-300">
                      No tickets match the current search and filters.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredTickets.map((ticket: Ticket) => (
                    <TableRow key={ticket.ticketID} className="border-b border-white/10 text-slate-300">
                      <TableCell className="text-center font-mono whitespace-nowrap text-[#3ACF98]">
                        {ticket.ticketID}
                      </TableCell>
                      <TableCell className="text-center max-w-[150px] cursor-pointer" onClick={() => setSelectedSubscriber(ticket)}>
                        <div className="flex flex-col truncate">
                          <span className="font-semibold text-slate-100 truncate">
                            {ticket.subscriber}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="max-w-[180px] truncate text-center whitespace-nowrap">
                        <span className="truncate">{ticket.issue}</span>
                      </TableCell>
                      <TableCell className="text-center max-w-[160px] truncate text-[#C4C4C4] font-light">
                        {ticket.category}
                      </TableCell>
                      <TableCell className="text-center whitespace-nowrap">
                        <select
                          aria-label={`Priority for ${ticket.ticketID}`}
                          value={ticket.priority}
                          onClick={(event) => event.stopPropagation()}
                          onChange={(event) => void updatePriority(ticket, event.target.value as Ticket["priority"])}
                          className="h-8 rounded-md border border-white/15 bg-[#202020] px-2 text-xs text-[#C4C4C4]"
                        >
                          {["Low", "Medium", "High", "Critical"].map((priority) => <option key={priority} value={priority} className="bg-[#202020] text-[#C4C4C4]">{priority}</option>)}
                        </select>
                      </TableCell>
                      <TableCell className="max-w-[180px] truncate text-center whitespace-nowrap text-[#C4C4C4] font-light">
                        {ticket.assignedTo}
                      </TableCell>
                      <TableCell className="text-center whitespace-nowrap">
                        <span
                          className={`px-2 py-0.5 rounded-full border-2 text-[10px] ${getStatusBadge(ticket.status)}`}
                        >
                          {ticket.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-center whitespace-nowrap text-[#C4C4C4] font-light">
                        {ticket.SLA}
                      </TableCell>
                      <TableCell className="text-center font-mono whitespace-nowrap text-[#C4C4C4] font-light">
                        {ticket.updated}
                      </TableCell>
                      <TableCell className="text-center">
                        {ticket.status !== "Resolved" && !ticket.isEscalated && ticket.id && (
                          <Button size="sm" variant="outline" disabled={isEscalating} onClick={() => void escalateTickets(ticket.id)}>
                            Escalate
                          </Button>
                        )}
                        {ticket.isEscalated && <span className="text-xs text-red-300">Escalated</span>}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex flex-row w-full mt-5 gap-3">
            <div className="w-full h-auto overflow-hidden shadow-glassy-jeri rounded-[15px] content-center  bg-white/5 shadow-glassy-jeri p-4">
              <h1 className="text-white text-xl font-bold tracking-wider text-left">
                Auto-assignment
              </h1>
              <div className="mt-3 space-y-2">
                {technicians.map((technician) => (
                  <div key={technician.id} className="flex items-center justify-between gap-3 border-b border-white/10 py-2 text-sm">
                    <div><p>{technician.name}</p><p className="text-xs text-white/45">{technician.location} · {technician.status}</p></div>
                    <span className="text-xs text-blue-300">Queue {technician.queueCount}</span>
                  </div>
                ))}
                {!technicians.length && <p className="py-3 text-sm text-white/50">No dispatchable technicians found.</p>}
              </div>
              <Button className="mt-4" disabled={isAutoAssigning || unassignedCount === 0 || !technicians.length} onClick={() => void autoAssignTickets()}>
                {isAutoAssigning ? "Assigning..." : `Auto-assign ${unassignedCount} open ticket(s)`}
              </Button>
            </div>
            <div className="w-full ah-auto overflow-hidden shadow-glassy-jeri rounded-[15px] content-center  bg-white/5 shadow-glassy-jeri p-4">
              <h1 className="text-white text-xl font-bold tracking-wider text-left">
                Escalation Matrix
              </h1>
              <p className="mt-2 text-sm text-white/60">Unresolved for more than one hour</p>
              <p className="mt-3 text-3xl font-semibold text-amber-300">{breachedTickets.length}</p>
              <p className="text-xs text-white/45">{tickets.filter((ticket) => ticket.isEscalated).length} already escalated</p>
              <Button className="mt-4" variant="outline" disabled={isEscalating || breachedTickets.length === 0} onClick={() => void escalateTickets()}>
                {isEscalating ? "Escalating..." : "Escalate all breaches"}
              </Button>
            </div>
          </div>
          {(notice || errorMessage) && <p role={errorMessage ? "alert" : "status"} className={`mt-3 text-sm ${errorMessage ? "text-red-300" : "text-emerald-300"}`}>{errorMessage || notice}</p>}
        </div>
      </div>

      {selectedSubscriber && (
        <TicketStatus
          ticket={selectedSubscriber}
          onClose={() => setSelectedSubscriber(null)}
          onAssigned={() => {
            publishDataChange();
            void loadTickets();
          }}
        />
      )}

      {showSubmitTicket && (
        <SubmitTicket
          onClose={() => setShowSubmitTicket(false)}
          mode="admin"
          onSubmitted={() => {
            publishDataChange();
            void loadTickets();
          }}
        />
      )}
    </>
  );
}

export default Tickets;
