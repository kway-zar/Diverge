import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import type {Engineer} from "../types/engineer";

interface TechnicianOverviewProps{
    engineer: Engineer;
}

function TechnicianOverview({engineer} : TechnicianOverviewProps) {
    const overview = engineer.overview;

    const overviewCards = [
        {
            value: overview.jobsCompleted,
            description: "JOBS COMPLETED",
            time: "All time"
        },
        {
            value: overview.thisMonth,
            description: "THIS MONTH",
            time: "Sep 2026"
        },
        {
            value: overview.avgResolution,
            description: "AVG RESOLUTION",
            time: "Per job"
        }
    ];

    const metricsData = [
        { id: '1', label: 'Customer Satisfaction', benchmark: 80, score: 90 },
        { id: '2', label: 'Response Time', benchmark: 80, score: 90 },
        { id: '3', label: 'First Contact Resolution', benchmark: 90, score: 80 },
    ];

    return(
        <div className="flex flex-col gap-5 mt-5 mr-10">
            <div className="grid grid-cols-3 gap-20 w-full  ">
                {overviewCards.map((item) => (
                    <Card key={item.description} className="w-full h-[135px] bg-[#C4C4C4]/20 rounded-[15px] !border-0 !ring-0 shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black">
                        <CardContent className="flex flex-col items-center justify-center gap-4">
                            <h1 className="text-[40px] font-bold text-[#FFFFFF] tracking-[0.05em] leading-[100%]">
                                {item.value}
                            </h1>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <p className="text-[15px] font-light opacity-75 tracking-[0.05em] leading-[100%]">
                                    {item.description}
                                </p>
                                <p className="text-[15px] font-light opacity-75 tracking-[0.05em] leading-[100%]">
                                    {item.time}
                                </p>
                            </div>

                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="w-full rounded-xl p-6 font-ubuntu-mono">
                <h2 className="mb-6 text-[22px] text-[#FFFFFF] tracking-[0.05em] leading-[100%]">Performance vs Benchmarks</h2>
                <div className="space-y-6">
                    {metricsData.map((item) => {
                        const isPassed = item.score >= item.benchmark;
                        const statusColor = isPassed ? 'text-[#3ACF98]' : 'text-[#DD0002]';
                        const progressBg = isPassed ? 'bg-[#3ACF98]' : 'bg-[#920C0D]';
                        const badgeBg = isPassed
                            ? 'bg-[#4BE0A9]/20 text-[#3ACF98] border-[#3ACF98]'
                            : 'bg-[#FF0000]/25 text-[#DD0002] border-[#920C0D]';
                                return (
                                    <div key={item.id} className="space-y-1">
                                    <div className="flex items-center justify-between text-sm h-[15px]">
                                        <span className="text-[16px] font-regular text-[#FFFFFF] opacity-80 tracking-[0.05em] leading-[100%]">{item.label}</span>
                                        
                                        <div className="flex items-center gap-4">
                                        <span className="text-[15px] font-regular tracking-[0.05em] leading-[100%]">
                                            benchmark: {item.benchmark}%{' '}
                                            <span className={`font-semibold text-[15px] tracking-[0.05em] leading-[100%] ${statusColor}`}>{item.score}%</span>
                                        </span>

                                        <span
                                            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mb-2 ${badgeBg}`}
                                        >
                                            {isPassed ? '✓ Passed' : '✕ Below'}
                                        </span>
                                        </div>
                                    </div>
                                    <div className="relative h-2.5 w-full rounded-full bg-[#4a4a4a]">
                                        <div
                                        className={`h-full rounded-full transition-all duration-300 ${progressBg}`}
                                        style={{ width: `${item.score}%` }}
                                        />
                                        <div
                                        className="absolute top-0 h-full w-1 bg-white/70"
                                        style={{ left: `${item.benchmark}%` }}
                                        />
                                    </div>
                                </div>
                            );
                         })}
                </div>
            </div>
        </div>
    )
}

export default TechnicianOverview;