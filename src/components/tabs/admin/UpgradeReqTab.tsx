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
  const statusBadgeClass = (status: UpgradeRequest["status"]) => {
    if (status === "APPROVED") return "border-emerald-500/60 bg-emerald-500/10 text-emerald-400";
    if (status === "ON_HOLD") return "border-amber-500/60 bg-amber-500/10 text-amber-300";
    return "border-blue-400/60 bg-blue-400/10 text-blue-300";
  };

  return (
    <TabsContent value="upgrade">
      {errorMessage && <p role="alert" className="mb-3 text-sm text-red-300">{errorMessage}</p>}
      <div className="overflow-x-auto">
        <Table className="rounded-[1vw] bg-white/5 text-[10px] shadow-glassy-jeri sm:text-xs md:text-sm">
          <TableHeader>
            <TableRow className="border-b border-white/10">
              {["REQUEST ID", "SUBSCRIBER", "FROM PLAN", "TO PLAN", "REQUESTED", "STATUS", "ACTION"].map((title) => <TableHead key={title} className="whitespace-nowrap text-center font-light text-white opacity-30">{title}</TableHead>)}
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request) => (
              <TableRow className="border-b border-white/10 text-slate-300" key={request.id}>
                <TableCell className="whitespace-nowrap text-center font-mono text-[#3ACF98]">{request.id.slice(-8).toUpperCase()}</TableCell>
                <TableCell className="max-w-[160px] truncate text-center font-light text-[#C4C4C4]">{request.customer.name}</TableCell>
                <TableCell className="max-w-[160px] truncate whitespace-nowrap text-center font-light opacity-40">{request.initialPlan?.name ?? "No plan"}</TableCell>
                <TableCell className="max-w-[160px] truncate whitespace-nowrap text-center text-emerald-500">{request.finalPlan?.name ?? "Unavailable"}</TableCell>
                <TableCell className="whitespace-nowrap text-center font-light text-[#C4C4C4]">{new Date(request.requestedAt).toLocaleDateString()}</TableCell>
                <TableCell className="whitespace-nowrap text-center">
                  <span className={`rounded-md border-2 px-2 py-1 text-[10px] ${statusBadgeClass(request.status)}`}>
                    {statusLabel(request.status)}
                  </span>
                </TableCell>
                <TableCell className="whitespace-nowrap text-center font-mono font-light text-[#C4C4C4]">
                  {request.status === "PENDING" ? <div className="flex justify-center gap-2">
                    <Button size="sm" disabled={Boolean(loadingId)} onClick={() => void reviewRequest(request.id, "APPROVED")} className="bg-linear-to-b from-emerald-300/40 from-10% to-emerald-300/10 text-emerald-500 shadow-glassy-jeri">{loadingId === request.id ? "Saving..." : "Approve"}</Button>
                    <Button size="sm" variant="outline" disabled={Boolean(loadingId)} onClick={() => void reviewRequest(request.id, "ON_HOLD")} className="bg-linear-to-b from-rose-400/20 from-10% to-rose-300/10 shadow-glassy-jeri">Hold</Button>
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
