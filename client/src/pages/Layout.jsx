import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="min-h-sceen bg-gray-50">
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
