import Canvas from "./canvas.js";
import Rectangle from "./rectangle.js";

const firstCanvas = document.getElementById("canvas").getContext("2d");

let canvas1 = new Canvas(0, 0, 800, 450, "orange", 0, firstCanvas);
let rectangle1 = new Rectangle(
  300,
  50,
  50,
  50,
  5,
  "black",
  "green",
  firstCanvas
);

console.log(rectangle1.getCurrentXcord);
