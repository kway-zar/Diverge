import { useState } from "react"
import { MapContainer, TileLayer, Marker } from "react-leaflet"
import { divIcon } from "leaflet"
import "leaflet/dist/leaflet.css"

interface MapJob {
  ticketID: string
  customer: string
  address: string
  priority: "High" | "Critical"
  lat: number
  lng: number
}
 
const jobs: MapJob[] = [
  { ticketID: "TK - 231231", customer: "Vanna Hernandez", address: "Blk 0 Lot 00 St, Brngy, Rizal", priority: "High", lat: 14.6091, lng: 121.0223 },
  { ticketID: "TK - 231232", customer: "Jojo Landoy", address: "Blk 0 Lot 00 St, Brngy, Rizal", priority: "High", lat: 14.6255, lng: 121.0445 },
  { ticketID: "TK - 231233", customer: "Jojo Corp.", address: "Blk 0 Lot 00 St, Brngy, Rizal", priority: "Critical", lat: 14.6142, lng: 121.0350 },
]
 
const technicianPosition: [number, number] = [14.6180, 121.0300]
 
function pinIcon(color: string) {
  return divIcon({
    className: "",
    html: `<div style="width:22px;height:22px;background:${color};border:2px solid white;border-radius:9999px;box-shadow:0 2px 6px rgba(0,0,0,0.5)"></div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  })
}
 
const priorityStyles: Record<MapJob["priority"], string> = {
  High: "border-[#ff006a] bg-[rgba(255,0,106,0.2)] text-[#ff006a]",
  Critical: "border-[#dd0002] bg-[rgba(221,0,2,0.2)] text-[#dd0002]",
}
 
function Maps() {
  const [selected, setSelected] = useState<MapJob>(jobs[0])
 
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
        <h1 className="text-2xl font-bold tracking-wider text-white">Map & Navigation</h1>
        <p className="font-mono text-xs italic text-white opacity-30 sm:text-sm">{today}</p>
      </div>
 
      <div className="overflow-hidden rounded-[15px] border border-[#7e7e7e] bg-white/20">
        <div className="relative h-[500px] w-full">
          <span className="absolute left-4 top-4 z-[1000] rounded-[41px] border border-[#7e7e7e] bg-[#393939] px-4 py-1 font-ubuntu-mono text-sm tracking-[1px] text-white">
            NCR - Manila/Quezon City
          </span>
 
          <MapContainer
            center={technicianPosition}
            zoom={13}
            className="size-full"
            scrollWheelZoom={false}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution="&copy; OpenStreetMap contributors &copy; CARTO"
            />
 
            <Marker position={technicianPosition} icon={pinIcon("#3acf98")} />
 
            {jobs.map((job) => (
              <Marker
                key={job.ticketID}
                position={[job.lat, job.lng]}
                icon={pinIcon(job.priority === "Critical" ? "#dd0002" : "#ff006a")}
                eventHandlers={{ click: () => setSelected(job) }}
              />
            ))}
          </MapContainer>
        </div>
 
        {/* Selected job detail bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 bg-[#3a3a3a] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-1 flex items-center gap-3">
              <span className="font-ubuntu-mono text-sm tracking-[1px] text-[#3acf98]">{selected.ticketID}</span>
              <span className={`rounded-[41px] border px-3 py-0.5 text-xs tracking-[0.5px] ${priorityStyles[selected.priority]}`}>
                {selected.priority}
              </span>
            </div>
            <h3 className="text-xl font-medium tracking-[1px] text-[#fffefe]">{selected.customer}</h3>
            <p className="font-ubuntu-mono text-sm tracking-[0.5px] text-white/70">{selected.address}</p>
          </div>
 
          <div className="flex gap-4">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${selected.lat},${selected.lng}`}
              target="_blank"
              rel="noreferrer"
              className="flex h-[52px] items-center justify-center rounded-[10px] border border-[#197af9] bg-[rgba(25,122,249,0.4)] px-6 font-ubuntu-mono text-sm tracking-[1px] text-white"
            >
              OPEN IN MAPS
            </a>
            <button
              type="button"
              className="flex h-[52px] items-center justify-center rounded-[10px] border border-[#7e7e7e] bg-white/20 px-6 font-ubuntu-mono text-sm tracking-[1px] text-white/85"
            >
              VIEW DETAILS
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Maps