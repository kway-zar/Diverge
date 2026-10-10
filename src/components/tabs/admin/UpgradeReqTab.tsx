import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { publishDataChange, useDataRefresh } from "@/hooks/useDataRefresh";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001";
type UpgradeRequest = {
  id: string;
  customer: { name: string };
  initialPlan?: { name: string } | null;
  finalPlan?: { name: string } | null;
  requestedAt: string;
  status: "APPROVED" | "PENDING" | "ON_HOLD";
};

function UpgradeReqTab() {
  const [requests, setRequests] = useState<UpgradeRequest[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loadingId, setLoadingId] = useState("");

  async function loadRequests() {
    const token = localStorage.getItem("diverge_token");
    if (!token) {
      setErrorMessage("Administrator sign-in is required.");
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/admin/plans/requests`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message ?? "Unable to load plan requests.");
      setRequests(Array.isArray(payload?.data) ? payload.data : []);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to load plan requests.");
    }
  }

  useDataRefresh(loadRequests);
  useEffect(() => { void loadRequests(); }, []);

  async function reviewRequest(requestId: string, status: "APPROVED" | "ON_HOLD") {
    const token = localStorage.getItem("diverge_token");
    if (!token) return;
    setLoadingId(requestId);
    setErrorMessage("");
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/admin/plans/requests/${requestId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message ?? "Unable to review request.");
      publishDataChange();
      await loadRequests();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to review request.");
    } finally {
      setLoadingId("");
    }
  }

  const statusLabel = (status: UpgradeRequest["status"]) => status === "ON_HOLD" ? "On Hold" : status[0] + status.slice(1).toLowerCase();

  return (
    <TabsContent value="upgrade">
      {errorMessage && <p role="alert" className="mb-3 text-sm text-red-300">{errorMessage}</p>}
      <div className="overflow-x-auto">
        <Table className="bg-white/5 shadow-glassy-jeri rounded-[1vw] text-[10px] sm:text-xs md:text-sm">
          <TableHeader>
            <TableRow className="border-b border-white/10">
              {["REQUEST ID", "SUBSCRIBER", "FROM PLAN", "TO PLAN", "REQUESTED", "STATUS", "ACTION"].map((title) => <TableHead key={title} className="text-center whitespace-nowrap font-light text-white opacity-40">{title}</TableHead>)}
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request) => (
              <TableRow className="border-b border-white/10 text-slate-300" key={request.id}>
                <TableCell className="text-center font-mono text-[#3ACF98]">{request.id.slice(-8).toUpperCase()}</TableCell>
                <TableCell className="text-center">{request.customer.name}</TableCell>
                <TableCell className="text-center text-white/55">{request.initialPlan?.name ?? "No plan"}</TableCell>
                <TableCell className="text-center text-emerald-300">{request.finalPlan?.name ?? "Unavailable"}</TableCell>
                <TableCell className="text-center">{new Date(request.requestedAt).toLocaleDateString()}</TableCell>
                <TableCell className="text-center">{statusLabel(request.status)}</TableCell>
                <TableCell className="text-center">
                  {request.status === "PENDING" ? <div className="flex justify-center gap-2">
                    <Button size="sm" disabled={Boolean(loadingId)} onClick={() => void reviewRequest(request.id, "APPROVED")}>{loadingId === request.id ? "Saving..." : "Approve"}</Button>
                    <Button size="sm" variant="outline" disabled={Boolean(loadingId)} onClick={() => void reviewRequest(request.id, "ON_HOLD")}>Hold</Button>
                  </div> : "-"}
                </TableCell>
              </TableRow>
            ))}
            {!requests.length && <TableRow><TableCell colSpan={7} className="py-8 text-center text-white/50">No plan requests yet.</TableCell></TableRow>}
          </TableBody>
        </Table>
      </div>
    </TabsContent>
  );
}

export default UpgradeReqTab;
