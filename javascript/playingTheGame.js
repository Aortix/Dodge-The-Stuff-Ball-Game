import PlayerShape from "./PlayerShape.js";
import Rectangle from "./Enemies/Rectangle.js";
import checkForCollisions from "./checkForCollisions.js";
import checkForOffTheCanvas from "./checkForOffTheCanvus.js";

const playingTheGame = canvas => {
    //To "reset" the timestamp used in window.requestAnimationFrame
    let start = null;

    //Determines the state of the application based off the mode the canvas is in
    switch(canvas.getCurrentMode) {
        case 0: 
        document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
        document.querySelector(".menu-title").style.setProperty("top", `${canvas.getCurrentHeight/3.5}px`);
        let playGameButton = document.querySelector(".menu-play_game");
        playGameButton.style.setProperty("top", `${canvas.getCurrentHeight/2}px`);
        playGameButton.addEventListener("click", () => {
          canvas.mode = 1;
          playingTheGame(canvas);
        })
        break;
        case 1:
        document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
        let menuItemsToDisable = Array.from(document.querySelectorAll(".menu-options"));
        menuItemsToDisable.forEach(items => {
            return items.style.setProperty("display", "none");
        });

        let newPlayer = new PlayerShape(canvas.getCurrentXcord + 20, canvas.getCurrentYcord + 20,
        10,
        0,
        0,
        360,
        2,
        0,
        0,
        "white",
        "white",
        canvas.getCurrentCanvasContext)

        let enemyRectangles = [];
        let rectangleAmount = Math.floor(Math.random() * (5 - 3) + 3);

        for (let i = 0; i < rectangleAmount ; i++) {
            enemyRectangles.push(new Rectangle(canvas.getCurrentWidth - 20, Math.floor(Math.random() * (canvas.getCurrentHeight - 20) + 20),
                Math.floor(Math.random() * (40 - 20) + 20),
                Math.floor(Math.random() * (40 - 20) + 20),
                0,
                0,
                Math.floor(Math.random() * (4 - 2) + 2),
                0,
                0,
                "white",
                "white",
                canvas.getCurrentCanvasContext))
        }


            const runningTheGame = (timestamp) => {
                if (start === null) {
                    start = timestamp;
                }
                newPlayer.clearPlayerShape();
                for (let i = 0; i < enemyRectangles.length; i++) {
                    enemyRectangles[i].clearRectangle();
                }
              
                canvas.clearCanvas();
                canvas.drawCanvas();
              
                newPlayer.drawPlayerShape();
                for (let i = 0; i < enemyRectangles.length; i++) {
                    enemyRectangles[i].drawRectangle();
                }
              
                //playerShape1.movePlayerShape();
                for (let i = 0; i < enemyRectangles.length; i++) {
                    enemyRectangles[i].moveRectangle();
                }
              
                for (let i = 0; i < enemyRectangles.length; i++) {
                if (
                  checkForCollisions(
                    newPlayer.getCurrentLocation,
                    enemyRectangles[i].getCurrentLocation
                  ) === true
                ) {
                  newPlayer.hit = 1;
                  canvas.mode = 2;
                  canvas.getCurrentCanvasContext.restore();
                  start = timestamp;
                  playingTheGame(canvas);
                  //canvas.drawCanvas();
                }
                else if (checkForOffTheCanvas(enemyRectangles[i].getCurrentLocation) === true) {
                  enemyRectangles[i].xcord = canvas.getCurrentWidth + Math.floor(Math.random() * (20 - 10) + 10);
                  enemyRectangles[i].ycord = Math.floor(Math.random() * (canvas.getCurrentHeight + canvas.getCurrentYcord) + canvas.getCurrentYcord);
                }
            }
              
                if (timestamp - start < 7000 && newPlayer.getCurrentHit !== 1) {
                  window.requestAnimationFrame(runningTheGame);
                }

                if (timestamp - start >= 7000) {
                    canvas.mode = 2;
                    playingTheGame(canvas);
                }
              }

              window.requestAnimationFrame(runningTheGame);

          break;
        case 2:
        document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
        let menuItemsToEnable = Array.from(document.querySelectorAll(".menu-options"));
        menuItemsToEnable.forEach(items => {
            return items.style.setProperty("display", "block");
        });
        default: 
      }
  };

  export default playingTheGame;