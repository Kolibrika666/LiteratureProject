import React from "react";
import { Footer, Header, Nav, Result } from "../../../main";
import { Outlet } from "react-router-dom";
import s from './Layout.module.scss'

export const Layout = () => {
  return (
    <div className={s.layout} >
          <section className={s.nav}>
          <Nav />
          </section>
          <section className={s.outlet}>
          <Header />
          <Outlet />
          <Result/>
          <Footer />
          </section>
    </div>
  );
};
