import { useState } from "react";
//import Customer from "../types/customer";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function CustomersPage() {
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
        <Navbar />
            <div className = "bg-[#121212] flex flex-row-reverse">
                <div className="w-[90vw] overflow-y-auto font-ubuntu text-white flex flex-col items-start">
                    {renderContent()}
                    <div className="mb-8 ml-10">
                        <h1 className="text-2xl font-bold tracking-wider text-white text-left">
                            Customer Management
                        </h1>
                        <p className="italic text-sm text-white opacity-30 font-mono">
                            Wednesday, Wednesday, September 16, 2026 12:31AM PHT
                        </p>
                    </div>
                    <div className="mb-8 ml-10">
                        <Input
                            type="text"
                            placeholder="Search by ID, Name, or Email"
                            className="shadow-glassy rounded-[2VW] w-120 border-0 italic focus-visible:ring-0"/>
                        <Button className="shadow-glassy rounded-[2VW] w-20">All</Button>
                        <Button className="shadow-glassy rounded-[2VW] w-20">Active</Button>
                        <Button className="shadow-glassy rounded-[2VW] w-30">Suspended</Button>
                        <Button className="shadow-glassy rounded-[2VW] w-20">Pending</Button>

                    </div>
                    <div>

                    </div>
                </div>
                <Sidebar items={items} getCurrentState={handleData} />
            </div>
        </>
    );
}

export default CustomersPage;