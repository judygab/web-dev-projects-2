import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const SideBarContainer = props => {
  return (
    <div className="vertical-menu">
      <div className="navbar-brand-box">
        <Link to="/" className="logo">
          WEBDECODED
        </Link>
      </div>
      <div data-simplebar className="h-100">
        <SideBar />
      </div>
    </div>
  )
}

export default SideBarContainer;
