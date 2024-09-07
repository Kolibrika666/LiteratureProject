import React, { Suspense, lazy } from "react";
import { StartPage } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../shared";
import { categories } from "./models";
import FormContainer from "../shared/ui/FormContainer/formContainer";

const form = lazy(() => import("../shared/ui/FormContainer/formContainer"));

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
          {
          categories.map((e)=> 
          <Route key={e.id} path ={e.title} element = {<FormContainer/>}/>
          )
        }
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
