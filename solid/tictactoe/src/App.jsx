import solidLogo from "./assets/solid.svg";
import "./App.css";
import TicTacToe from "./TicTacToe";

function App() {
  return (
    <>
      <div>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
        <TicTacToe />
      </div>
    </>
  );
}

export default App;
