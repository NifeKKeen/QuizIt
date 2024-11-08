import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "@/shared/pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "@/shared/pages/MainPage/MainPageAsync";
import { NotFoundPageAsync } from "@/shared/pages/NotFoundPage/NotFoundPageAsync";
import "./index.sass";
import QuizGamePage from "./pages/QuizGamePage/QuizGamePage";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<p>LOADING</p>}>
          <Routes>
            <Route path={"/"}  element={
              <MainPageAsync />
            } />
            <Route path={"/quiz-game/:quizId"}  element={
              <QuizGamePage />
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