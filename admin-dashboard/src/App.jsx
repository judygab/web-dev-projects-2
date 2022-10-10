import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// Import scss
import "./assets/scss/app.scss"
import Dashboard from "./pages/Dashboard"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Dashboard />
      </Router>
    </>
  )
}

export default App
