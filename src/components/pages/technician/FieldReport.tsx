import { useState } from "react"
import { Upload } from "lucide-react"
import { initialJobs } from "@/components/data/ticketData"
 
 
type Outcome = "Fully Resolved" | "Partially Solved" | "Needs Follow-Up"
 
const inputBox =
  "w-full rounded-[8px] border border-white/10 bg-white/10 px-3 font-ubuntu-mono text-sm tracking-[0.5px] text-white/85 shadow-[inset_0_3px_3px_rgba(0,0,0,0.25)] placeholder:text-white/60 focus:outline-none"
 
function FieldReport() {
  const [ticketID, setTicketID] = useState(initialJobs[0].ticketID)
  const [summary, setSummary] = useState("")
  const [parts, setParts] = useState("")
  const [timeOnSite, setTimeOnSite] = useState("")
  const [outcome, setOutcome] = useState<Outcome>("Fully Resolved")
  const [photos, setPhotos] = useState<File[]>([])
  const [submitted, setSubmitted] = useState(false)
 
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
 
  function handlePhotoPick(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? [])
    setPhotos((prev) => [...prev, ...files].slice(0, 5))
  }
 
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }
 
  function reset() {
    setSummary("")
    setParts("")
    setTimeOnSite("")
    setOutcome("Fully Resolved")
    setPhotos([])
    setSubmitted(false)
  }
 
  const selectedTicket = initialJobs.find((t) => t.ticketID === ticketID) ?? initialJobs[0]
 
  if (submitted) {
    return (
      <div className="w-full px-4 pb-10 pt-2 text-left text-white lg:px-10">
        <div className="mb-4">
          <h1 className="text-xl font-bold tracking-wider text-white">Field Report</h1>
          <p className="font-mono text-xs italic text-white opacity-30">{today}</p>
        </div>
 
        <div className="flex flex-col items-center gap-3 rounded-[14px] border-2 border-[#3acf98] bg-[rgba(58,207,152,0.15)] px-6 py-10 text-center">
          <span className="text-[40px] leading-none text-white">✓</span>
          <h2 className="text-lg font-medium tracking-[1px] text-[#fffefe] lg:text-xl">
            Report Submitted
          </h2>
          <p className="max-w-xl text-sm text-white/70 lg:text-base">
            Job <span className="text-[#3acf98]">{selectedTicket.ticketID}</span> has been marked as
            resolved. Your field report has been logged.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-1 rounded-[14px] border border-[#197af9] bg-[rgba(25,122,249,0.5)] px-6 py-3 text-sm tracking-[0.5px] text-white"
          >
            Submit Another
          </button>
        </div>
      </div>
    )
  }
 
  return (
    <form onSubmit={handleSubmit} className="w-full px-4 pb-10 pt-2 text-left text-white lg:px-10">
      <div className="mb-4">
        <h1 className="text-xl font-bold tracking-wider text-white">Field Report</h1>
        <p className="font-mono text-xs italic text-white opacity-30">{today}</p>
      </div>
 
      <div className="rounded-[14px] border border-[#7e7e7e] bg-white/20 p-5 lg:p-8">
        <h2 className="mb-4 text-lg font-medium tracking-[1px] text-[#fffefe] lg:text-xl">
          Job Details
        </h2>
 
        <label className="mb-1 block font-ubuntu-mono text-xs tracking-[0.5px] text-white/80 lg:text-sm">
          TICKET ID
        </label>
        <select
          value={ticketID}
          onChange={(e) => setTicketID(e.target.value)}
          className={`${inputBox} mb-5 h-[44px]`}
        >
          {initialJobs.map((t) => (
            <option key={t.ticketID} value={t.ticketID} className="bg-[#1a1a1a]">
              {t.ticketID} - {t.subscriber}
            </option>
          ))}
        </select>
 
        <label className="mb-1 block font-ubuntu-mono text-xs tracking-[0.5px] text-white/80 lg:text-sm">
          RESOLUTION SUMMARY
        </label>
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Describe what was found and how it was resolved"
          rows={3}
          required
          className={`${inputBox} mb-5 h-auto resize-none py-3`}
        />
 
        <div className="mb-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <label className="mb-1 block font-ubuntu-mono text-xs tracking-[0.5px] text-white/80 lg:text-sm">
              PARTS/MATERIAL USED
            </label>
            <input
              value={parts}
              onChange={(e) => setParts(e.target.value)}
              placeholder="e.g. RJ45 connector, 10mm cable, LAN, etc."
              className={`${inputBox} h-[42px]`}
            />
          </div>
          <div>
            <label className="mb-1 block font-ubuntu-mono text-xs tracking-[0.5px] text-white/80 lg:text-sm">
              TIME ON SITE
            </label>
            <input
              value={timeOnSite}
              onChange={(e) => setTimeOnSite(e.target.value)}
              placeholder="e.g. 1h 30min"
              required
              className={`${inputBox} h-[42px]`}
            />
          </div>
        </div>
 
        <label className="mb-1 block font-ubuntu-mono text-xs tracking-[0.5px] text-white/80 lg:text-sm">
          OUTCOME
        </label>
        <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {(["Fully Resolved", "Partially Solved", "Needs Follow-Up"] as Outcome[]).map((opt) => (
            <label
              key={opt}
              className={`flex h-[42px] cursor-pointer items-center gap-2 rounded-[8px] border px-3 font-ubuntu-mono text-xs tracking-[0.5px] ${
                outcome === opt ? "border-white bg-white/10" : "border-white/30 bg-white/5"
              }`}
            >
              <span
                className={`flex size-[16px] shrink-0 items-center justify-center rounded-full border ${
                  outcome === opt ? "border-[#ff006a]" : "border-white/60"
                }`}
              >
                {outcome === opt && <span className="size-[9px] rounded-full bg-[#ff006a]" />}
              </span>
              <input
                type="radio"
                name="outcome"
                className="sr-only"
                checked={outcome === opt}
                onChange={() => setOutcome(opt)}
              />
              {opt}
            </label>
          ))}
        </div>
 
        <label className="mb-1 block font-ubuntu-mono text-xs tracking-[0.5px] text-white/80 lg:text-sm">
          PHOTOS
        </label>
        <label className="flex h-[42px] w-fit cursor-pointer items-center gap-2 rounded-[8px] border border-white/60 bg-white/5 px-4 font-ubuntu-mono text-xs tracking-[0.5px] text-white">
          <Upload size={16} />
          Upload Photos Here
          <input type="file" accept="image/png,image/jpeg" multiple className="sr-only" onChange={handlePhotoPick} />
        </label>
        {photos.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-2 font-ubuntu-mono text-xs text-white/70">
            {photos.map((f, i) => (
              <li key={i}>{f.name}</li>
            ))}
          </ul>
        )}
        <p className="mt-2 text-xs text-white/70">
          Upload 3 to 5 clear Before/After photos. Supported formats: JPG, PNG. Maximum file size: 5 MB per photo.
        </p>
      </div>
 
      <button
        type="submit"
        className="mt-5 w-full rounded-[14px] border border-[#3acf98] bg-[rgba(58,207,152,0.5)] py-4 text-base font-bold tracking-[1px] text-white/85 lg:text-xl"
      >
        SUBMIT FIELD REPORT
      </button>
    </form>
  )
}
 
export default FieldReport