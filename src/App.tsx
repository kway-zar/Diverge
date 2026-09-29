import './App.css'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TestingPage from './components/pages/admin/TestingPage.tsx'
import LoginPage from './components/pages/admin/LoginPage.tsx'
import AdminLandingPage from './components/pages/admin/AdminLandingPage.tsx'
import CustomerLandingPage from './components/pages/customer/CustomerLandingPage.tsx'
function App() {

  return (

    <Router>
      <Routes>
        <Route index element={<TestingPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/admin" element={<AdminLandingPage/>}/>
        <Route path="/customers" element={<CustomerLandingPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
