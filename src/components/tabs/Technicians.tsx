import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
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
                <Card className="h-[494px] bg-[#C4C4C4]/20 rounded-[15px] !border-0 !ring-0 shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black">
                    Helo
                </Card>
                <Card className="h-[494px] bg-[#C4C4C4]/20 rounded-[15px] !border-0 !ring-0 shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black">
                    Hi
                </Card>
            </div>
        </div>
    )
}

export default Technicians;