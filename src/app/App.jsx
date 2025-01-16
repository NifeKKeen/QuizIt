import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "@/pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "@/pages/MainPage/MainPageAsync";
import { QuizGamePageAsync } from "@/pages/QuizGamePage/QuizGamePageAsync";
import { NotFoundPageAsync } from "@/pages/NotFoundPage/NotFoundPageAsync";
import "../styles/index.sass";

export function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<p>LOADING</p>}>
          <Routes>
            <Route path={"/"}  element={
              <MainPageAsync />
            } />
            <Route path={"/quiz-game/:quizId"}  element={
              <QuizGamePageAsync />
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
    </React.StrictMode>
  );
}