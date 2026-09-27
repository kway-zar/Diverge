import { Bell } from "lucide-react"
import logo from "@/assets/logo.png"
import {
  AreaChart,
  Area,
  XAxis,
  ResponsiveContainer,
} from "recharts"
 
const navItems = [
  "Dashboard",
  "Customers",
  "Billing",
  "Tickets",
  "Analytics",
  "Plan Management",
  "Support",
]
 
const statCards = [
  { label: "Map Tracking Latency", value: "100ms", delta: "+3% vs last week", positive: true },
  { label: "Responsive Design", value: "250ms", delta: "-10% vs last week", positive: false },
  { label: "Scability", value: "96%", delta: "+6% vs last week", positive: true },
  { label: "Weekly Revenue", value: "₱305,000", delta: "-15% vs last week", positive: false },
]
 
const trafficData = [
  { day: "Aug 12", value: 40 },
  { day: "", value: 55 },
  { day: "19", value: 35 },
  { day: "", value: 60 },
  { day: "26", value: 50 },
  { day: "", value: 70 },
  { day: "Sep 2", value: 45 },
  { day: "", value: 80 },
  { day: "", value: 65 },
]
 
function DashboardPage() {
  return (
    <div className="flex h-screen w-screen bg-[#121212] text-white">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col justify-between border-r border-white/10 bg-white/5 p-6 backdrop-blur-md">
        <div>
          <div className="mb-10 flex items-center gap-2">
            <img src={logo} alt="Diverge logo" className="h-20 w-auto" />
            <div>
              <p className="text-lg font-semibold leading-none">Diverge</p>
              <p className="text-xs text-neutral-400">Admin</p>
            </div>
          </div>
 
          <nav className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`block rounded-lg px-4 py-2 text-sm transition-colors ${
                  item === "Dashboard"
                    ? "bg-white/10 text-white"
                    : "text-neutral-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
 
        <div className="flex items-center gap-3 border-t border-white/10 pt-4">
          <div className="h-8 w-8 rounded-full bg-neutral-600" />
          <div className="flex flex-col">
            <span className="text-sm">User Admin</span>
            <a href="#" className="text-xs text-neutral-400 hover:text-white">
              Sign Out →
            </a>
          </div>
        </div>
      </aside>
 
      {/* Main  */}
      <main className="flex-1 overflow-y-auto p-8">
        {/* Top bar */}
        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm text-neutral-400">-Dashboard</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              80% Uptime
            </span>
            <Bell size={18} className="text-pink-500" />
          </div>
        </div>
 
        <h1 className="text-2xl font-bold">Operations Dashboard</h1>
        <p className="mt-1 text-sm text-neutral-400">
          {new Date().toLocaleDateString(undefined, {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
 
        {/* Stat cards */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/20 bg-[#121212] p-4 shadow-lg backdrop-blur-md"
            >
              <p className="text-xs text-neutral-400">{stat.label}</p>
              <p className="mt-2 text-2xl font-bold">{stat.value}</p>
              <p
                className={`mt-1 text-xs ${
                  stat.positive ? "text-emerald-400" : "text-pink-500"
                }`}
              >
                {stat.delta}
              </p>
            </div>
          ))}
        </div>
 
        {/* Network traffic chart */}
        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
          <p className="mb-2 text-sm font-medium text-neutral-300">Network Traffic</p>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={trafficData}>
              <defs>
                <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#B00049" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#3ACF98" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#a3a3a3", fontSize: 12 }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#B00049"
                fill="url(#trafficGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
 
        {/* Risk / prediction cards */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            <p className="text-xs text-neutral-400">Network Risks</p>
            <p className="mt-2 text-2xl font-bold">Node PS = 34</p>
            <p className="mt-1 text-sm font-medium text-pink-500">High Risk</p>
            <p className="text-xs text-pink-500/80">84% Congestion</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            <p className="text-xs text-neutral-400">ML Predictions</p>
            <p className="mt-2 text-2xl font-bold">Churn Risk = 327</p>
            <p className="mt-1 text-sm font-medium text-pink-500">High Risk</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            <p className="text-xs text-neutral-400">Model Accuracy</p>
            <p className="mt-2 text-2xl font-bold">91.4%</p>
            <p className="mt-1 text-sm font-medium text-emerald-400">Accuracy</p>
            <p className="text-xs text-emerald-400/80">Churn Prediction</p>
          </div>
        </div>
      </main>
    </div>
  )
}
 
export default DashboardPage