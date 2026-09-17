import './App.css'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TestingPage from './components/pages/TestingPage.tsx'

function App() {

  return (

    <Router>
      <Routes>
        <Route index element={<TestingPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
