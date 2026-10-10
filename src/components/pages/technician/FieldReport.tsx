import { useEffect, useState } from "react";
import type { Job } from "@/components/types/job";
import { Button } from "@/components/ui/button";
import { publishDataChange, useDataRefresh } from "@/hooks/useDataRefresh";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001";
type ReportOutcome = "FULLY_RESOLVED" | "PARTIALLY_SOLVED" | "NEEDS_FOLLOW_UP";

function FieldReport() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [ticketID, setTicketID] = useState("");
  const [summary, setSummary] = useState("");
  const [parts, setParts] = useState("");
  const [timeOnSite, setTimeOnSite] = useState("");
  const [outcome, setOutcome] = useState<ReportOutcome>("FULLY_RESOLVED");
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function loadJobs() {
    const token = localStorage.getItem("diverge_token");
    if (!token) {
      setErrorMessage("Technician sign-in is required to access field reports.");
      setIsLoading(false);
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/technician/jobs`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message ?? "Unable to load assigned jobs.");
      const activeJobs = Array.isArray(payload?.data) ? payload.data : [];
      setJobs(activeJobs);
      setTicketID((selected) => activeJobs.some((job: Job) => job.ticketID === selected) ? selected : activeJobs[0]?.ticketID ?? "");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to load assigned jobs.");
    } finally {
      setIsLoading(false);
    }
  }

  useDataRefresh(loadJobs);
  useEffect(() => { void loadJobs(); }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const job = jobs.find((item) => item.ticketID === ticketID);
    const token = localStorage.getItem("diverge_token");
    if (!job?.id || !token) {
      setErrorMessage("Select an assigned job before submitting a report.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/technician/jobs/${job.id}/field-reports`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          description: summary,
          parts,
          timeOnSite,
          outcome,
        }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message ?? "Field report could not be submitted.");
      setSubmitted(true);
      publishDataChange();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Field report could not be submitted.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function reset() {
    setSummary("");
    setParts("");
    setTimeOnSite("");
    setOutcome("FULLY_RESOLVED");
    setSubmitted(false);
    void loadJobs();
  }

  const selectedJob = jobs.find((job) => job.ticketID === ticketID);

  if (submitted) {
    return (
      <section className="w-full px-4 pb-10 pt-2 text-left text-white lg:px-10">
        <h1 className="mb-4 text-xl font-bold tracking-wider">Field Report</h1>
        <div className="flex flex-col items-center gap-3 rounded-xl border border-[#3acf98] bg-[#3acf98]/10 px-6 py-10 text-center">
          <h2 className="text-lg font-medium text-[#3acf98]">Report saved</h2>
          <p className="text-sm text-white/70">{ticketID} has been updated with the submitted outcome.</p>
          <Button type="button" onClick={reset}>Submit Another</Button>
        </div>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full px-4 pb-10 pt-2 text-left text-white lg:px-10">
      <h1 className="mb-4 text-xl font-bold tracking-wider">Field Report</h1>
      {errorMessage && <p role="alert" className="mb-3 text-sm text-red-300">{errorMessage}</p>}
      {isLoading ? <p className="text-white/60">Loading assigned jobs...</p> : jobs.length === 0 ? (
        <p className="rounded-lg border border-white/10 bg-white/5 p-5 text-white/60">There are no assigned jobs to report.</p>
      ) : (
        <div className="flex max-w-3xl flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-5 lg:p-8">
          <label className="flex flex-col gap-2 text-sm text-white/70">
            Assigned job
            <select value={ticketID} onChange={(event) => setTicketID(event.target.value)} className="h-10 rounded-md border border-white/15 bg-[#202020] px-3 text-white">
              {jobs.map((job) => <option key={job.id} value={job.ticketID}>{job.ticketID} · {job.subscriber} · {job.status}</option>)}
            </select>
          </label>
          {selectedJob && <p className="text-sm text-white/60">{selectedJob.issue} · {selectedJob.address}</p>}
          <label className="flex flex-col gap-2 text-sm text-white/70">
            Resolution summary
            <textarea value={summary} onChange={(event) => setSummary(event.target.value)} minLength={10} maxLength={2000} required rows={4} className="rounded-md border border-white/15 bg-white/5 p-3 text-white" placeholder="Describe findings and work performed" />
          </label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-white/70">
              Time on site
              <input value={timeOnSite} onChange={(event) => setTimeOnSite(event.target.value)} required minLength={2} maxLength={80} className="h-10 rounded-md border border-white/15 bg-white/5 px-3 text-white" placeholder="e.g. 1h 30m" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-white/70">
              Parts/material used
              <input value={parts} onChange={(event) => setParts(event.target.value)} maxLength={500} className="h-10 rounded-md border border-white/15 bg-white/5 px-3 text-white" placeholder="Optional" />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-white/70">
            Outcome
            <select value={outcome} onChange={(event) => setOutcome(event.target.value as ReportOutcome)} className="h-10 rounded-md border border-white/15 bg-[#202020] px-3 text-white">
              <option value="FULLY_RESOLVED">Fully resolved</option>
              <option value="PARTIALLY_SOLVED">Partially solved</option>
              <option value="NEEDS_FOLLOW_UP">Needs follow-up</option>
            </select>
          </label>
          <p className="text-xs text-white/45">Photo evidence upload requires a configured storage service.</p>
          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting || isLoading}>{isSubmitting ? "Submitting..." : "Submit Field Report"}</Button>
          </div>
        </div>
      )}
    </form>
  );
}

export default FieldReport;
