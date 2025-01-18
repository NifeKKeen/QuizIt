import useGame from "@/entities/quiz/hooks/useGame";
import useFetchGameStats from "@/features/quizEnd/hooks/useFetchGameStats";
import { Spinner } from "@/shared/ui/Loading";
import { ErrorMessage } from "@/shared/ui/ErrorMessage";
import { Button } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";

export function QuizEnd() {
  const navigate = useNavigate();
  const [gameState] = useGame();
  const [status] = useFetchGameStats(gameState);

  return (
    status.error ? <ErrorMessage>{status.error.message}</ErrorMessage>
      :
      status.loading ? <Spinner />
        :
        <>
          <p>You have finished the quiz!</p>
          <p>{status.data.totalCorrect} of {gameState.quiz.questionNumber} questions were answered correctly.</p>
          <p>Your result is {status.data.percentage}%</p>
          <Button onClick={() => navigate("/")}>Return to home</Button>
        </>
  );
}