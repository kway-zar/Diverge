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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {plans.map((plan) => (
          <Card key={plan.id} className="gap-3 bg-white/5 text-white shadow-glassy-jeri ring-0">
            <CardHeader className="flex-row items-center justify-between">
              <span className={`rounded-md px-3 py-1 text-sm ${plan.status === "ACTIVE" ? "bg-emerald-500/15 text-emerald-300" : "bg-white/10 text-white/50"}`}>
                {plan.status[0] + plan.status.slice(1).toLowerCase()}
              </span>
              <span className="text-sm text-pink-300">{plan.type}</span>
            </CardHeader>
            <CardContent className="space-y-3">
              <h2 className="text-2xl font-semibold">{plan.name}</h2>
              <div className="flex items-end justify-between gap-3">
                <p className="text-3xl font-semibold tabular-nums">₱{((plan.cost ?? 0) / 100).toLocaleString("en-PH", { minimumFractionDigits: 2 })}<span className="ml-1 text-sm font-normal text-white/45">/month</span></p>
                <span className="text-sm text-white/65">{plan.speed ?? "Speed not set"}</span>
              </div>
              <p className="text-xs text-white/45">{plan._count?.subscriptions ?? plan._count?.customers ?? 0} subscribers</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" disabled={Boolean(loadingId)} onClick={() => void togglePlan(plan)}>
                {loadingId === plan.id ? "Saving..." : plan.status === "ACTIVE" ? "Deactivate" : "Activate"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </TabsContent>
  );
}

export default OfferTab;
