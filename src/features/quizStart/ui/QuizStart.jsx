import styles from "@/features/quizStart/ui/QuizStart.module.sass";
import { Button } from "@/shared/ui/Button";
import useGame from "@/entities/quiz/hooks/useGame";

export function QuizStart() {
  const [{ quiz }, dispatchGame] = useGame();

  function handleQuizStart() {
    dispatchGame({ type: "start" });
  }

  return (
    <>
      <p>Theme: {quiz?.name || <span>Not defined</span>}</p>
      <p>Description: {quiz?.description || <span>Empty</span>}</p>
      <Button onClick={handleQuizStart} className={styles.startBtn}>START!</Button>
    </>
  );
}