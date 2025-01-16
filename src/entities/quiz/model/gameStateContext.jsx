import { createContext, useMemo } from "react";

export const gameContext = createContext(null);
export const gameDispatchContext = createContext(null);

export default function GameProvider({ value: { gameState, dispatchGame }, children }) {
  gameState = useMemo(() => gameState, [gameState]);
  dispatchGame = useMemo(() => dispatchGame, [dispatchGame]);
  return (
    <gameContext.Provider value={gameState}>
      <gameDispatchContext.Provider value={dispatchGame}>
        {children}
      </gameDispatchContext.Provider>
    </gameContext.Provider>
  );
}