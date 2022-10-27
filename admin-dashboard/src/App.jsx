import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./assets/scss/app.scss";
import Dashboard from "../pages/Dashboard";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import SideBarContainer from "./components/Layout/SideBarContainer";
import { MenuContext } from "./context/menu";
import Users from "../pages/Users";

function App() {
  library.add(fas);
  const [count, setCount] = useState(0);
  const [{ menuClass }] = useContext(MenuContext);

  return (
    <>
      <Router>
        <div className={menuClass}>
          <Header />
          <SideBarContainer />
          <div className="main-content">
            <div className="page-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
