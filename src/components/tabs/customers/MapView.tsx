import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Engineer } from "../../types/engineer";
import { useDataRefresh } from "@/hooks/useDataRefresh";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001";

function MapView() {
  const [engineers, setEngineers] = useState<Engineer[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  async function loadEngineers() {
      const token = localStorage.getItem("diverge_token");
      if (!token) {
        setErrorMessage("Administrator sign-in is required to view field assignments.");
        return;
      }
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/admin/technicians`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const payload = await response.json();
        if (!response.ok) throw new Error(payload?.message ?? "Unable to load field assignments.");
        setEngineers(Array.isArray(payload?.data) ? payload.data : []);
        setErrorMessage("");
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : "Unable to load field assignments.");
      }
  }

  useDataRefresh(loadEngineers);
  useEffect(() => { void loadEngineers(); }, []);

  return (
    <Card className="ml-8 mt-5 w-[97%] gap-4 rounded-lg bg-white/5 p-5 text-white shadow-glassy-jeri ring-0 max-sm:ml-0 max-sm:w-full">
      <div>
        <h2 className="text-xl font-medium">Field assignments by district</h2>
        <p className="mt-1 text-sm text-white/55">GPS markers are unavailable until coordinate collection is configured.</p>
      </div>
      {errorMessage && <p role="alert" className="text-sm text-red-300">{errorMessage}</p>}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {engineers.map((engineer) => (
          <article key={engineer.id} className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="min-w-0">
              <h3 className="truncate font-medium">{engineer.name}</h3>
              <p className="mt-1 flex items-center gap-2 text-sm text-white/60"><MapPin size={14} />{engineer.location}</p>
              <p className="mt-1 text-xs text-white/45">Current job: {engineer.currentJob}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-sm text-emerald-300">{engineer.status}</p>
              <p className="mt-1 text-xs text-white/45">Queue {engineer.queue}</p>
            </div>
          </article>
        ))}
        {!engineers.length && !errorMessage && <p className="py-8 text-center text-white/50">No technician records found.</p>}
      </div>
    </Card>
  );
}

export default MapView;
