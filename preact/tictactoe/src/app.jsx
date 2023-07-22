import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import "./app.css";
import TicTacToe from "./TicTacToe";
export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <TicTacToe />
    </>
  );
}
