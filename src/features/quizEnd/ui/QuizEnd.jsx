import { calcPercentageFromAnswers } from "./../api";
import useGame from "@/entities/quiz/hooks/useGame";

export function QuizEnd() {
  const [gameState] = useGame();
  return (
    <>
      <p>You have finished the quiz!</p>
      <p>Your result is {calcPercentageFromAnswers(gameState)}%</p>
    </>
  );
}