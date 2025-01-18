import { useEffect, useState } from "react";
import { getQuizList } from "@/features/quizList/api";

const initialStatus = {
  loading: true,
  error: null,
  data: null,
};

export default function useFetchQuizList() {
  const [status, setStatus] = useState(initialStatus);

  async function reload()  {
    setStatus(prev => ({ ...prev, loading: true }));
    try {
      const quizList = await getQuizList();
      setStatus(prev => ({ ...prev, data: quizList }));
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