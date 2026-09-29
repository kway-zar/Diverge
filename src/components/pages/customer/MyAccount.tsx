
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

function MyAccount() {
  return (
    <div className="text-left w-full flex flex-col gap-4">
      <Card className="flex-1 mr-4 ring-0 shadow-glassy-jeri bg-neutral-500/40">
        <CardContent className="w-full flex flex-row ml-4 py-5">
          <span className="w-full flex flex-row gap-x-5">
            <div className="w-24 h-24 rounded-full bg-white"></div>
            <span className="w-[80%] grid grid-cols-1">
              <p className='opacity-60 tracking-widest font-thin'>Good Evening, </p>
              <h1 className="text-2xl">Vanna Hernadez</h1>
              <p className='opacity-60 tracking-widest font-thin'>{"Account No. 000001 • Burgos Rodriguez, Rizal"}</p>
            </span>
            <span className='w-40'>
              <span className="font-ubuntu-mono flex flex-row items-center gap-4 text-emerald-500 text-emerald-50">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                <p>Connection Active</p>
              </span>
            </span>
          </span>
        </CardContent>
      </Card>
      <span className="flex flex-row">
        <Card className="w-[60%] font-ubuntu-mono mr-4 ring-0 shadow-glassy-jeri bg-neutral-500/40">
          <CardHeader className="flex flex-row place-content-between mx-5 text-2xl">
            <p>Current Plan</p>
            <div className='p-2 text-base bg-linear-to-b from-emerald-500/40 from-0% to-emerald-500/10 ring-emerald-500 ring-1 rounded-md px-5 text-emerald-500'>Active</div>
          </CardHeader>
          <CardContent className="ml-5 flex flex-col gap-4">
            <div className="flex flex-row w-full place-content-between">
              <span className="flex flex-col gap-2 text-4xl">
                <h1>Diverge Netflix</h1>
                <p className='text-base opacity-40'>{"Residential • Unlimited Data"}</p>
              </span>
              <span className="flex flex-col gap-2 text-4xl text-end">
                <h1>₱1,499</h1>
                <p className='text-base opacity-40'>{"/month"}</p>
              </span>
            </div>
            <div className='grid grid-cols-3 gap-x-4'>

              <div className="flex flex-col font-ubuntu-mono justify-center items-center shadow-glassy-jeri py-2 rounded-2xl bg-zinc-300/20">
                <p className="text-2xl text-emerald-400">100 Mbps</p>
                <p className='text-base opacity-40'>Download</p>
              </div>
              <div className="flex flex-col font-ubuntu-mono justify-center items-center shadow-glassy-jeri py-2 rounded-2xl bg-zinc-300/20">
                <p className="text-2xl text-emerald-400">50 Mbps</p>
                <p className='text-base opacity-40'>Upload</p>
              </div>
              <div className="flex flex-col font-ubuntu-mono justify-center items-center shadow-glassy-jeri py-2 rounded-2xl bg-zinc-300/20">
                <p className="text-2xl text-emerald-400">Oct 15, 2026</p>
                <p className='text-base opacity-40'>Download</p>
              </div>

            </div>
          </CardContent>
        </Card>
        <Card className="flex-1 mr-4 ring-0 shadow-glassy-jeri bg-neutral-500/40 gap-0">
          <CardHeader className='text-2xl font-ubuntu-mono'>Balance</CardHeader>
          <CardContent className="flex flex-col font-ubuntu-mono justify-center items-center">
            <p className='text-base opacity-40'>Outstanding</p>
            <p className="text-8xl">₱0.00</p>
            <p className='text-base text-emerald-400 '>Paid ✓</p>
            <Button className='w-full mx-5 shadow-glassy-jeri rounded-4xl text-xl py-5 cursor-pointer bg-blue-500/20'>Pay Now</Button>

          </CardContent>
        </Card>

      </span>
      <Card className="flex-1 mr-4 ring-0 h-full shadow-glassy-jeri bg-neutral-500/40 gap-0">
        <CardHeader className='text-2xl font-ubuntu-mono'>Internet Consumption</CardHeader>
        <CardContent>
          {
            //TODO: add chartsjs??
          }

        </CardContent>
        <CardFooter className="border-none mt-auto opacity-40">
          <p>Avg Consumption: 100Mpbs</p>
        </CardFooter>
      </Card>
    </div>

  )
}

export default MyAccount
