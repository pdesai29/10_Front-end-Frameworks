import { component$ } from "@builder.io/qwik";

import qwikLogo from "./assets/qwik.svg";
import "./app.css";

import TicTacToe from "./TicTacToe";

export const App = component$(() => {
  return (
    <>
      <div>
        <a href="https://qwik.builder.io" target="_blank">
          <img src={qwikLogo} class="logo qwik" alt="Qwik logo" />
        </a>
        <TicTacToe />
      </div>
    </>
  );
});
