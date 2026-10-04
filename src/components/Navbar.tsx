
import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import logo from '@/assets/logo.png'

const DEMO_USER_DETAILS: Record<string, { name: string; role: string }> = {
  'jonathan@example.com': { name: 'Jonathan Landoy', role: 'Customer' },
  'guiller.delaCruz@example.com': { name: 'Guiller DelaCruz', role: 'Customer' },
  'vanna.banana@example.com': { name: 'Vanna Banana', role: 'Customer' },
  'tech@diverge.com': { name: 'Rizal Service Tech', role: 'Technician' },
  'admin@diverge.com': { name: 'Diverge Admin', role: 'Admin' },
}

function Navbar({ role = 'Admin', status = '80% Uptime' }: { role?: string; status?: string }) {
  const [profile, setProfile] = useState({
    name: 'Diverge Admin',
    role,
  })

  useEffect(() => {
    const storedUser = localStorage.getItem('diverge_user')
    if (!storedUser) {
      setProfile({
        name: DEMO_USER_DETAILS['admin@diverge.com']?.name ?? 'Diverge Admin',
        role,
      })
      return
    }

    try {
      const parsedUser = JSON.parse(storedUser)
      const email = parsedUser?.email ?? 'admin@diverge.com'
      const fallback = DEMO_USER_DETAILS[email] ?? {
        name: 'Diverge User',
        role: role === 'Technician' ? 'Technician' : role === 'Customer' ? 'Customer' : 'Admin',
      }

      setProfile({
        name: fallback.name,
        role: fallback.role,
      })
    } catch {
      setProfile({
        name: DEMO_USER_DETAILS['admin@diverge.com']?.name ?? 'Diverge Admin',
        role,
      })
    }
  }, [role])

  return (
    <Card className="rounded-none sticky top-0 ring-0 flex flex-row bg-gradient-to-b from-[#121212] to-transparent z-2 w-full h-auto">
      <div className="ml-2">
        <img src={logo} className='h-15 w-15 translate-x-5' />
      </div>
      <div className="flex flex-col items-start text-left">
        <span className="text-white text-lg font-thin font-ubuntu">Diverge</span>
        <span className="text-white text-sm font-thin">{profile.name}</span>
        <span className="text-white font-thin"><i>{profile.role}</i></span>
      </div>

      <div className="absolute w-[20vw] right-0 flex flex-row place-content-end items-center max-sm:w-[58vw] max-sm:gap-1">
        <Card className="w-[10vw] cursor-pointer flex flex-row gap-0 items-center justify-center ring-0 shadow-glassy p-2 rounded-4xl [--glassy-color:79_79_79] inset-shadow-sm inset-ring-black bg-linear-[0deg,#1C1A1A_10%,#121212_90%] max-sm:w-[42vw] max-sm:p-1">
          <div className="bg-[#4BE0A9] w-1 h-1 rounded-full mr-2 animate-ping"></div>
          <span className="text-[#4BE0A9] opacity-55 font-thin font-ubuntu-mono tracking-widest truncate">{status}</span>
        </Card>

        <i className="fa-regular fa-bell fa-xl text-[#b00049] mx-5 cursor-pointer max-sm:mx-2 max-sm:text-lg"></i>
      </div>
    </Card>
  )
}

export default Navbar
