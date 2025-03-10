import "./styles/main.css";
import { useContext } from "react";
import { TurnOfPlayer } from "../../context/globalGameProps";

export default function Box(props) {
  const { children, setIdE, id, win, turn } = props;
  const { setTurn } = useContext(TurnOfPlayer);
  return (
    <li
      onClick={() => {
        if (setIdE) {
          setIdE((previous) => {
            return { ...previous, idE: id };
          });
          // change icon of header by depending on the user click
          setTurn((perv) => (perv === 1 ? 2 : 1));
        }
      }}
      className={win ? (turn === 1 ? "box win x" : "box win o") : "box"}
    >
      {children}
    </li>
  );
}
