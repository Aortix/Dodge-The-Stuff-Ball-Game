import PlayerShape from "./PlayerShape.js";
import Rectangle from "./Enemies/Rectangle.js";
import Wall from "./Enemies/Wall.js";
import Circle from "./Enemies/Circle.js";
import Magnet from "./Enemies/Magnet.js";
import Zigzag from "./Enemies/Zigzag.js";
import checkForCollisions from "./checkForCollisions.js";
import checkForOffTheCanvas from "./checkForOffTheCanvas.js";

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
      console.log("Start Menu");
      //Creating the Start Menu
      document
        .getElementById(canvas.getCurrentCanvasId)
        .classList.toggle("menu");
      globalObject.playGameButton.addEventListener("click", pGBF, false);
      break;
    case 1:
      console.log("Game Screen");
      //Game Running

      //Create the player, for now this is up to the developer - might extend to user later on
      let newPlayer = new PlayerShape(
        canvas.getCurrentXcord + 20,
        canvas.getCurrentYcord + 20,
        10,
        0,
        0,
        360,
        5,
        0,
        0,
        "white",
        "white",
        canvas.getCurrentCanvasContext
      );

      //Create enemies
      let enemyRectangles = [];
      let rectangleAmount = Math.floor(Math.random() * 3 + 3);
      for (let i = 0; i < rectangleAmount; i++) {
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
            0,
            0,
            "white",
            "white",
            canvas.getCurrentCanvasContext
          )
        );
      }

      let newWall = new Wall(
        canvas.getCurrentWidth + 5,
        Math.floor(Math.random() * (canvas.getCurrentHeight - 5) + 5),
        Math.floor(Math.random() * (20 - 10) + 10),
        Math.floor(Math.random() * (120 - 80) + 60),
        0,
        0,
        Math.floor(Math.random() * (5 - 2) + 2),
        0,
        0,
        "white",
        "white",
        canvas.getCurrentCanvasContext
      );

      let newCircle = new Circle(
        canvas.getCurrentWidth + 5,
        Math.floor(Math.random() * (canvas.getCurrentHeight - 5) + 5),
        10,
        0,
        0,
        360,
        4,
        0,
        0,
        "white",
        "white",
        canvas.getCurrentCanvasContext
      );

      let newMagnet = new Magnet(
        canvas.getCurrentWidth + 5,
        Math.floor(Math.random() * (canvas.getCurrentHeight - 5) + 5),
        25,
        0,
        0,
        180,
        4,
        0,
        0,
        "white",
        "white",
        canvas.getCurrentCanvasContext
      );

      let newZigzag = new Zigzag(
        canvas.getCurrentWidth + 5,
        Math.floor(Math.random() * (canvas.getCurrentHeight - 100) + 100),
        Math.floor(Math.random() * (20 - 10) + 10),
        Math.floor(Math.random() * (120 - 80) + 60),
        0,
        0,
        Math.floor(Math.random() * (5 - 2) + 2),
        0,
        0,
        "white",
        "white",
        canvas.getCurrentCanvasContext
      );

      console.log(newZigzag);

      //Get initial speeds of enemies - this will be used when you unpause (speed is set to 0 for a pause) the game to
      //return the speed values
      let newWallSpeed = newWall.getCurrentSpeed;
      let rectangleSpeeds = [];
      for (let i = 0; i < enemyRectangles.length; i++) {
        rectangleSpeeds.push(enemyRectangles[i].getCurrentSpeed);
      }
      let newPlayerSpeed = newPlayer.getCurrentSpeed;
      let newCircleSpeed = newCircle.getCurrentSpeed;
      let newMagnetSpeed = newMagnet.getCurrentSpeed;
      let newZigzagSpeed = newZigzag.getCurrentSpeed;

      let offCanvasTracker = null;

      //Function for actually running the game
      const runningTheGame = timestamp => {
        if (canvas.getCurrentMode === 1) {
          //So paused button can be clicked on
          globalObject.pauseButton.addEventListener("click", pBF, false);

          //Stops player from going out of the canvas
          if (
            newPlayer.getCurrentYcord - newPlayer.getCurrentWidthOrRadius <=
            canvas.getCurrentYcord
          ) {
            newPlayer.ycord += newPlayer.getCurrentSpeed;
          } else if (
            newPlayer.getCurrentYcord + newPlayer.getCurrentWidthOrRadius >=
            canvas.getCurrentHeight
          ) {
            newPlayer.ycord -= newPlayer.getCurrentSpeed;
          } else if (
            newPlayer.getCurrentXcord - newPlayer.getCurrentWidthOrRadius <=
            canvas.getCurrentXcord
          ) {
            newPlayer.xcord += newPlayer.getCurrentSpeed;
          } else if (
            newPlayer.getCurrentXcord + newPlayer.getCurrentWidthOrRadius >=
            canvas.getCurrentWidth
          ) {
            newPlayer.xcord += newPlayer.getCurrentSpeed;
          }

          if (diff !== null) {
            diff = null;
          }

          if (start == null) {
            start = timestamp;
          }

          document.getElementById("time").innerHTML = (
            (timestamp - start) /
            1000
          ).toPrecision(4);

          //Reapplies speeds if game was unpaused
          for (let i = 0; i < enemyRectangles.length; i++) {
            if (enemyRectangles[i].getCurrentSpeed === 0) {
              enemyRectangles[i].speed = rectangleSpeeds[i];
            }
          }

          if (newPlayer.getCurrentSpeed === 0) {
            newPlayer.speed = newPlayerSpeed;
          }

          if (newWall.getCurrentSpeed === 0) {
            newWall.speed = newWallSpeed;
          }

          if (newCircle.getCurrentSpeed === 0) {
            newCircle.speed = newCircleSpeed;
          }

          if (newMagnet.getCurrentSpeed === 0) {
            newMagnet.speed = newMagnetSpeed;
          }

          if (newZigzag.getCurrentSpeed === 0) {
            newZigzag.speed = newZigzagSpeed;
          }

          //Clear everything
          newPlayer.clearObject();
          for (let i = 0; i < enemyRectangles.length; i++) {
            enemyRectangles[i].clearObject();
          }
          newWall.clearObject();
          newCircle.clearObject();
          newMagnet.clearObject();
          newZigzag.clearObject();
          canvas.clearCanvas();

          //Redraw everything
          canvas.drawCanvas();
          newPlayer.drawPlayerShape();
          newWall.drawWall();
          newCircle.drawCircle();
          newMagnet.drawMagnet();
          newZigzag.drawZigzag();
          for (let i = 0; i < enemyRectangles.length; i++) {
            enemyRectangles[i].drawRectangle();
          }

          //Move enemies
          for (let i = 0; i < enemyRectangles.length; i++) {
            enemyRectangles[i].moveRectangle();
          }
          newWall.moveWall();
          newCircle.moveCircle();
          newMagnet.moveMagnet();
          newZigzag.moveZigzag();

          //Check for collisions
          for (let i = 0; i < enemyRectangles.length; i++) {
            if (
              checkForCollisions(
                newPlayer.getCurrentLocation,
                enemyRectangles[i].getCurrentLocation
              ) === true
            ) {
              newPlayer.hit = 1;
            }
          }

          if (
            checkForCollisions(
              newPlayer.getCurrentLocation,
              newWall.getCurrentLocation
            ) === true &&
            newPlayer.hit !== 1
          ) {
            newPlayer.hit = 1;
          }

          if (
            checkForCollisions(
              newPlayer.getCurrentLocation,
              newCircle.getCurrentLocation
            ) === true &&
            newPlayer.hit !== 1
          ) {
            newPlayer.hit = 1;
          }

          if (
            checkForCollisions(
              newPlayer.getCurrentLocation,
              newMagnet.getCurrentLocation
            ) === true &&
            newPlayer.hit !== 1
          ) {
            newPlayer.hit = 1;
          }

          if (
            checkForCollisions(
              newPlayer.getCurrentLocation,
              newZigzag.getCurrentLocation
            ) === true &&
            newPlayer.hit !== 1
          ) {
            newPlayer.hit = 1;
          }

          //Check for enemy objects going off the canvas
          for (let i = 0; i < enemyRectangles.length; i++) {
            if (
              checkForOffTheCanvas(
                enemyRectangles[i].getCurrentLocation,
                enemyRectangles[i].getCurrentWidthOrRadius,
                enemyRectangles[i].getCurrentHeight,
                canvas.getCurrentXcord,
                canvas.getCurrentYcord,
                canvas.getCurrentWidth,
                canvas.getCurrentHeight
              ) == true
            ) {
              if (offCanvasTracker !== null) {
                offCanvasTracker.y = enemyRectangles[i].getCurrentYcord;
                if (offCanvasTracker.p === 1) {
                  enemyRectangles[i].ycord = newPlayer.getCurrentLocation[0].y;
                  offCanvasTracker.p = 0;
                } else {
                  offCanvasTracker.i === 1
                    ? (enemyRectangles[i].ycord = Math.floor(
                        Math.random() *
                          (offCanvasTracker.y +
                            offCanvasTracker.h -
                            (canvas.getCurrentYcord +
                              enemyRectangles[i].getCurrentHeight)) +
                          canvas.getCurrentYcord +
                          enemyRectangles[i].getCurrentHeight
                      ))
                    : (enemyRectangles[i].ycord = Math.floor(
                        Math.random() *
                          (canvas.getCurrentHeight -
                            enemyRectangles[i].getCurrentHeight -
                            offCanvasTracker.y +
                            offCanvasTracker.h) +
                          offCanvasTracker.y +
                          offCanvasTracker.h
                      ));
                  offCanvasTracker.h = enemyRectangles[i].getCurrentHeight;
                  offCanvasTracker.i = offCanvasTracker.i === 1 ? 0 : 1;
                  offCanvasTracker.p = Math.floor(Math.random() * 2);
                }
              } else {
                offCanvasTracker = {
                  y: enemyRectangles[i].getCurrentYcord,
                  h: enemyRectangles[i].getCurrentHeight,
                  i: Math.floor(Math.random() * 2),
                  p: Math.floor(Math.random() * 2)
                };
              }
              enemyRectangles[i].xcord =
                canvas.getCurrentWidth +
                enemyRectangles[i].getCurrentWidthOrRadius;
              enemyRectangles[i].speed = Math.floor(
                Math.random() * (5 - 2) + 2
              );
            }
          }

          if (
            checkForOffTheCanvas(
              newWall.getCurrentLocation,
              newWall.getCurrentWidthOrRadius,
              newWall.getCurrentHeight,
              canvas.getCurrentXcord,
              canvas.getCurrentYcord,
              canvas.getCurrentWidth,
              canvas.getCurrentHeight
            )
          ) {
            if (offCanvasTracker !== null) {
              offCanvasTracker.y = newWall.getCurrentYcord;
              offCanvasTracker.i === 1
                ? (newWall.ycord = Math.floor(
                    Math.random() *
                      (offCanvasTracker.y +
                        offCanvasTracker.h -
                        canvas.getCurrentYcord +
                        newWall.getCurrentHeight) +
                      canvas.getCurrentYcord +
                      newWall.getCurrentHeight
                  ))
                : (newWall.ycord = Math.floor(
                    Math.random() *
                      (canvas.getCurrentHeight -
                        newWall.getCurrentHeight -
                        offCanvasTracker.y +
                        offCanvasTracker.h) +
                      offCanvasTracker.y +
                      offCanvasTracker.h
                  ));
              offCanvasTracker.y = newWall.getCurrentYcord;
              offCanvasTracker.h = newWall.getCurrentHeight;
            } else {
              offCanvasTracker = {
                y: newWall.getCurrentYcord,
                h: newWall.getCurrentHeight,
                i: Math.floor(Math.random() * 2),
                p: Math.floor(Math.random() * 2)
              };
            }
            newWall.xcord =
              canvas.getCurrentWidth + newWall.getCurrentWidthOrRadius;
            newWall.speed = Math.floor(Math.random() * (5 - 2) + 2);
          }

          //Continue running the game
          if (timestamp - start < 15000 && newPlayer.getCurrentHit !== 1) {
            window.requestAnimationFrame(runningTheGame);
          }

          //End the game
          if (timestamp - start >= 15000 || newPlayer.getCurrentHit === 1) {
            for (let i = 0; i < enemyRectangles.length; i++) {
              enemyRectangles[i].deleteObject();
            }
            newPlayer.deleteObject();
            newWall.deleteObject();
            newCircle.deleteObject();
            newMagnet.deleteObject();
            newZigzag.deleteObject();

            globalObject.pauseButton.removeEventListener("click", pBF, false);
            start = null;
            newPlayer.hit = 0;
            canvas.mode = 2;
            globalObject.pauseButton.style.setProperty("display", "none");

            playingTheGame(canvas);
          }
        } else if (canvas.getCurrentMode === 3) {
          if (diff === null) {
            diff = timestamp - start;
          }
          start = timestamp - diff;
          for (let i = 0; i < enemyRectangles.length; i++) {
            enemyRectangles[i].speed = 0;
          }
          newWall.speed = 0;
          newPlayer.speed = 0;
          newCircle.speed = 0;
          newMagnet.speed = 0;
          newZigzag.speed = 0;
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
