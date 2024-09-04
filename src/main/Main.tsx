import React from "react";
import { StartPage } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../shared";

export const Main = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<StartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

