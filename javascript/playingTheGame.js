import PlayerShape from "./PlayerShape.js";

import limitPlayerMovement from "./limitPlayerMovement.js";
import checkForCollisions from "./checkForCollisions.js";
import createEnemies from "./createEnemies.js";
import offTheCanvas from "./offTheCanvas.js";

import {
  playGameButtonFunction,
  retryButtonFunction,
  menuButtonFunction,
  pauseButtonFunction
} from "./eventListenerFunctions.js";
import globalObject from "./globalObject.js";

export const playingTheGame = canvas => {
  //To "reset" the timestamp used in window.requestAnimationFrame
  let start = null;

  //Used to save the current timestamp when clicking the pause button during the game
  let diff = null;

  //The following functions are used to add an event listener to a button, while removing previous event listeners
  //from the previous runs of this function.
  const pGBF = () => {
    globalObject.playGameButton.removeEventListener("click", pGBF, false);
    globalObject.retryButton.removeEventListener("click", rBF, false);
    globalObject.menuButton.removeEventListener("click", mBF, false);
    globalObject.pauseButton.removeEventListener("click", pBF, false);
    playGameButtonFunction(canvas);
  };

  const rBF = () => {
    globalObject.playGameButton.removeEventListener("click", pGBF, false);
    globalObject.retryButton.removeEventListener("click", rBF, false);
    globalObject.menuButton.removeEventListener("click", mBF, false);
    globalObject.pauseButton.removeEventListener("click", pBF, false);
    retryButtonFunction(canvas);
  };

  const mBF = () => {
    globalObject.playGameButton.removeEventListener("click", pGBF, false);
    globalObject.retryButton.removeEventListener("click", rBF, false);
    globalObject.menuButton.removeEventListener("click", mBF, false);
    globalObject.pauseButton.removeEventListener("click", pBF, false);
    menuButtonFunction(canvas);
  };
  const pBF = () => {
    globalObject.playGameButton.removeEventListener("click", pGBF, false);
    globalObject.retryButton.removeEventListener("click", rBF, false);
    globalObject.menuButton.removeEventListener("click", mBF, false);
    globalObject.pauseButton.removeEventListener("click", pBF, false);
    pauseButtonFunction(canvas);
  };

  //Determines the state of the application based off the mode the canvas is in
  switch (canvas.getCurrentMode) {
    case 0:
      //The Start Menu
      console.log("Start Menu");
      document
        .getElementById(canvas.getCurrentCanvasId)
        .classList.toggle("menu");
      globalObject.playGameButton.addEventListener("click", pGBF, false);
      break;
    case 1:
      //Game Running
      console.log("Game Screen");

      //For limiting where an object can appear on the canvas after it has gone off of it
      let offCanvasTracker = {
        y: canvas.getCurrentWidth,
        h: canvas.getCurrentHeight / 2,
        i: Math.floor(Math.random() * 2),
        p: Math.floor(Math.random() * 2)
      };

      //Create the player, for now this is up to the developer - might extend to user later on
      let player1 = new PlayerShape(
        canvas.getCurrentXcord + 20,
        canvas.getCurrentYcord + 20,
        10,
        0,
        0,
        360,
        5,
        "white",
        "white",
        canvas.getCurrentCanvasContext
      );

      //Create Enemies
      let enemyRectangles = createEnemies(canvas, "Rectangle");
      let enemyWalls = createEnemies(canvas, "Wall");
      let enemyCircles = createEnemies(canvas, "Circle");
      let enemyMagnets = createEnemies(canvas, "Magnet");
      let enemyZigzags = createEnemies(canvas, "Zigzag");

      //Get initial speeds of enemies - this will be used when you unpause (speed is set to 0 for a pause) the game to
      //return the speed values
      let player1Speed = player1.getCurrentSpeed;

      let rectangleSpeeds = [];
      enemyRectangles.forEach(rectangle => {
        rectangleSpeeds.push(rectangle.getCurrentSpeed);
      });

      let wallSpeeds = [];
      enemyWalls.forEach(wall => {
        wallSpeeds.push(wall.getCurrentSpeed);
      });

      let circleSpeeds = [];
      enemyCircles.forEach(circle => {
        circleSpeeds.push(circle.getCurrentSpeed);
      });

      let magnetSpeeds = [];
      enemyMagnets.forEach(magnet => {
        magnetSpeeds.push(magnet.getCurrentSpeed);
      });

      let zigzagSpeeds = [];
      enemyZigzags.forEach(zigzag => {
        zigzagSpeeds.push(zigzag.getCurrentSpeed);
      });

      //Function for actually running the game
      const runningTheGame = timestamp => {
        if (canvas.getCurrentMode === 1) {
          //So paused button can be clicked on
          globalObject.pauseButton.addEventListener("click", pBF, false);

          //Stops player from going out of the canvas
          limitPlayerMovement(canvas, player1, 1);

          if (diff !== null) {
            diff = null;
          }

          if (start == null) {
            start = timestamp;
          }

          //Displays the time the game has been running on the screen in seconds
          document.getElementById("time").innerHTML = (
            (timestamp - start) /
            1000
          ).toPrecision(4);

          //Clearing and redrawing the canvas
          canvas.clearCanvas();
          canvas.drawCanvas();

          //Clearing, redrawing, and resetting the speed (if necessary) of the player object
          player1.clearObject();
          player1.drawPlayerShape();
          if (player1.getCurrentSpeed === 0) {
            player1.speed = player1Speed;
          }

          //The following loops are the necessary function calls for each enemy object that is in the game
          enemyRectangles.forEach((rectangle, index) => {
            rectangle.clearObject();
            rectangle.drawRectangle();
            if (rectangle.getCurrentSpeed === 0) {
              rectangle.speed = rectangleSpeeds[index];
            }
            rectangle.moveRectangle();
            if (
              checkForCollisions(
                player1.getCurrentLocation,
                rectangle.getCurrentLocation
              ) === true
            ) {
              player1.hit = 1;
            }
          });

          enemyWalls.forEach((wall, index) => {
            wall.clearObject();
            wall.drawWall();
            if (wall.getCurrentSpeed === 0) {
              wall.speed = wallSpeeds[index];
            }
            wall.moveWall();
            if (
              checkForCollisions(
                player1.getCurrentLocation,
                wall.getCurrentLocation
              ) === true
            ) {
              player1.hit = 1;
            }
          });

          enemyCircles.forEach((circle, index) => {
            circle.clearObject();
            circle.drawCircle();
            if (circle.getCurrentSpeed === 0) {
              circle.speed = circleSpeeds[index];
            }
            circle.moveCircle();
            if (
              checkForCollisions(
                player1.getCurrentLocation,
                circle.getCurrentLocation
              ) === true
            ) {
              player1.hit = 1;
            }
          });

          enemyMagnets.forEach((magnet, index) => {
            magnet.clearObject();
            magnet.drawMagnet();
            if (magnet.getCurrentSpeed === 0) {
              magnet.speed = magnetSpeeds[index];
            }
            magnet.moveMagnet();
            if (
              checkForCollisions(
                player1.getCurrentLocation,
                magnet.getCurrentLocation
              ) === true
            ) {
              player1.hit = 1;
            }
          });

          enemyZigzags.forEach((zigzag, index) => {
            zigzag.clearObject();
            zigzag.drawZigzag();
            if (zigzag.getCurrentSpeed === 0) {
              zigzag.speed = zigzagSpeeds[index];
            }
            zigzag.moveZigzag();
            if (
              checkForCollisions(
                player1.getCurrentLocation,
                zigzag.getCurrentLocation
              ) === true
            ) {
              player1.hit = 1;
            }
          });

          //The following if statements check if each enemy object is outside of the canvas, and they are their
          //positions are changed and a new offCanvasTracker is returned
          if (
            offTheCanvas(canvas, enemyRectangles, player1, offCanvasTracker) !=
            null
          ) {
            return Object.assign(
              offCanvasTracker,
              offTheCanvas(canvas, enemyRectangles, player1, offCanvasTracker)
            );
          }

          if (
            offTheCanvas(canvas, enemyWalls, player1, offCanvasTracker) != null
          ) {
            return Object.assign(
              offCanvasTracker,
              offTheCanvas(canvas, enemyWalls, player1, offCanvasTracker)
            );
          }

          if (
            offTheCanvas(canvas, enemyCircles, player1, offCanvasTracker) !=
            null
          ) {
            return Object.assign(
              offCanvasTracker,
              offTheCanvas(canvas, enemyCircles, player1, offCanvasTracker)
            );
          }

          if (
            offTheCanvas(canvas, enemyMagnets, player1, offCanvasTracker) !=
            null
          ) {
            return Object.assign(
              offCanvasTracker,
              offTheCanvas(canvas, enemyMagnets, player1, offCanvasTracker)
            );
          }

          if (
            offTheCanvas(canvas, enemyZigzags, player1, offCanvasTracker) !=
            null
          ) {
            return Object.assign(
              offCanvasTracker,
              offTheCanvas(canvas, enemyZigzags, player1, offCanvasTracker)
            );
          }

          //Continue running the game if conditions are met
          if (timestamp - start < 15000 && player1.getCurrentHit !== 1) {
            window.requestAnimationFrame(runningTheGame);
          }

          //End the game if conditions are met
          if (timestamp - start >= 15000 || player1.getCurrentHit === 1) {
            //The following loops delete the object properties for each object in the game
            player1.deleteObject();
            enemyRectangles.forEach(rectangle => {
              rectangle.deleteObject();
            });
            enemyWalls.forEach(wall => {
              wall.deleteObject();
            });
            enemyCircles.forEach(circle => {
              circle.deleteObject();
            });
            enemyMagnets.forEach(magnet => {
              magnet.deleteObject();
            });
            enemyZigzags.forEach(zigzag => {
              zigzag.deleteObject();
            });

            globalObject.pauseButton.removeEventListener("click", pBF, false);
            start = null;
            player1.hit = 0;
            canvas.mode = 2;
            globalObject.pauseButton.style.setProperty("display", "none");

            playingTheGame(canvas);
          }
        } else if (canvas.getCurrentMode === 3) {
          if (diff === null) {
            diff = timestamp - start;
          }
          start = timestamp - diff;

          player1.speed = 0;
          enemyRectangles.forEach(rectangle => {
            rectangle.speed = 0;
          });
          enemyWalls.forEach(wall => {
            wall.speed = 0;
          });
          enemyCircles.forEach(circle => {
            circle.speed = 0;
          });
          enemyMagnets.forEach(magnet => {
            magnet.speed = 0;
          });
          enemyZigzags.forEach(zigzag => {
            zigzag.speed = 0;
          });

          globalObject.pauseButton.addEventListener("click", pBF, false);
          window.requestAnimationFrame(runningTheGame);
        }
      };

      window.requestAnimationFrame(runningTheGame);
      break;
    case 2:
      //Game Over Screen
      console.log("Game over");
      document
        .getElementById(canvas.getCurrentCanvasId)
        .classList.toggle("menu");
      globalObject.gameOverItemsToEnable.forEach(items => {
        return items.style.setProperty("display", "block");
      });
      globalObject.retryButton.addEventListener("click", rBF, false);
      globalObject.menuButton.addEventListener("click", mBF, false);
      break;
    default:
      break;
  }
};

export default playingTheGame;
