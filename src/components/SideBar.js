import React from "react";
import image from "../assets/images/logo.png";
import { Link, Route, Routes } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";
import LastProductInDb from "./LastProductInDb";
import Products from "./Products";
import Users from "./Users";
import Error404 from "./Error404";
import Charts from "./Charts";

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={image} alt="Ohashi" />
          </div>
        </Link>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - Ohashi</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/products">
            <i className="fas fa-fw fa-folder"></i>
            <span>Products</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/charts">
            <i className="fas fa-fw fa-folder"></i>
            <span>Charts</span>
          </Link>
        </li>


        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/users">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Users</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/lastProduct">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Last product in DB</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}

        <Routes>
          <Route path="/" element={<ContentWrapper/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/lastProduct" element={<LastProductInDb/>}/>
          <Route path="/charts" element={<Charts/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>

    </React.Fragment>
  );
}
export default SideBar;
