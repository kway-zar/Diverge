import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'

function TechnicianOverview() {
    const overviews = [
        {
            value: "109",
            description: "JOBS COMPLETED",
            time: "All time"
        },
        {
            value: "10",
            description: "THIS MONTH",
            time: "Sep 2026"
        },
        {
            value: "1.5",
            description: "AVG RESOLUTION",
            time: "Per job"
        }
    ]

    return(
        <div className="flex gap-5 mt-5 mr-10">
            <div className="grid grid-cols-3 gap-20 w-full px-10">
                {overviews.map((overview, index) => (
                    <Card key={index} className="w-full h-[135px] bg-[#C4C4C4]/20 rounded-[15px] !border-0 !ring-0 shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black">
                        <CardContent className="flex flex-col items-center justify-center gap-4">
                            <h1 className="text-[40px] font-bold text-[#FFFFFF] tracking-[0.05em] leading-[100%]">
                                {overview.value}
                            </h1>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <p className="text-[15px] font-light opacity-75 tracking-[0.05em] leading-[100%]">
                                    {overview.description}
                                </p>
                                <p className="text-[15px] font-light opacity-75 tracking-[0.05em] leading-[100%]">
                                    {overview.time}
                                </p>
                            </div>

                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default TechnicianOverview;