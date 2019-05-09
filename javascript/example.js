import mainShape from "./mainShape.js";

let circle1 = new mainShape(100, 100);

let h1Click = document.getElementById("title");
h1Click.addEventListener("click", e => {
  console.log(circle1.currWidth, circle1.currHeight);
});

const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

canvasContext.fillRect(0, 0, 300, 200);

var start = null;

const movingShape = timestamp => {
  start = timestamp / 1000;

  console.log(start);
  canvasContext.clearRect(0, 0, 300, 200);
  canvasContext.fillRect(0, 0, 300, 200);
  circle1.drawShape(
    canvasContext,
    "#000000",
    "#ffffff",
    60 + start * 1.1,
    60 + start * 1.1
  );
  canvasContext.save();
  if (start < 2) {
    window.requestAnimationFrame(movingShape);
  }
};

window.requestAnimationFrame(movingShape);
