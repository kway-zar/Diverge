import { useState } from "react"
import { Navigation, Phone, TriangleAlert } from "lucide-react"
import type { CompletedJob, Job, JobPriority, JobStatus } from "@/components/types/job"
import { initialJobs, initialCompleted } from "@/components/data/ticketData"
 
 
const priorityStyles: Record<JobPriority, string> = {
  High: "border-[#ff006a] bg-[rgba(255,0,106,0.2)] text-[#ff006a]",
  Critical: "border-[#dd0002] bg-[rgba(221,0,2,0.2)] text-[#dd0002]",
}
 
const statusStyles: Record<JobStatus, string> = {
  Assigned: "border-[#197af9] bg-[rgba(34,100,231,0.4)] text-[#197af9]",
  "En Route": "border-[#e18e08] bg-[rgba(225,142,8,0.2)] text-[#e18e08]",
  "On-Site": "border-[#3acf98] bg-[rgba(58,207,152,0.2)] text-[#3acf98]",
}
 
const nextLabel: Record<JobStatus, string> = {
  Assigned: "Mark as En Route",
  "En Route": "Mark as On-Site",
  "On-Site": "Mark as Completed",
}
 
const nextStatus: Partial<Record<JobStatus, JobStatus>> = {
  Assigned: "En Route",
  "En Route": "On-Site",
}
 
const actionBtn =
  "flex h-[36px] items-center justify-center gap-2 rounded-[8px] border px-3 font-ubuntu-mono text-xs tracking-[0.5px] lg:text-sm"
 
function Jobs() {
  const [jobs, setJobs] = useState<Job[]>(initialJobs)
  const [completed, setCompleted] = useState<CompletedJob[]>(initialCompleted)
  const technicianName = "Rizal Service Tech"
  const technicianLocation = "RIZAL"
 
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
 
  function finish(job: Job, outcome: CompletedJob["outcome"]) {
    setJobs((prev) => prev.filter((j) => j.ticketID !== job.ticketID))
    setCompleted((prev) => [
      { ticketID: job.ticketID, subscriber: job.subscriber, issue: job.issue, outcome },
      ...prev,
    ])
  }
 
  function advance(job: Job) {
    const next = nextStatus[job.status]
    if (next) {
      setJobs((prev) => prev.map((j) => (j.ticketID === job.ticketID ? { ...j, status: next } : j)))
    } else {
      finish(job, "Completed")
    }
  }
 
  return (
    <div className="w-full px-4 pb-10 text-left text-white lg:px-10">
      <div className="mb-4 mt-2">
        <h1 className="text-xl font-bold tracking-wider text-white">My Jobs</h1>
        <p className="font-mono text-xs italic text-white opacity-30">{today}</p>
      </div>
 
      {/* Technician profile */}
      <div className="flex min-h-[110px] items-center justify-between rounded-[14px] border border-[#7e7e7e] bg-white/20 px-5 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="size-[60px] shrink-0 rounded-full bg-[#D9D9D9]" />
          <div>
            <h2 className="text-2xl font-medium tracking-[1.6px] text-[#fffefe] lg:text-[32px]">{technicianName}</h2>
            <div className="mt-1 flex flex-wrap gap-x-6 font-ubuntu-mono text-base tracking-[1px] lg:text-[20px]">
              <span className="text-[#3acf98]">TECH-0001</span>
              <span className="text-white/85">{technicianLocation}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 font-ubuntu-mono">
          <div className="flex items-center gap-2 text-sm tracking-[1.5px] text-[#72a1ff] lg:text-base">
            <span className="size-[10px] rounded-full bg-[#3d7bff]" />
            On-Site
          </div>
          <span className="text-xs tracking-[0.5px] text-white/75">{jobs.length} active jobs</span>
        </div>
      </div>
 
      {/* Active jobs */}
      <h2 className="mb-3 mt-4 text-lg font-medium tracking-[1px] text-[#fffefe] lg:text-xl">
        Active({jobs.length})
      </h2>
      <div className="flex flex-col gap-4">
        {jobs.length === 0 && <p className="text-white/60">No active jobs right now.</p>}
        {jobs.map((job) => {
          const breached = job.timeLeft === "BREACHED"
          return (
            <div key={job.ticketID} className="rounded-[14px] border border-[#7e7e7e] bg-white/20 px-5 py-5 lg:px-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-ubuntu-mono text-sm tracking-[0.5px] text-[#3acf98]">{job.ticketID}</span>
                    <span className={`flex h-[20px] w-[62px] items-center justify-center rounded-[30px] border text-xs tracking-[0.5px] ${priorityStyles[job.priority]}`}>
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
                <button
                  type="button"
                  onClick={() => advance(job)}
                  className={`${actionBtn} min-w-[135px] border-[#197af9] bg-[rgba(34,100,231,0.4)] text-white`}
                >
                  {nextLabel[job.status]}
                </button>
                <button
                  type="button"
                  onClick={() => finish(job, "Cannot Complete")}
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
      <h2 className="mb-3 mt-6 text-lg font-medium tracking-[1px] text-[#fffefe] lg:text-xl">
        Completed Today ({completed.length})
      </h2>
      <div className="flex flex-col gap-4">
        {completed.map((job) => (
          <div
            key={job.ticketID}
            className="flex items-center gap-5 rounded-[14px] border border-[#7e7e7e] bg-white/20 px-5 py-3 opacity-70"
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