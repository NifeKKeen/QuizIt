import { useNavigate } from  "react-router-dom";

export function QuizItem({ quiz }) {
  const navigate = useNavigate();
  function handleQuizGameNavigation() {
    navigate(`/quiz-game/${quiz.id}`);
  }
  return (
    <li>
      <h2>{quiz.name}</h2>
      <p>{quiz.description}</p>
      <button onClick={handleQuizGameNavigation}>Start</button>
    </li>
  );
}