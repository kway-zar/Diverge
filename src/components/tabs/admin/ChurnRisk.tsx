import  { Card, CardHeader, CardContent } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import  { Progress, ProgressIndicator} from "@/components/ui/progress"
import { Button } from '@/components/ui/button'

function ChurnRisk() {
    return(
        <TabsContent value="churnRisk" className="mr-5">
          <Card className="shadow-glassy-jeri ring-0 w-full bg-[rgba(75,75,75,0.1)] backdrop-contrast-60 gap-0">
            <CardHeader className="flex flex-row gap-4">
              <span className="flex flex-col">
                <h1>Vanna Hernandez</h1>
                <p className="text-xs">vanna@example</p>
              </span>
              <span className="text-emerald-500 flex flex-row gap-4 font-bold">
                <h1>00001</h1>
                <h1>Residential</h1>
              </span>
              <h1 className="font-thin">Diverge Netflix</h1>
            </CardHeader>
            <CardContent className="flex flex-row">
              <span className="flex flex-1 flex-col text-xs gap-2 bottom-0 mt-auto">
                <span className="flex flex-row gap-2">
                  <div className="shadow-glassy-jeri rounded-4xl p-2  bg-[#B00049]/20">30d balance overdue</div>
                  <div className="shadow-glassy-jeri rounded-4xl p-2  bg-[#B00049]/20">Repeated Speed Complaints</div>
                  <div className="shadow-glassy-jeri rounded-4xl p-2  bg-[#B00049]/20">5 tickets in a month</div>
                </span>
                <div className="flex flex-1 flex-row shadow-glassy-jeri text-emerald-500 rounded-2xl p-2 bg-emerald-400/20">
                  Recommendation: Speed check visits and payment extension.
                </div>
              </span>
              <span className="w-[10%] flex items-center flex-col my-auto">
                <h1 className="text-4xl font-semibold text-orange-700">78</h1>
                <h1 className="text-[0.6rem] opacity-30 mt-0 mb-1">/100</h1>
                <Progress value={78} className="w-[80%] h-1 bg-[rgb(80,80,80)] rounded-md">
                  <ProgressIndicator className="bg-orange-500 rounded-md" />
                </Progress>
                <Button className="bg-orange-500 rounded-md p-1 text-xs mt-2">
                  Reach Out
                </Button>
              </span>
            </CardContent>

          </Card>

          <div className="flex flex-row relative gap-4 mt-4">
            <Card className="shadow-glassy-jeri ring-0 w-full bg-[rgba(75,75,75,0.1)] backdrop-contrast-60 gap-0">
              <CardHeader>Churn Probability Distribution</CardHeader>
            </Card>
            <Card className="shadow-glassy-jeri ring-0 w-full bg-[rgba(75,75,75,0.1)] backdrop-contrast-60 gap-0">
              <CardHeader>
                <h1>Churn Probability Distribution</h1>
                <h1 className='text-xs font-thin'>Top Churn Drivers</h1>
                <CardContent className="flex flex-row">
                  <div className="flex-1 flex flex-col gap-2">


                  </div>
                  <div className="w-[60%] flex flex-col right-0 gap-2">
                    <span className="flex flex-row items-center place-content-between">
                      <Progress value={78} className="w-[80%] h-1 bg-[rgb(80,80,80)] rounded-md">
                        <ProgressIndicator className="bg-orange-500 rounded-md" />
                      </Progress>
                      <h1>7.8</h1>
                    </span>
                    <span className="flex flex-row items-center place-content-between">
                      <Progress value={78} className="w-[80%] h-1 bg-[rgb(80,80,80)] rounded-md">
                        <ProgressIndicator className="bg-orange-500 rounded-md" />
                      </Progress>
                      <h1>7.8</h1>
                    </span>
                    <span className="flex flex-row items-center place-content-between">
                      <Progress value={78} className="w-[80%] h-1 bg-[rgb(80,80,80)] rounded-md">
                        <ProgressIndicator className="bg-orange-500 rounded-md" />
                      </Progress>
                      <h1>7.8</h1>
                    </span>
                    <span className="flex flex-row items-center place-content-between">
                      <Progress value={78} className="w-[80%] h-1 bg-[rgb(80,80,80)] rounded-md">
                        <ProgressIndicator className="bg-orange-500 rounded-md" />
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