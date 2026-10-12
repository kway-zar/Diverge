import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
    <div className="flex w-full flex-col text-left font-light tracking-wide text-white">
      <h1 className="text-2xl">Upgrade or Downgrade</h1>
      <p className="mt-2 text-sm opacity-60">Choose an available service plan. Your current service remains active until an administrator reviews the request.</p>
      {notice && <p role="status" className="mb-4 text-sm text-emerald-300">{notice}</p>}
      {errorMessage && <p role="alert" className="mb-4 text-sm text-red-300">{errorMessage}</p>}
      <div className="mt-5 flex w-full flex-col gap-10">
        <div className="flex flex-row gap-3 rounded-2xl bg-amber-400/20 p-3 text-amber-400 shadow-glassy-jeri">
          <span aria-hidden="true" className="text-xl">⚡</span>
          <p>{pendingRequest ? `A request for ${pendingRequest.finalPlan?.name ?? "a plan change"} is awaiting review.` : "Upgrades to 200 Mbps or below take effect within 30 minutes - no technician needed. Downgrades have a 30-day lock-in."}</p>
        </div>
        {isLoading ? <p className="text-white/60">Loading plans...</p> : plans.length === 0 ? (
          <p className="text-white/60">No active plans are available.</p>
        ) : (
          <div className="flex flex-row gap-5 max-sm:flex-col max-sm:gap-4">
            {plans.map((plan) => {
              const isCurrent = plan.id === currentPlanId;
              const isRequestedPlan = pendingRequest?.finalPlan?.id === plan.id;
              return (
                <Card key={plan.id} className={`ml-2 flex-1 bg-white/5 shadow-glassy-jeri ring-0 max-sm:ml-0 max-sm:w-full ${isCurrent ? "ring-1 ring-blue-500" : ""}`}>
                  <CardHeader className="flex-row place-content-between">
                    {isCurrent && <span className="rounded-md bg-blue-500/20 px-4 py-1 text-blue-500 ring-1 ring-blue-500/80">Current Plan</span>}
                    {isRequestedPlan && <span className="rounded-md bg-emerald-500/20 px-4 py-1 text-emerald-500 ring-1 ring-emerald-500/80">Request Submitted</span>}
                  </CardHeader>
                  <CardContent className="flex flex-col gap-y-10">
                    <span className="flex flex-col gap-y-4">
                      <p className="text-2xl">{plan.name}</p>
                      <span className="flex flex-row">
                        <p className="text-5xl tabular-nums">₱{((plan.cost ?? 0) / 100).toLocaleString("en-PH", { minimumFractionDigits: 2 })}</p>
                        <p className="self-end text-xl opacity-40">/mo</p>
                      </span>
                    </span>
                    <div className="flex h-40 flex-row rounded-2xl bg-black/30 shadow-glassy-jeri">
                      <span className="flex w-[50%] flex-col items-center justify-center text-center">
                        <p className="bg-linear-to-r from-teal-400 from-50% to-blue-600 bg-clip-text text-3xl font-normal text-transparent">{plan.speed ?? "N/A"}</p>
                        <p className="font-normal opacity-40">Download</p>
                      </span>
                      <Separator orientation="vertical" className="my-4 w-[1.5px] bg-white/10" />
                      <span className="flex w-[50%] flex-col items-center justify-center text-center">
                        <p className="bg-linear-to-r from-teal-400 from-50% to-blue-600 bg-clip-text text-3xl font-normal text-transparent">{plan.type}</p>
                        <p className="font-normal opacity-40">Plan type</p>
                      </span>
                    </div>
                    {isCurrent ? (
                      <div className="flex justify-center rounded-2xl bg-black/30 p-5 shadow-glassy-jeri">
                        <p className="text-2xl tracking-widest opacity-40">Current Plan</p>
                      </div>
                    ) : isRequestedPlan ? (
                      <div className="flex justify-center rounded-2xl bg-emerald-500/20 p-5 shadow-glassy-jeri ring-1 ring-emerald-500">
                        <p className="text-2xl font-normal tracking-widest text-emerald-500">Request Submitted</p>
                      </div>
                    ) : (
                      <Button variant="ghost" disabled={Boolean(pendingRequest) || Boolean(submittingPlanId)} onClick={() => void requestPlan(plan.id)} className="h-auto justify-center rounded-2xl bg-blue-500/70 p-5 text-2xl font-normal tracking-widest hover:bg-blue-500/80">
                        {submittingPlanId === plan.id ? "Submitting..." : "Upgrade to This Plan"}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
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
