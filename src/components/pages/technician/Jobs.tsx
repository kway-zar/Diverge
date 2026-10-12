import { useEffect, useState } from "react"
import { Navigation, Phone, TriangleAlert } from "lucide-react"
import type { CompletedJob, Job, JobPriority, JobStatus } from "@/components/types/job"
import { publishDataChange, useDataRefresh } from "@/hooks/useDataRefresh"
const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001";
 
 
const priorityStyles: Record<JobPriority, string> = {
  Low: "border-[#197af9] bg-[rgba(34,100,231,0.2)] text-[#197af9]",
  Medium: "border-[#e18e08] bg-[rgba(225,142,8,0.2)] text-[#e18e08]",
  High: "border-[#ff006a] bg-[rgba(255,0,106,0.2)] text-[#ff006a]",
  Critical: "border-[#dd0002] bg-[rgba(221,0,2,0.2)] text-[#dd0002]",
}
 
const statusStyles: Record<JobStatus, string> = {
  Assigned: "border-[#197af9] bg-[rgba(34,100,231,0.4)] text-[#197af9]",
  "En Route": "border-[#e18e08] bg-[rgba(225,142,8,0.2)] text-[#e18e08]",
  "On-Site": "border-[#3acf98] bg-[rgba(58,207,152,0.2)] text-[#3acf98]",
}
 
const actionBtn =
  "flex h-[36px] items-center justify-center gap-2 rounded-[8px] border px-3 font-ubuntu-mono text-xs tracking-[0.5px] lg:text-sm"
 
function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [completed, setCompleted] = useState<CompletedJob[]>([])
  const [technician, setTechnician] = useState<{ name: string; location: string; status: string } | null>(null)
  const [availability, setAvailability] = useState<"AVAILABLE" | "UNAVAILABLE" | "OFF_DUTY">("AVAILABLE")
  const [isSavingAvailability, setIsSavingAvailability] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(true)
 
  const today =
    new Date().toLocaleString("en-US", {
      timeZone: "Asia/Manila",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }) + " PHT"
 
  async function loadJobs() {
    const token = localStorage.getItem("diverge_token")
    if (!token) {
      setErrorMessage("Technician sign-in is required to view assigned jobs.")
      setIsLoading(false)
      return
    }
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/technician/jobs`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      const payload = await response.json()
      if (!response.ok) throw new Error(payload?.message ?? "Unable to load jobs.")
      setJobs(Array.isArray(payload?.data) ? payload.data : [])
      setCompleted(Array.isArray(payload?.completed) ? payload.completed.map((job: Job) => ({ ...job, outcome: "Completed" as const })) : [])
      setTechnician(payload?.technician ?? null)
      if (payload?.technician?.status === "UNAVAILABLE" || payload?.technician?.status === "OFF_DUTY") {
        setAvailability(payload.technician.status)
      } else {
        setAvailability("AVAILABLE")
      }
      setErrorMessage("")
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to load jobs.")
    } finally {
      setIsLoading(false)
    }
  }
 
  useDataRefresh(loadJobs)
  useEffect(() => { void loadJobs() }, [])

  async function updateAvailability() {
    const token = localStorage.getItem("diverge_token")
    if (!token) return
    setIsSavingAvailability(true)
    setErrorMessage("")
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/technician/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status: availability }),
      })
      const payload = await response.json()
      if (!response.ok) throw new Error(payload?.message ?? "Unable to update availability.")
      setTechnician((current) => current ? { ...current, status: payload.data.status } : current)
      publishDataChange()
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to update availability.")
    } finally {
      setIsSavingAvailability(false)
    }
  }

  async function updateJobStatus(job: Job, selectedStatus: "Assigned" | "En Route" | "On-Site") {
    const token = localStorage.getItem("diverge_token")
    if (!token || !job.id) return
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/technician/jobs/${job.id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status: selectedStatus === "En Route" ? "EN_ROUTE" : selectedStatus === "On-Site" ? "ON_SITE" : "ASSIGNED" }),
      })
      const payload = await response.json()
      if (!response.ok) throw new Error(payload?.message ?? "Unable to update job status.")
      publishDataChange()
      await loadJobs()
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to update job status.")
    }
  }

  async function cannotComplete(job: Job) {
    const token = localStorage.getItem("diverge_token")
    if (!token || !job.id) return
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/technician/jobs/${job.id}/field-reports`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          description: "Technician could not complete the assigned work. Follow-up is required.",
          timeOnSite: "0 min",
          outcome: "CANNOT_COMPLETE",
        }),
      })
      const payload = await response.json()
      if (!response.ok) throw new Error(payload?.message ?? "Unable to submit follow-up report.")
      publishDataChange()
      await loadJobs()
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to submit follow-up report.")
    }
  }
 
  return (
    <div className="w-full px-4 pb-10 text-left text-white lg:px-10   ">
      <div className="mb-4 mt-2">
        <h1 className="text-xl font-bold tracking-wider text-white">My Jobs</h1>
        <p className="font-mono text-xs italic text-white opacity-30">{today}</p>
      </div>
 
      {/* Technician profile */}
      <div className="flex min-h-[110px] items-center justify-between rounded-[14px] border  border-white/10 bg-white/5 shadow-glassy-jeri px-5 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="size-[60px] shrink-0 rounded-full bg-[#D9D9D9]" />
          <div>
            <h2 className="text-2xl font-medium tracking-[1.6px] text-[#fffefe] lg:text-[32px]">{technician?.name ?? "Technician"}</h2>
            <div className="mt-1 flex flex-wrap gap-x-6 font-ubuntu-mono text-base tracking-[1px] lg:text-[20px]">
              <span className="text-white/85">{technician?.location ?? "Location unavailable"}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 font-ubuntu-mono">
          <div className="flex items-center gap-2 text-sm tracking-[1.5px] text-[#72a1ff] lg:text-base">
            <span className="size-[10px] rounded-full bg-[#3d7bff]" />
            {technician?.status?.replaceAll("_", " ") ?? (jobs.some((job) => job.status === "On-Site") ? "On-Site" : "Available")}
          </div>
          <span className="text-xs tracking-[0.5px] text-white/75">{jobs.length} active jobs</span>
          <div className="mt-2 flex items-center gap-2">
            <select aria-label="Set availability" value={availability} onChange={(event) => setAvailability(event.target.value as typeof availability)} className="h-8 rounded-md border border-white/15 bg-[#202020] px-2 text-xs text-white">
              <option value="AVAILABLE">Available</option>
              <option value="UNAVAILABLE">Unavailable</option>
              <option value="OFF_DUTY">Off Duty</option>
            </select>
            <button type="button" disabled={isSavingAvailability} onClick={() => void updateAvailability()} className="h-8 rounded-md border border-white/15 bg-white/10 px-3 text-xs text-white disabled:opacity-50">
              {isSavingAvailability ? "Saving..." : "Set status"}
            </button>
          </div>
        </div>
      </div>
 
      {/* Active jobs */}
      {errorMessage && <p role="alert" className="mb-3 text-sm text-red-300">{errorMessage}</p>}
      <h2 className="mb-3 mt-4 text-lg font-medium tracking-[1px] text-[#fffefe] lg:text-xl">
        Active({jobs.length})
      </h2>
      <div className="flex flex-col gap-4 ">
        {isLoading && <p className="text-white/60">Loading assigned jobs...</p>}
        {!isLoading && jobs.length === 0 && <p className="text-white/60">No active jobs right now.</p>}
        {jobs.map((job) => {
          const breached = job.timeLeft === "BREACHED"
          return (
            <div key={job.ticketID} className="rounded-[14px] border border-white/10 bg-white/5 shadow-glassy-jeri px-5 py-5 lg:px-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-ubuntu-mono text-sm tracking-[0.5px] text-[#3acf98]">{job.ticketID}</span>
                    <span className={`flex h-[20px] min-w-[62px] items-center justify-center rounded-[30px] border px-2 text-xs tracking-[0.5px] ${priorityStyles[job.priority]}`}>
                      {job.priority}
                    </span>
                    <span className={`flex h-[22px] w-[72px] items-center justify-center rounded-[30px] border text-xs tracking-[0.5px] ${statusStyles[job.status]}`}>
                      {job.status}
                    </span>
                  </div>
                  <h3 className="mt-1 text-lg font-medium tracking-[1px] text-[#fffefe] lg:text-xl">{job.subscriber}</h3>
                  <p className="font-ubuntu-mono text-xs tracking-[0.5px] text-white/85 lg:text-sm">{job.address}</p>
                </div>
                <span
                  className={`font-ubuntu-mono text-xs tracking-[0.5px] lg:text-sm ${
                    breached ? "font-medium text-[#dd0002]" : "text-white/85 opacity-75"
                  }`}
                >
                  {job.timeLeft}
                </span>
              </div>
 
              <div className="mt-3 rounded-[14px] border border-[#7e7e7e] bg-white/20 p-3">
                <p className="font-ubuntu-mono text-xs tracking-[0.5px] text-white/85 opacity-75 lg:text-sm">ISSUE</p>
                <p className="mt-1 font-ubuntu-mono text-sm tracking-[0.8px] text-white lg:text-base">{job.issue}</p>
              </div>
 
              <p className="mt-3 flex items-center gap-2 text-xs tracking-[0.5px] text-[#e18e08]">
                <TriangleAlert size={16} className="shrink-0" />
                {job.accessNote}
              </p>
 
              <div className="mt-4 flex flex-wrap gap-3 lg:gap-6">
                <a
                  href={`tel:${job.phone.replace(/\s/g, "")}`}
                  className={`${actionBtn} min-w-[150px] border-[#7e7e7e] bg-white/20 text-white/85`}
                >
                  <Phone size={16} className="text-[#3acf98]" />
                  {job.phone}
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(job.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`${actionBtn} min-w-[100px] border-[#7e7e7e] bg-white/20 text-white/85`}
                >
                  <Navigation size={14} className="text-[#3acf98]" />
                  Navigate
                </a>
                <label className={`${actionBtn} min-w-[150px] border-[#197af9] bg-[rgba(34,100,231,0.2)] text-white`}>
                  Job status
                  <select
                    aria-label={`Status for ${job.ticketID}`}
                    value={job.status === "En Route" ? "EN_ROUTE" : job.status === "On-Site" ? "ON_SITE" : "ASSIGNED"}
                    onChange={(event) => {
                      if (event.target.value === "ASSIGNED" || event.target.value === "EN_ROUTE" || event.target.value === "ON_SITE") {
                        void updateJobStatus(job, event.target.value === "EN_ROUTE" ? "En Route" : event.target.value === "ON_SITE" ? "On-Site" : "Assigned")
                      }
                    }}
                    className="max-w-[115px] bg-transparent text-xs text-white outline-none"
                  >
                    <option value="ASSIGNED" className="bg-[#202020]">Assigned</option>
                    <option value="EN_ROUTE" className="bg-[#202020]">Travelling</option>
                    <option value="ON_SITE" className="bg-[#202020]">On-site</option>
                  </select>
                </label>
                {job.status === "On-Site" && <button type="button" onClick={() => window.dispatchEvent(new Event("technician-open-field-report"))} className={`${actionBtn} border-[#3acf98] bg-[#3acf98]/20 text-white`}>Field report</button>}
                <button
                  type="button"
                  onClick={() => void cannotComplete(job)}
                  className={`${actionBtn} min-w-[120px] border-[#dd0002] bg-[rgba(221,0,2,0.2)] text-white/85`}
                >
                  Cannot Complete
                </button>
              </div>
            </div>
          )
        })}
      </div>
 
      {/* Completed today */}
      <h2 className="mb-3 mt-6 text-lg font-medium tracking-[1px] text-[#fffefe] lg:text-xl ">
        Completed Today ({completed.length})
      </h2>
      <div className="flex flex-col gap-4 ">
        {completed.map((job) => (
          <div
            key={job.ticketID}
            className="flex items-center gap-5 rounded-[14px] border border-white/10 bg-white/5 shadow-glassy-jeri px-5 py-3 opacity-70"
          >
            <div className="flex w-[120px] shrink-0 justify-center">
              <span
                className={`${actionBtn} ${
                  job.outcome === "Completed"
                    ? "border-[#3acf98] bg-[rgba(58,207,152,0.2)]"
                    : "border-[#dd0002] bg-[rgba(221,0,2,0.2)]"
                } text-white/85`}
              >
                {job.outcome}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-medium tracking-[1px] text-[#fffefe] lg:text-xl">{job.subscriber}</h3>
              <p className="font-ubuntu-mono text-xs tracking-[0.5px] text-[#3acf98] lg:text-sm">
                {job.ticketID} <span className="text-white">• {job.issue}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
 
export default Jobs