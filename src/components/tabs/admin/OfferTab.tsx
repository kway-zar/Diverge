import { Button } from '@/components/ui/button'
import { TabsContent } from '@/components/ui/tabs'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import EditPlan from '../../modals/EditPlan.tsx'
import type { OfferTabProps } from '../../types/OfferTab.ts'

const offerTabData: OfferTabProps[] = [
  {
    planName: "Fiber 50 MBPS",
    planDescription: "Ideal for light browsing, streaming, and work-from-home setups",
    planSpeed: "50 Mbps",
    planPrice: 999,
    planSubscribers: 5921,
    planSLA: "99.6%",
    planContract: "12mo",
    planFeatures: ["Feature 1", "Feature 2", "Feature 3"],
    planType: 'Residential'
  },
  {
    planName: "Business 500 MBPS",
    planDescription: "Power users and smart homes with 10+ connected devices",
    planSpeed: "300 Mbps",
    planPrice: 1500,
    planSubscribers: 5921,
    planSLA: "99.6%",
    planContract: "12mo",
    planFeatures: ["Feature A", "Feature B", "Feature C"],
    planType: 'Business'
  },
  {
    planName: "Enterprise 1 GBPS",
    planDescription: "For large businesses and enterprises with high data demands",
    planSpeed: "1 Gbps",
    planPrice: 5000,
    planSubscribers: 5921,
    planSLA: "99.9%",
    planContract: "24mo",
    planFeatures: ["Feature X", "Feature Y", "Feature Z"],
    planType: 'Enterprise'
  },
  {
    planName: "Government 2 GBPS",
    planDescription: "Tailored for government institutions with critical data needs",
    planSpeed: "2 Gbps",
    planPrice: 10000,
    planSubscribers: 5921,
    planSLA: "99.95%",
    planContract: "36mo",
    planFeatures: ["Feature Alpha", "Feature Beta", "Feature Gamma"],
    planType: 'Government'
  }
]

function OfferTab() {
  return (
    <TabsContent value="offer">
      <div className="grid grid-cols-2 gap-4">
        {offerTabData.map((offer: OfferTabProps) => (
          <Card key={offer.planName} className="flex-1 ring-0 shadow-glassy-jeri bg-neutral-500/40">
            <CardHeader className="flex flex-row place-content-between">
              <h1 className="p-1 px-4 bg-emerald-500/20 text-emerald-500 ring-1 ring-emerald-500/80 rounded-md">Active</h1>
              <h1 className="text-pink-600">{offer.planType}</h1>
            </CardHeader>
            <CardContent>
              <h1 className="text-4xl font-bold">{offer.planName}</h1>
              <p className="opacity-40 font-light">{offer.planDescription}</p>
              <div className="grid grid-cols-2">
                <span>
                  <h1 className="text-6xl">₱{offer.planPrice}</h1>
                  <p className="opacity-40 font-thin">{"/month"}</p>
                </span>
                <span className="place-items-end">
                  <h1 className="text-base text-emerald-500">{offer.planSpeed}</h1>
                  <p className="opacity-40 font-thin text-xs">{"↑ 25 mbps"}</p>
                </span>
              </div>
              <div className="grid grid-cols-3 py-2 mx-2 bg-neutral-500/40 rounded-xl text-xs shadow-glassy-jeri mt-2 font-ubuntu-mono">
                <span className='flex flex-col items-center'>
                  <h1>{offer.planSubscribers.toLocaleString()}</h1>
                  <h1 className="opacity-40">subs</h1>
                </span>
                <span className='flex flex-col items-center'>
                  <h1>{offer.planSLA}</h1>
                  <h1 className="opacity-40">SLA</h1>
                </span>
                <span className='flex flex-col items-center'>
                  <h1>{offer.planContract}</h1>
                  <h1 className="opacity-40">contract</h1>
                </span>
              </div>
              <section className="ml-2 mt-2 font-light">
                <p>✔️{offer.planFeatures[0]}</p>
                <p>✔️{offer.planFeatures[1]}</p>
                <p>✔️{offer.planFeatures[2]}</p>
              </section>
            </CardContent>
            <CardFooter className="border-none grid grid-cols-2 mx-4 gap-x-10">
              <EditPlan />
              <Button className="w-full h-10 shadow-glassy-jeri bg-pink-600/20 rounded-4xl">Deactivate</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

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
