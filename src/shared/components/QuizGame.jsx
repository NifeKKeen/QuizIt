import { useContext } from "react";
import { gameContext, gameDispatchContext } from "@/shared/pages/QuizGamePage/QuizGamePage";
import { useParams } from "react-router-dom";
import { quizzes } from "./tempData";
import { calcPercentageFromAnswers } from "@/client/utils"

export function QuizGame() {
  const gameState = useContext(gameContext);
  const dispatchGame = useContext(gameDispatchContext);
  const { quizId } = useParams();

  function handleQuizStart() {
    const quiz = quizzes.find(quiz => String(quiz.id) === quizId);
    if (!quiz) {
      return;
    }
    dispatchGame({ type: "start", payload: { quiz } });
  }

  function handleVariantChoose({ variantEntry = [-1, ""], index = -1 }) {
    if (!(question && question.variants && 0 <= index && index < Object.keys(question.variants).length)) {
      return;
    }
    dispatchGame({ type: "select", payload: { variantEntry, index } });
  }

  function handleNextQuestion() {
    dispatchGame(
      {
        type: "saveChoice",
        payload: { index: gameState.curQuestionIndex, variantIndex: gameState.selectedVariantIndex },
      });
    if (gameState.curQuestionIndex + 1 !== gameState.quiz.questionNumber) {

      dispatchGame({ type: "select", payload: { index: -1 } });
      dispatchGame({ type: "changeQuestion", payload: { index: gameState.curQuestionIndex + 1 } });
    } else {
      dispatchGame({ type: "finish" });
    }
  }

  if (!gameState.quiz || !gameState.isStarted) {
    return (
      <>
        <button onClick={handleQuizStart}>START!</button>
      </>
    );
  }

  if (gameState.isFinished) {
    return (
      <>
        <p>You have finished the quiz!</p>
        <p>Your result is {calcPercentageFromAnswers(gameState)}%</p>
      </>
    );
  }

  const question = (gameState.quiz.questions && gameState.quiz.questions[gameState.curQuestionIndex]) || {
    variants: {},
    text: "",
  };
  const questionText = question.text;
  const variants = question.variants;
  const curQuestionNum = (gameState.curQuestionIndex || 0) + 1;
  const totalQuestionCnt = (gameState.quiz.questionNumber) || 0;

  return (
    <>
      <h2>Game started!</h2>
      <div>Question {curQuestionNum}/{totalQuestionCnt}</div>
      <div>{questionText}</div>
      {Object.entries(variants).map((variantEntry, i) =>
        <p
          style={{ backgroundColor: (i === gameState.selectedVariantIndex) ? "red" : "" }}
          onClick={ev => handleVariantChoose({ variantEntry, index: i, event: ev })}
          key={variantEntry[0]}
        ><span>{variantEntry[0]})</span> {variantEntry[1]}</p>,
      )}
      <button
        onClick={handleNextQuestion}>{(gameState.curQuestionIndex + 1 !== gameState.quiz.questionNumber) ? "Next" : "Finish"}</button>
    </>
  );
}