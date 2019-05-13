import PlayerShape from "./PlayerShape.js";
import Rectangle from "./Enemies/Rectangle.js";
import checkForCollisions from "./checkForCollisions.js";
import checkForOffTheCanvas from "./checkForOffTheCanvus.js";

const playingTheGame = canvas => {
  //To "reset" the timestamp used in window.requestAnimationFrame
  let start = null;
  let diff = null;
  let playGameButton = document.querySelector(".menu-play_game");
  let retryButton = document.getElementById("game_over-retry");
  let menuButton = document.getElementById("game_over-menu");
  let pauseButton = document.getElementById("game_paused-icon");
  let pauseTitle = document.getElementById("game_paused-title");

  let menuItemsToDisable = Array.from(
    document.querySelectorAll(".menu-options")
  );
  let gameOverItemsToEnable = Array.from(
    document.querySelectorAll(".game_over-options")
  );

  const playGameButtonFunction = () => {
    document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
    menuItemsToDisable.forEach(items => {
      return items.style.setProperty("display", "none");
    });
    pauseButton.style.setProperty("display", "block");
    canvas.mode = 1;
    playGameButton.removeEventListener("click", playGameButtonFunction, false);
    retryButton.removeEventListener("click", retryButtonFunction, false);
    menuButton.removeEventListener("click", menuButtonFunction, false);
    pauseButton.removeEventListener("click", pauseButtonFunction, false);
    playingTheGame(canvas);
  };

  const retryButtonFunction = () => {
    document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
    gameOverItemsToEnable.forEach(items => {
      return items.style.setProperty("display", "none");
    });
    pauseButton.style.setProperty("display", "block");
    canvas.mode = 1;
    playGameButton.removeEventListener("click", playGameButtonFunction, false);
    retryButton.removeEventListener("click", retryButtonFunction, false);
    menuButton.removeEventListener("click", menuButtonFunction, false);
    pauseButton.removeEventListener("click", pauseButtonFunction, false);
    playingTheGame(canvas);
  };

  const menuButtonFunction = () => {
    document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
    gameOverItemsToEnable.forEach(items => {
      return items.style.setProperty("display", "none");
    });
    menuItemsToDisable.forEach(items => {
      return items.style.setProperty("display", "block");
    });
    canvas.mode = 0;
    menuButton.removeEventListener("click", menuButtonFunction, false);
    playGameButton.removeEventListener("click", playGameButtonFunction, false);
    retryButton.removeEventListener("click", retryButtonFunction, false);
    pauseButton.removeEventListener("click", pauseButtonFunction, false);
    playingTheGame(canvas);
  };

  const pauseButtonFunction = () => {
    console.log("Risky");
    document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
    if (canvas.getCurrentMode === 3) {
      console.log("Set canvas to 1");
      pauseTitle.style.setProperty("display", "none");
      canvas.mode = 1;
    } else {
      console.log("Set canvas to 3");
      pauseTitle.style.setProperty("display", "block");
      canvas.mode = 3;
    }
    menuButton.removeEventListener("click", menuButtonFunction, false);
    playGameButton.removeEventListener("click", playGameButtonFunction, false);
    retryButton.removeEventListener("click", retryButtonFunction, false);
    pauseButton.removeEventListener("click", pauseButtonFunction, false);
  };

  //Determines the state of the application based off the mode the canvas is in
  switch (canvas.getCurrentMode) {
    case 0:
      console.log("Start Menu");
      //Creating the Start Menu
      document
        .getElementById(canvas.getCurrentCanvasId)
        .classList.toggle("menu");
      document
        .querySelector(".menu-title")
        .style.setProperty("top", `${canvas.getCurrentHeight / 4}px`);
      playGameButton.style.setProperty(
        "top",
        `${canvas.getCurrentHeight / 2}px`
      );
      playGameButton.addEventListener("click", playGameButtonFunction, false);
      break;
    case 1:
      console.log("Game Screen");
      document
        .getElementById("game_paused-title")
        .style.setProperty("top", `${canvas.getCurrentHeight / 4}px`);
      document
        .getElementById("game_paused-icon")
        .style.setProperty(
          "top",
          `${canvas.getCurrentYcord + window.innerHeight / 100}px`
        );
      document
        .getElementById("game_paused-icon")
        .style.setProperty(
          "left",
          `${window.innerWidth / 2.12 + canvas.getCurrentWidth / 2}px`
        );
      //Game Running
      //Create the player, for now this is up to the developer - might extend to user later on
      let newPlayer = new PlayerShape(
        canvas.getCurrentXcord + 20,
        canvas.getCurrentYcord + 20,
        10,
        0,
        0,
        360,
        3,
        0,
        0,
        "white",
        "white",
        canvas.getCurrentCanvasContext
      );

      //Create enemies
      let enemyRectangles = [];
      let rectangleAmount = Math.floor(Math.random() * (5 - 3) + 3);

      for (let i = 0; i < rectangleAmount; i++) {
        enemyRectangles.push(
          new Rectangle(
            canvas.getCurrentWidth - 20,
            Math.floor(Math.random() * (canvas.getCurrentHeight - 20) + 20),
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

      let rectangleSpeeds = [];
      for (let i = 0; i < enemyRectangles.length; i++) {
        rectangleSpeeds.push(enemyRectangles[i].getCurrentSpeed);
      }
      let newPlayerSpeed = newPlayer.getCurrentSpeed;

      //Function for actually running the game
      const runningTheGame = timestamp => {
        if (canvas.getCurrentMode === 1) {
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
          }

          if (diff !== null) {
            console.log("This also should be getting called.");
            diff = null;
          }

          if (start == null) {
            start = timestamp;
          }

          for (let i = 0; i < enemyRectangles.length; i++) {
            if (enemyRectangles[i].getCurrentSpeed === 0) {
              enemyRectangles[i].speed = rectangleSpeeds[i];
            }
          }

          if (newPlayer.getCurrentSpeed === 0) {
            newPlayer.speed = newPlayerSpeed;
          }

          pauseButton.addEventListener("click", pauseButtonFunction, false);

          //Clear everything
          newPlayer.clearPlayerShape();
          for (let i = 0; i < enemyRectangles.length; i++) {
            enemyRectangles[i].clearRectangle();
          }
          canvas.clearCanvas();

          //Redraw everything
          canvas.drawCanvas();
          newPlayer.drawPlayerShape();
          for (let i = 0; i < enemyRectangles.length; i++) {
            enemyRectangles[i].drawRectangle();
          }

          //Move enemies
          for (let i = 0; i < enemyRectangles.length; i++) {
            enemyRectangles[i].moveRectangle();
          }

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
            //Check for enemy objects going off the canvas
            else if (
              checkForOffTheCanvas(enemyRectangles[i].getCurrentLocation) ===
              true
            ) {
              enemyRectangles[i].xcord =
                canvas.getCurrentWidth +
                Math.floor(Math.random() * (20 - 10) + 10);
              enemyRectangles[i].ycord = Math.floor(
                Math.random() *
                  (canvas.getCurrentHeight + canvas.getCurrentYcord) +
                  canvas.getCurrentYcord
              );
              enemyRectangles[i].speed = Math.floor(
                Math.random() * (5 - 2) + 2
              );
            }
          }

          //Continue running the game
          if (timestamp - start < 7000 && newPlayer.getCurrentHit !== 1) {
            window.requestAnimationFrame(runningTheGame);
          }

          //End the game
          if (timestamp - start >= 7000 || newPlayer.getCurrentHit === 1) {
            console.log("Did this get called?");
            for (let i = 0; i < enemyRectangles.length; i++) {
              enemyRectangles[i].clearRectangle();
            }
            newPlayer.clearPlayerShape();
            pauseButton.removeEventListener(
              "click",
              pauseButtonFunction,
              false
            );
            start = null;
            newPlayer.hit = 0;
            canvas.mode = 2;
            pauseButton.style.setProperty("display", "none");

            playingTheGame(canvas);
          }
        } else if (canvas.getCurrentMode === 3) {
          if (diff === null) {
            console.log("This should be getting called.");
            diff = timestamp - start;
          }
          start = timestamp - diff;
          for (let i = 0; i < enemyRectangles.length; i++) {
            enemyRectangles[i].speed = 0;
          }
          newPlayer.speed = 0;
          pauseButton.addEventListener("click", pauseButtonFunction, false);
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
      gameOverItemsToEnable.forEach(items => {
        return items.style.setProperty("display", "block");
      });
      document
        .getElementById("game_over-title")
        .style.setProperty("top", `${canvas.getCurrentHeight / 4}px`);
      retryButton.style.setProperty("top", `${canvas.getCurrentHeight / 2}px`);
      retryButton.addEventListener("click", retryButtonFunction, false);
      menuButton.style.setProperty("top", `${canvas.getCurrentHeight / 1.5}px`);
      menuButton.addEventListener("click", menuButtonFunction, false);
      break;
    default:
      break;
  }
};

export default playingTheGame;
