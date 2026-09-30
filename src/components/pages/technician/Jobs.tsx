import { useState } from "react"
import { Navigation, Phone, TriangleAlert } from "lucide-react"
import type { CompletedJob, Job, JobPriority, JobStatus } from "@/components/types/job"
 
const initialJobs: Job[] = [
  {
    ticketID: "TK - 231231",
    customer: "Vanna Hernandez",
    address: "Blk 0 Lot 00 St, Brngy, Rizal",
    phone: "+63 912 345 6789",
    priority: "High",
    status: "Assigned",
    timeLeft: "4h remaining",
    issue: "No internet connection - modem not syncing",
    accessNote: "Access via subdivision gate, call customer upon arrival",
  },
  {
    ticketID: "TK - 231232",
    customer: "Jojo Landoy",
    address: "Blk 0 Lot 00 St, Brngy, Rizal",
    phone: "+63 912 345 6789",
    priority: "High",
    status: "En Route",
    timeLeft: "7h remaining",
    issue: "New installation - no signal",
    accessNote: "New subscriber. Bring full install kit.",
  },
  {
    ticketID: "TK - 231233",
    customer: "Jojo Corp.",
    address: "Blk 0 Lot 00 St, Brngy, Rizal",
    phone: "+63 912 345 6789",
    priority: "Critical",
    status: "On-Site",
    timeLeft: "BREACHED",
    issue: "Static IP not resolving after firmware update",
    accessNote: "Corporate client. Ask for IT admin at reception.",
  },
]
 
const initialCompleted: CompletedJob[] = [
  { ticketID: "TK - 231228", customer: "Jojo Corp.", issue: "Static IP not resolving after firmware update", outcome: "Cannot Complete" },
  { ticketID: "TK - 231227", customer: "Jojo Corp.", issue: "Static IP not resolving after firmware update", outcome: "Completed" },
]
 
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
  "flex h-[44px] items-center justify-center gap-2 rounded-[10px] border px-4 font-ubuntu-mono text-sm tracking-[0.8px] lg:text-base"
 
function Jobs() {
  const [jobs, setJobs] = useState<Job[]>(initialJobs)
  const [completed, setCompleted] = useState<CompletedJob[]>(initialCompleted)
 
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
      { ticketID: job.ticketID, customer: job.customer, issue: job.issue, outcome },
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
      <div className="mb-5 mt-2">
        <h1 className="text-2xl font-bold tracking-wider text-white">My Jobs</h1>
        <p className="font-mono text-xs italic text-white opacity-30 sm:text-sm">{today}</p>
      </div>
 
      {/* Technician profile */}
      <div className="flex min-h-[172px] items-center justify-between rounded-[20px] border border-[#7e7e7e] bg-white/20 px-8 lg:px-12">
        <div className="flex items-center gap-6">
          <div className="size-[100px] shrink-0 rounded-full bg-[#D9D9D9]" />
          <div>
            <h2 className="text-2xl font-medium tracking-[1.6px] text-[#fffefe] lg:text-[32px]">Technician 1</h2>
            <div className="mt-1 flex flex-wrap gap-x-6 font-ubuntu-mono text-base tracking-[1px] lg:text-[20px]">
              <span className="text-[#3acf98]">ENG-0001</span>
              <span className="text-white/85">MANILA/QUEZON CITY</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 font-ubuntu-mono">
          <div className="flex items-center gap-2 text-xl tracking-[2.4px] text-[#72a1ff] [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] lg:text-2xl">
            <span className="size-[16px] rounded-full bg-[#3d7bff]" />
            On-Site
          </div>
          <span className="text-base tracking-[0.8px] text-white/75">{jobs.length} active jobs</span>
        </div>
      </div>
 
      {/* Active jobs */}
      <h2 className="mb-4 mt-6 text-2xl font-medium tracking-[1.6px] text-[#fffefe] lg:text-[32px]">
        Active({jobs.length})
      </h2>
      <div className="flex flex-col gap-6">
        {jobs.length === 0 && <p className="text-white/60">No active jobs right now.</p>}
        {jobs.map((job) => {
          const breached = job.timeLeft === "BREACHED"
          return (
            <div key={job.ticketID} className="rounded-[20px] border border-[#7e7e7e] bg-white/20 px-8 py-8 lg:px-12">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="font-ubuntu-mono text-[20px] tracking-[1px] text-[#3acf98]">{job.ticketID}</span>
                    <span className={`flex h-[28px] w-[83px] items-center justify-center rounded-[41px] border text-base tracking-[0.8px] ${priorityStyles[job.priority]}`}>
                      {job.priority}
                    </span>
                    <span className={`flex h-[30px] w-[96px] items-center justify-center rounded-[41px] border text-sm tracking-[0.7px] ${statusStyles[job.status]}`}>
                      {job.status}
                    </span>
                  </div>
                  <h3 className="mt-1 text-2xl font-medium tracking-[1.6px] text-[#fffefe] lg:text-[32px]">{job.customer}</h3>
                  <p className="font-ubuntu-mono text-base tracking-[1px] text-white/85 lg:text-[20px]">{job.address}</p>
                </div>
                <span
                  className={`font-ubuntu-mono text-base tracking-[1px] lg:text-[20px] ${
                    breached ? "font-medium text-[#dd0002]" : "text-white/85 opacity-75"
                  }`}
                >
                  {job.timeLeft}
                </span>
              </div>
 
              <div className="mt-4 rounded-[20px] border border-[#7e7e7e] bg-white/20 p-4">
                <p className="font-ubuntu-mono text-base tracking-[1px] text-white/85 opacity-75 lg:text-[20px]">ISSUE</p>
                <p className="mt-2 font-ubuntu-mono text-xl tracking-[1.2px] text-white lg:text-2xl">{job.issue}</p>
              </div>
 
              <p className="mt-4 flex items-center gap-2 text-base tracking-[0.8px] text-[#e18e08]">
                <TriangleAlert size={20} className="shrink-0" />
                {job.accessNote}
              </p>
 
              <div className="mt-5 flex flex-wrap gap-4 lg:gap-10">
                <a
                  href={`tel:${job.phone.replace(/\s/g, "")}`}
                  className={`${actionBtn} min-w-[203px] border-[#7e7e7e] bg-white/20 text-white/85`}
                >
                  <Phone size={22} className="text-[#3acf98]" />
                  {job.phone}
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(job.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`${actionBtn} min-w-[139px] border-[#7e7e7e] bg-white/20 text-white/85`}
                >
                  <Navigation size={20} className="text-[#3acf98]" />
                  Navigate
                </a>
                <button
                  type="button"
                  onClick={() => advance(job)}
                  className={`${actionBtn} min-w-[180px] border-[#197af9] bg-[rgba(34,100,231,0.4)] text-white`}
                >
                  {nextLabel[job.status]}
                </button>
                <button
                  type="button"
                  onClick={() => finish(job, "Cannot Complete")}
                  className={`${actionBtn} min-w-[158px] border-[#dd0002] bg-[rgba(221,0,2,0.2)] text-white/85`}
                >
                  Cannot Complete
                </button>
              </div>
            </div>
          )
        })}
      </div>
 
      {/* Completed today */}
      <h2 className="mb-4 mt-8 text-2xl font-medium tracking-[1.6px] text-[#fffefe] lg:text-[32px]">
        Completed Today ({completed.length})
      </h2>
      <div className="flex flex-col gap-6">
        {completed.map((job) => (
          <div
            key={job.ticketID}
            className="flex items-center gap-8 rounded-[20px] border border-[#7e7e7e] bg-white/20 px-8 py-4 opacity-70"
          >
            <div className="flex w-[158px] shrink-0 justify-center">
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
              <h3 className="text-2xl font-medium tracking-[1.6px] text-[#fffefe] lg:text-[32px]">{job.customer}</h3>
              <p className="font-ubuntu-mono text-base tracking-[1px] text-[#3acf98] lg:text-[20px]">
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
