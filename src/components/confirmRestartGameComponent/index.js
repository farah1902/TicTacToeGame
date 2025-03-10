import "./styles/main.css";

export default function ConfirmRestart(props) {
  const { setConfirmRestart, setRestart } = props;
  return (
    <div className="confirm-restart">
      <h1>RESTART GAME?</h1>
      <div className="select">
        <button
          onClick={() => {
            setConfirmRestart(false);
          }}
          className="cancel-button"
        >
          NO,CANCLE
        </button>
        <button
          onClick={() => {
            setRestart((previous) => (previous = previous + 2));
            setConfirmRestart(false);
          }}
          className="restart-button"
        >
          YES,RESTART
        </button>
      </div>
    </div>
  );
}
