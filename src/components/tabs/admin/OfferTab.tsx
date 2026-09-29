import { Button } from '@/components/ui/button'
import { TabsContent } from '@/components/ui/tabs'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import EditPlan from '../../modals/EditPlan.tsx'



function OfferTab() {
  return (
    <TabsContent value="offer">
      <div className="grid grid-cols-2 gap-4">
        <Card className="flex-1 ring-0 shadow-glassy-jeri bg-neutral-500/40">
          <CardHeader className="flex flex-row place-content-between">
            <h1 className="p-1 px-4 bg-emerald-500/20 text-emerald-500 ring-1 ring-emerald-500/80 rounded-md">Active</h1>
            <h1 className="text-pink-900">Residential</h1>
          </CardHeader>
          <CardContent>
            <h1 className="text-4xl font-bold">Fiber 50 MBPS</h1>
            <p className="opacity-40 font-light">Ideal for light browsing, streaming, and work-from-home setups</p>
            <div className="grid grid-cols-2">
              <span>
                <h1 className="text-6xl">₱999</h1>
                <p className="opacity-40 font-thin">{"/month"}</p>
              </span>
              <span className="place-items-end">
                <h1 className="text-base text-emerald-500">50 Mbps</h1>
                <p className="opacity-40 font-thin text-xs">{"↑ 25 mbps"}</p>
              </span>
            </div>
            <div className="grid grid-cols-3 py-2 mx-2 bg-neutral-500/40 rounded-xl text-xs shadow-glassy-jeri mt-2 font-ubuntu-mono">
              <span className='flex flex-col items-center'>
                <h1>5,921</h1>
                <h1 className="opacity-40">subs</h1>
              </span>
              <span className='flex flex-col items-center'>
                <h1>99.6%</h1>
                <h1 className="opacity-40">SLA</h1>
              </span>
              <span className='flex flex-col items-center'>
                <h1>12mo</h1>
                <h1 className="opacity-40">contract</h1>
              </span>
            </div>
            <section className="ml-2 mt-2 font-light">
              <p>✔️lol</p>
              <p>✔️lol</p>
              <p>✔️lol</p>
            </section>
          </CardContent>
          <CardFooter className="border-none grid grid-cols-2 mx-4 gap-x-10">
            <EditPlan />
            <Button className="w-full h-10 shadow-glassy-jeri bg-pink-600/20 rounded-4xl">Deactivate</Button>
          </CardFooter>

        </Card>
        <Card className="flex-1 ring-0 shadow-glassy-jeri bg-neutral-500/40">
          <CardHeader className="flex flex-row place-content-between">
            <h1 className="p-1 px-4 bg-red-500/20 text-red-500 ring-1 ring-red-500/80 rounded-md">Inactive</h1>
            <h1 className="text-white">Business</h1>
          </CardHeader>
          <CardContent>
            <h1 className="text-4xl font-bold">Business 500 MBPS</h1>
            <p className="opacity-40 font-light">Power users and smart homes with 10+ connected devices</p>
            <div className="grid grid-cols-2">
              <span>
                <h1 className="text-6xl">₱9,999</h1>
                <p className="opacity-40 font-thin">{"/month"}</p>
              </span>
              <span className="place-items-end">
                <h1 className="text-base text-emerald-500">300 Mbps</h1>
                <p className="opacity-40 font-thin text-xs">{"↑ 200 mbps"}</p>
              </span>
            </div>
            <div className="grid grid-cols-3 py-2 mx-2 bg-neutral-500/40 rounded-xl text-xs shadow-glassy-jeri mt-2 font-ubuntu-mono">
              <span className='flex flex-col items-center'>
                <h1>5,921</h1>
                <h1 className="opacity-40">subs</h1>
              </span>
              <span className='flex flex-col items-center'>
                <h1>99.6%</h1>
                <h1 className="opacity-40">SLA</h1>
              </span>
              <span className='flex flex-col items-center'>
                <h1>12mo</h1>
                <h1 className="opacity-40">contract</h1>
              </span>
            </div>
            <section className="ml-2 mt-2 font-light">
              <p>✔️lol</p>
              <p>✔️lol</p>
              <p>✔️lol</p>
            </section>
          </CardContent>
          <CardFooter className="border-none grid grid-cols-2 mx-4 gap-x-10">
            <EditPlan />
            <Button className="w-full h-10 shadow-glassy-jeri bg-emerald-500/20 rounded-4xl">Activate</Button>
          </CardFooter>

        </Card>
      </div>
      {
        //Footer note
      }
      <Card className="flex-1 ring-0 shadow-glassy-jeri bg-neutral-500/40 mt-4">
        <CardHeader className="flex flex-row">
          <i className="fa-solid fa-circle-info fa-xl"></i>
          <h1 className="opacity-60">Self Service Upgrade Plan Rules</h1>
        </CardHeader>
        <CardContent className="ml-2 opacity-40">
          <p>Subscribers can self-upgrade plans up to 200 Mbps via the customer portal. Business plans require agent approval. Downgrades have a 30-day lock-in period.</p>
        </CardContent>
      </Card>
    </TabsContent>
  )

}
export default OfferTab
