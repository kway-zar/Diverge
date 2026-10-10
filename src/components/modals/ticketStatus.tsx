import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Tickets } from "../types/tickets";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001";
type TechnicianOption = { id: string; name: string; location: string; queueCount: number };

function TicketStatus({ ticket, onClose, onAssigned }: { ticket: Tickets; onClose: () => void; onAssigned: () => void }) {
  const [technicians, setTechnicians] = useState<TechnicianOption[]>([]);
  const [technicianId, setTechnicianId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadTechnicians() {
      const token = localStorage.getItem("diverge_token");
      if (!token) return;
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/admin/tickets/technicians`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const payload = await response.json();
        if (!response.ok) throw new Error(payload?.message ?? "Unable to load technicians.");
        setTechnicians(Array.isArray(payload?.data) ? payload.data : []);
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : "Unable to load technicians.");
      }
    }
    void loadTechnicians();
  }, []);

  async function assignTicket() {
    const token = localStorage.getItem("diverge_token");
    if (!token || !ticket.id || !technicianId) {
      setErrorMessage("Select a technician before assigning this ticket.");
      return;
    }
    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/admin/tickets/${ticket.id}/assign`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ technicianId }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message ?? "Unable to assign ticket.");
      onAssigned();
      onClose();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to assign ticket.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <Card className="relative w-full max-w-2xl gap-3 rounded-xl bg-[#171717] text-white shadow-glassy-jeri ring-1 ring-white/10">
        <CardHeader>
          <CardTitle>Ticket assignment</CardTitle>
          <CardDescription>{ticket.ticketID} · {ticket.issue}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div><dt className="text-white/50">Customer</dt><dd>{ticket.subscriber}</dd></div>
            <div><dt className="text-white/50">Status</dt><dd>{ticket.status}</dd></div>
            <div><dt className="text-white/50">Category</dt><dd>{ticket.category}</dd></div>
            <div><dt className="text-white/50">Priority</dt><dd>{ticket.priority}</dd></div>
            <div><dt className="text-white/50">SLA</dt><dd>{ticket.SLA}</dd></div>
            <div><dt className="text-white/50">Assigned to</dt><dd>{ticket.assignedTo}</dd></div>
          </dl>
          {ticket.status !== "Resolved" && (
            <label className="flex flex-col gap-2 text-sm text-white/70">
              Assign technician
              <select value={technicianId} onChange={(event) => setTechnicianId(event.target.value)} className="h-10 rounded-md border border-white/15 bg-[#222] px-3 text-white">
                <option value="">Select technician</option>
                {technicians.map((technician) => (
                  <option key={technician.id} value={technician.id}>{technician.name} · {technician.location} · queue {technician.queueCount}</option>
                ))}
              </select>
            </label>
          )}
          {errorMessage && <p role="alert" className="text-sm text-red-300">{errorMessage}</p>}
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={onClose}>Close</Button>
            {ticket.status !== "Resolved" && <Button disabled={isLoading || !technicianId} onClick={() => void assignTicket()}>{isLoading ? "Assigning..." : "Assign Job"}</Button>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TicketStatus;
