import { Button } from '@/components/ui/button'
import { TabsContent } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import type { UpgradeReq } from "../../types/upgradeReq";


function UpgradeReqTab() {
  const upgradeReqs: UpgradeReq[] = [
    {
      reqID: "UPG-231231",
      name: "Vanna Hernandez",
      initialPlan: "Diverge Netflix",
      finalPlan: "Super FiberX",
      dateReq: "Sep 13, 2026",
      status: "Pending"
    }
  ];
  function getStatusBadge(status: UpgradeReq["status"]) {
    switch (status) {
      case "Approved":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/60";
      case "Pending":
        return "bg-blue-500/10 text-blue-400 border-blue-500/60";
      case "On Hold":
        return "bg-amber-500/10 text-amber-400 border-amber-500/60";
    }
  }





  return (
    <TabsContent value="upgrade">
      <Table className="bg-white/5 shadow-glassy-jeri rounded-[1vw] text-[10px] sm:text-xs md:text-sm">

        <TableHeader>

          <TableRow className="border-b border-white/10">

            <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
              REQUEST ID
            </TableHead>
            <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
              SUBSCRIBER
            </TableHead>
            <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
              FROM PLAN
            </TableHead>
            <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
              TO PLAN
            </TableHead>
            <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
              REQUESTED
            </TableHead>
            <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
              STATUS
            </TableHead>
            <TableHead className="text-center whitespace-nowrap font-light text-[#FFFFFF] opacity-30">
              ACTION
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>

          {upgradeReqs.map((upgradeReq: UpgradeReq) => (
            <TableRow className="border-b border-white/10 text-slate-300" key={upgradeReq.reqID}>
              <TableCell className="text-center font-mono whitespace-nowrap text-[#3ACF98]">
                {upgradeReq.reqID}
              </TableCell>

              <TableCell className="text-center max-w-[160px] truncate text-[#C4C4C4] font-light">
                {upgradeReq.name}
              </TableCell>
              <TableCell className="max-w-[160px] truncate text-center whitespace-nowrap font-light opacity-40">
                {upgradeReq.initialPlan}
              </TableCell>
              <TableCell className="max-w-[160px] truncate text-center whitespace-nowrap text-emerald-500">
                {upgradeReq.finalPlan}
              </TableCell>
              <TableCell className="text-center whitespace-nowrap text-[#C4C4C4] font-light">
                {upgradeReq.dateReq}
              </TableCell>

              <TableCell className="text-center whitespace-nowrap">
                <span className={`px-2 py-1 rounded-md border-2 text-[10px] ${getStatusBadge(upgradeReq.status)}`}>
                  {upgradeReq.status}
                </span>
              </TableCell>
              <TableCell className="text-center font-mono whitespace-nowrap text-[#C4C4C4] font-light">
                {upgradeReq.status == "Pending" && (
                  <span className='w-40 grid grid-cols-2 mx-auto gap-x-5'>
                    <Button className="bg-linear-to-b from-emerald-300/40 from-10% to-emerald-300/10 text-emerald-500  shadow-glassy-jeri cursor-pointer">Accept</Button>
                    <Button className="bg-linear-to-b from-rose-400/20 from-10% to-rose-300/10  shadow-glassy-jeri cursor-pointer">Reject</Button>
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </TabsContent>
  )

}
export default UpgradeReqTab
