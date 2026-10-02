import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs'

import ChurnRisk from '../../tabs/admin/ChurnRisk'
import Anomalies from '../../tabs/admin/Anomalies'
import Upgrade from '../../tabs/admin/Upgrade'
import type { MLAnalytics } from '@/components/types/mlAnalytics'



function AnalyticsPage() {

  const analytic: MLAnalytics = {
    churnRiskFlags:4,
    networkAnomalies:4,
    upgradeOpportunities:100,
    forecast:4

  };

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
          <CardContent className="text-3xl text-red-900 font-bold">
            <p>{analytic.churnRiskFlags}</p>
          </CardContent>
          <CardFooter className="text-base border-0 px-4 pt-0">
            <p>{"=> 40% risk score"}</p>
          </CardFooter>

        </Card>
        <Card className="w-[10vw] flex-1 p-2 ring-0 shadow-glassy-jeri [--glassy-color:79_79_79] inset-shadow-sm inset-ring-black bg-linear-[0deg,#1C1A1A_10%,#080808_90%]">
          <CardHeader className="mt-0 font-thin text-xs ">NETWORK ANOMALIES</CardHeader>
          <CardContent className="text-3xl text-amber-500/60 font-bold">
            <p>{analytic.networkAnomalies}</p>
          </CardContent>
          <CardFooter className="text-base border-0 px-4 pt-0">
            <p>across 4 nodes</p>
          </CardFooter>

        </Card>
        <Card className="w-[10vw] flex-1 p-2 ring-0 shadow-glassy-jeri [--glassy-color:79_79_79] inset-shadow-sm inset-ring-black bg-linear-[0deg,#1C1A1A_10%,#080808_90%]">
          <CardHeader className="mt-0 font-thin text-xs ">UPGRADE OPPORTUNITIES</CardHeader>
          <CardContent className="text-3xl text-emerald-600 font-bold">
            <p>{analytic.upgradeOpportunities}</p>
          </CardContent>
          <CardFooter className="text-base border-0 px-4 pt-0">
            <p>high confidence level</p>
          </CardFooter>

        </Card>
        <Card className="w-[10vw] mr-5 flex-1 p-2 ring-0 shadow-glassy-jeri [--glassy-color:79_79_79] inset-shadow-sm inset-ring-black bg-linear-[0deg,#1C1A1A_10%,#080808_90%]">
          <CardHeader className="mt-0 font-thin text-xs ">FORECAST</CardHeader>
          <CardContent className="text-3xl font-bold text-blue-950">
            <p>{analytic.forecast}months</p>
          </CardContent>
          <CardFooter className="text-base border-0 px-4 pt-0">
            <p>{"June 2026 - September 2026"}</p>
          </CardFooter>

        </Card>

      </div>
      <Tabs defaultValue="churnRisk" className="w-full mt-10">
        <TabsList className="shadow-glassy-jeri p-1 rounded-4xl">
          <TabsTrigger value="churnRisk" className="cursor-pointer hover:bg-neutral-500/20 data-active:rounded-full data-active:p-3 border-0 data-active:bg-linear-to-b from-emerald-500 from-40% to-transparent data-active:shadow-glassy-jeri">CHURN RISK</TabsTrigger>
          <TabsTrigger value="anomalies" className="cursor-pointer hover:bg-neutral-500/20 data-active:rounded-full data-active:p-3 border-0 data-active:bg-linear-to-b from-emerald-500 from-40% to-transparent data-active:shadow-glassy-jeri">ANOMALIES</TabsTrigger>
          <TabsTrigger value="upgrade" className="cursor-pointer hover:bg-neutral-500/20 data-active:rounded-full data-active:p-3 border-0 data-active:bg-linear-to-b from-emerald-500 from-40% to-transparent data-active:shadow-glassy-jeri">UPGRADE</TabsTrigger>
          <TabsTrigger value="forecast" className="cursor-pointer hover:bg-neutral-500/20 data-active:rounded-full data-active:p-3 border-0 data-active:bg-linear-to-b from-emerald-500 from-40% to-transparent data-active:shadow-glassy-jeri">FORECAST</TabsTrigger>
        </TabsList>

        <ChurnRisk/>
        <Anomalies />
        <Upgrade />
      </Tabs>


    </div>
  )

}
export default AnalyticsPage
