import Canvas from "./Canvas.js";
import PlayerShape from "./PlayerShape.js";

const firstCanvas = document.getElementById("canvas").getContext("2d");

let canvas1 = new Canvas(0, 0, 800, 450, "orange", 0, firstCanvas);
console.log(canvas1.getCurrentWidth);
console.log(canvas1.getCurrentHeight);
console.log(canvas1.getCurrentTime);

let playerShape1 = new PlayerShape(
  50,
  100,
  30,
  50,
  0,
  2 * Math.PI,
  3,
  0,
  "black",
  "green",
  firstCanvas
);

console.log(playerShape1);
const playingTheGame = timestamp => {
  canvas1.clearCanvas();
  playerShape1.xcord =
    playerShape1.getCurrentXcord + playerShape1.getCurrentSpeed;

  canvas1.drawCanvas();
  playerShape1.drawPlayerShape();
  if (timestamp < 2000) {
    window.requestAnimationFrame(playingTheGame);
  }
};

window.requestAnimationFrame(playingTheGame);
