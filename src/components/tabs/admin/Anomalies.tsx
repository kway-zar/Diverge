import  { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { TabsContent } from "@/components/ui/tabs"


function Anomalies(){
    return(
        <TabsContent value="anomalies" className="mr-5 font-ubuntu-mono">
          <Card className="shadow-glassy-jeri ring-0 w-full bg-[rgba(75,75,75,0.1)] backdrop-contrast-60 gap-2">
            <CardHeader className="flex flex-row gap-4 tracking-widest">
              <span className="flex flex-col text-emerald-500">
                <h1>RZL-01</h1>
              </span>
              <h1 className="ring-1 ring-red-500 bg-red-500/20 p-1 text-xs text-red-500 rounded-md">CRITICAL</h1>
              <h1 className="font-thin">Packet Loss</h1>
            </CardHeader>
            <CardContent className="flex flex-row ">
              <span className="flex flex-1 flex-col text-xs gap-2 bottom-0 mt-auto">
                <span className="flex flex-row items-center gap-1">
                  <h1 className="opacity-40">Affected:</h1>
                  <h1 className="opacity-40 text-base">678 Subscriber</h1>
                </span>
                <span className="absolute top-5 right-5">
                  <h1 className="text-red-500 text-4xl">18.4%</h1>
                  <h1 className="opacity-40">{"Threshold: < 5%"}</h1>
                </span>
                <div className="flex flex-1 flex-row shadow-glassy-jeri text-emerald-500 rounded-2xl p-2 bg-emerald-400/20">
                  Recommendation: Speed check visits and payment extension.
                </div>
              </span>
            </CardContent>

          </Card>

          <h1 className="mt-2">Node Heatmap</h1>
          <Card className="shadow-glassy-jeri ring-0 w-full bg-[rgba(75,75,75,0.1)] backdrop-contrast-60 gap-2">
            <CardHeader>
              <span>
                Health scores (0-100) across simulated nodes.
                <Separator className="w-full bg-white/40" />
              </span>
            </CardHeader>

            <CardContent className="bg-[url('../src/assets/image_11.png')] bg-no-repeat bg-auto bg-center h-40">

            </CardContent>

            <CardFooter className="border-0 flex flex-row gap-2">
              <div className="bg-[#4BE0A9] w-2 h-2 rounded-full mr-2 "></div>
              <h1>{"Healthy (>90%)"}</h1>

              <div className="bg-orange-500 w-2 h-2 rounded-full mr-2 "></div>
              <h1>{"Degraded (70-90%)"}</h1>

              <div className="bg-orange-800 w-2 h-2 rounded-full mr-2 "></div>
              <h1>{"Warning (50-70%)"}</h1>

              <div className="bg-red-500 w-2 h-2 rounded-full mr-2 "></div>
              <h1>{"Critical (<50%)"}</h1>



            </CardFooter>
          </Card>
        </TabsContent>
    )
}
export default Anomalies