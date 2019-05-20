import Rectangle from "./Enemies/Rectangle.js";
import Wall from "./Enemies/Wall.js";
import Circle from "./Enemies/Circle.js";
import Magnet from "./Enemies/Magnet.js";
import Belt from "./Enemies/Belt.js";

const createEnemies = (canvas, enemy, amount) => {
  switch (enemy) {
    case "Rectangle":
      let enemyRectangles = [];
      let enemyRectanglesAmount = amount || Math.floor(Math.random() * 2 + 3);
      for (let i = 0; i < enemyRectanglesAmount; i++) {
        enemyRectangles.push(
          new Rectangle(
            canvas.getCurrentWidth + 41,
            Math.floor(Math.random() * (canvas.getCurrentHeight - 50) + 50),
            Math.floor(Math.random() * (40 - 20) + 20),
            Math.floor(Math.random() * (50 - 20) + 20),
            0,
            0,
            Math.floor(Math.random() * (6 - 4) + 4),
            "white",
            "white",
            canvas.getCurrentCanvasContext
          )
        );
      }
      return enemyRectangles;
    case "Circle":
      let enemyCircles = [];
      let enemyCirclesAmount = amount || Math.floor(Math.random() * 2 + 1);
      for (let i = 0; i < enemyCirclesAmount; i++) {
        enemyCircles.push(
          new Circle(
            canvas.getCurrentWidth + 16,
            Math.floor(Math.random() * (canvas.getCurrentHeight - 15) + 15),
            Math.floor(Math.random() * (15 - 10) + 10),
            0,
            0,
            360,
            Math.floor(Math.random() * (6 - 4) + 4),
            "white",
            "white",
            canvas.getCurrentCanvasContext
          )
        );
      }
      return enemyCircles;
    case "Magnet":
      let enemyMagnets = [];
      let enemyMagnetsAmount = amount || Math.floor(Math.random() * 2 + 1);
      for (let i = 0; i < enemyMagnetsAmount; i++) {
        enemyMagnets.push(
          new Magnet(
            canvas.getCurrentWidth + 70,
            Math.floor(Math.random() * (canvas.getCurrentHeight - 70) + 70),
            Math.floor(Math.random() * (35 - 25) + 25),
            0,
            0,
            180,
            Math.floor(Math.random() * (6 - 4) + 4),
            "white",
            "white",
            canvas.getCurrentCanvasContext
          )
        );
      }
      return enemyMagnets;
    case "Wall":
      let enemyWalls = [];
      let enemyWallsAmount = amount || Math.floor(Math.random() * 2 + 1);
      for (let i = 0; i < enemyWallsAmount; i++) {
        enemyWalls.push(
          new Wall(
            canvas.getCurrentWidth + 141,
            Math.floor(Math.random() * (canvas.getCurrentHeight - 140) + 140),
            0,
            Math.floor(Math.random() * (140 - 100) + 100),
            0,
            0,
            Math.floor(Math.random() * (6 - 4) + 4),
            "white",
            "white",
            canvas.getCurrentCanvasContext
          )
        );
      }
      return enemyWalls;
    case "Belt":
      let enemyBelts = [];
      let enemyBeltsAmount = amount || Math.floor(Math.random() * 2 + 3);
      for (let i = 0; i < enemyBeltsAmount; i++) {
        enemyBelts.push(
          new Belt(
            canvas.getCurrentWidth + 50,
            Math.floor(Math.random() * (canvas.getCurrentHeight - 300) + 300),
            20,
            30,
            0,
            0,
            Math.floor(Math.random() * (6 - 4) + 4),
            "white",
            "white",
            canvas.getCurrentCanvasContext
          )
        );
      }
      return enemyBelts;
    default:
      break;
  }
};

export default createEnemies;
