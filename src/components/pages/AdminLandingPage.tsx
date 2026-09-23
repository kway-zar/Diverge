import SidebarApp from '../Sidebar.tsx'
import { useState } from 'react'
import Navbar from '../Navbar.tsx'
import BillingPage from './BillingPage.tsx'

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
    if (activeItem == "Billing") {
      return <BillingPage/>
    }
    //and so forth...
    return (
      <></>
    )

  }

  return (
    <>
   <div className="h-screen w-screen overflow-hidden flex flex-col bg-[#121212]">
      
      <header className="shrink-0 z-30">
        <Navbar />
      </header>

      <div className="flex-1 flex flex-row-reverse min-h-0 w-full overflow-hidden">

        <main className="flex-1 h-full overflow-y-auto font-ubuntu text-white pt-8 px-8 pb-12">
          {renderContent()}
        </main>

        <aside className="shrink-0 h-full">
          <SidebarApp items={items} getCurrentState={handleData} />
        </aside>

      </div>
    </div>
    </>
  )
}

export default AdminLandingPage
