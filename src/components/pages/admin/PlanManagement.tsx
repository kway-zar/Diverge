import CreatePlan from '../../modals/CreatePlan.tsx'
import OfferTab from '../../tabs/admin/OfferTab.tsx'
import UpgradeReqTab from '../../tabs/admin/UpgradeReqTab.tsx'
import { useState } from 'react'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
function PlanManagement() {
  const [refreshKey, setRefreshKey] = useState(0)
  return (
    <div className="flex flex-col text-left w-full font-ubuntu mx-auto gap-2">
      <div className="flex flex-row place-content-between">
        <span>
          <h1 className="text-2xl">Plan Management</h1>
          <h2 className="text-md  font-thin opacity-20"><i>Wednesday, September 16, 2026 12:31AM PHT</i></h2>
        </span>
        <CreatePlan onCreated={() => setRefreshKey((current) => current + 1)} />
      </div>
      <Tabs defaultValue="offer" className="flex-1 mt-10">
        <TabsList className="w-100">
          <TabsTrigger value="offer">PLAN OFFERINGS</TabsTrigger>
          <TabsTrigger value="upgrade">UPGRADE REQUESTS</TabsTrigger>
        </TabsList>
        <OfferTab refreshKey={refreshKey} />
        <UpgradeReqTab />
      </Tabs>
    </div>

  )

}
export default PlanManagement
