import { createContext, useCallback, useReducer } from "react";
import { QuizGame } from "../../components/QuizGame";
import { QuizStart } from "@/shared/components/QuizStart";
import { QuizFinished } from "@/shared/components/QuizFinished";
import { useParams } from "react-router-dom";
import { quizzes } from "@/shared/components/tempData";

const gameStateDefaultValue = {
  isStarted: false,
  isFinished: false,
  quizData: {},
  curQuestionIndex: 0,
  selectedVariantIndex: -1,
  answered: [],
  quiz: null,
};

function gameReducer(state, action) {
  if (action.type === "start") {
    if (!action.payload?.quiz) {
      return state;
    }
    return {
      ...state,
      isStarted: true,
      quiz: action.payload.quiz,
      answered: new Array(action.payload.quiz.questionNumber).fill(-1),
    };
  }
  if (action.type === "select") {
    return { ...state, selectedVariantIndex: action.payload.index };
  }
  if (action.type === "changeQuestion") {
    return { ...state, curQuestionIndex: action.payload.index };
  }
  if (action.type === "saveChoice") {
    const newAnswered = state.answered.slice();
    newAnswered[action.payload.index] = action.payload.variantIndex;
    console.log(newAnswered);
    return { ...state, answered: newAnswered };
  }
  if (action.type === "finish") {
    return { ...state, isFinished: true };
  }
  return state;
}

export const gameContext = createContext(gameStateDefaultValue);
export const gameDispatchContext = createContext(null);

export default function QuizGamePage() {
  const [gameState, dispatchGame] = useReducer(gameReducer, gameStateDefaultValue, () => gameStateDefaultValue);

  const { quizId } = useParams();

  const handleQuizStart = useCallback(function () {
    const quiz = quizzes.find(quiz => String(quiz.id) === quizId);
    if (!quiz) {
      return;
    }
    dispatchGame({ type: "start", payload: { quiz } });
  }, [dispatchGame, quizzes]);
  console.log(gameState);

  return (
    <gameContext.Provider value={gameState}>
      <gameDispatchContext.Provider value={dispatchGame}>
        {
          (!gameState.quiz || !gameState.isStarted)
            ? <QuizStart onStart={handleQuizStart} />
            : (gameState.isFinished)
              ? <QuizFinished />
              : <QuizGame />
        }
      </gameDispatchContext.Provider>
    </gameContext.Provider>
  );
}