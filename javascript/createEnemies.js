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
            canvas.getCurrentWidth - 20,
            Math.floor(
              Math.random() *
                (canvas.getCurrentHeight -
                  Math.floor(Math.random() * (40 - 20) + 20)) +
                Math.floor(Math.random() * (40 - 20) + 20)
            ),
            Math.floor(Math.random() * (40 - 20) + 20),
            Math.floor(Math.random() * (40 - 20) + 20),
            0,
            0,
            Math.floor(Math.random() * (5 - 2) + 2),
            "white",
            "white",
            canvas.getCurrentCanvasContext
          )
        );
      }
      return enemyRectangles;
    case "Circle":
      let enemyCircles = [];
      let enemyCirclesAmount = amount || Math.floor(Math.random() * 2 + 3);
      for (let i = 0; i < enemyCirclesAmount; i++) {
        enemyCircles.push(
          new Circle(
            canvas.getCurrentWidth + 5,
            Math.floor(Math.random() * (canvas.getCurrentHeight - 5) + 5),
            10,
            0,
            0,
            360,
            4,
            "white",
            "white",
            canvas.getCurrentCanvasContext
          )
        );
      }
      return enemyCircles;
    case "Magnet":
      let enemyMagnets = [];
      let enemyMagnetsAmount = amount || Math.floor(Math.random() * 2 + 3);
      for (let i = 0; i < enemyMagnetsAmount; i++) {
        enemyMagnets.push(
          new Magnet(
            canvas.getCurrentWidth + 5,
            Math.floor(Math.random() * (canvas.getCurrentHeight - 5) + 5),
            25,
            0,
            0,
            180,
            4,
            "white",
            "white",
            canvas.getCurrentCanvasContext
          )
        );
      }
      return enemyMagnets;
    case "Wall":
      let enemyWalls = [];
      let enemyWallsAmount = amount || Math.floor(Math.random() * 2 + 3);
      for (let i = 0; i < enemyWallsAmount; i++) {
        enemyWalls.push(
          new Wall(
            canvas.getCurrentWidth + 5,
            Math.floor(Math.random() * (canvas.getCurrentHeight - 5) + 5),
            Math.floor(Math.random() * (20 - 10) + 10),
            Math.floor(Math.random() * (120 - 80) + 60),
            0,
            0,
            Math.floor(Math.random() * (5 - 2) + 2),
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
            canvas.getCurrentWidth + 5,
            Math.floor(Math.random() * (canvas.getCurrentHeight - 100) + 100),
            20,
            30,
            0,
            0,
            Math.floor(Math.random() * (5 - 2) + 2),
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
