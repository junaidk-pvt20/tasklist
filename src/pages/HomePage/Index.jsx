import React, { Suspense } from "react";
import Navbar from "../../layouts/Navbar";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback="Loading....">

        <Outlet />
      </Suspense>
    </>
  );
};

export default index;
