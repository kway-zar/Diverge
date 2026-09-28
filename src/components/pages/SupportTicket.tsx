import FieldEngineers from "../tabs/FieldEngineers.tsx";
import Technicians from "../tabs/Technicians.tsx";
import { Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs'

function SupportTicket() {
    return(
        <div className="w-full min-w-0 pr-10 mb-10 ">
            <div className="flex flex-col items-start text-left">
                <h1 className="text-[36px] font-bold leading-none tracking-[0.05em] opacity-75 text-[#FFFFFF]">
                    Technicians and Field Engineers Management
                </h1>
                <p className="text-[24px] font-light italic leading-none tracking-[0.05em] text-[#FFFFFF] opacity-30 mt-1">
                    Wednesday, September 16, 2026 12:31 AM PHT
                </p>
            </div>
            <Tabs defaultValue="technicians" className="w-full mt-10 ">
                <TabsList className="shadow-glassy-jeri p-1 rounded-4xl w-[386px] h-[55px] rounded-full bg-transparent">
                    <TabsTrigger value="technicians" className="h-full flex-1 rounded-full border-0 text-[20px] font-regular text-[#FFFFFF] tracking-[0.05em ] cursor-pointer data-active:rounded-full data-active:p-3 border-0 data-active:bg-linear-to-b from-neutral-500 from-40% to-transparent data-active:shadow-glassy-jeri">TECHNICIANS</TabsTrigger>
                    <TabsTrigger value="field-engineers" className="h-full flex-1 rounded-full border-0 text-[20px] font-regular text-[#FFFFFF] tracking-[0.05em] cursor-pointer data-active:rounded-full data-active:p-3 border-0 data-active:bg-linear-to-b from-neutral-500 from-40% to-transparent data-active:shadow-glassy-jeri">FIELD ENGINEERS</TabsTrigger>
                </TabsList>
                <TabsContent value="technicians" className="flex flex-col left-0">
                    <Technicians/>
                </TabsContent>
                <TabsContent value="field-engineers">
                    <FieldEngineers/>
                </TabsContent> 
            </Tabs>
        </div>
    )
}

export default SupportTicket;