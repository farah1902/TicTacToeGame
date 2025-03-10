import "./styles/main.css";
import { Xmark, Omark } from "../marks";
import { useContext } from "react";
import { GameResults, RestartValue } from "../../context/globalGameProps";

function SwitchFlages({ value }) {
  if (value === 1) {
    return (
      <div className="x-winer">
        <div>
          <Xmark />
        </div>
        <span>TAKES THE ROUND</span>
      </div>
    );
  } else {
    return (
      <div className="o-winer">
        <div>
          <Omark />
        </div>
        <span>TAKES THE ROUND</span>
      </div>
    );
  }
}

export default function WhoTakesTheRoundPopUp(props) {
  const { value } = props;
  const { setPlayerResults } = useContext(GameResults);
  const { setRestart } = useContext(RestartValue);

  const signUpthePointOfTheWinner = () => {
    if (value === 1) {
      setPlayerResults((previous) => {
        return { ...previous, xPlayerPoint: previous.xPlayerPoint + 1 };
      });
    } else {
      setPlayerResults((previous) => {
        return { ...previous, oPlayerPoint: previous.oPlayerPoint + 1 };
      });
    }
    // clean the table to play a new game
    setRestart((previous) => (previous = previous + 2));
  };

  return (
    <div className="game-round">
      <span>YOU WON!</span>

      <SwitchFlages value={value} />
      <div className="choices">
        <button className="quit-btn">Quit</button>
        <button onClick={signUpthePointOfTheWinner} className="next-round-btn">
          NEXT ROUND
        </button>
      </div>
    </div>
  );
}
