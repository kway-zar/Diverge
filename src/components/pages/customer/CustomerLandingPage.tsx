import SidebarApp from '../../Sidebar'
import { useState } from 'react'
import Navbar from '../../Navbar.tsx'
import Footer from '../../Footer.tsx'
import MyAccount from './MyAccount.tsx'
import Billing from './Billing.tsx'
import Support from './Support.tsx'

function CustomerLandingPage() {
  const items = ["My Account", "Billing", "Tickets", "Plan Changes", "Support"]

  const [activeItem, setActiveItem] = useState(items[0])
  const handleData = (data: string) => {
    setActiveItem(data);

  }

  const renderContent = () => {
    if (activeItem == 'My Account') {
      //return dashboard component here
      return <MyAccount />
    } if (activeItem == 'Billing') {
      return <Billing/>
    } if (activeItem == 'Tickets') {

    }
    if (activeItem == 'Plan Changes') {

    }
    if (activeItem == 'Support') {
      return <Support/>
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

export default CustomerLandingPage

