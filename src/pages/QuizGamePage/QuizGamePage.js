import { useCallback } from "react";
import { QuizGame } from "@/features/quizGame/ui/QuizGame";
import { QuizStart } from "@/features/quizStart/ui/QuizStart";
import { QuizEnd } from "@/features/quizEnd/ui/QuizEnd";
import { useParams } from "react-router-dom";
import { quizzes } from "/public/tempData";
import useGameReducer from "@/entities/quiz/hooks/useGameReducer";
import GameProvider from "@/entities/quiz/model/gameStateContext";

export default function QuizGamePage() {
  const [gameState, dispatchGame] = useGameReducer();

  const { quizId } = useParams();

  const handleQuizStart = useCallback(function() {
    const quiz = quizzes.find(quiz => String(quiz.id) === quizId);
    if (!quiz) {
      return;
    }
    dispatchGame({ type: "start", payload: { quiz } });
  }, [dispatchGame, quizzes]);
  console.log(gameState);

  return (
    <GameProvider value={{ gameState, dispatchGame }}>
      {
        (!gameState.quiz || !gameState.isStarted)
          ? <QuizStart onStart={handleQuizStart} />
          : (gameState.isFinished)
            ? <QuizEnd />
            : <QuizGame />
      }
    </GameProvider>
  );
}