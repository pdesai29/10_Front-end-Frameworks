import "./style.css";
import javascriptLogo from "./javascript.svg";
import { initTicTacToe } from "./TicTacToe";
document.querySelector("#app").innerHTML = `
  <div>   
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <div class="tic-tac-toe">
      <div class="board" id="board"></div>
      <div class="status" id="status">
        <p>Next Player: X</p>
      </div>
      <button onclick="resetGame()">Restart Game</button>
    </div>
  </div>
   
`;
initTicTacToe();
