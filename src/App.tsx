import './App.css'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TestingPage from './components/pages/TestingPage.tsx'
import LoginPage from './components/pages/LoginPage.tsx'
import AdminLandingPage from './components/pages/AdminLandingPage.tsx'
import CustomerLandingPage from './components/pages/customer/CustomerLandingPage.tsx'
import TechnicianLandingPage from './components/pages/technician/TechnicianLandingPage.tsx'

function App() {

  return (

    <Router>
      <Routes>
        <Route index element={<TestingPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/admin" element={<AdminLandingPage/>}/>
        <Route path="/customers" element={<CustomerLandingPage/>}/>
        <Route path="/technician" element={<TechnicianLandingPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
