import { Card, CardContent} from '@/components/ui/card'
import type {EngineerStatus} from "../../types/engineer.ts"
import {useEffect, useState} from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs'
import TechnicianOverview from "./TechnicianOverview.tsx";
import TechnicianFieldReports from "./TechnicianFieldReports.tsx";
import TechnicianReviews from "./TechnicianReviews.tsx";
import type { Engineer } from "../../types/engineer";
import { useDataRefresh } from "@/hooks/useDataRefresh";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001";

function Technicians() {
    const [engineers, setEngineers] = useState<Engineer[]>([]);
    const [selectedEngineerId, setSelectedEngineerId] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState("");

    async function loadEngineers() {
        const token = localStorage.getItem("diverge_token");
        if (!token) {
            setErrorMessage("Administrator sign-in is required to view technician records.");
            return;
        }
        try {
            const response = await fetch(`${API_BASE_URL}/api/v1/admin/technicians`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const payload = await response.json();
            if (!response.ok) throw new Error(payload?.message ?? "Unable to load technician records.");
            const nextEngineers: Engineer[] = Array.isArray(payload?.data) ? payload.data : [];
            setEngineers(nextEngineers);
            setSelectedEngineerId((current) => nextEngineers.some((engineer) => engineer.id === current) ? current : nextEngineers[0]?.id ?? null);
            setErrorMessage("");
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : "Unable to load technician records.");
        }
    }

    useDataRefresh(loadEngineers);
    useEffect(() => { void loadEngineers(); }, []);

    const avgTeamRating = engineers.length
        ? engineers.reduce((sum, engineer) => sum + engineer.rating, 0) / engineers.length
        : 0;

    const reportsThisMonth = engineers.reduce(
        (total, engineer) => total + engineer.fieldReports.length,
        0
    );

    const belowBenchmark = engineers.reduce(
        (total, engineer) =>
            total +
            engineer.metrics.filter(
                (metric) => metric.score < metric.benchmark
            ).length,
        0
    );

    const topPerformer = engineers.reduce<Engineer | null>(
        (top, engineer) => !top || engineer.rating > top.rating ? engineer : top,
        null,
    );

    const stats = [
        {
            title: "AVG TEAM RATING",
            value: avgTeamRating.toFixed(1),
            description: `Across ${engineers.length} technicians`,
            valueColor: "#E1AE08"
        },
        {
            title: "REPORTS THIS MONTH",
            value: reportsThisMonth,
            description: "Field Submissions",
            valueColor: "#274F9E"
        },
        {
            title: "BELOW BENCHMARK",
            value: belowBenchmark,
            description: "Punctuality",
            valueColor: "#DD0002"
        },
        {
            title: "TOP PERFORMER",
            value: topPerformer?.name ?? "-",
            description: "Highest current rating",
            valueColor: "#3ACF98",

        }
    ]
    const statusStyles: Record<EngineerStatus, {
        text: string;
        border: string;
        background: string;
    }> = {
        "On-Site": {
            text: "#3276FF",
            border: "#3276FF",
            background: "#2264E766"
        },
        "Traveling": {
            text: "#E18E08",
            border: "#E14508",
            background: "#E145084D"
        },
        "Available": {
            text: "#3ACF98",
            border: "#3ACF98",
            background: "#4BE0A933"
        },
        "Off-Duty": {
            text: "#888888",
            border: "#888888",
            background: "#88888833",
        },

        "Unavailable": {
            text: "#E14545",
            border: "#E14545",
            background: "#E1454533",
        },
    }
    

    const handleEngineerClick = (engineerId: string) => {
        setSelectedEngineerId(engineerId);
    }
    
    const selectedEngineer = engineers.find(
        (engineer) => engineer.id === selectedEngineerId
    )

    

    return(
        <div className="flex flex-col items-start text-left mt-5 gap-7 w-[97%]">
            {errorMessage && <p role="alert" className="text-sm text-red-300">{errorMessage}</p>}
            <div className="flex flex-col gap-1">
                <span className="font-ubuntu-mono text-[32px] font-regular text-[#FFFFFF] tracking-[0.05em] leading-[100%]">
                    Technician Monitoring
                </span>
                <span className="font-ubuntu-mono text-[20px] font-regular text-[#FFFFFF] tracking-[0.05em] leading-[100%] opacity-50">
                    Ratings, fields reports & performance
                </span>
            </div>
            <div className="grid grid-cols-4 gap-20 w-full px-10 max-sm:grid-cols-1 max-sm:gap-4 max-sm:px-2">
                {stats.map((stat) => (
                    <Card key={stat.title} className="w-full h-[135px] bg-white/5 rounded-[15px] !border-0 !ring-0 shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black">
                        <CardContent className="flex flex-col gap-3">
                            <h2 className="text-[20px] font-light text-[#FFFFFF] tracking-[0.05em] leading-[100%]">
                                {stat.title}
                            </h2>
                            <h1 className="text-[36px] font-bold tracking-[0.05em] leading-[100%]"
                                style={{color: stat.valueColor}}
                            >
                                {stat.value}
                            </h1>
                            <span className="text-[15px] font-light text-[#FFFFFF] tracking-[0.05em] leading-[100%] opacity-70">
                                {stat.description}
                            </span>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="grid grid-cols-[1fr_3fr] gap-7 w-full px-10">
                <Card className="h-[494px] bg-white/5 rounded-[15px] !border-0 !ring-0 shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black p-4">
                    <div className="mb-5">
                        <p className="text-[16px] font-bold text-[#FFFFFF] opacity-75 tracking-[0.05em] leading-[100%]">
                            Field Engineers
                        </p>
                    </div>

                    {engineers.map((engineer) => (
                        <div 
                        key={engineer.id}
                        onClick={() => handleEngineerClick(engineer.id)}
                        className={`cursor-pointer flex flex-row gap-5 items-center transition-all duration-200 hover:bg-white/10 hover:scale-[1.02] rounded-full px-2 py-1 
                                    ${selectedEngineerId === engineer.id 
                                        ? "bg-[#3ACF98]/15 shadow-glassy-jeri"
                                        : ""
                                    }`}
                        >  
                            <div className="w-[56px] h-[51px] rounded-full bg-[#D9D9D9]">

                            </div>
                            <div className="flex-1 min-w-0 flex flex-col gap-3">
                                <h2 className="font-ubunto-mono text-[16px] text-[#FFFFFF] font-regular tracking-[0.05em] leading-[100%]">
                                    {engineer.name}
                                </h2>
                                <p className="font-ubuntu-mono text-[13px] text-[#FFFFFF] opacity-80 font-regular tracking-[0.05em] leading-[100%]">
                                    {engineer.location}
                                </p>
                            </div>
                            <div className="w-[100px] shrink-0 flex flex-col gap-2 items-center justify-center">
                                <p className="text-[13px] font-semibold text-[#E1AE08] opacity-80 tracking-[0.05em] leading-[100%]">
                                    {engineer.rating}
                                </p>
                                <span 
                                className="w-[70px] h-[23px] rounded-[10px] border-[1px] flex items-center justify-center text-[11px] tracking-[0.05em] leading-[100%]"
                                style={{
                                    color: statusStyles[engineer.status].text,
                                    borderColor: statusStyles[engineer.status].border,
                                    backgroundColor: statusStyles[engineer.status].background,
                                }}
                                >
                                    {engineer.status}
                                </span>

                            </div>

                        </div>

                    ))}
                </Card>
                <Card className="h-full bg-white/5 rounded-[15px] !border-0 !ring-0 shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black p-4">
                    {selectedEngineer ? (
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <div className="w-[80px] h-[80px] bg-[#D9D9D9] rounded-full">
                                    </div>
                                    <div className="flex flex-col gap-3 mt-1">
                                        <h1 className="text-[32px] text-[#FFFFFF] font-regular font-ubuntu-mono tracking-[0.05em] leading-[100%]">
                                            {selectedEngineer.name}
                                        </h1>
                                        <div className="flex gap-10">
                                            <h1 className="text-[25px] font-ubuntu-mono font-medium tracking-[0.05em] leading-[100%] opacity-75 text-[#3ACF98]">
                                                {selectedEngineer.id}
                                            </h1>
                                            <h1 className="text-[25px] font-regular font-ubuntu-mono text-[#FFFFFF] opacity-80 tracking-[0.05em] leading-[100%]"> 
                                                {selectedEngineer.location}
                                            </h1>
                                            <span 
                                                className="w-[84px] h-[26px] rounded-[10px] border-[1px] flex items-center justify-center text-[11px] tracking-[0.05em] leading-[100%]"
                                                style={{
                                                color: statusStyles[selectedEngineer.status].text,
                                                borderColor: statusStyles[selectedEngineer.status].border,
                                                backgroundColor: statusStyles[selectedEngineer.status].background,
                                            }}
                                            >
                                        {selectedEngineer.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className="text-[40px] font-semibold text-[#E1AE08] opacity-80 tracking-[0.05em] leading-[100%]">
                                    {selectedEngineer.rating}
                                    </h1>
                                    <span className="text-[30px] text-yellow-400">
                                        {"★".repeat(Math.round(selectedEngineer.rating))}
                                    </span>
                                </div>
                            </div>
                            <Tabs defaultValue="overview" className="mt-5">
                                <TabsList className="ml-15 w-100 h-auto bg-transparent">
                                    <TabsTrigger value="overview">Overview</TabsTrigger>
                                    <TabsTrigger value="field-reports">Field Reports</TabsTrigger>
                                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                                </TabsList>
                                <TabsContent value="overview"   className="ml-5">
                                <TechnicianOverview engineer={selectedEngineer}/>
                                </TabsContent>
                                <TabsContent value="field-reports" className="ml-5">
                                    <TechnicianFieldReports engineer={selectedEngineer}/>
                                </TabsContent> 
                                <TabsContent value="reviews" className="ml-5">
                                    <TechnicianReviews engineer={selectedEngineer}/>
                                </TabsContent> 
                            </Tabs>
                        </div>
                    ) : (
                        "Asan ba tong ininyerong ito"
                    )}
                </Card>
                
            </div>
            
        </div>
    )
}

export default Technicians;
