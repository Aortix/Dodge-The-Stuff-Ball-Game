import Canvas from "./Canvas.js";
import playingTheGame from "./playingTheGame.js";
import globalObject from "./globalObject.js";

//Parameters: x-cordinate, y-cordinate, width, height, background-color, time amassed, canvas id, mode
let canvas = new Canvas(0, 0, 900, 400, "gray", 0, "canvas", 0);

document
  .querySelector(".menu-title")
  .style.setProperty("top", `${canvas.getCurrentHeight / 4}px`);
globalObject.playGameButton.style.setProperty(
  "top",
  `${canvas.getCurrentHeight / 2}px`
);
document
  .getElementById("game_paused-title")
  .style.setProperty("top", `${canvas.getCurrentHeight / 4}px`);
document
  .getElementById("game_paused-icon")
  .style.setProperty(
    "top",
    `${canvas.getCurrentYcord + window.innerHeight / 100}px`
  );

window.onresize = () => {
  document
    .getElementById("game_paused-icon")
    .style.setProperty(
      "left",
      `${window.innerWidth -
        (window.innerWidth - (canvas.getCurrentWidth - 100)) +
        window.innerWidth / 2 -
        (canvas.getCurrentWidth - 100) / 2}px`
    );
};
document
  .getElementById("game_paused-icon")
  .style.setProperty(
    "left",
    `${window.innerWidth -
      (window.innerWidth - (canvas.getCurrentWidth - 100)) +
      window.innerWidth / 2 -
      (canvas.getCurrentWidth - 100) / 2}px`
  );

playingTheGame(canvas);
