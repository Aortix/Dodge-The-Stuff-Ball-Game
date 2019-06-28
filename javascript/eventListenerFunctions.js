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
  window.removeEventListener("keydown", addingInvulnerability, false);
  playingTheGame(canvas, difficulty);
};

export const retryButtonFunction = (canvas, difficulty) => {
  canvas.clearCanvas();
  canvas.drawCanvas();
  document.querySelector(".main-stock_number").innerHTML = "0";
  document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
  globalObject.gameOverItemsToEnable.forEach(items => {
    return items.style.setProperty("display", "none");
  });
  globalObject.pauseButton.style.setProperty("display", "block");
  document.getElementById("game_over-title").innerHTML = "Game Over";
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
  window.removeEventListener("keydown", addingInvulnerability, false);
  playingTheGame(canvas, difficulty);
};

export const menuButtonFunction = (canvas, difficulty) => {
  canvas.clearCanvas();
  canvas.drawCanvas();
  document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
  document.querySelector(".menu-colors").style.setProperty("display", "none");
  document.querySelector(".menu-objects").style.setProperty("display", "none");
  globalObject.gameOverItemsToEnable.forEach(items => {
    return items.style.setProperty("display", "none");
  });
  globalObject.menuItemsToDisable.forEach(items => {
    return items.style.setProperty("display", "block");
  });
  if (
    !document
      .querySelector(".menu-colors")
      .classList.contains("hide_menu_items")
  ) {
    document.querySelector(".menu-colors").classList.toggle("hide_menu_items");
  }
  if (
    !document.querySelector(".menu-objects").classList.toggle("hide_menu_items")
  ) {
    document.querySelector(".menu-objects").classList.toggle("hide_menu_items");
  }
  document.getElementById("game_over-title").innerHTML = "Game Over";
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
  window.removeEventListener("keydown", addingInvulnerability, false);
  playingTheGame(canvas, difficulty);
};

export const pauseButtonFunction = canvas => {
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
  window.removeEventListener("keydown", addingInvulnerability, false);
};

export const pauseMenuButtonFunction = (canvas, difficulty) => {
  canvas.clearCanvas();
  canvas.drawCanvas();

  document.getElementById(canvas.getCurrentCanvasId).classList.toggle("menu");
  globalObject.pauseTitle.style.setProperty("display", "none");
  globalObject.pauseButton.style.setProperty("display", "none");
  globalObject.pauseMenuButton.style.setProperty("display", "none");
  if (
    !document
      .querySelector(".menu-colors")
      .classList.contains("hide_menu_items")
  ) {
    document.querySelector(".menu-colors").classList.toggle("hide_menu_items");
  }
  if (
    !document.querySelector(".menu-objects").classList.toggle("hide_menu_items")
  ) {
    document.querySelector(".menu-objects").classList.toggle("hide_menu_items");
  }
  document.getElementById("game_over-title").innerHTML = "Game Over";
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
  window.removeEventListener("keydown", addingInvulnerability, false);
  playingTheGame(canvas, difficulty);
};

export const addingInvulnerability = (player, state) => {
  player.drawPlayerShape(state);
  document.querySelector(".main-stock_number").innerHTML = Math.floor(
    Number(document.querySelector(".main-stock_number").innerHTML) - 1
  ).toString();
  player.invincibility = 1;
  setTimeout(() => {
    player.invincibility = 0;
  }, 3000);

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
  window.removeEventListener("keydown", addingInvulnerability, false);
};
