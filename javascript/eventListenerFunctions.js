import playingTheGame from "./playingTheGame.js";
import globalObject from "./globalObject.js";

export const playGameButtonFunction = canvas => {
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
  playingTheGame(canvas);
};

export const retryButtonFunction = canvas => {
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
  playingTheGame(canvas);
};

export const menuButtonFunction = canvas => {
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
  playingTheGame(canvas);
};

export const pauseButtonFunction = canvas => {
  document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
  if (canvas.getCurrentMode === 3) {
    globalObject.pauseTitle.style.setProperty("display", "none");
    canvas.mode = 1;
  } else {
    globalObject.pauseTitle.style.setProperty("display", "block");
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
};
