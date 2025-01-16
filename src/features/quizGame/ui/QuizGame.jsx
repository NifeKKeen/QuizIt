import useGame from "@/entities/quiz/hooks/useGame";
import { ErrorMessage } from "@/shared/ui/ErrorMessage";
import { Question } from "@/features/quizGame/ui/Question";
import { NextQuestionBtn } from "@/features/quizGame/ui/NextQuestionBtn";

export function QuizGame() {
  const [gameState] = useGame();

  if (!gameState.quiz || gameState.quiz.questionNumber <= 0) {
    return <ErrorMessage>Seems to be quiz has no content :(</ErrorMessage>
  }

  const question = (gameState.quiz?.questions?.[gameState.curQuestionIndex]) || {
    variants: {},
    text: "",
  };

  return (
    <>
      <h2>Game started!</h2>
      <Question question={question} />
      <NextQuestionBtn />
    </>
  );
}