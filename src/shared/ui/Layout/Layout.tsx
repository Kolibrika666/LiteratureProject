import React from "react";
import { Footer, Header, Nav } from "../../../main";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Nav/>
      <Outlet />
      <Footer />
    </div>
  );
};
