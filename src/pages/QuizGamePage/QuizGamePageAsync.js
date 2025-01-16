import { lazy } from "react";

export const QuizGamePageAsync = lazy(
  () => import("./QuizGamePage")
);