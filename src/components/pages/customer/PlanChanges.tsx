import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'


function PlanChanges() {
  return (


    <div className="flex flex-col text-left w-full font-light tracking-wide">
      {
        //TODO: make optimize the cards rendering once the types are determined
      }
      <h1 className="text-2xl">Upgrade or Downgrade</h1>

      <div className="w-full mr-5 mt-5 flex flex-col gap-10">
        <div className="flex flex-1 flex-row shadow-glassy-jeri text-amber-400 rounded-2xl p-2 bg-amber-400/20">
          <i className="fa-solid fa-bolt-lightning fa-xl"></i>
          <p>Upgrades to 200 Mbps or below take effect within 30 minutes — no technician needed. Downgrades have a 30-day lock-in</p>
        </div>
        <div className="flex flex-1 flex-row gap-x-5">
          {
            //Request style
          }
          <Card className="ml-2 flex-1 shadow-glassy-jeri bg-neutral-400/40 ring-0">
            <CardHeader className="flex flex-row place-content-between">
            </CardHeader>
            <CardContent className="flex flex-col gap-y-10">
              <span className="flex flex-col gap-y-4">
                <p className="text-2xl">Fiber 50 Mbps</p>
                <span className="flex flex-row">
                  <p className="text-5xl ">₱999</p>
                  <p className="text-xl self-end opacity-40">{"/mo"}</p>
                </span>
              </span>

              <div className="flex flex-row shadow-glassy-jeri h-40 rounded-2xl bg-black/30">
                <span className="flex flex-col items-center justify-center w-[50%]">
                  <p className="text-4xl bg-linear-to-r from-teal-400 from-50% to-blue-600 bg-clip-text text-transparent font-normal">50 Mbps</p>
                  <p className="opacity-40 font-normal">Download</p>
                </span>
                <Separator orientation="vertical" className="w-[1.5px] bg-white/10 my-4" />
                <span className="flex flex-col items-center justify-center w-[50%]">
                  <p className="text-4xl bg-linear-to-r from-teal-400 from-50% to-blue-600 bg-clip-text text-transparent font-normal">25 Mbps</p>
                  <p className="opacity-40 font-normal">Upload</p>
                </span>

              </div>
            </CardContent>
            <CardFooter className="border-none mt-auto mb-4 mx-4 ring-1 ring-emerald-500 rounded-2xl bg-emerald-500/20 flex justify-center p-5" >
              <p className="text-emerald-500 text-2xl tracking-widest font-normal">Request Submitted</p>

            </CardFooter>
          </Card>


          {
            //Current Plan style
          }
          <Card className="ml-2 flex-1 shadow-glassy-jeri bg-neutral-400/40 ring-blue-500 ring-1">
            <CardHeader className="flex flex-row place-content-between">
              <h1 className="p-1 px-4 bg-blue-500/20 text-blue-500 ring-1 ring-blue-500/80 rounded-md">Current Plan</h1>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-10">
              <span className="flex flex-col gap-y-4">
                <p className="text-2xl">Diverge Netflix</p>
                <span className="flex flex-row">
                  <p className="text-5xl ">₱1,499</p>
                  <p className="text-xl self-end opacity-40">{"/mo"}</p>
                </span>
              </span>

              <div className="flex flex-row shadow-glassy-jeri h-40 rounded-2xl bg-black/30">
                <span className="flex flex-col items-center justify-center w-[50%]">
                  <p className="text-4xl bg-linear-to-r from-teal-400 from-50% to-blue-600 bg-clip-text text-transparent font-normal">100 Mbps</p>
                  <p className="opacity-40 font-normal">Download</p>
                </span>
                <Separator orientation="vertical" className="w-[1.5px] bg-white/10 my-4" />
                <span className="flex flex-col items-center justify-center w-[50%]">
                  <p className="text-4xl bg-linear-to-r from-teal-400 from-50% to-blue-600 bg-clip-text text-transparent font-normal">50 Mbps</p>
                  <p className="opacity-40 font-normal">Upload</p>
                </span>

              </div>
              <div className="shadow-glassy-jeri rounded-2xl bg-black/30 flex justify-center p-5">
                <p className="opacity-40 text-2xl tracking-widest">Current Plan</p>
              </div>
            </CardContent>
          </Card>
          {
            //Upgrade Plan Style
          }
          <Card className="ml-2 flex-1 shadow-glassy-jeri bg-neutral-400/40 ring-0">
            <CardHeader className="flex flex-row place-content-between">
            </CardHeader>
            <CardContent className="flex flex-col gap-y-10">
              <span className="flex flex-col gap-y-4">
                <p className="text-2xl">Fiber 50 Mbps</p>
                <span className="flex flex-row">
                  <p className="text-5xl ">₱999</p>
                  <p className="text-xl self-end opacity-40">{"/mo"}</p>
                </span>
              </span>

              <div className="flex flex-row shadow-glassy-jeri h-40 rounded-2xl bg-black/30">
                <span className="flex flex-col items-center justify-center w-[50%]">
                  <p className="text-4xl bg-linear-to-r from-teal-400 from-50% to-blue-600 bg-clip-text text-transparent font-normal">50 Mbps</p>
                  <p className="opacity-40 font-normal">Download</p>
                </span>
                <Separator orientation="vertical" className="w-[1.5px] bg-white/10 my-4" />
                <span className="flex flex-col items-center justify-center w-[50%]">
                  <p className="text-4xl bg-linear-to-r from-teal-400 from-50% to-blue-600 bg-clip-text text-transparent font-normal">25 Mbps</p>
                  <p className="opacity-40 font-normal">Upload</p>
                </span>

              </div>
            </CardContent>
            <CardFooter className="border-none mt-auto mb-4 mx-4 shadow-glassy-jeri rounded-2xl bg-blue-500/70 flex justify-center p-5" >
              <p className=" text-2xl tracking-widest font-normal">Upgrade to This Plan</p>

            </CardFooter>
          </Card>


        </div>

      </div>
    </div>

  )

}
export default PlanChanges
