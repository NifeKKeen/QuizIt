import styles from "@/features/quizStart/ui/QuizStart.module.sass";
import Button from "@/shared/ui/Button";

export function QuizStart({ onStart }) {
  return (
    <>
      <Button onClick={onStart} className={styles.startBtn}>START!</Button>
    </>
  );
}