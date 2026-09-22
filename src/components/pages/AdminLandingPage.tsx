import SidebarApp from '../Sidebar'
import { useState } from 'react'
import Navbar from '../Navbar.tsx'
import CustomersPage from './CustomersPage.tsx'

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
      return <CustomersPage />
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

        <div className="w-[90vw] overflow-y-auto font-ubuntu text-white flex flex-col items-start mt-15">

          {renderContent()}

        </div>

        <SidebarApp items={items} getCurrentState={handleData} />


      </div>
    </>
  )
}

export default AdminLandingPage
