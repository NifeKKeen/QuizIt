import { QuizGame } from "@/features/quizGame/ui/QuizGame";
import { QuizStart } from "@/features/quizStart/ui/QuizStart";
import { QuizEnd } from "@/features/quizEnd/ui/QuizEnd";
import { useParams } from "react-router-dom";
import useGameReducer from "@/entities/quiz/hooks/useGameReducer";
import GameProvider from "@/entities/quiz/model/gameStateContext";
import useFetchQuiz from "@/features/quizList/hooks/useFetchQuiz";
import { PageSpinner } from "@/shared/ui/Loading";
import { ErrorMessage } from "@/shared/ui/ErrorMessage";
import { useEffect } from "react";

export default function QuizGamePage() {
  const [gameState, dispatchGame] = useGameReducer();

  const { quizId } = useParams();

  const [quizStatus] = useFetchQuiz(quizId);

  useEffect(() => {
    if (quizStatus.data) {
      console.log(quizStatus.data);
      dispatchGame({ type: "load", payload: { quiz: quizStatus.data } });
    }
  }, [quizStatus]);

  return (
    <GameProvider value={{ gameState, dispatchGame }}>
      {
        quizStatus.error ? <ErrorMessage>{quizStatus.error.message}</ErrorMessage>
          :
          quizStatus.loading ? <PageSpinner />
            :
            (!gameState.quiz || !gameState.isStarted) ? <QuizStart />
              :
              (gameState.isFinished) ? <QuizEnd />
                : <QuizGame />
      }
    </GameProvider>
  );
}