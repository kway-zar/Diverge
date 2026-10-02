import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import mapImage from "../../../assets/image 12.png"

function MapView() {
    const legendItems = [
        { name: 'Field Engineer 1', status: 'Available', color: 'bg-[#3ACF98]' },
        { name: 'Field Engineer 1', status: 'On-Site', color: 'bg-[#3276FF]' },
        { name: 'Field Engineer 1', status: 'Traveling', color: 'bg-[#E1AE08]' },
    ];
    return(
        <Card className="ml-8 mt-5 w-[97%] h-full bg-white/5 rounded-[15px] !border-0 !ring-0 shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black">
            <h1 className="text-[36px] font-regular text-[#FFFFFF] opacity-75 pl-4"> 
                Live Support Locations
            </h1>
            <div className="relative h-90 w-full overflow-hidden rounded-xl bg-[#12141d]">
                <img
                src={mapImage} 
                alt="Map Preview"
                className="h-full w-full object-cover opacity-80"
                />
            </div>
            <div className="flex gap-10 items-center mt-5 ml-12 mb-8">
                {legendItems.map((legend, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className={`w-[30px] h-[30px] rounded-full shadow-inset [shadow:inset_0_4px_4px_rgba(0,0,0,0.25)] ${legend.color}`}>
                        </div>
                        <div className="flex flex-col justify-center mt-3">
                            <h1 className="text-[16px] font-regular font-ubuntu-mono text-[#FFFFFF] tracking-[0.05em] leading-[100%]">
                                {legend.name}
                            </h1>
                            <p className="text-[15px] font-regular font-ubuntu-mono text-[#FFFFFF] tracking-[0.05em] leading-[100%] opacity-80">
                                {legend.status}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>

    )
}

export default MapView;