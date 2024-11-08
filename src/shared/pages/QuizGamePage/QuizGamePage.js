import { QuizGame } from "../../components/QuizGame";
import { createContext, useReducer } from "react";

const gameContextDefaultValue = {
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
    return { ...state, isStarted: true, quiz: action.payload.quiz, answered: new Array(action.payload.quiz.questionNumber).fill(-1) };
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
    return { ...state, answered: newAnswered };
  }
  if (action.type === "finish") {
    return { ...state, isFinished: true };
  }
  return state;
}

export const gameContext = createContext(gameContextDefaultValue);
export const gameDispatchContext = createContext(null);

export default function QuizGamePage() {
  const [gameState, dispatchGame] = useReducer(gameReducer, gameContextDefaultValue);


  return (
    <gameContext.Provider value={gameState}>
      <gameDispatchContext.Provider value={dispatchGame}>
        <QuizGame />
      </gameDispatchContext.Provider>
    </gameContext.Provider>
  );
}