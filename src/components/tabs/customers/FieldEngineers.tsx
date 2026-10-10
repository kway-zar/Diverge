import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import type { Engineer } from '../../types/engineer';
import { useDataRefresh } from '@/hooks/useDataRefresh';
import Roster from "./Roster.tsx";
import MapView from "./MapView.tsx";
import { Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs'

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001";

function FieldEngineers() {
    const [engineers, setEngineers] = useState<Engineer[]>([]);
    const [errorMessage, setErrorMessage] = useState("");

    async function loadEngineers() {
        const token = localStorage.getItem("diverge_token");
        if (!token) {
            setErrorMessage("Administrator sign-in is required to view field engineers.");
            return;
        }
        try {
            const response = await fetch(`${API_BASE_URL}/api/v1/admin/technicians`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const payload = await response.json();
            if (!response.ok) throw new Error(payload?.message ?? "Unable to load field engineers.");
            setEngineers(Array.isArray(payload?.data) ? payload.data : []);
            setErrorMessage("");
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : "Unable to load field engineers.");
        }
    }

    useDataRefresh(loadEngineers);
    useEffect(() => { void loadEngineers(); }, []);

    const statusTracking = [
        { label: 'Available', count: engineers.filter((engineer) => engineer.status === 'Available').length, textColor: 'text-[#3ACF98]' },
        { label: 'On-site', count: engineers.filter((engineer) => engineer.status === 'On-Site').length, textColor: 'text-[#3276FF]' },
        { label: 'Traveling', count: engineers.filter((engineer) => engineer.status === 'Traveling').length, textColor: 'text-[#E1AE08]' },
        { label: 'Off-Duty', count: engineers.filter((engineer) => engineer.status === 'Off-Duty').length, textColor: 'text-[#7C7C7C]' },
        { label: 'Unavailable', count: engineers.filter((engineer) => engineer.status === 'Unavailable').length, textColor: 'text-[#C20000]' },
    ];
    return(
        <div className="flex flex-col items-start text-left mt-5 gap-7 w-[97%]  ">
            {errorMessage && <p role="alert" className="text-sm text-red-300">{errorMessage}</p>}
            <div className="flex flex-col gap-1">
                <span className="font-ubuntu-mono text-[32px] font-regular text-[#FFFFFF] tracking-[0.05em] leading-[100%]">
                    Engineering Operations
                </span>
                <span className="font-ubuntu-mono text-[20px] font-regular text-[#FFFFFF] tracking-[0.05em] leading-[100%] opacity-50">
                    Evaluation, dispatch & map tracking
                </span>
            </div>
            <div className="grid grid-cols-5 gap-3 w-full px-10 max-sm:grid-cols-1 max-sm:gap-4 max-sm:px-2">
                {statusTracking.map((status, index) => (
                    <Card key={index} className="w-full h-[135px] bg-white/5 rounded-[15px] !border-0 !ring-0 shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black">
                        <CardContent className="flex flex-col gap-5 items-center justify-center">
                            <h1 className={`text-[48px] font-ubuntu font-bold tracking-[0.05em] leading-[100%] ${status.textColor}`}>
                                {status.count}
                            </h1>
                            <p className="text-[15px] font-light text-[#FFFFFF] opacity-70 tracking-[0.05em] leading-[100%]">
                                {status.label}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <Tabs defaultValue="roster" className="mt-5 w-full">
                <TabsList className="rounded-[10px] ml-15 shadow-glassy-jeri gap-3 h-auto p-1 bg-transparent">
                    <TabsTrigger value="roster" className="px-4 py-1 h-full flex-1 border-0 text-[16px] font-regular text-[#FFFFFF] tracking-[0.05em ] cursor-pointer data-active:rounded-[10px] border-0 data-active:bg-linear-to-b from-neutral-500 from-40% to-transparent data-active:shadow-glassy-jeri">Roster</TabsTrigger>
                    <TabsTrigger value="map-view" className="px-4 py-1 h-full flex-1 border-0 text-[16px] font-regular text-[#FFFFFF] tracking-[0.05em] cursor-pointer data-active:rounded-[10px] border-0 data-active:bg-linear-to-b from-neutral-500 from-40% to-transparent data-active:shadow-glassy-jeri">Map View</TabsTrigger>
                </TabsList>
                <TabsContent value="roster"  className="ml-5">
                    <Roster engineers={engineers} onUpdated={() => void loadEngineers()} />
                </TabsContent>
                <TabsContent value="map-view" className="ml-5">
                    <MapView/>
                </TabsContent> 
            </Tabs>
        </div>
    )
}

export default FieldEngineers;