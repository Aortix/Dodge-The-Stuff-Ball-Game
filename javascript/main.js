import Canvas from "./canvas.js";
import playingTheGame from "./playingTheGame.js";
import globalObject from "./globalObject.js";

//Parameters: x-cordinate, y-cordinate, width, height, background-color, time amassed, canvas id, mode
let canvas = new Canvas(0, 0, 1000, 400, "rgb(139, 0, 0)", 0, "canvas", 0);

document.querySelector(".main-container").style.width = "1000px";

const arrayFromNodeList = Array.from(
  document.querySelector(".menu-colors").getElementsByTagName("li")
);
arrayFromNodeList.forEach(node => {
  node.addEventListener("click", () => {
    canvas.clearCanvas();
    document.getElementsByClassName(
      "canvas-container"
    )[0].style.backgroundColor = `${node.style.backgroundColor}`;
    document.getElementsByClassName(
      "menu-change_canvas_color"
    )[0].style.backgroundColor = `${node.style.backgroundColor}`;
    document.getElementsByClassName(
      "menu-change_object_amount"
    )[0].style.backgroundColor = `${node.style.backgroundColor}`;
    canvas.bgColor = node.style.backgroundColor;
    canvas.drawCanvas();
  });
});

document
  .querySelector(".menu-change_canvas_color")
  .addEventListener("click", () => {
    document.querySelector(".menu-colors").classList.toggle("hide_menu_items");
  });
document.querySelector(".menu-colors").addEventListener("click", () => {
  document.querySelector(".menu-colors").classList.toggle("hide_menu_items");
});

document
  .querySelector(".menu-change_object_amount")
  .addEventListener("click", () => {
    document.querySelector(".menu-objects").classList.toggle("hide_menu_items");
  });
document.querySelector(".menu-objects").addEventListener("click", () => {
  document.querySelector(".menu-objects").classList.toggle("hide_menu_items");
});

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

document
  .getElementById("countdown")
  .style.setProperty(
    "top",
    `${canvas.getCurrentYcord + canvas.getCurrentHeight / 4 - 50}px`
  );

//Setting the menu title and buttons positions (mode 0)
globalObject.menuTitle.style.setProperty(
  "top",
  `${canvas.getCurrentYcord + canvas.getCurrentHeight / 5 - 80}px`
);
globalObject.playGameButton.style.setProperty(
  "top",
  `${canvas.getCurrentYcord + 2 * (canvas.getCurrentHeight / 5) - 35}px`
);
globalObject.colorButton.style.setProperty(
  "top",
  `${canvas.getCurrentYcord + canvas.getCurrentHeight - 130}px`
);
globalObject.objectsButton.style.setProperty(
  "top",
  `${canvas.getCurrentYcord + canvas.getCurrentHeight - 130}px`
);
globalObject.menuColors.style.setProperty(
  "top",
  `${canvas.getCurrentYcord + canvas.getCurrentHeight - 65}px`
);
globalObject.menuObjects.style.setProperty(
  "top",
  `${canvas.getCurrentYcord + canvas.getCurrentHeight - 65}px`
);
globalObject.menuTitle.style.setProperty(
  "left",
  `${canvas.getCurrentXcord + canvas.getCurrentWidth / 2 - 200}px`
);
globalObject.playGameButton.style.setProperty(
  "margin-left",
  `${canvas.getCurrentXcord / 2}px`
);
globalObject.colorButton.style.setProperty(
  "left",
  `${canvas.getCurrentXcord + canvas.getCurrentWidth / 5}px`
);
globalObject.objectsButton.style.setProperty(
  "left",
  `${canvas.getCurrentWidth - canvas.getCurrentWidth / 5 - 205}px`
);
globalObject.menuColors.style.setProperty(
  "left",
  `${canvas.getCurrentXcord + canvas.getCurrentWidth / 5}px`
);
globalObject.menuObjects.style.setProperty(
  "left",
  `${canvas.getCurrentWidth - canvas.getCurrentWidth / 5 - 205}px`
);

//Setting the pause icon and paused title positions (mode 3)
globalObject.gamePausedTitle.style.setProperty(
  "top",
  `${canvas.getCurrentYcord + canvas.getCurrentHeight / 4 - 60}px`
);
globalObject.pauseMenuButton.style.setProperty(
  "top",
  `${canvas.getCurrentYcord + canvas.getCurrentHeight / 2 - 60}px`
);
globalObject.gamePausedTitle.style.setProperty(
  "margin-left",
  `${canvas.getCurrentXcord / 2}px`
);
globalObject.pauseMenuButton.style.setProperty(
  "left",
  `${canvas.getCurrentWidth / 2 - 65}px`
);
globalObject.pauseButton.style.setProperty(
  "top",
  `${canvas.getCurrentYcord + 3}px`
);

globalObject.pauseButton.style.setProperty(
  "left",
  `${canvas.getCurrentWidth - 35}px`
);

window.onresize = () => {
  globalObject.pauseButton.style.setProperty(
    "left",
    `${canvas.getCurrentWidth - 35}px`
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

playingTheGame(canvas, "Normal");
