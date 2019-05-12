import PlayerShape from "./PlayerShape.js";
import Rectangle from "./Enemies/Rectangle.js";
import checkForCollisions from "./checkForCollisions.js";
import checkForOffTheCanvas from "./checkForOffTheCanvus.js";

const playingTheGame = canvas => {
  //To "reset" the timestamp used in window.requestAnimationFrame
  let start = null;
  let playGameButton = document.querySelector(".menu-play_game");
  let retryButton = document.getElementById("game_over-retry");
  let menuButton = document.getElementById("game_over-menu");
  let menuItemsToDisable = Array.from(document.querySelectorAll(".menu-options"));
  let gameOverItemsToEnable = Array.from(document.querySelectorAll(".game_over-options"));

  const playGameButtonFunction = () => {
    document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
    menuItemsToDisable.forEach(items => {
      return items.style.setProperty("display", "none");
    });
    canvas.mode = 1;
    playGameButton.removeEventListener("click", playGameButtonFunction, false)
    retryButton.removeEventListener("click", retryButtonFunction, false);
    menuButton.removeEventListener("click", menuButtonFunction, false)
    playingTheGame(canvas);
  }

  const retryButtonFunction = () => {
    document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
    gameOverItemsToEnable.forEach(items => {
      return items.style.setProperty("display", "none");
    });
    canvas.mode = 1;
    playGameButton.removeEventListener("click", playGameButtonFunction, false)
    retryButton.removeEventListener("click", retryButtonFunction, false);
    menuButton.removeEventListener("click", menuButtonFunction, false)
    playingTheGame(canvas);
  }

  const menuButtonFunction = () => {
    document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
    gameOverItemsToEnable.forEach(items => {
      return items.style.setProperty("display", "none");
    });
    menuItemsToDisable.forEach(items => {
      return items.style.setProperty("display", "block");
    });
    canvas.mode = 0;
    menuButton.removeEventListener("click", menuButtonFunction, false)
    playGameButton.removeEventListener("click", playGameButtonFunction, false)
    retryButton.removeEventListener("click", retryButtonFunction, false);
    playingTheGame(canvas);
  }

  //Determines the state of the application based off the mode the canvas is in
  switch (canvas.getCurrentMode) {
    case 0:
      console.log('Start Menu');
      //Creating the Start Menu
      document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
      document.querySelector(".menu-title").style.setProperty("top", `${canvas.getCurrentHeight/4}px`);
      playGameButton.style.setProperty("top", `${canvas.getCurrentHeight/2}px`);
      playGameButton.addEventListener("click", playGameButtonFunction, false)
      break;
    case 1:
      console.log('Game Screen');
      //Game Running
      //Create the player, for now this is up to the developer - might extend to user later on
      let newPlayer = new PlayerShape(canvas.getCurrentXcord + 20, canvas.getCurrentYcord + 20,
        10,
        0,
        0,
        360,
        3,
        0,
        0,
        "white",
        "white",
        canvas.getCurrentCanvasContext)

      //Create enemies
      let enemyRectangles = [];
      let rectangleAmount = Math.floor(Math.random() * (5 - 3) + 3);

      for (let i = 0; i < rectangleAmount; i++) {
        enemyRectangles.push(new Rectangle(canvas.getCurrentWidth - 20, Math.floor(Math.random() * (canvas.getCurrentHeight - 20) + 20),
          Math.floor(Math.random() * (40 - 20) + 20),
          Math.floor(Math.random() * (40 - 20) + 20),
          0,
          0,
          Math.floor(Math.random() * (5 - 2) + 2),
          0,
          0,
          "white",
          "white",
          canvas.getCurrentCanvasContext))
      }

      //Function for actually running the game
      const runningTheGame = (timestamp) => {
        if (start === null) {
          start = timestamp;
        }
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
            start = timestamp;
          }
          //Check for enemy objects going off the canvas
          else if (checkForOffTheCanvas(enemyRectangles[i].getCurrentLocation) === true) {
            enemyRectangles[i].xcord = canvas.getCurrentWidth + Math.floor(Math.random() * (20 - 10) + 10);
            enemyRectangles[i].ycord = Math.floor(Math.random() * (canvas.getCurrentHeight + canvas.getCurrentYcord) + canvas.getCurrentYcord);
            enemyRectangles[i].speed = Math.floor(Math.random() * (5 - 2) + 2);
          }
        }

        //Continue running the game
        if (timestamp - start < 7000 && newPlayer.getCurrentHit !== 1) {
          window.requestAnimationFrame(runningTheGame);
        }

        //End the game
        if (timestamp - start >= 7000 || newPlayer.getCurrentHit === 1) {
          for (let i = 0; i < enemyRectangles.length; i++) {
            enemyRectangles[i].clearRectangle();
          }
          newPlayer.clearPlayerShape();
          newPlayer.hit = 0;
          canvas.mode = 2;

          playingTheGame(canvas);
        }
      }

      window.requestAnimationFrame(runningTheGame);

      break;
    case 2:
      //Game Over Screen
      console.log('Game over');
      document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
      gameOverItemsToEnable.forEach(items => {
        return items.style.setProperty("display", "block");
      });
      document.getElementById("game_over-title").style.setProperty("top", `${canvas.getCurrentHeight/4}px`)
      retryButton.style.setProperty("top", `${canvas.getCurrentHeight/2}px`);
      retryButton.addEventListener("click", retryButtonFunction, false)
      menuButton.style.setProperty("top", `${canvas.getCurrentHeight/1.5}px`);
      menuButton.addEventListener("click", menuButtonFunction, false)
      break;
    default:
      break;
  }
};

export default playingTheGame;