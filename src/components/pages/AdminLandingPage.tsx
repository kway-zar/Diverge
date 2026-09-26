import SidebarApp from '../Sidebar'
import { useState } from 'react'
import Navbar from '../Navbar.tsx'
import BillingPage from './BillingPage.tsx'
import CustomersPage from './CustomersPage.tsx'
import Dashboard from './Dashboard.tsx'
import Footer from '../Footer.tsx'
import SupportTicket from "./SupportTicket.tsx"
import Tickets from './Tickets.tsx'
import AnalyticsPage from './AnalyticsPage.tsx'
import PlanManagement from './PlanManagement.tsx'



function AdminLandingPage() {
  const items = ["Dashboard", "Customers", "Billing", "Tickets", "Analytics", "Plan Management", "Support"]

  const [activeItem, setActiveItem] = useState(items[0])
  const handleData = (data: string) => {
    setActiveItem(data);

  }

  const renderContent = () => {
    if (activeItem == 'Dashboard') {
      //return dashboard component here
      return <Dashboard />
    } if (activeItem == 'Customers') {
      return <CustomersPage />
    } if (activeItem == 'Tickets') {
      return <Tickets/>
    }
    if (activeItem == "Billing") {
      return <BillingPage/>
    
    }
    if (activeItem == 'Analytics') {
      return <AnalyticsPage />
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

      <div className="bg-[#121212] flex flex-row-reverse">

        <div className="w-[95vw] z-0 overflow-y-auto font-ubuntu text-white flex flex-col items-start ">

          {renderContent()}

        </div>

        <SidebarApp items={items} getCurrentState={handleData} />


      </div>
      <Footer />
    </>
  )
}

export default AdminLandingPage
