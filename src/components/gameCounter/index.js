import "./styles/main.css";
import { useContext } from "react";
import { GameResults } from "../../context/globalGameProps";
export default function GameCounter() {
  const { playerResults } = useContext(GameResults);
  return (
    <ul className="counter">
      <li className="x">
        <span>X(YOU)</span> <strong>{playerResults.xPlayerPoint}</strong>
      </li>
      <li className="ties">
        <span>TIES</span> <strong>{playerResults.ties}</strong>
      </li>
      <li className="o">
        <span>O(CPU)</span> <strong>{playerResults.oPlayerPoint}</strong>
      </li>
    </ul>
  );
}
