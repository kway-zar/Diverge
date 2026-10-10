import { useEffect, useState } from "react"
import SidebarApp from "@/components/Sidebar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Jobs from "./Jobs"
import Maps from "./Maps"
import FieldReport from "./FieldReport"
import Evaluation from "./Evaluation"
 
function TechnicianLandingPage() {
  const items = ["Jobs", "Maps", "Field Report", "Evaluation"]
 
  const [activeItem, setActiveItem] = useState(items[0])

  useEffect(() => {
    const openFieldReport = () => setActiveItem("Field Report")
    window.addEventListener("technician-open-field-report", openFieldReport)
    return () => window.removeEventListener("technician-open-field-report", openFieldReport)
  }, [])

  const handleData = (data: string) => {
    setActiveItem(data)
  }
 
  const renderContent = () => {
    if (activeItem === "Jobs") {
      return <Jobs />
    }
    if (activeItem === "Maps") {
      return <Maps />
    }
    if (activeItem === "Field Report") {
      return <FieldReport />
    }
    if (activeItem === "Evaluation") {
      return <Evaluation />
    }
    return null
  }
 
  return (
    <>
      <Navbar role="Technician" status="3 Jobs Today" />
 
      <div className="bg-[#121212] flex flex-row-reverse max-sm:flex-col">
        <div className="w-[95vw] z-0 overflow-y-auto font-ubuntu text-white flex flex-col items-start max-sm:w-full max-sm:mr-0">
          {renderContent()}
        </div>
 
        <SidebarApp items={items} getCurrentState={handleData} />
      </div>
      <Footer />
    </>
  )
}
 
export default TechnicianLandingPage
