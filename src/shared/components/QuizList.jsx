import QuizItem from "./QuizItem";

const quizes = [
  { name: "You don't know what", description: "Things that you have never thought about", id: 1 },
  { name: "Kazakhstan History UNT 9 grade", description: "PREP", id: 4 },
  { name: "Test", description: "", id: 21 },
  { name: "JOHN HERE THAT QUIZ", description: "quiz", id: 2332 },
];

export default function QuizList() {
  return (
    <ul>
      {quizes.map(quiz => (
        <QuizItem
          quiz={quiz}
          key={quiz.id}
        />
      ))}
    </ul>
  );
}