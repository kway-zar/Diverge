import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import type {Engineer, EngineerStatus} from "../types/engineer"
import {useState} from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs'
import TechnicianOverview from "./TechnicianOverview.tsx";
import TechnicianFieldReports from "./TechnicianFieldReports.tsx";
import TechnicianReviews from "./TechnicianReviews.tsx";

function Technicians() {
    const stats = [
        {
            title: "AVG TEAM RATING",
            value: "4.7",
            description: "Across S Engineers",
            valueColor: "#E1AE08"
        },
        {
            title: "REPORTS THIS MONTH",
            value: "67",
            description: "Field Submissions",
            valueColor: "#274F9E"
        },
        {
            title: "BELOW BENCHMARK",
            value: "3",
            description: "Punctuality",
            valueColor: "#DD0002"
        },
        {
            title: "TOP PERFORMER",
            value: "Tech 1",
            description: "5 star ratings in 20 jobs",
            valueColor: "#3ACF98"
        }
    ]
    const engineers: Engineer[] = [
        {
            id: "FE01",
            name: "Field Engineer 1",
            location: "MNL/RC",
            rating: "⭐ 4.9",
            status: "On-Site"
        },
        {
            id: "FE02",
            name: "Field Engineer 2",
            location: "MNL/BC",
            rating: "⭐ 4.7",
            status: "Traveling"
        },
        {
            id: "FE03",
            name: "Field Engineer 3",
            location: "MNL/AC",
            rating: "⭐ 4.8",
            status: "Available"
        },
        {
            id: "FE04",
            name: "Field Engineer 4",
            location: "MNL/AC",
            rating: "⭐ 4.8",
            status: "Available"
        },
        {
            id: "FE05",
            name: "Field Engineer 5",
            location: "MNL/AC",
            rating: "⭐ 4.8",
            status: "Available"
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
        }
    }

    const [selectedEngineerId, setSelectedEngineerId] = useState<string | null>(null);

    const handleEngineerClick = (engineerId: string) => {
        setSelectedEngineerId(engineerId);
    }
    
    const selectedEngineer = engineers.find(
        (engineer) => engineer.id === selectedEngineerId
    )

    return(
        <div className="flex flex-col items-start text-left mt-5 gap-7 w-[97%]">
            <div className="flex flex-col gap-1">
                <span className="font-ubuntu-mono text-[32px] font-regular text-[#FFFFFF] tracking-[0.05em] leading-[100%] opacity-70">
                    Technician Monitoring
                </span>
                <span className="font-ubuntu-mono text-[20px] font-regular text-[#FFFFFF] tracking-[0.05em] leading-[100%] opacity-50">
                    Ratings, fields reports & performance
                </span>
            </div>
            <div className="grid grid-cols-4 gap-20 w-full px-10">
                {stats.map((stat) => (
                    <Card key={stat.title} className="w-full h-[135px] bg-[#C4C4C4]/20 rounded-[15px] !border-0 !ring-0 shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black">
                        <CardContent className="flex flex-col gap-3">
                            <h2 className="text-[20px] font-light text-[#FFFFFF] tracking-[0.05em] leading-[100%]">
                                {stat.title}
                            </h2>
                            <h1 className="text-[40px] font-bold tracking-[0.05em] leading-[100%]"
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
                <Card className="h-[494px] bg-[#C4C4C4]/20 rounded-[15px] !border-0 !ring-0 shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black p-4">
                    <div className="mb-5">
                        <p className="text-[16px] font-bold text-[#FFFFFF] opacity-75 tracking-[0.05em] leading-[100%]">
                            Field Engineers
                        </p>
                    </div>

                    {engineers.map((engineer) => (
                        <div 
                        key={engineer.id}
                        onClick={() => handleEngineerClick(engineer.id)}
                        className={`cursor-pointer flex flex-row gap-5 transition-all duration-200 hover:bg-white/10 hover:scale-[1.02] rounded-full px-2 py-1 
                                    ${selectedEngineerId === engineer.id 
                                        ? "bg-[#3ACF98]/15 shadow-glassy-jeri"
                                        : ""
                                    }`}
                        >  
                            <div className="w-[56px] h-[51px] rounded-full bg-[#D9D9D9]">

                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="font-ubunto-mono text-[16px] text-[#FFFFFF] font-regular tracking-[0.05em] leading-[100%]">
                                    {engineer.name}
                                </h2>
                                <p className="font-ubuntu-mono text-[13px] text-[#FFFFFF] opacity-80 font-regular tracking-[0.05em] leading-[100%]">
                                    {engineer.location}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 pl-8">
                                <p className="text-[13px] font-semibold text-[#E1AE08] opacity-80 tracking-[0.05em] leading-[100%]">
                                    {engineer.rating}
                                </p>
                                <span 
                                className="w-[62px] h-[23px] rounded-[10px] border-[1px] flex items-center justify-center text-[11px] tracking-[0.05em] leading-[100%]"
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
                <Card className="h-full bg-[#C4C4C4]/20 rounded-[15px] !border-0 !ring-0 shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black p-4">
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
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-[40px] font-semibold text-[#E1AE08] opacity-80 tracking-[0.05em] leading-[100%]">
                                    {selectedEngineer.rating}
                                    </h1>
                                    <span className="text-[20px]">
                                        ⭐⭐⭐⭐⭐
                                    </span>
                                </div>
                            </div>
                            <Tabs defaultValue="overview" className="pl-15 mt-5 w-full">
                                <TabsList className="shadow-glassy-jeri p-2 gap-5  rounded-[10px] h-[55px] bg-transparent">
                                    <TabsTrigger value="overview" className="h-full flex-1 rounded-[10px] border-0 text-[20px] font-regular text-[#FFFFFF] tracking-[0.05em ] cursor-pointer data-active:rounded-full data-active:p-3 border-0 data-active:bg-linear-to-b from-neutral-500 from-40% to-transparent data-active:shadow-glassy-jeri">OVERVIEW</TabsTrigger>
                                    <TabsTrigger value="field-reports" className="h-full flex-1 rounded-[10px] border-0 text-[20px] font-regular text-[#FFFFFF] tracking-[0.05em] cursor-pointer data-active:rounded-full data-active:p-3 border-0 data-active:bg-linear-to-b from-neutral-500 from-40% to-transparent data-active:shadow-glassy-jeri">FIELD ENGINEERS</TabsTrigger>
                                    <TabsTrigger value="reviews" className="h-full flex-1 rounded-[10px] border- text-[20px] font-regular text-[#FFFFFF] tracking-[0.05em] cursor-pointer data-active:rounded-full data-active:p-3 border-0 data-active:bg-linear-to-b from-neutral-500 from-40% to-transparent data-active:shadow-glassy-jeri">FIELD ENGINEERS</TabsTrigger>
                                </TabsList>
                                <TabsContent value="overview" className="flex flex-col left-0">
                                <TechnicianOverview/>
                                </TabsContent>
                                <TabsContent value="field-reports">
                                    <TechnicianFieldReports/>
                                </TabsContent> 
                                <TabsContent value="reviews">
                                    <TechnicianReviews/>
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