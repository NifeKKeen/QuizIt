import { useContext } from "react";
import { gameContext, gameDispatchContext } from "@/entities/quiz/model/gameStateContext";

export default function useGame() {
  const dispatchGame = useContext(gameDispatchContext);
  if (!dispatchGame)
    throw new Error("Context not found.");
  const gameState = useContext(gameContext);

  return [gameState, dispatchGame];
}