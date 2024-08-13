import { QuizItem } from "./QuizItem";

const quizzes = [
  { name: "You don't know what", description: "Things that you have never thought about", id: 1 },
  { name: "Kazakhstan History UNT 9 grade", description: "PREP", id: 4 },
  { name: "Test", description: "", id: 21 },
  { name: "JOHN HERE THAT QUIZ", description: "quiz", id: 2332 },
];

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