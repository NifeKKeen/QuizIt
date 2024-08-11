export default function QuizItem({ quiz }) {
  return (
    <li>
      <h2>{quiz.name}</h2>
      <p>{quiz.description}</p>
    </li>
  );
}