import { useCallback } from "react";
import useGame from "@/entities/quiz/hooks/useGame";

export function Question({ question }) {
  const [gameState, dispatchGame] = useGame();
  const questionText = question.text;
  const variants = question.variants;
  const curQuestionNum = (gameState.curQuestionIndex || 0) + 1;
  const totalQuestionCnt = (gameState.quiz.questionNumber) || 0;

  const handleVariantChoose = useCallback(function ({ variantEntry = [-1, ""], index = -1 }) {
    if (!(question && question.variants && 0 <= index && index < Object.keys(question.variants).length)) {
      return;
    }
    dispatchGame({ type: "select", payload: { variantEntry, index } });
  }, [question, dispatchGame]);

  return (
    <div>
      <div>Question {curQuestionNum}/{totalQuestionCnt}</div>
      <div>{questionText}</div>
      {Object.entries(variants).map((variantEntry, i) =>
        <p
          style={{ backgroundColor: (i === gameState.selectedVariantIndex) ? "red" : "" }}
          onClick={ev => handleVariantChoose({ variantEntry, index: i, event: ev })}
          key={variantEntry[0]}
        ><span>{variantEntry[0]})</span> {variantEntry[1]}</p>,
      )}
    </div>
  );
}
