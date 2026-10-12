import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { publishDataChange } from "@/hooks/useDataRefresh";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001";
type PlanOffering = {
  id: string;
  name: string;
  type: string;
  speed: string | null;
  cost: number | null;
  status: "ACTIVE" | "INACTIVE" | "PENDING" | "SUSPENDED";
  _count?: { customers: number; subscriptions: number };
};

function OfferTab({ refreshKey = 0 }: { refreshKey?: number }) {
  const [plans, setPlans] = useState<PlanOffering[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loadingId, setLoadingId] = useState("");

  async function loadPlans() {
    const token = localStorage.getItem("diverge_token");
    if (!token) {
      setErrorMessage("Administrator sign-in is required.");
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/admin/plans`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message ?? "Unable to load plan offerings.");
      setPlans(Array.isArray(payload?.data) ? payload.data : []);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to load plan offerings.");
    }
  }

  useEffect(() => {
    void loadPlans();
  }, [refreshKey]);

  async function togglePlan(plan: PlanOffering) {
    const token = localStorage.getItem("diverge_token");
    if (!token) return;
    setLoadingId(plan.id);
    setErrorMessage("");
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/admin/plans/${plan.id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status: plan.status === "ACTIVE" ? "INACTIVE" : "ACTIVE" }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message ?? "Unable to update plan status.");
      publishDataChange();
      await loadPlans();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to update plan status.");
    } finally {
      setLoadingId("");
    }
  }

  return (
    <TabsContent value="offer">
      {errorMessage && <p role="alert" className="mb-4 text-sm text-red-300">{errorMessage}</p>}
      {plans.length === 0 && <p className="py-8 text-center text-white/50">No plan offerings are configured.</p>}
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        {plans.map((plan) => (
          <Card key={plan.id} className="flex-1 bg-white/5 text-white shadow-glassy-jeri ring-0">
            <CardHeader className="flex-row place-content-between">
              <span className={`rounded-md px-4 py-1 ring-1 ${plan.status === "ACTIVE" ? "bg-emerald-500/20 text-emerald-500 ring-emerald-500/80" : "bg-red-500/20 text-red-500 ring-red-500/80"}`}>
                {plan.status[0] + plan.status.slice(1).toLowerCase()}
              </span>
              <span className="text-pink-600">{plan.type}</span>
            </CardHeader>
            <CardContent>
              <h2 className="text-4xl font-bold">{plan.name}</h2>
              <div className="grid grid-cols-2">
                <span>
                  <p className="text-6xl tabular-nums">₱{((plan.cost ?? 0) / 100).toLocaleString("en-PH", { minimumFractionDigits: 2 })}</p>
                  <p className="font-thin opacity-40">/month</p>
                </span>
                <span className="place-items-end">
                  <p className="text-base text-pink-300">{plan.speed ?? "Speed not set"}</p>
                  <p className="text-xs font-thin opacity-40">Plan speed</p>
                </span>
              </div>
              <div className="mx-2 mt-2 grid grid-cols-3 rounded-xl bg-neutral-500/40 py-2 text-xs shadow-glassy-jeri">
                <span className="flex flex-col items-center">
                  <span>{(plan._count?.subscriptions ?? plan._count?.customers ?? 0).toLocaleString()}</span>
                  <span className="opacity-40">subs</span>
                </span>
                <span className="flex flex-col items-center">
                  <span>{plan.status === "ACTIVE" ? "Active" : "Paused"}</span>
                  <span className="opacity-40">status</span>
                </span>
                <span className="flex flex-col items-center">
                  <span>{plan.type}</span>
                  <span className="opacity-40">plan</span>
                </span>
              </div>
            </CardContent>
            <CardFooter className="mx-4 grid grid-cols-1 border-none">
              <Button className={`h-10 w-full cursor-pointer rounded-4xl shadow-glassy-jeri disabled:cursor-not-allowed ${plan.status === "ACTIVE" ? "bg-red-500/20 text-red-300 hover:bg-red-500/30" : "bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30"}`} disabled={Boolean(loadingId)} onClick={() => void togglePlan(plan)}>
                {loadingId === plan.id ? "Saving..." : plan.status === "ACTIVE" ? "Deactivate" : "Activate"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="mt-4 flex-1 bg-white/5 text-white shadow-glassy-jeri ring-0">
        <CardHeader className="flex-row">
          <span aria-hidden="true" className="text-xl">ⓘ</span>
          <h2 className="opacity-60">Self Service Upgrade Plan Rules</h2>
        </CardHeader>
        <CardContent className="ml-2 opacity-40">
          <p>Subscribers can self-upgrade plans up to 200 Mbps via the customer portal. Business plans require agent approval. Downgrades have a 30-day lock-in period.</p>
        </CardContent>
      </Card>
    </TabsContent>
  );
}

export default OfferTab;
