import type { RatingBreakdown, Metric, Feedback } from "../../types/evaluation";
 
const ratingBreakdown: RatingBreakdown[] = [
  { stars: 5, count: 14 },
  { stars: 4, count: 3 },
  { stars: 3, count: 1 },
  { stars: 2, count: 0 },
  { stars: 1, count: 0 },
]
const maxRatingCount = Math.max(...ratingBreakdown.map((r) => r.count))
 
const metrics: Metric[] = [
  { label: "Average Resolution Time", value: "1h 23min", benchmark: "Benchmark: 2h 00min", percent: 88 },
  { label: "Customer Satisfaction", value: "4.5 / 5.0", benchmark: "Benchmark: 4.5 / 5.0", percent: 90 },
  { label: "First-Call Resolution", value: "85%", benchmark: "Benchmark: 80%", percent: 85 },
  { label: "Punctuality Rate", value: "90%", benchmark: "Benchmark: 80%", percent: 90 },
  { label: "Jobs Completed", value: "18", benchmark: "Benchmark: --", percent: 100 },
]
 
const feedback: Feedback[] = [
  { name: "Vanna Hernandez", date: "Sep 23", stars: 5, quote: "Very professional and fast! Fixed the issue within 30 minutes." },
  { name: "Jojo Landoy", date: "Sep 19", stars: 5, quote: "Was polite and knowledgeable. Great experience." },
  { name: "Jepoy", date: "Sep 12", stars: 4, quote: "Resolved the issue but took longer than expected." },
]
 
function Stars({ count, size = 14 }: { count: number; size?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          style={{ fontSize: size }}
          className={i < count ? "text-[#e1ae08]" : "text-white/20"}
        >
          ★
        </span>
      ))}
    </div>
  )
}
 
function Evaluation() {
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
 
  return (
    <div className="w-full px-4 pb-10 pt-2 text-left text-white lg:px-10">
      <div className="mb-4">
        <h1 className="text-xl font-bold tracking-wider text-white">My Evaluation</h1>
        <p className="font-mono text-xs italic text-white opacity-30">{today}</p>
      </div>
 
      {/* Overall rating */}
      <div className="flex flex-col gap-5 rounded-[14px] border border-[#7e7e7e] bg-white/20 p-5 lg:flex-row lg:items-center lg:p-8">
        <div className="flex shrink-0 flex-col items-center gap-1 lg:items-start">
          <span className="text-4xl font-medium text-[#fffefe] lg:text-5xl">4.5</span>
          <Stars count={5} size={18} />
          <span className="text-xs uppercase tracking-[1px] text-white/60">overall rating</span>
        </div>
        <div className="flex-1 space-y-2">
          {ratingBreakdown.map((row) => (
            <div key={row.stars} className="flex items-center gap-2">
              <span className="w-8 shrink-0 font-ubuntu-mono text-xs text-white/85">{row.stars} ★</span>
              <div className="h-[10px] flex-1 overflow-hidden rounded-full bg-[#757575]">
                <div
                  className="h-full rounded-full bg-[#e1ae08]"
                  style={{ width: `${maxRatingCount ? (row.count / maxRatingCount) * 100 : 0}%` }}
                />
              </div>
              <span className="w-5 shrink-0 text-right text-xs text-white/60">{row.count}</span>
            </div>
          ))}
        </div>
      </div>
 
      {/* Performance metrics */}
      <h2 className="mb-3 mt-4 text-lg font-medium tracking-[1px] text-[#fffefe] lg:text-xl">
        Performance Metrics
      </h2>
      <div className="rounded-[14px] border border-[#7e7e7e] bg-white/20">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`flex flex-col gap-2 px-5 py-4 lg:flex-row lg:items-center lg:justify-between ${
              i !== metrics.length - 1 ? "border-b border-white/10" : ""
            }`}
          >
            <div>
              <p className="text-sm font-medium tracking-[0.5px] text-white lg:text-base">{m.label}</p>
              <p className="text-xs text-white/60">{m.benchmark}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-ubuntu-mono text-sm text-white lg:text-base">{m.value}</span>
              <div className="h-[10px] w-[100px] overflow-hidden rounded-full bg-[#7e7e7e]">
                <div className="h-full rounded-full bg-[#3acf98]" style={{ width: `${m.percent}%` }} />
              </div>
              <span className="rounded-[8px] border border-[#3acf98] bg-[rgba(75,224,169,0.2)] px-2 py-0.5 text-[10px] text-[#3acf98]">
                ✓ Passed
              </span>
            </div>
          </div>
        ))}
      </div>
 
      {/* Customer feedback */}
      <h2 className="mb-3 mt-6 text-lg font-medium tracking-[1px] text-[#fffefe] lg:text-xl">
        Customer Feedback
      </h2>
      <div className="flex flex-col gap-3">
        {feedback.map((f) => (
          <div key={f.name + f.date} className="rounded-[14px] border border-[#7e7e7e] bg-white/20 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium tracking-[0.5px] text-white">{f.name}</span>
              <span className="text-xs text-white/60">{f.date}</span>
            </div>
            <div className="mt-1 flex items-center justify-between gap-3">
              <p className="text-sm italic text-white/80">"{f.quote}"</p>
              <Stars count={f.stars} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
 
export default Evaluation