import { createContext, useState } from "react";

export const TurnOfPlayer = createContext(0);

export function Turn(props) {
  const [turn, setTurn] = useState(1);
  return (
    <TurnOfPlayer.Provider value={{ turn, setTurn }}>
      {props.children}
    </TurnOfPlayer.Provider>
  );
}

// context watching restart state of the game
export const RestartValue = createContext(false);
export function RestartGame(props) {
  const [restart, setRestart] = useState(0);
  // True == "Restart the game"
  // false == "the default value"

  return (
    <RestartValue.Provider value={{ restart, setRestart }}>
      {props.children}
    </RestartValue.Provider>
  );
}

//
export const GameResults = createContext({
  xPlayerPoint: 0,
  oPlayerPoint: 0,
  ties: 0,
});

export function GameResultsContext(props) {
  const { children } = props;
  const [playerResults, setPlayerResults] = useState({
    xPlayerPoint: 0,
    oPlayerPoint: 0,
    ties: 0,
  });

  return (
    <GameResults.Provider value={{ playerResults, setPlayerResults }}>
      {children}
    </GameResults.Provider>
  );
}
