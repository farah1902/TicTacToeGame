import "./styles/main.css";
import { useState } from "react";
import restartIcon from "../../icons/icons8-refresh.svg";
import { Xmark, Omark } from "../marks";
import { useContext } from "react";
import { TurnOfPlayer, RestartValue } from "../../context/globalGameProps";
import ConfirmRestart from "../confirmRestartGameComponent";

export default function Header() {
  const turnPlayer = useContext(TurnOfPlayer);
  const { setRestart } = useContext(RestartValue);
  const [confirmRestart, setConfirmRestart] = useState(false);

  return (
    <>
      <ul className="header">
        <li>
          <div className="contain-icon">
            <Xmark />
          </div>
          <Omark />
        </li>
        <li className="turn">
          <div className="contain-icon">
            {turnPlayer.turn === 2 ? <Xmark /> : <Omark />}
          </div>
          <span>TURN</span>
        </li>
        <li
          onClick={() => {
            setConfirmRestart(true);
          }}
          className="restart"
        >
          <img src={restartIcon} alt="restart icon" />
        </li>
      </ul>
      {confirmRestart ? (
        <ConfirmRestart
          setConfirmRestart={setConfirmRestart}
          setRestart={setRestart}
        />
      ) : null}
    </>
  );
}
