import React from "react";
import Navbar from "../../layouts/Navbar";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default index;
