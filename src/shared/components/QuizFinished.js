import { calcPercentageFromAnswers } from "@/client/utils";
import { useContext } from "react";
import { gameContext } from "@/shared/pages/QuizGamePage/QuizGamePage";

export function QuizFinished() {
  const gameState = useContext(gameContext);
  return (
    <>
      <p>You have finished the quiz!</p>
      <p>Your result is {calcPercentageFromAnswers(gameState)}%</p>
    </>
  );
}