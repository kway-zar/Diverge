import SidebarApp from '../../Sidebar.tsx'
import { useState } from 'react'
import Navbar from '../../Navbar.tsx'
import BillingPage from './BillingPage.tsx'
import CustomersPage from './CustomersPage.tsx'
import Footer from '../../Footer.tsx'
import SupportTicket from "./SupportTicket.tsx"
import Tickets from './Tickets.tsx'
import PlanManagement from './PlanManagement.tsx'



function AdminLandingPage() {
  const items = ["Customers", "Billing", "Tickets", "Plan Management", "Support"]

  const [activeItem, setActiveItem] = useState(items[0])
  const handleData = (data: string) => {
    setActiveItem(data);

  }

  const renderContent = () => {
    if (activeItem == 'Customers') {
      return <CustomersPage />
    } if (activeItem == 'Tickets') {
      return <Tickets/>
    }
    if (activeItem == "Billing") {
      return <BillingPage/>
    
    }
    if (activeItem == 'Plan Management') {
      return <PlanManagement/>
    }
    if (activeItem == "Support") {
      return <SupportTicket/>
    }
    //and so forth...
    return (
      <></>
    )

  }

  return (
    <>
      <Navbar />

      <div className="bg-[#121212] flex flex-row-reverse max-sm:flex-col">

        <div className="w-[95vw] mr-5 z-10 overflow-y-auto font-ubuntu text-white flex flex-col items-start max-sm:w-full max-sm:mr-0">

          {renderContent()}

        </div>

        <SidebarApp items={items} getCurrentState={handleData} />


      </div>
      <Footer />
    </>
  )
}

export default AdminLandingPage
