import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import type { Upgrade } from "@/components/types/upgrade"

function Upgrade() {

  const upgrade: Upgrade[] = [
    {
      targetUID: "uid",
      name: "Vanna Hernandez",
      initialPlan: "Diverge Netflix",
      suggestedPlan: "Super FiberX",
      comment: "Hmmmm moneyyy",
      confidenceScore: 18.4,

    },
    {
      targetUID: "uid",
      name: "Vanna Hernandez",
      initialPlan: "Diverge Netflix",
      suggestedPlan: "Super FiberX",
      comment: "Hmmmm kachingg",
      confidenceScore: 18.4,

    },
    
  ]
  return (
    <TabsContent value="upgrade" className="mr-5">
      {upgrade.map((item, index) => (
        <Card key={index} className="shadow-glassy-jeri ring-0 w-full bg-[rgba(75,75,75,0.1)] backdrop-contrast-60 gap-2 my-2">
          <CardHeader className="flex flex-col gap-1">
            <h1>{item.name}</h1>
            <span className="flex flex-row gap-2 text-xs">
              <h1 className="opacity-40">{item.initialPlan.concat("→")}</h1>
              <h1 className="text-emerald-500">{item.suggestedPlan}</h1>

            </span>
          </CardHeader>
          <CardContent className="flex flex-row ">
            <span className="flex flex-1 flex-col text-xs gap-2 bottom-0 mt-auto">
              <span className="absolute top-2 right-5">
                <h1 className="text-emerald-500 text-2xl text-center">{item.confidenceScore}%</h1>
                <h1 className="opacity-40">Confidence Score</h1>
              </span>
              <div className="flex-1 shadow-glassy-jeri text-emerald-500 rounded-2xl p-2 bg-emerald-500/20">
                <p>{item.comment}</p>
              </div>
            </span>
          </CardContent>
          <CardFooter className="border-none pt-0">
            <Button className="bg-emerald-500/20 ml-2 ring-1 ring-emerald-500 text-xs text-emerald-500">Send Upgrade Offer</Button>
          </CardFooter>
        </Card>

      ))}
    </TabsContent>
  )
}
export default Upgrade
