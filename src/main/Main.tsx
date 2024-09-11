import React, { Suspense, lazy } from "react";
import { StartPage } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../shared";
import { categories } from "./models";

const LazyInternetResource = React.lazy(() => import("./components/Forms/ui/InternetResource"));


export const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={
          <Suspense fallback = {<p>...Load</p>}>
            <Layout />
          </Suspense>
        
        }>
          <Route path="/" element={<StartPage />} />
          <Route key={categories[0].id} path ={categories[0].title} element = {
            <Suspense><LazyInternetResource/></Suspense>
          }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
