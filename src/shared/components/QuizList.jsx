import { QuizItem } from "./QuizItem";
import { quizzes } from "./tempData";


export function QuizList() {
  return (
    <ul>
      {quizzes.map(quiz => (
        <QuizItem
          quiz={quiz}
          key={quiz.id}
        />
      ))}
    </ul>
  );
}