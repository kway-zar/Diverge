import SidebarApp from '../Sidebar.tsx'
import { useState } from 'react'


function AdminLandingPage() {
  const items = ["Dashboard", "Customers", "Billing", "Tickets", "Analytics", "Plan Management", "Support"]

  const [activeItem, setActiveItem] = useState('')
  const handleData = (data: string) => {
    setActiveItem(data);

  }

  const renderContent = () => {
    if (activeItem == 'Dashboard') {
      //return dashboard component here
    } if (activeItem == 'Customers') {
      //return customer component here
    }
    //and so forth...
    return (
      <></>
    )

  }

  return (
    <>

      <div className="bg-black flex flex-row-reverse">
        <div className="w-[90vw] overflow-y-auto font-ubuntu text-white flex flex-col items-start mt-15">

          {renderContent()}

        </div>

        <SidebarApp items={items} getCurrentState={handleData} />


      </div>
    </>
  )
}

export default AdminLandingPage
