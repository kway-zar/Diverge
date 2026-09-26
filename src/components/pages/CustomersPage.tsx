import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Customer } from "../types/customer";
import CustomerOverlay from "../modals/customerOverlay";


export function CustomersPage() {

    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
    const customers: Customer[] = [
        {
            accountID: "000001",
            name: "Jonathan Landoy",
            email: "jonathan@example.com",
            type: "Residential",
            plan: "Standard",
            usage: "5000 MB",
            balance: "₱1,000.00",
            status: "Active",
            area: "Rizal",
            since: "2023-01-15"
        },
        {
            accountID: "000002",
            name: "Guiller Santos",
            email: "guiller.santos@example.com",
            type: "Commercial",
            plan: "Premium",
            usage: "10000 MB",
            balance: "₱2,500.00",
            status: "Pending",
            area: "Manila",
            since: "2023-03-20"
        },
        {
            accountID: "000003",
            name: "Vanna Mae",
            email: "vanna.mae@example.com",
            type: "Government",
            plan: "Standard",
            usage: "5000 MB",
            balance: "₱1,000.00",
            status: "Suspended",
            area: "Cebu",
            since: "2023-01-15"
        },
    ];


    function getStatusBadge(status: Customer["status"]) {
      switch (status) {
        case "Active":
          return "bg-emerald-500/10 text-emerald-400 border-emerald-500/60";
        case "Pending":
          return "bg-amber-500/10 text-amber-400 border-amber-500/60";
        case "Suspended":
          return "bg-rose-500/10 text-rose-400 border-rose-500/60";
      }
    }

    function getTypeBadge(type: Customer["type"]) {
      switch (type) {
        case "Residential":
          return "text-[#3ACF98] font-semibold";
        case "Commercial":
          return "text-[#DE0961] font-semibold";
        case "Government":
          return "text-[#FFB800] font-semibold";
        case "Business":
          return "text-[#000000] font-semibold";
      }
    }

  return (
    <>
      <div className="bg-[#121212] flex flex-row-reverse w-full">
        <div className="w-full flex mr-10 lg:w-[90vw] z-0 overflow-y-auto overflow-x-hidden font-ubuntu text-white flex-col items-start px-4 lg:px-0">
          <div className="mb-5 ml-4 lg:ml-10">
            <h1 className="text-2xl font-bold tracking-wider text-white text-left">
              Customer Management
            </h1>
            <p className="italic text-xs sm:text-sm text-white opacity-30 font-mono">
              Wednesday, September 16, 2026 12:31AM PHT
            </p>
          </div>

          <div className="mb-5 ml-10 pr-10 flex flex-wrap items-center gap-2">
            <Input
              type="text"
              placeholder="Search by ID, Name, or Email"
              className="bg-white/5 shadow-glassy-jeri rounded-[2vw] w-full sm:w-80 md:w-120 border-0 italic focus-visible:ring-0 flex-1 min-w-0"
            />
            <Button className="bg-white/2 font-bold shadow-glassy-jeri rounded-[2vw] px-5 hover-glass-rim whitespace-nowrap">
              All
            </Button>
            <Button className="bg-white/2 font-bold shadow-glassy-jeri rounded-[2vw] px-6 hover-glass-rim whitespace-nowrap">
              Active
            </Button>
            <Button className="bg-white/2 font-bold shadow-glassy-jeri rounded-[2vw] px-6 hover-glass-rim whitespace-nowrap">
              Suspended
            </Button>
            <Button className="bg-white/2 font-bold shadow-glassy-jeri rounded-[2vw] px-6 hover-glass-rim whitespace-nowrap">
              Pending
            </Button>
            <Button className="bg-white/2 font-bold shadow-glassy-jeri rounded-full w-8 h-8 p-0 text-lg hover-glass-rim shrink-0">
              +
            </Button>
          </div>

          <div className="w-full flex-1 ml-4 lg:ml-10 pr-4 lg:pr-10">
            <Table className=" bg-white/5 shadow-glassy-jeri rounded-[1vw] text-[10px] sm:text-xs md:text-sm ">
              <TableHeader>
                <TableRow className="border-b border-white/10">
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
                    ACCOUNT ID
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
                    NAME
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
                    TYPE
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
                    PLAN
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
                    BALANCE
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
                    USAGE
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
                    STATUS
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
                    AREA
                  </TableHead>
                  <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
                    SINCE
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {customers.map((customer: Customer) => (
                  <TableRow className="border-b border-white/10 text-slate-300" key={customer.accountID}>
                    <TableCell className="text-center font-mono whitespace-nowrap text-[#3ACF98]">
                      {customer.accountID}
                    </TableCell>

                    <TableCell
                      className="text-center max-w-[150px] cursor-pointer"
                      onClick={() => setSelectedCustomer(customer)}
                    >
                      <div className="flex flex-col truncate">
                        <span className="font-semibold text-slate-100 truncate">
                          {customer.name}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="text-center whitespace-nowrap">
                      <span className={getTypeBadge(customer.type)}>
                        {customer.type}
                      </span>
                    </TableCell>
                    <TableCell className="text-center max-w-[160px] truncate text-[#C4C4C4] font-light">
                      {customer.plan}
                    </TableCell>
                    <TableCell className="text-center whitespace-nowrap">
                      {customer.balance}
                    </TableCell>
                    <TableCell className="text-center whitespace-nowrap text-[#C4C4C4] font-light">
                      {customer.usage}
                    </TableCell>
                    <TableCell className="text-center whitespace-nowrap">
                      <span className={`px-2 py-0.5 rounded-full border-2 text-[10px] ${getStatusBadge(customer.status)}`}>
                        {customer.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-center whitespace-nowrap text-[#C4C4C4] font-light">
                      {customer.area}
                    </TableCell>
                    <TableCell className="text-center font-mono whitespace-nowrap text-[#C4C4C4] font-light">
                      {customer.since}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {selectedCustomer && (
        <CustomerOverlay customer={selectedCustomer} onClose={() => setSelectedCustomer(null)} />
      )}
    </>
  );
}

export default CustomersPage; 
