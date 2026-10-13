import { useEffect, useState } from 'react'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import {
  Sidebar,
  SidebarProvider,
  SidebarGroup,
  SidebarContent,
  SidebarTrigger,
  SidebarFooter,
} from '../components/ui/sidebar'

interface SidebarProps {
  items: string[]
  getCurrentState: (data: string) => void
}

const DEMO_USER_DETAILS: Record<string, { name: string; role: string }> = {
  'jonathan@example.com': { name: 'Jonathan Landoy', role: 'Customer' },
  'guiller.delaCruz@example.com': { name: 'Guiller DelaCruz', role: 'Customer' },
  'vanna.banana@example.com': { name: 'Vanna Banana', role: 'Customer' },
  'tech@diverge.com': { name: 'Rizal Service Tech', role: 'Technician' },
  'admin@diverge.com': { name: 'Diverge Admin', role: 'Admin' },
}

const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4001'

function SidebarApp({ items, getCurrentState }: SidebarProps) {
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = useState(items[0] ?? '')
  const [profile, setProfile] = useState({
    name: 'Diverge User',
    email: 'user@diverge.com',
    role: 'Customer',
  })

  useEffect(() => {
    const storedUser = localStorage.getItem('diverge_user')
    const token = localStorage.getItem('diverge_token')

    if (!storedUser) {
      setProfile({
        name: 'Diverge User',
        email: 'user@diverge.com',
        role: 'Customer',
      })
      return
    }

    try {
      const user = JSON.parse(storedUser)
      const email = user?.email ?? 'user@diverge.com'
      const role = user?.role ?? 'CUSTOMER'
      const fallback = DEMO_USER_DETAILS[email] ?? {
        name: role === 'ADMIN' ? 'Diverge Admin' : role === 'TECHNICIAN' ? 'Rizal Service Tech' : 'Diverge User',
        role: role === 'ADMIN' ? 'Admin' : role === 'TECHNICIAN' ? 'Technician' : 'Customer',
      }

      const setCustomerProfile = async () => {
        if (role !== 'CUSTOMER' || !token) {
          setProfile({
            name: fallback.name,
            email,
            role: fallback.role,
          })
          return
        }

        try {
          const response = await fetch(`${API_BASE_URL}/api/customers/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          if (!response.ok) {
            throw new Error('Customer profile not found')
          }

          const payload = await response.json()
          const customer = payload?.data ?? payload

          setProfile({
            name: customer?.name ?? fallback.name,
            email: customer?.email ?? email,
            role: 'Customer',
          })
        } catch {
          setProfile({
            name: fallback.name,
            email,
            role: fallback.role,
          })
        }
      }

      void setCustomerProfile()
    } catch {
      setProfile({
        name: 'Diverge User',
        email: 'user@diverge.com',
        role: 'Customer',
      })
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('diverge_token')
    localStorage.removeItem('diverge_user')
    navigate('/login')
  }

  const initials = profile.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('') || 'U'

  return (
    <>
      <SidebarProvider className="w-max">
        <Sidebar variant="floating" className="md:scale-90 md:h-[calc(100svh-3.75rem)] ml-5">
          <SidebarContent className='gap-2 bg-[#393939] rounded-t-xl inset-shadow-white inset-shadow-xs text-white backdrop-blur-md pt-4'>
            {items.map((item) => {
              const isActive = activeItem === item
              return (
                <SidebarGroup key={item} onClick={() => getCurrentState(item)}>
                  <div
                    onClick={() => {
                      setActiveItem(item)
                    }}
                    className={`w-[90%] mx-auto p-[2px] md:p-[15px] text-xs lg:text-base text-left cursor-pointer ${isActive ? ' transition ease-in bg-[rgba(217,217,217,0.4)] rounded-lg border-white/40 border-1 backdrop-blur-md' : ''}`}
                  >
                    {item}
                  </div>
                </SidebarGroup>
              )
            })}
          </SidebarContent>

          <SidebarFooter className="backdrop-brightness-50 bg-neutral-600/20 w-full rounded-b-xl text-white relative bottom-0 border-t-1 border-white/40 backdrop-blur-md flex-row py-3 pb-5 px-3 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-[#1f1f1f]">
              {initials}
            </div>

            <div className="flex min-w-0 flex-1 flex-col text-left">
              <span className="truncate text-sm font-medium text-white">{profile.name}</span>
              <span className="truncate text-[10px] text-gray-400">{profile.email}</span>
              <span className="text-[9px] uppercase tracking-[0.12em] text-emerald-300">{profile.role}</span>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              title="Logout"
              className="ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 hover:text-rose-300"
              aria-label="Logout"
            >
              <LogOut size={16} />
            </button>
          </SidebarFooter>
        </Sidebar>
        <main>
          <SidebarTrigger className="h-full pl-20 text-transparent" />
        </main>
      </SidebarProvider>
    </>
  )
}

export default SidebarApp
