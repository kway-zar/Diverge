import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { publishDataChange } from "@/hooks/useDataRefresh";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001";

function CreatePlan({ onCreated }: { onCreated?: () => void }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [speed, setSpeed] = useState("");
  const [price, setPrice] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const token = localStorage.getItem("diverge_token");
    const costCents = Math.round(Number(price) * 100);
    if (!token || !Number.isSafeInteger(costCents) || costCents <= 0) {
      setErrorMessage("Sign in and enter a valid monthly price.");
      return;
    }
    setIsSaving(true);
    setErrorMessage("");
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/admin/plans`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ name, type, speed, costCents }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message ?? "Unable to create plan.");
      publishDataChange();
      onCreated?.();
      setOpen(false);
      setName(""); setType(""); setSpeed(""); setPrice("");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to create plan.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="mr-5 h-10 rounded-md bg-emerald-900 px-3 shadow-glassy-jeri">Create Plan</DialogTrigger>
      <DialogContent className="bg-[#121212] text-white ring-0 shadow-glassy-jeri sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Create Plan Offering</DialogTitle>
          <DialogDescription>New offerings are immediately available for customer plan requests.</DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-2 text-sm text-white/70"><Label htmlFor="new-plan-name">Plan name</Label><Input id="new-plan-name" value={name} onChange={(event) => setName(event.target.value)} required minLength={2} maxLength={80} /></label>
          <label className="flex flex-col gap-2 text-sm text-white/70"><Label htmlFor="new-plan-type">Customer type</Label><Input id="new-plan-type" value={type} onChange={(event) => setType(event.target.value)} required minLength={2} maxLength={40} placeholder="Residential or Business" /></label>
          <label className="flex flex-col gap-2 text-sm text-white/70"><Label htmlFor="new-plan-speed">Speed</Label><Input id="new-plan-speed" value={speed} onChange={(event) => setSpeed(event.target.value)} required minLength={2} maxLength={80} placeholder="200 Mbps" /></label>
          <label className="flex flex-col gap-2 text-sm text-white/70"><Label htmlFor="new-plan-price">Monthly price (PHP)</Label><Input id="new-plan-price" type="number" min="0.01" step="0.01" value={price} onChange={(event) => setPrice(event.target.value)} required /></label>
          {errorMessage && <p role="alert" className="text-sm text-red-300">{errorMessage}</p>}
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" disabled={isSaving}>{isSaving ? "Creating..." : "Create Plan"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreatePlan;
