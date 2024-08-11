import "./index.sass";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { Suspense } from "react";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { NotFoundPageAsync } from "./pages/NotFoundPage/NotFoundPageAsync";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<p>LOADING</p>}>
          <Routes>
            <Route path={"/"} element={
              <MainPageAsync />
            } />
            <Route path={"/about"} element={
              <AboutPageAsync />
            } />
            <Route path={"*"} element={
              <NotFoundPageAsync />
            } />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}