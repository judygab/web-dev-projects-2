import React from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { MenuContext } from "../../context/menu";

function SideBarContainer() {
  const [{ isCollapsed }] = React.useContext(MenuContext);
  return (
    <div className="menu">
      <div className="navbar-brand-box my-3">
        {!isCollapsed && (
          <Link to="/" className="logo text-decoration-none mx-4 px-4">
            WEBDECODED
          </Link>
        )}
      </div>
      <div data-simplebar className="h-100">
        <SideBar />
      </div>
    </div>
  );
}

export default SideBarContainer;
