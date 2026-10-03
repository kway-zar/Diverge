import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { TabsContent } from "@/components/ui/tabs"
import type { Anomaly as AnomalyRecord } from "@/components/types/anomalies"

function getAnomalyColor(value: number) {
  const clampedValue = Math.min(Math.max(value, 0), 100)
  const hue = 120 - (clampedValue * 120) / 100

  return `hsl(${hue} 70% 45%)`
}

function Anomalies() {

  const anomalies: AnomalyRecord[] = [
    {
      locationCode: "RZL-01",
      status: "CRITICAL",
      problem: "Packet Loss",
      totalAffected: 678,
      recommendation: "Speed check visits and payment extension.",
      percentage: 18.4

    },
    {
      locationCode: "RZL-02",
      status: "LOW",
      problem: "Packet Loss",
      totalAffected: 678,
      recommendation: "Speed check visits and payment extension.",
      percentage: 18.4

    },

  ]

    function getStatusBadge(status: AnomalyRecord["status"]) {
      switch (status) {
        case "CRITICAL":
          return "ring-red-500 bg-red-500/20 text-red-500";
        case "MODERATE":
          return "bg-amber-500/10 text-amber-400 ring-amber-500/60";
        case "LOW":
          return "bg-emerald-500/10 text-emerald-400 ring-emerald-500/60";
      }
    }
  

  return (
    <TabsContent value="anomalies" className="mr-5 font-ubuntu-mono">
      {anomalies.map((item, index) => (
        <Card className="shadow-glassy-jeri ring-0 w-full bg-white/5 backdrop-contrast-60 gap-2 my-4" key={index}>
          <CardHeader className="flex flex-row gap-4 tracking-widest">
            <span className="flex flex-col text-emerald-500">
              <h1>{item.locationCode}</h1>
            </span>
            <h1 className={`ring-1  p-1 text-xs  rounded-md ${getStatusBadge(item.status)}`}>{item.status}</h1>
            <h1 className="font-thin">{item.problem}</h1>
          </CardHeader>
          <CardContent className="flex flex-row ">
            <span className="flex flex-1 flex-col text-xs gap-2 bottom-0 mt-auto">
              <span className="flex flex-row items-center gap-1">
                <h1 className="opacity-40">Affected:</h1>
                <h1 className="opacity-40 text-base">{item.totalAffected} Subscriber</h1>
              </span>
              <span className="absolute top-5 right-5">
                <h1
                  className="text-4xl"
                  style={{ color: getAnomalyColor(item.percentage) }}
                >
                  {item.percentage}%
                </h1>
                <h1 className="opacity-40">{"Threshold: < 5%"}</h1>
              </span>
              <div className="flex flex-1 flex-row shadow-glassy-jeri text-emerald-500 rounded-2xl p-2 bg-emerald-400/20">
                Recommendation: {item.recommendation}
              </div>
            </span>
          </CardContent>

        </Card>

      ))}
      <h1 className="mt-2">Node Heatmap</h1>
      <Card className="shadow-glassy-jeri ring-0 w-full bg-white/5 backdrop-contrast-60 gap-2">
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
