import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Navbar from "./Navbar";

export default function Layout({ children }) {

  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="w-full">
          <Navbar />
          <main>
          {children}
        </main>
          {<Outlet />}
        </div>
      </div>
    </>
  );
}
