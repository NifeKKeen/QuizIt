import { useNavigate } from  "react-router-dom";
import styles from "./QuizItem.module.sass";

export function QuizItem({ quiz }) {
  const navigate = useNavigate();
  function handleQuizGameNavigation() {
    navigate(`/quiz-game/${quiz.id}`);
  }
  return (
    <li className={styles.li}>
      <div className={styles.description}>
        <h2>{quiz.name}</h2>
        <hr className={styles.hr} />
        <p>{quiz.description}</p>
      </div>
      <button onClick={handleQuizGameNavigation} className={styles.startBtn}>Start</button>
    </li>
  );
}