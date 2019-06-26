import playingTheGame from "./playingTheGame.js";
import globalObject from "./globalObject.js";

export const playGameButtonFunction = (canvas, difficulty) => {
  document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
  globalObject.menuItemsToDisable.forEach(items => {
    return items.style.setProperty("display", "none");
  });
  globalObject.pauseButton.style.setProperty("display", "block");
  canvas.mode = 1;
  globalObject.playGameButton.removeEventListener(
    "click",
    playGameButtonFunction,
    false
  );
  globalObject.retryButton.removeEventListener(
    "click",
    retryButtonFunction,
    false
  );
  globalObject.menuButton.removeEventListener(
    "click",
    menuButtonFunction,
    false
  );
  globalObject.pauseButton.removeEventListener(
    "click",
    pauseButtonFunction,
    false
  );
  globalObject.pauseMenuButton.removeEventListener(
    "click",
    pauseMenuButtonFunction,
    false
  );
  playingTheGame(canvas, difficulty);
};

export const retryButtonFunction = (canvas, difficulty) => {
  canvas.clearCanvas();
  canvas.drawCanvas();
  document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
  globalObject.gameOverItemsToEnable.forEach(items => {
    return items.style.setProperty("display", "none");
  });
  globalObject.pauseButton.style.setProperty("display", "block");
  canvas.mode = 1;
  globalObject.playGameButton.removeEventListener(
    "click",
    playGameButtonFunction,
    false
  );
  globalObject.retryButton.removeEventListener(
    "click",
    retryButtonFunction,
    false
  );
  globalObject.menuButton.removeEventListener(
    "click",
    menuButtonFunction,
    false
  );
  globalObject.pauseButton.removeEventListener(
    "click",
    pauseButtonFunction,
    false
  );
  globalObject.pauseMenuButton.removeEventListener(
    "click",
    pauseMenuButtonFunction,
    false
  );
  playingTheGame(canvas, difficulty);
};

export const menuButtonFunction = (canvas, difficulty) => {
  canvas.clearCanvas();
  canvas.drawCanvas();
  document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
  globalObject.gameOverItemsToEnable.forEach(items => {
    return items.style.setProperty("display", "none");
  });
  globalObject.menuItemsToDisable.forEach(items => {
    return items.style.setProperty("display", "block");
  });
  canvas.mode = 0;
  globalObject.menuButton.removeEventListener(
    "click",
    menuButtonFunction,
    false
  );
  globalObject.playGameButton.removeEventListener(
    "click",
    playGameButtonFunction,
    false
  );
  globalObject.retryButton.removeEventListener(
    "click",
    retryButtonFunction,
    false
  );
  globalObject.pauseButton.removeEventListener(
    "click",
    pauseButtonFunction,
    false
  );
  globalObject.pauseMenuButton.removeEventListener(
    "click",
    pauseMenuButtonFunction,
    false
  );
  playingTheGame(canvas, difficulty);
};

export const pauseButtonFunction = canvas => {
  console.log("Clicked");
  document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
  if (canvas.getCurrentMode === 3) {
    globalObject.pauseTitle.style.setProperty("display", "none");
    globalObject.pauseMenuButton.style.setProperty("display", "none");
    canvas.mode = 1;
  } else {
    globalObject.pauseTitle.style.setProperty("display", "block");
    globalObject.pauseMenuButton.style.setProperty("display", "block");
    canvas.mode = 3;
  }
  globalObject.menuButton.removeEventListener(
    "click",
    menuButtonFunction,
    false
  );
  globalObject.playGameButton.removeEventListener(
    "click",
    playGameButtonFunction,
    false
  );
  globalObject.retryButton.removeEventListener(
    "click",
    retryButtonFunction,
    false
  );
  globalObject.pauseButton.removeEventListener(
    "click",
    pauseButtonFunction,
    false
  );
  globalObject.pauseMenuButton.removeEventListener(
    "click",
    pauseMenuButtonFunction,
    false
  );
};

export const pauseMenuButtonFunction = (canvas, difficulty) => {
  canvas.clearCanvas();
  canvas.drawCanvas();

  document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
  globalObject.pauseTitle.style.setProperty("display", "none");
  globalObject.pauseButton.style.setProperty("display", "none");
  globalObject.pauseMenuButton.style.setProperty("display", "none");
  canvas.mode = 0;
  globalObject.menuItemsToDisable.forEach(items => {
    return items.style.setProperty("display", "block");
  });

  globalObject.menuButton.removeEventListener(
    "click",
    menuButtonFunction,
    false
  );
  globalObject.playGameButton.removeEventListener(
    "click",
    playGameButtonFunction,
    false
  );
  globalObject.retryButton.removeEventListener(
    "click",
    retryButtonFunction,
    false
  );
  globalObject.pauseButton.removeEventListener(
    "click",
    pauseButtonFunction,
    false
  );
  globalObject.pauseMenuButton.removeEventListener(
    "click",
    pauseMenuButtonFunction,
    false
  );
  playingTheGame(canvas, difficulty);
};
