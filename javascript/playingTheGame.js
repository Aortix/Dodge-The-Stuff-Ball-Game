import PlayerShape from "./PlayerShape.js";
import Line from "./Line.js";

import limitPlayerMovement from "./limitPlayerMovement.js";
import checkForCollisions from "./checkForCollisions.js";
import createEnemies from "./createEnemies.js";
import offTheCanvas from "./offTheCanvas.js";

import {
  playGameButtonFunction,
  retryButtonFunction,
  menuButtonFunction,
  pauseButtonFunction,
  pauseMenuButtonFunction,
  addingInvulnerability
} from "./eventListenerFunctions.js";
import globalObject from "./globalObject.js";

export let playingTheGame = (canvas, difficulty) => {
  let enemyRectangles = null;
  let enemyWalls = null;
  let enemyCircles = null;
  let enemyBelts = null;
  //To "reset" the timestamp used in window.requestAnimationFrame
  let start = null;

  //Used to save the current timestamp when clicking the pause button during the game
  let diff = null;

  let level = 0;
  let state = 0;
  let invincibilityStocks = 0;
  let invincibilityTimer = 35000;
  let speedModifier = 0;
  let keyFPressed = false;
  //The following functions are used to add an event listener to a button, while removing previous event listeners
  //from the previous runs of this function.
  const pGBF = () => {
    globalObject.playGameButton.removeEventListener("click", pGBF, false);
    globalObject.retryButton.removeEventListener("click", rBF, false);
    globalObject.menuButton.removeEventListener("click", mBF, false);
    globalObject.pauseButton.removeEventListener("click", pBF, false);
    globalObject.pauseMenuButton.removeEventListener("click", pMBF, false);
    window.removeEventListener("keydown", addInvulnerability, false);
    playGameButtonFunction(canvas, difficulty);
  };

  const rBF = () => {
    globalObject.playGameButton.removeEventListener("click", pGBF, false);
    globalObject.retryButton.removeEventListener("click", rBF, false);
    globalObject.menuButton.removeEventListener("click", mBF, false);
    globalObject.pauseButton.removeEventListener("click", pBF, false);
    globalObject.pauseMenuButton.removeEventListener("click", pMBF, false);
    window.removeEventListener("keydown", addInvulnerability, false);
    retryButtonFunction(canvas, difficulty);
  };

  const mBF = () => {
    globalObject.playGameButton.removeEventListener("click", pGBF, false);
    globalObject.retryButton.removeEventListener("click", rBF, false);
    globalObject.menuButton.removeEventListener("click", mBF, false);
    globalObject.pauseButton.removeEventListener("click", pBF, false);
    globalObject.pauseMenuButton.removeEventListener("click", pMBF, false);
    window.removeEventListener("keydown", addInvulnerability, false);
    menuButtonFunction(canvas, difficulty);
  };
  const pBF = () => {
    globalObject.playGameButton.removeEventListener("click", pGBF, false);
    globalObject.retryButton.removeEventListener("click", rBF, false);
    globalObject.menuButton.removeEventListener("click", mBF, false);
    globalObject.pauseButton.removeEventListener("click", pBF, false);
    globalObject.pauseMenuButton.removeEventListener("click", pMBF, false);
    window.removeEventListener("keydown", addInvulnerability, false);
    pauseButtonFunction(canvas);
  };
  const pMBF = () => {
    globalObject.playGameButton.removeEventListener("click", pGBF, false);
    globalObject.retryButton.removeEventListener("click", rBF, false);
    globalObject.menuButton.removeEventListener("click", mBF, false);
    globalObject.pauseButton.removeEventListener("click", pBF, false);
    globalObject.pauseMenuButton.removeEventListener("click", pMBF, false);
    window.removeEventListener("keydown", addInvulnerability, false);
    pauseMenuButtonFunction(canvas, difficulty);
  };

  const addInvulnerability = e => {
    globalObject.playGameButton.removeEventListener("click", pGBF, false);
    globalObject.retryButton.removeEventListener("click", rBF, false);
    globalObject.menuButton.removeEventListener("click", mBF, false);
    globalObject.pauseButton.removeEventListener("click", pBF, false);
    globalObject.pauseMenuButton.removeEventListener("click", pMBF, false);
    window.removeEventListener("keydown", addInvulnerability, false);
    if (e.code === "KeyF" && invincibilityStocks > 0 && keyFPressed !== true) {
      keyFPressed = true;
      invincibilityStocks -= 1;
      state = 1;
      setTimeout(() => {
        state = 0;
      }, 1000);
      setTimeout(() => {
        state = 1;
      }, 1250);
      setTimeout(() => {
        state = 0;
      }, 2000);
      setTimeout(() => {
        state = 1;
      }, 2300);
      setTimeout(() => {
        state = 0;
      }, 2500);
      setTimeout(() => {
        state = 1;
      }, 2700);
      setTimeout(() => {
        state = 0;
      }, 2800);
      setTimeout(() => {
        state = 1;
      }, 2900);
      setTimeout(() => {
        state = 0;
        keyFPressed = false;
      }, 3000);
    }
  };

  const array2FromNodeList = Array.from(
    document.querySelector(".menu-objects").getElementsByTagName("li")
  );
  array2FromNodeList.forEach(node => {
    node.addEventListener("click", () => {
      if (node.innerHTML === "Normal") {
        document
          .querySelector(".normal-object")
          .style.setProperty("display", "none");
        document
          .querySelector(".normal-object-FA")
          .style.setProperty("display", "block");
        document
          .querySelector(".low-object-FA")
          .style.setProperty("display", "none");
        document
          .querySelector(".low-object")
          .style.setProperty("display", "block");
        difficulty = "Normal";
      } else if (node.innerHTML === "Alt-Normal") {
        document
          .querySelector(".normal-object")
          .style.setProperty("display", "block");
        document
          .querySelector(".normal-object-FA")
          .style.setProperty("display", "none");
        document
          .querySelector(".low-object-FA")
          .style.setProperty("display", "block");
        document
          .querySelector(".low-object")
          .style.setProperty("display", "none");
        difficulty = "Alt-Normal";
      }
    });
  });

  //Determines the state of the application based off the mode the canvas is in
  switch (canvas.getCurrentMode) {
    case 0:
      //The Start Menu
      console.log("Start Menu");
      document.querySelector(".main-stock_number").innerHTML = "0";
      invincibilityStocks = 0;
      invincibilityTimer = 35000;
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

      let line1 = new Line(
        player1.getCurrentXcord - player1.getCurrentWidthOrRadius - 5,
        canvas.getCurrentYcord,
        0,
        canvas.getCurrentHeight,
        0,
        0,
        0,
        "white",
        "white",
        canvas.getCurrentCanvasContext
      );

      //Create Enemies
      if (difficulty === "Normal") {
        enemyRectangles = createEnemies(canvas, "Rectangle", 3);
        enemyWalls = createEnemies(canvas, "Wall", 1);
        enemyCircles = createEnemies(canvas, "Circle", 2);
        enemyBelts = createEnemies(canvas, "Belt", 1);
      } else if (difficulty === "Alt-Normal") {
        enemyRectangles = createEnemies(canvas, "Rectangle", 3);
        enemyWalls = createEnemies(canvas, "Wall", 2);
        enemyCircles = createEnemies(canvas, "Circle", 2);
        enemyBelts = createEnemies(canvas, "Belt", 0);
      }

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

      let beltSpeeds = [];
      if (enemyBelts !== null) {
        enemyBelts.forEach(belt => {
          beltSpeeds.push(belt.getCurrentSpeed);
        });
      }

      document
        .getElementById("countdown")
        .style.setProperty("display", "block");
      document.getElementById("countdown").innerHTML = "3";
      setTimeout(
        () => (document.getElementById("countdown").innerHTML = "2"),
        1000
      );
      setTimeout(
        () => (document.getElementById("countdown").innerHTML = "1"),
        2000
      );
      setTimeout(() => {
        document
          .getElementById("countdown")
          .style.setProperty("display", "none");
        window.requestAnimationFrame(runningTheGame);
      }, 3000);

      //Function for actually running the game
      const runningTheGame = timestamp => {
        //So paused button can be clicked on
        globalObject.pauseButton.addEventListener("click", pBF, false);

        //Adding invincibility with F
        window.addEventListener("keydown", addInvulnerability, false);

        if (keyFPressed === true && player1.getCurrentInvincibility !== 1) {
          addingInvulnerability(player1, state);
        }

        //Stops player from going out of the canvas
        limitPlayerMovement(canvas, player1, level);

        if (player1.keyClicks.up === true) {
          player1.ycord -= player1.speed;
        } else if (player1.keyClicks.down === true) {
          player1.ycord += player1.speed;
        }

        if (canvas.getCurrentMode === 1) {
          if (diff != null) {
            diff = null;
          }

          if (start === null) {
            start = timestamp;
          } else {
            if (Math.floor(timestamp - start) / invincibilityTimer > 1) {
              console.log("Invincibility added");
              document.querySelector(".main-stock_number").innerHTML = (
                Number(document.querySelector(".main-stock_number").innerHTML) +
                1
              ).toString();
              invincibilityStocks += 1;
              invincibilityTimer += 20000;
            }
          }

          //Displays the time the game has been running on the screen in seconds
          document.getElementById("time").innerHTML =
            Math.floor((timestamp - start) / 1000) + "s / 150s";

          //Clearing and redrawing the canvas
          canvas.clearCanvas();
          canvas.drawCanvas();

          //Clearing, redrawing, and resetting the speed (if necessary) of the player object
          player1.clearObject();
          player1.drawPlayerShape(state);
          switch (level) {
            case 0:
              if (Math.floor((timestamp - start) / 1000) > 15) {
                keyFPressed = true;
                state = 1;
                player1.invincibility = 1;
                player1.xcord = Math.floor(canvas.getCurrentWidth / 4);
                line1.xcord = Math.floor(canvas.getCurrentWidth / 4);
                level = 1;
                speedModifier += 1;
                setTimeout(() => {
                  state = 0;
                }, 1000);
                setTimeout(() => {
                  state = 1;
                }, 1250);
                setTimeout(() => {
                  state = 0;
                }, 2000);
                setTimeout(() => {
                  state = 1;
                }, 2300);
                setTimeout(() => {
                  state = 0;
                }, 2500);
                setTimeout(() => {
                  state = 1;
                }, 2700);
                setTimeout(() => {
                  state = 0;
                }, 2800);
                setTimeout(() => {
                  state = 1;
                }, 2900);
                setTimeout(() => {
                  state = 0;
                  player1.invincibility = 0;
                  keyFPressed = false;
                }, 3000);
              }
            case 1:
              if (Math.floor((timestamp - start) / 1000) > 30) {
                keyFPressed = true;
                state = 1;
                player1.invincibility = 1;
                player1.xcord = Math.floor((2 * canvas.getCurrentWidth) / 5);
                line1.xcord = Math.floor((2 * canvas.getCurrentWidth) / 5);
                level = 2;
                speedModifier += 1;
                setTimeout(() => {
                  state = 0;
                }, 1000);
                setTimeout(() => {
                  state = 1;
                }, 1250);
                setTimeout(() => {
                  state = 0;
                }, 2000);
                setTimeout(() => {
                  state = 1;
                }, 2300);
                setTimeout(() => {
                  state = 0;
                }, 2500);
                setTimeout(() => {
                  state = 1;
                }, 2700);
                setTimeout(() => {
                  state = 0;
                }, 2800);
                setTimeout(() => {
                  state = 1;
                }, 2900);
                setTimeout(() => {
                  state = 0;
                  player1.invincibility = 0;
                  keyFPressed = false;
                }, 3000);
              }
            case 2:
              if (Math.floor((timestamp - start) / 1000) > 60) {
                keyFPressed = true;
                speedModifier += 1;
                level = 3;
                state = 1;
                player1.invincibility = 1;
                setTimeout(() => {
                  state = 0;
                }, 1000);
                setTimeout(() => {
                  state = 1;
                }, 1250);
                setTimeout(() => {
                  state = 0;
                }, 2000);
                setTimeout(() => {
                  state = 1;
                }, 2300);
                setTimeout(() => {
                  state = 0;
                }, 2500);
                setTimeout(() => {
                  state = 1;
                }, 2700);
                setTimeout(() => {
                  state = 0;
                }, 2800);
                setTimeout(() => {
                  state = 1;
                }, 2900);
                setTimeout(() => {
                  state = 0;
                  player1.invincibility = 0;
                  keyFPressed = false;
                }, 3000);
              }
            case 3:
              if (Math.floor((timestamp - start) / 1000) > 100) {
                keyFPressed = true;
                speedModifier += 1;
                level = 4;
                state = 1;
                player1.invincibility = 1;
                setTimeout(() => {
                  state = 0;
                }, 1000);
                setTimeout(() => {
                  state = 1;
                }, 1250);
                setTimeout(() => {
                  state = 0;
                }, 2000);
                setTimeout(() => {
                  state = 1;
                }, 2300);
                setTimeout(() => {
                  state = 0;
                }, 2500);
                setTimeout(() => {
                  state = 1;
                }, 2700);
                setTimeout(() => {
                  state = 0;
                }, 2800);
                setTimeout(() => {
                  state = 1;
                }, 2900);
                setTimeout(() => {
                  state = 0;
                  player1.invincibility = 0;
                  keyFPressed = false;
                }, 3000);
              }
            case 4:
              break;
            default:
              break;
          }
          if (player1.getCurrentSpeed === 0) {
            player1.speed = player1Speed;
          }

          line1.drawLine();

          //The following loops are the necessary function calls for each enemy object that is in the game
          enemyRectangles.forEach((rectangle, index) => {
            rectangle.clearObject();
            rectangle.drawRectangle();
            if (rectangle.getCurrentSpeed === 0) {
              rectangle.speed = rectangleSpeeds[index];
            }
            //rectangle.moveRectangle();
            if (
              checkForCollisions(
                player1.getCurrentLocation,
                rectangle.getCurrentLocation,
                player1.getCurrentCenterPoints,
                rectangle.getCurrentCenterPoints
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
            //wall.moveWall();
            if (
              checkForCollisions(
                player1.getCurrentLocation,
                wall.getCurrentLocation,
                player1.getCurrentCenterPoints,
                wall.getCurrentCenterPoints
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
            //circle.moveCircle();
            if (
              checkForCollisions(
                player1.getCurrentLocation,
                circle.getCurrentLocation,
                player1.getCurrentCenterPoints,
                circle.getCurrentCenterPoints
              ) === true
            ) {
              player1.hit = 1;
            }
          });

          if (enemyBelts !== null) {
            enemyBelts.forEach((belt, index) => {
              belt.clearObject();
              belt.drawBelt();
              if (belt.getCurrentSpeed === 0) {
                belt.speed = beltSpeeds[index];
              }
              //belt.moveBelt();
              if (
                checkForCollisions(
                  player1.getCurrentLocation,
                  belt.getCurrentLocation,
                  player1.getCurrentCenterPoints,
                  belt.getCurrentCenterPoints
                ) === true
              ) {
                player1.hit = 1;
              }
            });
          }

          //The following if statements check if each enemy object is outside of the canvas, and they are their
          //positions are changed and a new offCanvasTracker is returned
          if (player1.hit === 0) {
            if (
              offTheCanvas(
                canvas,
                enemyRectangles,
                player1,
                offCanvasTracker,
                speedModifier
              ) != null
            ) {
              return Object.assign(
                offCanvasTracker,
                offTheCanvas(
                  canvas,
                  enemyRectangles,
                  player1,
                  offCanvasTracker,
                  speedModifier
                )
              );
            }

            if (
              offTheCanvas(
                canvas,
                enemyWalls,
                player1,
                offCanvasTracker,
                speedModifier
              ) != null
            ) {
              return Object.assign(
                offCanvasTracker,
                offTheCanvas(
                  canvas,
                  enemyWalls,
                  player1,
                  offCanvasTracker,
                  speedModifier
                )
              );
            }

            if (
              offTheCanvas(
                canvas,
                enemyCircles,
                player1,
                offCanvasTracker,
                speedModifier
              ) != null
            ) {
              return Object.assign(
                offCanvasTracker,
                offTheCanvas(
                  canvas,
                  enemyCircles,
                  player1,
                  offCanvasTracker,
                  speedModifier
                )
              );
            }

            if (enemyBelts !== null) {
              if (
                offTheCanvas(
                  canvas,
                  enemyBelts,
                  player1,
                  offCanvasTracker,
                  speedModifier
                ) != null
              ) {
                return Object.assign(
                  offCanvasTracker,
                  offTheCanvas(
                    canvas,
                    enemyBelts,
                    player1,
                    offCanvasTracker,
                    speedModifier
                  )
                );
              }
            }
          }

          //Continue running the game if conditions are met

          if (
            Math.floor(timestamp - start) < 150000 &&
            player1.invincibility === 1
          ) {
            player1.hit = 0;
            window.requestAnimationFrame(runningTheGame);
          } else if (
            Math.floor(timestamp - start) < 150000 &&
            player1.getCurrentHit !== 1
          ) {
            window.requestAnimationFrame(runningTheGame);
          }

          //End the game if conditions are met
          if (
            Math.floor(timestamp - start) >= 150000 ||
            player1.getCurrentHit === 1
          ) {
            //The following loops delete the object properties for each object in the game
            if (Math.floor(timestamp - start) >= 150000) {
              document.getElementById("game_over-title").innerHTML =
                "Nice Work.";
            }

            player1 = null;
            enemyRectangles = [];
            enemyWalls = [];
            enemyCircles = [];
            enemyBelts = [];

            globalObject.pauseButton.removeEventListener("click", pBF, false);
            start = null;
            diff = null;
            level = 0;
            invincibilityStocks = 0;
            invincibilityTimer = 35000;
            canvas.mode = 2;
            globalObject.pauseButton.style.setProperty("display", "none");

            return playingTheGame(canvas, difficulty);
          }
        } else if (canvas.getCurrentMode === 3) {
          if (diff == null) {
            diff = timestamp - start;
          }
          start = timestamp - diff;

          player1.speed = 0;
          enemyRectangles.forEach((rectangle, index) => {
            if (rectangle.speed !== 0) {
              rectangleSpeeds[index] = rectangle.getCurrentSpeed;
            } else {
              rectangle.speed = 0;
            }
          });
          enemyWalls.forEach((wall, index) => {
            if (wall.speed !== 0) {
              wallSpeeds[index] = wall.getCurrentSpeed;
            } else {
              wall.speed = 0;
            }
          });
          enemyCircles.forEach((circle, index) => {
            if (circle.speed !== 0) {
              circleSpeeds[index] = circle.getCurrentSpeed;
            } else {
              circle.speed = 0;
            }
          });
          if (enemyBelts !== null) {
            enemyBelts.forEach((belt, index) => {
              if (belt.speed !== 0) {
                beltSpeeds[index] = belt.getCurrentSpeed;
              } else {
                belt.speed = 0;
              }
            });
          }

          globalObject.pauseButton.addEventListener("click", pBF, false);
          globalObject.pauseMenuButton.addEventListener("click", pMBF, false);
          window.requestAnimationFrame(runningTheGame);
        }
      };
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
