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
 
function Stars({ count, size = 20 }: { count: number; size?: number }) {
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
      <div className="mb-5">
        <h1 className="text-2xl font-bold tracking-wider text-white">My Evaluation</h1>
        <p className="font-mono text-xs italic text-white opacity-30 sm:text-sm">{today}</p>
      </div>
 
      {/* Overall rating */}
      <div className="flex flex-col gap-8 rounded-[20px] border border-[#7e7e7e] bg-white/20 p-8 lg:flex-row lg:items-center lg:p-12">
        <div className="flex shrink-0 flex-col items-center gap-1 lg:items-start">
          <span className="text-6xl font-medium text-[#fffefe] lg:text-[80px]">4.5</span>
          <Stars count={5} size={28} />
          <span className="text-sm uppercase tracking-[1.2px] text-white/60">overall rating</span>
        </div>
        <div className="flex-1 space-y-3">
          {ratingBreakdown.map((row) => (
            <div key={row.stars} className="flex items-center gap-3">
              <span className="w-10 shrink-0 font-ubuntu-mono text-sm text-white/85">{row.stars} ★</span>
              <div className="h-[15px] flex-1 overflow-hidden rounded-full bg-[#757575]">
                <div
                  className="h-full rounded-full bg-[#e1ae08]"
                  style={{ width: `${maxRatingCount ? (row.count / maxRatingCount) * 100 : 0}%` }}
                />
              </div>
              <span className="w-6 shrink-0 text-right text-sm text-white/60">{row.count}</span>
            </div>
          ))}
        </div>
      </div>
 
      {/* Performance metrics */}
      <h2 className="mb-4 mt-6 text-2xl font-medium tracking-[1.6px] text-[#fffefe] lg:text-[32px]">
        Performance Metrics
      </h2>
      <div className="rounded-[20px] border border-[#7e7e7e] bg-white/20">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`flex flex-col gap-3 px-8 py-6 lg:flex-row lg:items-center lg:justify-between ${
              i !== metrics.length - 1 ? "border-b border-white/10" : ""
            }`}
          >
            <div>
              <p className="text-lg font-medium tracking-[1.2px] text-white lg:text-2xl">{m.label}</p>
              <p className="text-sm text-white/60">{m.benchmark}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-ubuntu-mono text-lg text-white lg:text-2xl">{m.value}</span>
              <div className="h-[15px] w-[150px] overflow-hidden rounded-full bg-[#7e7e7e]">
                <div className="h-full rounded-full bg-[#3acf98]" style={{ width: `${m.percent}%` }} />
              </div>
              <span className="rounded-[10px] border border-[#3acf98] bg-[rgba(75,224,169,0.2)] px-3 py-1 text-xs text-[#3acf98]">
                ✓ Passed
              </span>
            </div>
          </div>
        ))}
      </div>
 
      {/* Customer feedback */}
      <h2 className="mb-4 mt-8 text-2xl font-medium tracking-[1.6px] text-[#fffefe] lg:text-[32px]">
        Customer Feedback
      </h2>
      <div className="flex flex-col gap-4">
        {feedback.map((f) => (
          <div key={f.name + f.date} className="rounded-[20px] border border-[#7e7e7e] bg-white/20 p-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium tracking-[1.2px] text-white">{f.name}</span>
              <span className="text-xs text-white/60">{f.date}</span>
            </div>
            <div className="mt-2 flex items-center justify-between gap-4">
              <p className="italic text-white/80">"{f.quote}"</p>
              <Stars count={f.stars} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
 
export default Evaluation