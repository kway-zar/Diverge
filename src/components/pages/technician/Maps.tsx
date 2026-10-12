import { useEffect, useState } from "react";
import { MapPin, Navigation } from "lucide-react";
import type { Job } from "@/components/types/job";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001";

function Maps() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selected, setSelected] = useState<Job | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadJobs() {
      const token = localStorage.getItem("diverge_token");
      if (!token) {
        setErrorMessage("Technician sign-in is required to view assigned job locations.");
        setIsLoading(false);
        return;
      }
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/technician/jobs`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const payload = await response.json();
        if (!response.ok) throw new Error(payload?.message ?? "Unable to load job locations.");
        const nextJobs: Job[] = Array.isArray(payload?.data) ? payload.data : [];
        setJobs(nextJobs);
        setSelected((current) => nextJobs.find((job) => job.id === current?.id) ?? nextJobs[0] ?? null);
        setErrorMessage("");
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : "Unable to load job locations.");
      } finally {
        setIsLoading(false);
      }
    }
    void loadJobs();
  }, []);

  return (
    <div className="w-full px-4 pb-10 pt-2 text-left text-white lg:px-10">
      <div className="mb-5">
        <h1 className="text-2xl font-bold tracking-wider">Job Locations</h1>
        <p className="mt-1 text-sm text-white/55">Live GPS markers are unavailable until technician location sharing is configured.</p>
      </div>
      {errorMessage && <p role="alert" className="mb-4 text-sm text-red-300">{errorMessage}</p>}
      {isLoading ? <p className="text-white/60">Loading assigned jobs...</p> : jobs.length === 0 ? (
        <p className="rounded-lg border border-white/10 bg-white/5 p-5 text-white/60">No assigned jobs have an address to navigate to.</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)] ">
          <div className="flex flex-col gap-3 ">
            {jobs.map((job) => (
              <button key={job.id} type="button" onClick={() => setSelected(job)} className={`rounded-lg border p-4 text-left transition ${selected?.id === job.id ? "border-[#3acf98]/60 bg-[#3acf98]/10" : "border-white/10 bg-white/5 hover:bg-white/10"}`}>
                <span className="font-mono text-sm text-[#3acf98]">{job.ticketID}</span>
                <span className="ml-3 text-xs text-white/50">{job.status}</span>
                <h2 className="mt-1 font-medium">{job.subscriber}</h2>
                <p className="mt-1 flex items-center gap-2 text-sm text-white/65"><MapPin size={14} />{job.address}</p>
              </button>
            ))}
          </div>
          {selected && (
            <section className="flex flex-col justify-between gap-5 rounded-lg border border-white/10 bg-white/5 shadow-glassy-jeri p-5">
              <div>
                <p className="font-mono text-sm text-[#3acf98]">{selected.ticketID} · {selected.priority}</p>
                <h2 className="mt-2 text-xl font-medium">{selected.subscriber}</h2>
                <p className="mt-2 flex items-start gap-2 text-white/65"><MapPin size={17} className="mt-0.5 shrink-0" />{selected.address}</p>
                <p className="mt-4 text-sm text-white/55">{selected.issue}</p>
              </div>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selected.address)}`} target="_blank" rel="noreferrer" className="inline-flex h-10 w-fit items-center gap-2 rounded-md bg-[#3acf98] px-4 text-sm font-medium text-black hover:bg-[#3acf98]/80">
                <Navigation size={16} /> Open Directions
              </a>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

export default Maps;
