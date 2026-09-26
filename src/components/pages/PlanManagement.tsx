import CreatePlan from '../modals/CreatePlan.tsx'
import OfferTab from '../tabs/OfferTab.tsx'
import UpgradeReqTab from '../tabs/UpgradeReqTab.tsx'

import { Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs'
function PlanManagement() {
  return (
    <div className="flex flex-col text-left w-[90vw] font-ubuntu mx-auto gap-2">
      <div className="flex flex-row place-content-between">
        <span>
          <h1 className="text-2xl">Plan Management</h1>
          <h2 className="text-md  font-thin opacity-20"><i>Wednesday, September 16, 2026 12:31AM PHT</i></h2>
        </span>
        <CreatePlan />
      </div>
      <Tabs defaultValue="offer" className="flex-1 mt-10">
        <TabsList className="shadow-glassy-jeri p-1 rounded-4xl">
          <TabsTrigger value="offer" className="cursor-pointer data-active:rounded-full data-active:p-3 border-0 data-active:bg-linear-to-b from-neutral-500 from-40% to-transparent data-active:shadow-glassy-jeri">PLAN OFFERINGS</TabsTrigger>
          <TabsTrigger value="upgrade" className="cursor-pointer data-active:rounded-full data-active:p-3 border-0 data-active:bg-linear-to-b from-neutral-500 from-40% to-transparent data-active:shadow-glassy-jeri">UPGRADE REQUESTS</TabsTrigger>
        </TabsList>
        <OfferTab/>
      <UpgradeReqTab/>       
      </Tabs>
    </div>

  )

}
export default PlanManagement
