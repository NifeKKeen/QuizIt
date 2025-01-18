import { QuizItem } from "./QuizItem";
import styles from "./QuizList.module.sass";
import useFetchQuizList from "@/features/quizList/hooks/useFetchQuizList";
import { Spinner } from "@/shared/ui/Loading";

export function QuizList() {
  const [status] = useFetchQuizList();

  return (
    status.loading
      ? <Spinner />
      : <ul className={styles.ul}>
        {status.data.map(quiz => (
          <QuizItem
            quiz={quiz}
            key={quiz.id}
          />
        ))}
      </ul>
  );
}