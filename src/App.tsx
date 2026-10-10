import './App.css'

import type { ReactNode } from 'react'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import LoginPage from './components/pages/admin/LoginPage.tsx'
import AdminLandingPage from './components/pages/admin/AdminLandingPage.tsx'
import CustomerLandingPage from './components/pages/customer/CustomerLandingPage.tsx'
import TechnicianLandingPage from './components/pages/technician/TechnicianLandingPage.tsx'

type PortalRole = 'ADMIN' | 'CUSTOMER' | 'TECHNICIAN'

function RequireRole({ role, children }: { role: PortalRole; children: ReactNode }) {
  const token = localStorage.getItem('diverge_token')
  let currentRole: string | undefined
  try {
    currentRole = JSON.parse(localStorage.getItem('diverge_user') ?? '{}')?.role
  } catch {
    currentRole = undefined
  }

  return token && currentRole === role ? <>{children}</> : <Navigate to="/login" replace />
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
