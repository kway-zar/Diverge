import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { Progress, ProgressIndicator } from "@/components/ui/progress"
import { Button } from '@/components/ui/button'
import type { ChurnInfo } from "@/components/types/churn"

function getChurnColor(value: number) {
  const clampedValue = Math.min(Math.max(value, 0), 100)
  const hue = 120 - (clampedValue * 120) / 100

  return `hsl(${hue} 70% 45%)`
}

function ChurnRisk() {

  const churnRisks: ChurnInfo[] = [

    {
      accountName: "Vanna Hernandez",
      accountID: "00001",
      email: "vanna@example",
      type: "Residential",
      plan: "Diverge Netflix",
      reports: ["30d balance overdue", "Repeated Speed Complaints", "5 tickets in a month"],
      recommendation: "Recommendation: Speed check visits and payment extension.",
      churnPercentage: 78,

    },
    {
      accountName: "Guil Ramos",
      accountID: "00002",
      email: "gramos@example",
      type: "Business",
      plan: "Diverge Netflix",
      reports: ["30d balance overdue", "Repeated Speed Complaints", "5 tickets in a month"],
      recommendation: "Recommendation: Speed check visits and payment extension.",
      churnPercentage: 100,

    }


  ]

  return (
    <TabsContent value="churnRisk" className="mr-5">

      {
        churnRisks.map((item: ChurnInfo, index: number) => (
          <Card className="shadow-glassy-jeri ring-0 w-full bg-white/5 backdrop-contrast-60 gap-0 my-2" key={index}>
            <CardHeader className="flex flex-row gap-4">
              <span className="flex flex-col">
                <h1>{item.accountName}</h1>
                <p className="text-xs">{item.email}</p>
              </span>
              <span className="text-emerald-500 flex flex-row gap-4 font-bold">
                <h1>{item.accountID}</h1>
                <h1>{item.type}</h1>
              </span>
              <h1 className="font-thin">{item.plan}</h1>
            </CardHeader>
            <CardContent className="flex flex-row">
              <span className="flex flex-1 flex-col text-xs gap-2 bottom-0 mt-auto">
                <span className="flex flex-row gap-2">
                  {
                    item.reports.map((report: string, index: number) => (
                      <div className="shadow-glassy-jeri rounded-4xl p-2  bg-[#B00049]/20" key={index}>{report}</div>

                    ))}
                </span>
                <div className="flex flex-1 flex-row shadow-glassy-jeri text-emerald-500 rounded-2xl p-2 bg-emerald-400/20">
                  {item.recommendation}
                </div>
              </span>
              <span className="w-[10%] flex items-center flex-col my-auto">
                <h1
                  className="text-4xl font-semibold"
                  style={{ color: getChurnColor(item.churnPercentage) }}
                >
                  {item.churnPercentage}
                </h1>
                <h1 className="text-[0.6rem] opacity-30 mt-0 mb-1">/100</h1>
                <Progress value={item.churnPercentage} className="w-[80%] h-1 bg-[rgb(80,80,80)] rounded-md">
                  <ProgressIndicator
                    className="rounded-md"
                    style={{ backgroundColor: getChurnColor(item.churnPercentage) }}
                  />
                </Progress>
                <Button
                  className="rounded-md p-1 text-xs mt-2"
                  style={{ backgroundColor: getChurnColor(item.churnPercentage) }}
                >
                  Reach Out
                </Button>
              </span>
            </CardContent>

          </Card>




        ))

      }
      <div className="flex flex-row relative gap-4 mt-4">
        <Card className="shadow-glassy-jeri ring-0 w-full bg-white/5 backdrop-contrast-60 gap-0">
          <CardHeader>Churn Probability Distribution</CardHeader>
        </Card>
        <Card className="shadow-glassy-jeri ring-0 w-full bg-white/5 backdrop-contrast-60 gap-0">
          <CardHeader>
            <h1>Churn Probability Distribution</h1>
            <h1 className='text-xs font-thin'>Top Churn Drivers</h1>
            <CardContent className="flex flex-row">
              <div className="flex-1 flex flex-col gap-2">


              </div>
              <div className="w-[60%] flex flex-col right-0 gap-2">

                {/* TODO: add logic to average out the churnInfos */}
                <span className="flex flex-row items-center place-content-between">
                  <Progress value={78} className="w-[80%] h-1 bg-[rgb(80,80,80)] rounded-md">
                    <ProgressIndicator
                      className="rounded-md"
                      style={{ backgroundColor: getChurnColor(78) }}
                    />
                  </Progress>
                  <h1>7.8</h1>
                </span>
                <span className="flex flex-row items-center place-content-between">
                  <Progress value={78} className="w-[80%] h-1 bg-[rgb(80,80,80)] rounded-md">
                    <ProgressIndicator
                      className="rounded-md"
                      style={{ backgroundColor: getChurnColor(78) }}
                    />
                  </Progress>
                  <h1>7.8</h1>
                </span>
                <span className="flex flex-row items-center place-content-between">
                  <Progress value={78} className="w-[80%] h-1 bg-[rgb(80,80,80)] rounded-md">
                    <ProgressIndicator
                      className="rounded-md"
                      style={{ backgroundColor: getChurnColor(78) }}
                    />
                  </Progress>
                  <h1>7.8</h1>
                </span>
                <span className="flex flex-row items-center place-content-between">
                  <Progress value={78} className="w-[80%] h-1 bg-[rgb(80,80,80)] rounded-md">
                    <ProgressIndicator
                      className="rounded-md"
                      style={{ backgroundColor: getChurnColor(78) }}
                    />
                  </Progress>
                  <h1>7.8</h1>
                </span>

              </div>
            </CardContent>
          </CardHeader>
        </Card>

      </div>

    </TabsContent>

  )
}
export default ChurnRisk
