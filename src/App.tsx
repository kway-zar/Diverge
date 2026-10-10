import './App.css'

import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import LoginPage from './components/pages/admin/LoginPage.tsx'
import AdminLandingPage from './components/pages/admin/AdminLandingPage.tsx'
import CustomerLandingPage from './components/pages/customer/CustomerLandingPage.tsx'
import TechnicianLandingPage from './components/pages/technician/TechnicianLandingPage.tsx'

type PortalRole = 'ADMIN' | 'CUSTOMER' | 'TECHNICIAN'
const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4001'
const roleRoutes: Record<PortalRole, string> = {
  ADMIN: '/admin',
  CUSTOMER: '/customers',
  TECHNICIAN: '/technician',
}

function RequireRole({ role, children }: { role: PortalRole; children: ReactNode }) {
  const [sessionRole, setSessionRole] = useState<PortalRole | null>(null)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    let isMounted = true
    const validateSession = async () => {
      const token = localStorage.getItem('diverge_token')
      if (!token) {
        if (isMounted) {
          setSessionRole(null)
          setIsChecking(false)
        }
        return
      }
      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (!response.ok) throw new Error('Session is no longer valid')
        const payload = await response.json()
        const user = payload?.data
        if (!user?.role || !['ADMIN', 'CUSTOMER', 'TECHNICIAN'].includes(user.role)) {
          throw new Error('Session has no valid role')
        }
        localStorage.setItem('diverge_user', JSON.stringify(user))
        if (isMounted) setSessionRole(user.role as PortalRole)
      } catch {
        localStorage.removeItem('diverge_token')
        localStorage.removeItem('diverge_user')
        if (isMounted) setSessionRole(null)
      } finally {
        if (isMounted) setIsChecking(false)
      }
    }

    const handleSessionChange = () => {
      setIsChecking(true)
      void validateSession()
    }
    void validateSession()
    window.addEventListener('storage', handleSessionChange)
    window.addEventListener('focus', handleSessionChange)
    return () => {
      isMounted = false
      window.removeEventListener('storage', handleSessionChange)
      window.removeEventListener('focus', handleSessionChange)
    }
  }, [])

  if (isChecking) return <div className="p-8 text-white">Checking your session...</div>
  if (!sessionRole) return <Navigate to="/login" replace />
  if (sessionRole !== role) return <Navigate to={roleRoutes[sessionRole]} replace />
  return <>{children}</>
}

function App() {

  return (

    <Router>
      <Routes>
        <Route index element={<Navigate to="/login" replace />}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/admin" element={<RequireRole role="ADMIN"><AdminLandingPage/></RequireRole>}/>
        <Route path="/customers" element={<RequireRole role="CUSTOMER"><CustomerLandingPage/></RequireRole>}/>
        <Route path="/technician" element={<RequireRole role="TECHNICIAN"><TechnicianLandingPage/></RequireRole>}/>
        <Route path="*" element={<Navigate to="/login" replace />}/>
      </Routes>
    </Router>
  )
}

export default App
