import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import Roster from "./Roster.tsx";
import MapView from "./MapView.tsx";
import { Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs'

function FieldEngineers() {
    const statusTracking = [
        { label: 'Available', count: 1, textColor: 'text-[#3ACF98]' },
        { label: 'On-site', count: 2, textColor: 'text-[#3276FF]' },
        { label: 'Traveling', count: 1, textColor: 'text-[#E1AE08]' },
        { label: 'Off-Duty', count: 1, textColor: 'text-[#7C7C7C]' },
        { label: 'Unavailable', count: 1, textColor: 'text-[#C20000]' },
    ];
    return(
        <div className="flex flex-col items-start text-left mt-5 gap-7 w-[97%]  ">
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
                    <Roster/>
                </TabsContent>
                <TabsContent value="map-view" className="ml-5">
                    <MapView/>
                </TabsContent> 
            </Tabs>
        </div>
    )
}

export default FieldEngineers;