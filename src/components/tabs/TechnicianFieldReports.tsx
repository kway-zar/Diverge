import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
function TechnicianFieldReports() {
    // refactor latur
    // const ticket = [
    //     {
    //         ticketID: "TK-2312321",
    //         name: "Jonathan Landoy",
    //         time: "1h 40min",
    //         date: "Sep 21",
    //         parts: "(damaged parts and replacement)
    //     }
    // ]
    return(
        <div className="grid grid-row-2 gap-7 mt-10">
            <Card className="w-full h-[125px] px-2 bg-[#D9D9D9]/20 rounded-[20px] !border-0 !ring-0 shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black">
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                        <div className="flex gap-3 items-center justify-center">
                            <p className="text-[20px] font-medium text-[#3ACF98] opacity-75 leading-[100%] tracking-[0.05em]">
                                TK-231321
                            </p>
                            <h1 className="text-[24px] font-bold text-[#FFFFFF] font-ubuntu-mono opacity-80 tracking-[0.05em] leading-[100%]">
                                Jonathan Lanody
                            </h1>
                        </div>
                        <div className="flex gap-3 items-center justify-center">
                            <p className="text-[16px] font-regular text-[#FFFFFF]/60 tracking-[0.05em] leading-[100%]">
                                Sep 21
                            </p>
                            <span className="w-[100px] h-[30px] rounded-[10px] border-[1px] border-[#3ACF98] bg-[#4BE0A9]/20 flex items-center justify-center text-[13px] text-[#3ACF98] font-regular ">
                                Fully Resolved
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-[20px] font-ubuntu-mono font-regular text-[#FFFFFF] opacity-80">
                            (Problem and Solution description)
                        </h1>
                        <div className="flex gap-15">
                            <p className="text-[16px] font-regular font-ubuntu-mono text-[#FFFFFF] opacity-75">
                                Time on site: 1h 40min
                            </p>
                            <p className="text-[16px] font-regular font-ubuntu-mono text-[#FFFFFF] opacity-75">
                                Parts: (damaged parts and replacement)
                            </p>
                        </div>
                    </div>  
                </div>
            </Card>
            <Card className="w-full h-[125px] px-2 bg-[#D9D9D9]/20 rounded-[20px] !border-0 !ring-0 shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black">
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                        <div className="flex gap-3 items-center justify-center">
                            <p className="text-[20px] font-medium text-[#3ACF98] opacity-75 leading-[100%] tracking-[0.05em]">
                                TK-232323
                            </p>
                            <h1 className="text-[24px] font-bold text-[#FFFFFF] font-ubuntu-mono opacity-80 tracking-[0.05em] leading-[100%]">
                                Christian Devera
                            </h1>
                        </div>
                        <div className="flex gap-3 items-center justify-center">
                            <p className="text-[16px] font-regular text-[#FFFFFF]/60 tracking-[0.05em] leading-[100%]">
                                Nov 12
                            </p>
                            <span className="w-[100px] h-[30px] rounded-[10px] border-[1px] border-[#447DEF] bg-[#2264E7]/20 flex items-center justify-center text-[13px] text-[#3276FF] font-regular ">
                               In Progress
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-[20px] font-ubuntu-mono font-regular text-[#FFFFFF] opacity-80">
                            (Problem and Solution description)
                        </h1>
                        <div className="flex gap-15">
                            <p className="text-[16px] font-regular font-ubuntu-mono text-[#FFFFFF] opacity-75">
                                Time on site: 2 40min
                            </p>
                            <p className="text-[16px] font-regular font-ubuntu-mono text-[#FFFFFF] opacity-75">
                                Parts: (damaged parts and replacement)
                            </p>
                        </div>
                    </div>  
                </div>
            </Card>

        </div>
    )
}

export default TechnicianFieldReports;