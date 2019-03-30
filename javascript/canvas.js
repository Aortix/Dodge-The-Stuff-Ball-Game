import Circle from "./circle.js";

let circle1 = new Circle(60, 60);

let h1Click = document.getElementById("title");
h1Click.addEventListener("click", e => {
  console.log(circle1.currWidth, circle1.currHeight);
});

const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

canvasContext.fillStyle = "green";
canvasContext.fillRect(0, 0, 300, 200);

circle1.drawCircle(canvasContext, "blue", 60, 60);
