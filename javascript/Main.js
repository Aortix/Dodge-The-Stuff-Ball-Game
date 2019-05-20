import Canvas from "./Canvas.js";
import playingTheGame from "./playingTheGame.js";
import globalObject from "./globalObject.js";

//Parameters: x-cordinate, y-cordinate, width, height, background-color, time amassed, canvas id, mode
let canvas = new Canvas(0, 0, 1000, 400, "gray", 0, "canvas", 0);

//Block the arrow keys from scrolling with the window scrollbar
window.addEventListener("keydown", e => {
  switch (e.key) {
    case "ArrowUp":
      e.preventDefault();
      break;
    case "ArrowDown":
      e.preventDefault();
      break;
    default:
  }
});

document.getElementById("countdown").style.setProperty(
  "top",
  `${canvas.getCurrentYcord + canvas.getCurrentHeight / 4 - 50}px`
);


//Setting the menu title and buttons positions (mode 0)
globalObject.menuTitle.style.setProperty(
  "top",
  `${canvas.getCurrentYcord + canvas.getCurrentHeight / 4 - 50}px`
);
globalObject.playGameButton.style.setProperty(
  "top",
  `${canvas.getCurrentYcord + canvas.getCurrentHeight / 3}px`
);
globalObject.menuTitle.style.setProperty(
  "margin-left",
  `${canvas.getCurrentXcord / 2}px`
);
globalObject.playGameButton.style.setProperty(
  "margin-left",
  `${canvas.getCurrentXcord / 2}px`
);

//Setting the pause icon and paused title positions (mode 3)
globalObject.gamePausedTitle.style.setProperty(
  "top",
  `${canvas.getCurrentYcord + canvas.getCurrentHeight / 4}px`
);
globalObject.gamePausedTitle.style.setProperty(
  "margin-left",
  `${canvas.getCurrentXcord / 2}px`
);
globalObject.pauseButton.style.setProperty(
  "top",
  `${canvas.getCurrentYcord + 3}px`
);

globalObject.pauseButton.style.setProperty(
  "left",
  `${window.innerWidth -
    (window.innerWidth - (canvas.getCurrentWidth - 100)) +
    window.innerWidth / 2 -
    (canvas.getCurrentWidth - 100) / 2}px`
);

window.onresize = () => {
  globalObject.pauseButton.style.setProperty(
    "left",
    `${window.innerWidth -
      (window.innerWidth - (canvas.getCurrentWidth - 100)) +
      window.innerWidth / 2 -
      (canvas.getCurrentWidth - 100) / 2}px`
  );
};

//Setting the game over title and buttons (mode 2)
globalObject.gameOverTitle.style.setProperty(
  "top",
  `${canvas.getCurrentYcord + canvas.getCurrentHeight / 4 - 50}px`
);
globalObject.retryButton.style.setProperty(
  "top",
  `${canvas.getCurrentYcord + canvas.getCurrentHeight / 3}px`
);
globalObject.menuButton.style.setProperty(
  "top",
  `${canvas.getCurrentYcord + canvas.getCurrentHeight / 2.2}px`
);
globalObject.gameOverTitle.style.setProperty(
  "margin-left",
  `${canvas.getCurrentXcord / 2}px`
);
globalObject.retryButton.style.setProperty(
  "margin-left",
  `${canvas.getCurrentXcord / 2}px`
);
globalObject.menuButton.style.setProperty(
  "margin-left",
  `${canvas.getCurrentXcord / 2}px`
);

playingTheGame(canvas);
