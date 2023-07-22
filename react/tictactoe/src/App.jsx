import reactLogo from "./assets/react.svg";
import "./App.css";
import TicTacToe from "./TicTacToe";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <TicTacToe />
      </div>
    </>
  );
}

export default App;
