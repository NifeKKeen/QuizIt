import { useReducer } from "react";

const initialGameState = {
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
    return { ...state, answered: newAnswered };
  }
  if (action.type === "finish") {
    return { ...state, isFinished: true };
  }
  return state;
}

export default function useGameReducer(initial = initialGameState) {
  return useReducer(gameReducer, initial);
}