import { Xmark, Omark } from "../../components/marks/index";
import { useState, useEffect, useMemo, useContext } from "react";
import { RestartValue } from "../../context/globalGameProps";
import { TurnOfPlayer } from "../../context/globalGameProps";
import { checkWin } from "./functionsHelper/allWinningPaths";
import { GameResults } from "../../context/globalGameProps";
import WhoTakesTheRoundPopUp from "../popUpWhoTakesTheRound";
import Box from "../../components/box";

export default function Table() {
  const { restart, setRestart } = useContext(RestartValue);
  const { turn } = useContext(TurnOfPlayer);
  const { setPlayerResults } = useContext(GameResults);
  const [localState, setLocalState] = useState({
    table: [],
    idE: -1,
    path: [],
    IsthereAwiner: false,
    winerPath: [],
  });
  useMemo(() => {
    initTable();
  }, []); // just in first render

  // render part
  useEffect(() => {
    match();
  }, [turn, localState.IsthereAwiner]);
  //

  useEffect(() => {
    /*
      Restart The game if  value has changed  
      
    */

    // restart all the values on useState
    setLocalState((previous) => {
      return {
        ...previous,
        table: [],
        idE: -1,
        path: [],
        IsthereAwiner: false,
        winerPath: [],
      };
    });
    initTable();
  }, [restart]);

  function match() {
    if (localState.idE === -1) {
      return;
    }
    var cloneTable = localState.table;
    var boxFound = { value: 0, index: 0 };
    for (let i = 0; i < 9; i++) {
      if (localState.table[i].index === localState.idE) {
        boxFound.value = turn;
        boxFound.index = localState.table[i].index;
        cloneTable[i].box = (
          <Box key={i} id={i} turn={turn}>
            {turn === 1 ? <Xmark /> : <Omark />}
          </Box>
        );
        cloneTable[i].value = turn;
        setLocalState((previous) => {
          return { ...previous, table: cloneTable };
        });
        setLocalState((previous) => {
          var clonePath = [...previous.path];
          clonePath.push(boxFound);
          checkWin(clonePath, setLocalState);
          return { ...previous, path: clonePath };
        });
      }
    }

    winerPathHighlights();
  }
  // init the table
  function initTable() {
    var array = [];
    for (let i = 0; i < 9; i++) {
      array.push({
        value: 0,
        index: i,
        box: (
          <Box
            key={i}
            id={i}
            turn={turn}
            setIdE={setLocalState}
            updateBox={match}
          ></Box>
        ),
      });
    }
    setLocalState((previous) => {
      return {
        ...previous,
        table: array,
      };
    });
  }
  // if there a winer
  function winerPathHighlights() {
    if (localState.IsthereAwiner) {
      let cloneTable = localState.table;
      localState.winerPath.forEach((e) => {
        cloneTable[e.index].box = (
          <Box key={e.index} turn={cloneTable[e.index].value} win={true}>
            {cloneTable[e.index].value === 1 ? <Xmark /> : <Omark />}
          </Box>
        );
      });
    }
  }
  // if we have a draw. no one win
  function drawFunction() {
    // ERROR :  drawFunction();  <= this function is still under development
    if (localState.path.length >= 8) {
      setRestart((previous) => {
        previous = previous + 2;
      });
      setPlayerResults((previous) => {
        return { ...previous, ties: previous.ties + 1 };
      });
    }
  }
  return (
    <>
      {localState.IsthereAwiner ? (
        <WhoTakesTheRoundPopUp value={localState.winerPath[0].value} />
      ) : null}
      {localState.table.map((box) => {
        return box.box;
      })}
    </>
  );
}
