import Footer from "@/Pages/Shared/Footer";
import Navbar from "@/Pages/Shared/Navbar";
// import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className=" container mx-auto ">
        <Navbar />
      </div>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Root;
