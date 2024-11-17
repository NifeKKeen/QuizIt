import styles from "@/shared/components/QuizStart.module.sass";

export function QuizStart({ onStart }) {
  return (
    <>
      <button onClick={onStart} className={styles.startBtn}>START!</button>
    </>
  );
}