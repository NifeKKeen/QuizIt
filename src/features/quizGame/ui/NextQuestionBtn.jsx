import { Button } from "@/shared/ui/Button";
import { useCallback } from "react";
import useGame from "@/entities/quiz/hooks/useGame";

export function NextQuestionBtn() {
  const [gameState, dispatchGame] = useGame();
  const handleNextQuestion = useCallback(function () {
    if (!dispatchGame)
      return;
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
  }, [dispatchGame, gameState]);

  return (
    <Button
      onClick={handleNextQuestion}>{(gameState.curQuestionIndex + 1 !== gameState.quiz.questionNumber) ? "Next" : "Finish"}</Button>
  );
}