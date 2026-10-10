import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { publishDataChange, useDataRefresh } from "@/hooks/useDataRefresh";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001";
type Plan = { id: string; name: string; type: string; speed: string | null; cost: number | null };
type PlanRequest = { id: string; status: string; finalPlan?: Plan | null; requestedAt: string };

function PlanChanges() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [currentPlanId, setCurrentPlanId] = useState("");
  const [requests, setRequests] = useState<PlanRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [submittingPlanId, setSubmittingPlanId] = useState("");
  const [notice, setNotice] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function loadPlanData() {
    const token = localStorage.getItem("diverge_token");
    if (!token) {
      setErrorMessage("Sign in to review available plans.");
      setIsLoading(false);
      return;
    }
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const [plansResponse, requestResponse, accountResponse] = await Promise.all([
        fetch(`${API_BASE_URL}/api/v1/customer/plans/offerings`, { headers }),
        fetch(`${API_BASE_URL}/api/v1/customer/plans/requests`, { headers }),
        fetch(`${API_BASE_URL}/api/customers/me`, { headers }),
      ]);
      const [plansPayload, requestPayload, accountPayload] = await Promise.all([
        plansResponse.json(), requestResponse.json(), accountResponse.json(),
      ]);
      if (!plansResponse.ok || !requestResponse.ok || !accountResponse.ok) {
        throw new Error("Unable to load plan information.");
      }
      setPlans(Array.isArray(plansPayload?.data) ? plansPayload.data : []);
      setRequests(Array.isArray(requestPayload?.data) ? requestPayload.data : []);
      setCurrentPlanId(accountPayload?.data?.planId ?? "");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to load plan information.");
    } finally {
      setIsLoading(false);
    }
  }

  useDataRefresh(loadPlanData);
  useEffect(() => { void loadPlanData(); }, []);

  async function requestPlan(planId: string) {
    const token = localStorage.getItem("diverge_token");
    if (!token) return;
    setSubmittingPlanId(planId);
    setErrorMessage("");
    setNotice("");
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/customer/plans/requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ planId }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message ?? "Plan change request failed.");
      setNotice("Your plan change request was submitted for review.");
      publishDataChange();
      await loadPlanData();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Plan change request failed.");
    } finally {
      setSubmittingPlanId("");
    }
  }

  const pendingRequest = requests.find((request) => request.status === "PENDING");

  return (
    <div className="w-full px-4 py-6 text-left text-white lg:px-10">
      <h1 className="mb-2 text-2xl font-medium">Plans &amp; subscriptions</h1>
      <p className="mb-6 max-w-3xl text-sm text-white/60">Choose an available service plan. Your current service remains active until an administrator reviews the request.</p>
      {notice && <p role="status" className="mb-4 text-sm text-emerald-300">{notice}</p>}
      {errorMessage && <p role="alert" className="mb-4 text-sm text-red-300">{errorMessage}</p>}
      {pendingRequest && <p className="mb-5 rounded-md border border-amber-300/20 bg-amber-300/10 p-3 text-sm text-amber-200">A request for {pendingRequest.finalPlan?.name ?? "a plan change"} is awaiting review.</p>}
      {isLoading ? <p className="text-white/60">Loading plans...</p> : plans.length === 0 ? (
        <p className="text-white/60">No active plans are available.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => {
            const isCurrent = plan.id === currentPlanId;
            return (
              <Card key={plan.id} className="gap-3 rounded-lg border-white/10 bg-white/5 text-white shadow-glassy-jeri ring-0">
                <CardHeader className="flex-row items-center justify-between">
                  <div>
                    <h2 className="text-lg font-medium">{plan.name}</h2>
                    <p className="text-sm text-white/55">{plan.type}</p>
                  </div>
                  {isCurrent && <span className="rounded-md border border-blue-400/30 bg-blue-400/10 px-2 py-1 text-xs text-blue-200">Current</span>}
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <p className="text-3xl font-semibold tabular-nums">₱{((plan.cost ?? 0) / 100).toLocaleString("en-PH", { minimumFractionDigits: 2 })}<span className="ml-1 text-sm font-normal text-white/45">/month</span></p>
                  <p className="text-sm text-white/65">{plan.speed ?? "Speed details unavailable"}</p>
                  <Button disabled={isCurrent || Boolean(pendingRequest) || Boolean(submittingPlanId)} onClick={() => void requestPlan(plan.id)}>
                    {isCurrent ? "Current Plan" : submittingPlanId === plan.id ? "Submitting..." : pendingRequest ? "Request Pending" : "Request Plan Change"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
      {requests.length > 0 && (
        <section className="mt-8 border-t border-white/10 pt-5">
          <h2 className="mb-3 text-lg font-medium">Request history</h2>
          <ul className="space-y-2 text-sm text-white/65">
            {requests.map((request) => <li key={request.id}>{request.finalPlan?.name ?? "Plan change"} · {request.status.replaceAll("_", " ")} · {new Date(request.requestedAt).toLocaleDateString()}</li>)}
          </ul>
        </section>
      )}
    </div>
  );
}

export default PlanChanges;
