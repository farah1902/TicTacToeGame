import "./styles/main.css";
import GameCounter from "../../components/gameCounter";
import Header from "../../components/header";
import { Turn, RestartGame } from "../../context/globalGameProps";
import Table from "../../components/table";
import { GameResultsContext } from "../../context/globalGameProps";

export default function Main() {
  return (
    <Turn>
      <RestartGame>
        <GameResultsContext>
          <div className="main ">
            <Header />
            <ul className="table">
              <Table />
              <GameCounter />
            </ul>
          </div>
        </GameResultsContext>
      </RestartGame>
    </Turn>
  );
}
