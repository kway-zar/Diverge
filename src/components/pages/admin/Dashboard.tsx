import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'

function Dashboard() {
  return (
    <div className="text-left w-full">
      <h1 className="text-2xl">Operations Dashboard</h1>
      <h2 className="text-md opacity-30 font-thin"><i>Wednesday, September 16, 2026 12:31AM PHT</i></h2>

      <div className="w-full mr-5 mt-5 flex flex-row place-content-evenly gap-10 max-sm:flex-col max-sm:gap-4">
        <Card className="w-[20vw] flex-1 p-2 ring-0 shadow-glassy-jeri [--glassy-color:79_79_79] inset-shadow-sm inset-ring-black bg-white/5 max-sm:w-full">
          <CardHeader className="mt-0 font-thin text-xs opacity-30">Map Tracking Latency</CardHeader>
          <CardContent className="text-2xl font-thin">
            <p>100ms</p>
          </CardContent>
          <CardFooter className="text-[#4BE0A9] border-0 px-4 pt-0">
            <p>+3% vs last week</p>
          </CardFooter>

        </Card>

        <Card className="w-[20vw] flex-1 p-2 ring-0 shadow-glassy-jeri [--glassy-color:79_79_79] inset-shadow-sm inset-ring-black bg-white/5 max-sm:w-full">
          <CardHeader className="mt-0 font-thin text-xs opacity-30">Responsive Design</CardHeader>
          <CardContent className="text-2xl font-thin">
            <p>250ms</p>
          </CardContent>
          <CardFooter className="text-[#CF3A72] border-0 px-4 pt-0">
            <p>-10% vs last week</p>
          </CardFooter>

        </Card>

        <Card className="w-[20vw] flex-1 p-2 ring-0 shadow-glassy-jeri [--glassy-color:79_79_79] inset-shadow-sm inset-ring-black bg-white/5 max-sm:w-full">
          <CardHeader className="mt-0 font-thin text-xs opacity-30">Scalability</CardHeader>
          <CardContent className="text-2xl font-thin">
            <p>96%</p>
          </CardContent>
          <CardFooter className="text-[#4BE0A9] border-0 px-4 pt-0">
            <p>+6% vs last week</p>
          </CardFooter>

        </Card>

        <Card className="w-[20vw] flex-1 mr-5 p-2 ring-0 shadow-glassy-jeri [--glassy-color:79_79_79] inset-shadow-sm inset-ring-black bg-white/5 max-sm:w-full max-sm:mr-0">
          <CardHeader className="mt-0 font-thin text-xs opacity-30">Weekly Revenue</CardHeader>
          <CardContent className="text-2xl font-thin">
            <p>$305,000</p>
          </CardContent>
          <CardFooter className="text-[#CF3A72] border-0 px-4 pt-0">
            <p>-15% vs last week</p>
          </CardFooter>

        </Card>

      </div>
      {
        //TODO: implement a graph library in the container below
      }
      <h1 className="mt-5">Network Traffic</h1>
      <Card className=" flex-1 h-40 p-2 ring-0 mr-5  shadow-glassy-jeri [--glassy-color:79_79_79] inset-shadow-sm inset-ring-black bg-white/5">

      </Card>


      <div className="w-full mr-5 mt-5 flex flex-row place-content-evenly gap-10">
        <Card className="w-[20vw] text-center flex-1 p-2 ring-0 shadow-glassy-jeri [--glassy-color:79_79_79] inset-shadow-sm inset-ring-black bg-white/5">
          <CardHeader className="mt-0 font-thin text-xs opacity-30">Network Risks</CardHeader>
          <CardContent className="text-2xl font-thin">
            <p>Node PS = 34</p>
          </CardContent>
          <CardFooter className="flex flex-col text-[#CF3A72] border-0 px-4 pt-0">
            <p>High Risk</p>
            <p>84% Congestion</p>
          </CardFooter>
        </Card>

        <Card className="w-[20vw] text-center flex-1 p-2 ring-0 shadow-glassy-jeri [--glassy-color:79_79_79] inset-shadow-sm inset-ring-black bg-white/5">
          <CardHeader className="mt-0 font-thin text-xs opacity-30">ML Predictions</CardHeader>
          <CardContent className="text-2xl font-thin">
            <p>Churn Risk = 327</p>
          </CardContent>
          <CardFooter className="flex flex-col text-[#CF3A72] border-0 px-4 pt-0">
            <p>High Risk</p>
          </CardFooter>

        </Card>
        <Card className="w-[20vw] text-center mr-5 flex-1 p-2 ring-0 shadow-glassy-jeri [--glassy-color:79_79_79] inset-shadow-sm inset-ring-black bg-white/5">
          <CardHeader className="mt-0 font-thin text-xs opacity-30">Model Accuracy</CardHeader>
          <CardContent className="text-2xl font-thin">
            <p>91.4%</p>
          </CardContent>
          <CardFooter className="flex flex-col justify-center text-[#4BE0A9] border-0 px-4 pt-0">
            <p>Accuracy</p>
            <p>Churn Prediction</p>
          </CardFooter>

        </Card>


      </div>
      {

        //TODO: add Jeri's Table here
      }
      <div className="mt-5 flex-1 ring-0 mr-5  shadow-glassy-jeri [--glassy-color:79_79_79] inset-shadow-sm inset-ring-black bg-linear-[0deg,#1C1A1A_10%,#080808_90%]">

      </div>
      


    </div>

  )

}
export default Dashboard
