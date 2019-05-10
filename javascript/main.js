import Canvas from "./Canvas.js";
import PlayerShape from "./PlayerShape.js";
import Rectangle from "./Enemies/Rectangle.js";
import keyboardKeys from "./keyboardKeys.js";

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
  360,
  3,
  0,
  0,
  "black",
  "green",
  firstCanvas
);

let rectangle1 = new Rectangle(
  canvas1.getCurrentWidth,
  100,
  30,
  20,
  0,
  0,
  2,
  0,
  0,
  "black",
  "green",
  firstCanvas
);

window.onkeydown = e => {
  switch (e.key) {
    case "ArrowLeft":
      return (playerShape1.xcord -= 10);
    case "ArrowUp":
      return (playerShape1.ycord -= 10);
    case "ArrowRight":
      return (playerShape1.xcord += 10);
    case "ArrowDown":
      return (playerShape1.ycord += 10);
    default:
      console.log("Random button clicked");
  }
};

const checkForCollisions = (playerArray, otherArray) => {
  playerArray.forEach(playerObjects => {
    otherArray.forEach(otherArrayObjects => {
      Object.values(playerObjects).map(playerObj => {
        if (Object.values(otherArrayObjects).includes(playerObj)) {
          return true;
        } else {
          return false;
        }
      });
    });
  });
};

const playingTheGame = timestamp => {
  playerShape1.clearPlayerShape();
  rectangle1.clearRectangle();

  canvas1.clearCanvas();
  canvas1.drawCanvas();

  playerShape1.drawPlayerShape();
  rectangle1.drawRectangle();

  playerShape1.movePlayerShape();
  rectangle1.moveRectangle();

  if (
    checkForCollisions(
      playerShape1.getCurrentLocation,
      rectangle1.getCurrentLocation
    ) === true
  ) {
    console.log("Does this get called?");
    playerShape1.hit = 1;
  }

  if (timestamp < 2800 && playerShape1.getCurrentHit !== 1) {
    window.requestAnimationFrame(playingTheGame);
  }
};

window.requestAnimationFrame(playingTheGame);
