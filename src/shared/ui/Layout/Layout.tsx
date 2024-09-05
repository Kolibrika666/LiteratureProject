import React from "react";
import { Footer, Header, Nav } from "../../../main";
import { Outlet } from "react-router-dom";
import s from './Layout.module.scss'

export const Layout = () => {
  return (
    <div className={s.layout} >
          <section>
          <Nav />
          </section>
          <section>
          <Header />
          <Outlet />
          <Footer />
          </section>
    </div>
  );
};
