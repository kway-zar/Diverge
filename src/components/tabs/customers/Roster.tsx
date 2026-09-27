import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { engineers } from "../../data/engineerData";
import type { EngineerStatus } from "../../types/engineer";

const statusStyles: Record<
  EngineerStatus,
  { text: string; border: string; background: string }
> = {
  "On-Site": {
    text: "#3276FF",
    border: "#3276FF",
    background: "#2264E766",
  },
  Traveling: {
    text: "#E18E08",
    border: "#E14508",
    background: "#E145084D",
  },
  Available: {
    text: "#3ACF98",
    border: "#3ACF98",
    background: "#4BE0A933",
  },
  "Off-Duty": {
    text: "#888888",
    border: "#888888",
    background: "#88888833",
  },
  Unavailable: {
    text: "#E14545",
    border: "#E14545",
    background: "#E1454533",
  },
};

function Roster() {
  return (
    <div className="w-full rounded-[16px] bg-[#C4C4C4]/20 border border-white/10 px-6 py-3 shadow-2xl overflow-x-auto mt-5">
      <Table className="w-full text-xs">
        <TableHeader>
          <TableRow className="border-b border-white/10 hover:bg-transparent">
            <TableHead className="text-center text-[20px] font-light text-[#FFFFFF] opacity-30 tracking-[0.05em] leading-[100%]">
              ENGINEER
            </TableHead>
            <TableHead className="text-center text-[20px] font-light text-[#FFFFFF] opacity-30 tracking-[0.05em] leading-[100%]">
              DISTRICT
            </TableHead>
            <TableHead className="text-center text-[20px] font-light text-[#FFFFFF] opacity-30 tracking-[0.05em] leading-[100%]">
              CURRENT JOB
            </TableHead>
            <TableHead className="text-center text-[20px] font-light text-[#FFFFFF] opacity-30 tracking-[0.05em] leading-[100%]">
              RATING
            </TableHead>
            <TableHead className="text-center text-[20px] font-light text-[#FFFFFF] opacity-30 tracking-[0.05em] leading-[100%]">
              COMPLETED
            </TableHead>
            <TableHead className="text-center text-[20px] font-light text-[#FFFFFF] opacity-30 tracking-[0.05em] leading-[100%]">
              QUEUE
            </TableHead>
            <TableHead className="text-center text-[20px] font-light text-[#FFFFFF] opacity-30 tracking-[0.05em] leading-[100%]">
              STATUS
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="w-full">
          {engineers.map((engineer) => (
            <TableRow
              key={engineer.id}
              className="border-b border-white/5 hover:bg-white/5 transition-colors text-center cursor-pointer"
            >
              <TableCell className="py-3">
                <div className="flex items-center gap-3">
                  <div className="w-[56px] h-[56px] bg-[#D9D9D9] rounded-full shrink-0" />

                  <div className="flex flex-col items-start">
                    <span className="text-[16px] text-[#FFFFFF] font-ubuntu-mono font-regular">
                      {engineer.name}
                    </span>

                    <span className="text-[14px] text-[#3ACF98] font-ubuntu-mono font-regular">
                      {engineer.id}
                    </span>
                  </div>
                </div>
              </TableCell>

              <TableCell className="text-[16px] text-[#FFFFFF] font-ubuntu-mono font-regular">
                {engineer.location}
              </TableCell>

              <TableCell className="text-[16px] text-[#FFFFFF] font-ubuntu-mono font-regular">
                {engineer.currentJob}
              </TableCell>

              <TableCell className="text-[20px] text-[#E1AE08]">
                ★ {engineer.rating}
              </TableCell>

              <TableCell className="text-[16px] text-[#FFFFFF] font-ubuntu-mono font-regular">
                {engineer.completed}
              </TableCell>

              <TableCell className="text-[16px] text-[#447DEF] font-ubuntu-mono font-regular">
                {engineer.queue}
              </TableCell>

              <TableCell className="py-3">
                <span
                  className="w-[73px] h-[30px] rounded-[10px] border flex items-center justify-center text-[11px] mx-auto"
                  style={{
                    color: statusStyles[engineer.status].text,
                    borderColor: statusStyles[engineer.status].border,
                    backgroundColor:
                      statusStyles[engineer.status].background,
                  }}
                >
                  {engineer.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Roster;