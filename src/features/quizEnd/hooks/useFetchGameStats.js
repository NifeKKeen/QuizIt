import { useEffect, useState } from "react";
import { submitQuizAll } from "@/features/quizList/api";

const initialStatus = {
  loading: true,
  error: null,
  data: null,
};

export default function useFetchGameStats(gameState) {
  const [status, setStatus] = useState(initialStatus);

  async function reload() {
    setStatus(prev => ({ ...prev, loading: true }));

    try {
      const body = {
        quizId: gameState.quiz.id,
        questions: []
      };
      for (let i = 0; i < gameState.answered.length; i++) {
        const question = gameState.quiz.questions[i];
        body.questions.push({
          questionIndex: +i,
          chosenVariantValue: question.variants[gameState.answered[i] + 1]
        });
      }
      const response = await submitQuizAll(body);

      const stats = {
        percentage: null,
        totalCorrect: 0,
      }

      for (const payload of response.questions) {
        if (payload.correct) {
          stats.totalCorrect++;
        }
      }
      stats.percentage = (stats.totalCorrect / gameState.quiz.questionNumber) * 100;

      setStatus(prev => ({ ...prev, data: stats }));
    } catch (e) {
      setStatus(prev => ({ ...prev, error: e }));
    } finally {
      setStatus(prev => ({ ...prev, loading: false }));
    }
  }

  useEffect(() => {
    reload();
  }, []);

  return [status, reload];
}