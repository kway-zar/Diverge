
import { Card } from '@/components/ui/card'
import logo from '@/assets/logo.png'
function Navbar() {
  return (

    <Card className="rounded-none sticky top-0 ring-0 flex flex-row bg-gradient-to-b from-[#121212] to-transparent z-2 w-full h-auto">
      <div className="ml-2">
        <img src={logo} className='h-15 w-15 translate-x-5' />
      </div>
      <div className="flex flex-col items-start text-left">
        <span className="text-white text-lg font-thin font-ubuntu">Diverge</span>
        <span className="text-white font-thin"><i>Admin</i></span>
      </div>


      <div className="absolute w-[20vw] right-0 flex flex-row place-content-end items-center">
        <Card className="w-[10vw] cursor-pointer flex flex-row gap-0 items-center justify-center ring-0 shadow-glassy p-2 rounded-4xl [--glassy-color:79_79_79] inset-shadow-sm inset-ring-black bg-linear-[0deg,#1C1A1A_10%,#121212_90%]">
          <div className="bg-[#4BE0A9] w-1 h-1 rounded-full mr-2 animate-ping"></div>
          <span className="text-[#4BE0A9] opacity-55 font-thin font-ubuntu-mono tracking-widest truncate">80% Uptime</span>
        </Card>

        <i className="fa-regular fa-bell fa-xl text-[#b00049] mx-5 cursor-pointer"></i>


      </div>

    </Card>

  )
}

export default Navbar
