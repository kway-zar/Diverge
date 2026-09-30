import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {X} from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { engineers } from "../../data/engineerData";
import type { Engineer, EngineerStatus } from "../../types/engineer";
import {useState} from 'react';
import { Button } from "@/components/ui/button"

function RosterModal({
  engineer,
  isOpen,
  onClose,
} : {
  engineer : Engineer | null;
  isOpen: boolean;
  onClose: () => void
}) {
  if (!engineer) return null;

  return(
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
    className="min-w-[1090px] max-w-none h-[648px] bg-[#121212] text-white py-8 px-16 rounded-[30px] border-0 shadow-[0_0_12px_rgba(80,42,42,0.15)] [&>button]:hidden outline-none ring-0 focus:ring-0 focus-visible:ring-0">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between ">
          <div className="flex gap-5 items-center">
            <div className="w-[86px] h-[86px] rounded-full bg-[#D9D9D9]">
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[32px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em]">
                {engineer.name}
              </h1>
              <p className="text-[20px] font-regular font-ubuntu-mono text-[#3ACF98] leading-[100%] tracking-[0.05em]">
                {engineer.id}
              </p>
            </div>
          </div>
          <div className="top-0">
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-white transition-colors p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
          </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 mb-7">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <span className="text-[20px] font-light text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em] opacity-80"> 
                    DISTRICT
                  </span>
                  <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-75 ml-6">
                    {engineer.location}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[20px] font-light text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em] opacity-80"> 
                   RATING
                  </span>
                  <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-75 ml-6">
                   ★ {engineer.rating}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[20px] font-light text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em] opacity-80"> 
                    PHONE
                  </span>
                  <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-75 ml-6">
                    {engineer.phoneNo}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[20px] font-light text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em] opacity-80"> 
                    CURRENT JOB
                  </span>
                  <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-75 ml-6">
                    {engineer.currentJob}
                  </p>
                </div>
              </div>
            <div className="flex flex-col gap-3">
              <span className="text-[20px] font-bold text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em]"> 
                Hello
              </span>
              
              <div className="flex flex-col gap-2">
                  <span className="text-[20px] font-light text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em] opacity-80"> 
                    JOBS COMPLETED
                  </span>
                  <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-75 ml-6">
                    {engineer.completed}
                  </p>
              </div>
              <div className="flex flex-col gap-2">
                  <span className="text-[20px] font-light text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em] opacity-80"> 
                    STATUS
                  </span>
                  <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-75 ml-6">
                    {engineer.status}
                  </p>
              </div>
              <div className="flex flex-col gap-2">
                  <span className="text-[20px] font-light text-[#C4C4C4]/92 leading-[100%] tracking-[0.05em] opacity-80"> 
                    CURRENT JOB
                  </span>
                  <p className="text-[24px] font-ubuntu-mono font-regular text-[#FFFFFF] leading-[100%] tracking-[0.05em] opacity-75 ml-6">
                    {engineer.overview.joined}
                  </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <Button  className="w-[399px] h-[71px] bg-[#4BE0A9]/40 rounded-[30px] text-[32px] font-regular font-ubuntu-mono text-[#FFFFFF]/75 cursor-pointer border-none shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black hover:bg-[#4BE0A9]/35">
              Assign Job
            </Button>
            <Button  className="w-[399px] h-[71px] bg-[#FFFFFF]/29 rounded-[30px] text-[32px] font-regular font-ubuntu-mono text-[#FFFFFF]/75 cursor-pointer border-none shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black hover:bg-[#FFFFFF]/35">
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

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
  const [selectedEngineer, setSelectedEngineer] =
    useState<Engineer | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRosterRowClick = (engineer: Engineer) => {
    setSelectedEngineer(engineer);
    setIsModalOpen(true);
  };

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
              onClick={() => handleRosterRowClick(engineer)}
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
      <RosterModal
        key={selectedEngineer?.id}
        engineer={selectedEngineer}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />    
    </div>
  );
}

export default Roster;