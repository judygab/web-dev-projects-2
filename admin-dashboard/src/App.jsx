import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// Import scss
import "./assets/scss/app.scss"
import Dashboard from "./pages/Dashboard"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import SideBarContainer from "./components/Layout/SideBarContainer"
import Transactions from "./pages/Transactions";

function App() {
  library.add(fas)
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <SideBarContainer />
        <div className="main-content">
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/transactions" element={<Transactions />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
