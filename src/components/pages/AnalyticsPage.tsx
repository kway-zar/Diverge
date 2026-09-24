import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Progress, ProgressValue} from '@/components/ui/progress'
import { ProgressIndicator } from '@/components/ui/progress'

function AnalyticsPage() {
  return (
    <div className="text-left w-full">
      <div className="flex flex-row place-content-between">
        <span>
          <h1 className="text-2xl">Machine Learning Analytics</h1>
          <h2 className="text-md  font-thin"><i>Wednesday, September 16, 2026 12:31AM PHT</i></h2>
        </span>
        <Button className='w-40 bg-emerald-900 mr-5 shadow-glassy-jeri cursor-pointer'>Generate Invoice</Button>
      </div>
      <div className="w-[70vw] mx-auto mt-5 flex flex-row place-content-center gap-10">
        <Card className="w-[10vw] flex-1 p-2 ring-0 shadow-glassy-jeri [--glassy-color:79_79_79] inset-shadow-sm inset-ring-black bg-linear-[0deg,#1C1A1A_10%,#080808_90%]">
          <CardHeader className="mt-0 font-thin text-xs">CHURN RISK FLAGS</CardHeader>
          <CardContent className="text-2xl text-red-900 font-bold">
            <p>4</p>
          </CardContent>
          <CardFooter className="text-xs border-0 px-4 pt-0">
            <p>{"=> 40% risk score"}</p>
          </CardFooter>

        </Card>
        <Card className="w-[10vw] flex-1 p-2 ring-0 shadow-glassy-jeri [--glassy-color:79_79_79] inset-shadow-sm inset-ring-black bg-linear-[0deg,#1C1A1A_10%,#080808_90%]">
          <CardHeader className="mt-0 font-thin text-xs ">NETWORK ANOMALIES</CardHeader>
          <CardContent className="text-2xl text-amber-500 font-bold">
            <p>4</p>
          </CardContent>
          <CardFooter className="text-xs border-0 px-4 pt-0">
            <p>accross 4 nodes</p>
          </CardFooter>

        </Card>
        <Card className="w-[10vw] flex-1 p-2 ring-0 shadow-glassy-jeri [--glassy-color:79_79_79] inset-shadow-sm inset-ring-black bg-linear-[0deg,#1C1A1A_10%,#080808_90%]">
          <CardHeader className="mt-0 font-thin text-xs ">UPGRADE OPPORTUNITIES</CardHeader>
          <CardContent className="text-2xl text-emerald-600 font-bold">
            <p>4</p>
          </CardContent>
          <CardFooter className="text-xs border-0 px-4 pt-0">
            <p>high confidence level</p>
          </CardFooter>

        </Card>
        <Card className="w-[10vw] mr-5 flex-1 p-2 ring-0 shadow-glassy-jeri [--glassy-color:79_79_79] inset-shadow-sm inset-ring-black bg-linear-[0deg,#1C1A1A_10%,#080808_90%]">
          <CardHeader className="mt-0 font-thin text-xs ">FORECAST</CardHeader>
          <CardContent className="text-2xl font-bold text-blue-950">
            <p>4 months</p>
          </CardContent>
          <CardFooter className="text-xs border-0 px-4 pt-0">
            <p>{"June 2026 - September 2026"}</p>
          </CardFooter>

        </Card>

      </div>
      <Tabs defaultValue="churnRisk" className="w-full mt-10">
        <TabsList className="shadow-glassy-jeri p-1 rounded-4xl">
          <TabsTrigger value="churnRisk" className="cursor-pointer data-active:rounded-full data-active:p-3 border-0 data-active:bg-linear-to-b from-pink-950 from-40% to-transparent data-active:shadow-glassy-jeri">CHURN RISK</TabsTrigger>
          <TabsTrigger value="anomalies" className="cursor-pointer data-active:rounded-full data-active:p-3 border-0 data-active:bg-linear-to-b from-pink-950 from-40% to-transparent data-active:shadow-glassy-jeri">ANOMALIES</TabsTrigger>
          <TabsTrigger value="upgrade" className="cursor-pointer data-active:rounded-full data-active:p-3 border-0 data-active:bg-linear-to-b from-pink-950 from-40% to-transparent data-active:shadow-glassy-jeri">UPGRADE</TabsTrigger>
          <TabsTrigger value="forecast" className="cursor-pointer data-active:rounded-full data-active:p-3 border-0 data-active:bg-linear-to-b from-pink-950 from-40% to-transparent data-active:shadow-glassy-jeri">FORECAST</TabsTrigger>
        </TabsList>

        {
          //TODO: tab contents
        }
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
              <span className="flex flex-1 flex-col text-xs gap-2 mt-2">
                <span className="flex flex-row gap-2">
                  <div className="shadow-glassy-jeri rounded-4xl p-2  bg-[#B00049]/20">30d balance overdue</div>
                  <div className="shadow-glassy-jeri rounded-4xl p-2  bg-[#B00049]/20">Repeated Speed Complaints</div>
                  <div className="shadow-glassy-jeri rounded-4xl p-2  bg-[#B00049]/20">5 tickets in a month</div>
                </span>
                <div className="flex-1 shadow-glassy-jeri rounded-4xl p-2 bg-emerald-500/50">
                  Recommendation: Speed check visits and payment extension.
                </div>
              </span>
              <span className="w-[10%] flex items-center flex-col">
                <h1 className="text-4xl font-semibold text-orange-700">78</h1>
                <h1 className="text-[0.6rem] opacity-30 mt-0 mb-1">/100</h1>
                <Progress value={78} className="w-[80%] h-1 bg-[rgb(80,80,80)] rounded-md">
                  <ProgressIndicator className="bg-orange-500 rounded-md"/>
                </Progress>
                
              </span>
            </CardContent>

          </Card>

        </TabsContent>
      </Tabs>


    </div>
  )

}
export default AnalyticsPage
