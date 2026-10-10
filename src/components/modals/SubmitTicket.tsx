import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001";

type SubmitTicketProps = {
  onClose: () => void;
  mode?: "customer" | "admin";
  onSubmitted?: () => void;
};

function SubmitTicket({ onClose, mode = "customer", onSubmitted }: SubmitTicketProps) {
  const [category, setCategory] = useState("");
  const [issue, setIssue] = useState("");
  const [description, setDescription] = useState("");
  const [accountId, setAccountId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const token = localStorage.getItem("diverge_token");
      if (!token) throw new Error("Sign in to submit a support ticket.");

      const response = await fetch(
        mode === "admin"
          ? `${API_BASE_URL}/api/v1/admin/tickets`
          : `${API_BASE_URL}/api/customers/me/tickets`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ category, issue, description, ...(mode === "admin" ? { accountId } : {}) }),
        },
      );
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message ?? "Ticket could not be submitted.");
      onSubmitted?.();
      onClose();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Ticket could not be submitted.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212]/70 p-4">
      <Card className="relative w-full max-w-xl gap-2 rounded-xl bg-[#171717] text-white shadow-glassy-jeri ring-1 ring-white/10">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-medium">Submit a support ticket</CardTitle>
          <Button variant="ghost" type="button" onClick={onClose} aria-label="Close ticket form">×</Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {mode === "admin" && (
              <label className="flex flex-col gap-1 text-sm text-white/70">
                Account ID
                <Input value={accountId} onChange={(event) => setAccountId(event.target.value)} required placeholder="ACC-..." />
              </label>
            )}
            <label className="flex flex-col gap-1 text-sm text-white/70">
              Category
              <Input value={category} onChange={(event) => setCategory(event.target.value)} minLength={2} maxLength={80} required placeholder="Technical, billing, account..." />
            </label>
            <label className="flex flex-col gap-1 text-sm text-white/70">
              Subject
              <Input value={issue} onChange={(event) => setIssue(event.target.value)} minLength={4} maxLength={120} required placeholder="Briefly describe the issue" />
            </label>
            <label className="flex flex-col gap-1 text-sm text-white/70">
              Description
              <Textarea value={description} onChange={(event) => setDescription(event.target.value)} minLength={10} maxLength={2000} required rows={5} placeholder="Include when it started and what you have tried" />
            </label>
            {errorMessage && <p role="alert" className="text-sm text-red-300">{errorMessage}</p>}
            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
              <Button type="submit" disabled={isSubmitting} className="bg-[#3ACF98] text-black hover:bg-[#3ACF98]/80">
                {isSubmitting ? "Submitting..." : "Submit Ticket"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SubmitTicket;
