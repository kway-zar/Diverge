import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { Tickets } from "@/components/types/tickets"
import SubmitTicket from "@/components/modals/SubmitTicket";
import { publishDataChange, useDataRefresh } from "@/hooks/useDataRefresh";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001";

function TechnicianEvaluation({ ticket, onSubmitted }: { ticket: Tickets; onSubmitted: () => void }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitEvaluation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const token = localStorage.getItem("diverge_token");
    if (!token || !ticket.id) {
      setErrorMessage("Sign in again to submit an evaluation.");
      return;
    }
    setIsSubmitting(true);
    setErrorMessage("");
    try {
      const response = await fetch(`${API_BASE_URL}/api/customers/me/tickets/${ticket.id}/review`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ rating, comment }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message ?? "Unable to submit evaluation.");
      onSubmitted();
      publishDataChange();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to submit evaluation.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (ticket.hasEvaluation) {
    return <p className="mt-4 border-t border-white/10 pt-3 text-sm text-emerald-300">Technician evaluation submitted. Thank you.</p>;
  }

  return (
    <form onSubmit={submitEvaluation} className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
      <h3 className="text-sm font-medium">Evaluate {ticket.assignedTo}</h3>
      <label className="flex items-center gap-2 text-sm text-white/70">
        Rating
        <select value={rating} onChange={(event) => setRating(Number(event.target.value))} className="h-9 rounded-md border border-white/15 bg-[#202020] px-2 text-white">
          {[5, 4, 3, 2, 1].map((value) => <option key={value} value={value}>{value} star{value === 1 ? "" : "s"}</option>)}
        </select>
      </label>
      <label className="flex flex-col gap-1 text-sm text-white/70">
        Comment
        <textarea value={comment} onChange={(event) => setComment(event.target.value)} required minLength={5} maxLength={1000} rows={2} className="rounded-md border border-white/15 bg-white/5 p-2 text-white" placeholder="Describe your service experience" />
      </label>
      {errorMessage && <p role="alert" className="text-sm text-red-300">{errorMessage}</p>}
      <button type="submit" disabled={isSubmitting} className="h-9 self-start rounded-md bg-[#3ACF98]/20 px-4 text-sm text-[#3ACF98] disabled:opacity-50">
        {isSubmitting ? "Submitting..." : "Submit evaluation"}
      </button>
    </form>
  );
}

function CustomerTickets() {
   const [showSubmitTicket, setShowSubmitTicket] = useState(false);
   const [tickets, setTickets] = useState<Tickets[]>([]);
   const [errorMessage, setErrorMessage] = useState("");
   const [isLoading, setIsLoading] = useState(true);

   async function loadTickets() {
     const token = localStorage.getItem("diverge_token");
     if (!token) {
       setErrorMessage("Sign in to view your tickets.");
       setIsLoading(false);
       return;
     }
     try {
       const response = await fetch(`${API_BASE_URL}/api/customers/me/tickets`, {
         headers: { Authorization: `Bearer ${token}` },
       });
       const payload = await response.json();
       if (!response.ok) throw new Error(payload?.message ?? "Unable to load tickets.");
       setTickets(Array.isArray(payload?.data) ? payload.data : []);
       setErrorMessage("");
     } catch (error) {
       setErrorMessage(error instanceof Error ? error.message : "Unable to load tickets.");
     } finally {
       setIsLoading(false);
     }
   }

   useDataRefresh(loadTickets);
   useEffect(() => { void loadTickets(); }, []);

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
        <div className="mr-3 w-full max-w-8xl flex flex-col">
          <div className="mb-5 justify-between items-center w-full flex gap-4">
            <div className="flex-1">
              <h1 className="text-white text-2xl font-medium tracking-wider text-left">
                My Support Ticket
              </h1>
            </div>
            <div>
              <Button
                onClick={() => setShowSubmitTicket(true)}
                className="h-8 rounded-[10px] px-4 font-ubuntu bg-[#3ACF98]/30 text-white shadow-glassy-jeri"
              >
                + New Ticket
              </Button>
            </div>
          </div>
          <div>
            {errorMessage && <p role="alert" className="text-left text-sm text-red-300">{errorMessage}</p>}

            {isLoading && <p className="py-6 text-white/60">Loading tickets...</p>}
            {!isLoading && !errorMessage && tickets.length === 0 && <p className="py-6 text-white/60">You have no support tickets yet.</p>}
            {tickets.map((ticket) => (
              <div
                key={ticket.ticketID}
                className="w-full bg-white/5 shadow-glassy-jeri rounded-[1vw] mt-5 p-5"
              >
                <h1 className="font-mono text-emerald-400 text-start">{ticket.ticketID}</h1>
                <div className="justify-between items-center w-full flex gap-4">
                  <h2 className="min-w-0 flex-1 truncate font-bold text-[20px]">{ticket.issue}</h2>
                  <span className={`h-8 flex items-center justify-center px-3 font-ubuntu border-2 text-[12px] whitespace-nowrap rounded-[12px] shadow-glassy-jeri ${getStatusBadge(ticket.status)}`}>
                    {ticket.status}
                  </span>
                
                </div>
                <p className="text-start font-light text-[15px] mb-10">
                  {ticket.updated}
                </p>
                <p className="text-start font-light opacity-60 text-[15px]">
                  {new Date(ticket.created).toLocaleString()}
                </p>
                {ticket.status === "Resolved" && ticket.assignedTechnicianId && (
                  <TechnicianEvaluation ticket={ticket} onSubmitted={() => void loadTickets()} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {showSubmitTicket && (
        <SubmitTicket
          onClose={() => setShowSubmitTicket(false)}
          onSubmitted={() => {
            publishDataChange();
            void loadTickets();
          }}
        />
      )}
    </>
  )
}
export default CustomerTickets;
