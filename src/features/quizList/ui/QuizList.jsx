import { QuizItem } from "./QuizItem";
import { quizzes } from "../../../../public/tempData";
import styles from "./QuizList.module.sass";

export function QuizList() {
  return (
    <ul className={styles.ul}>
      {quizzes.map(quiz => (
        <QuizItem
          quiz={quiz}
          key={quiz.id}
        />
      ))}
    </ul>
  );
}