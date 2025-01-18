import { useEffect, useState } from "react";
import { getQuiz } from "@/features/quizList/api";

const initialStatus = {
  loading: true,
  error: null,
  data: null,
};

export default function useFetchQuiz(id) {
  const [status, setStatus] = useState(initialStatus);

  async function reload()  {
    setStatus(prev => ({ ...prev, loading: true }));
    try {
      const quiz = await getQuiz(id);
      setStatus(prev => ({ ...prev, data: quiz }));
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