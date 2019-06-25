//This object is for CSS selectors that don't need to be tied to scope and can be used throughout
//the application
export const globalObject = {
  playGameButton: document.querySelector(".menu-play_game"),
  colorButton: document.querySelector(".menu-change_canvas_color"),
  objectsButton: document.querySelector(".menu-change_object_amount"),
  retryButton: document.getElementById("game_over-retry"),
  menuButton: document.getElementById("game_over-menu"),
  menuColors: document.querySelector(".menu-colors"),
  pauseButton: document.getElementById("game_paused-icon"),
  pauseTitle: document.getElementById("game_paused-title"),
  menuItemsToDisable: Array.from(document.querySelectorAll(".menu-options")),
  gameOverItemsToEnable: Array.from(
    document.querySelectorAll(".game_over-options")
  ),
  menuTitle: document.querySelector(".menu-title"),
  gamePausedTitle: document.getElementById("game_paused-title"),
  gameOverTitle: document.getElementById("game_over-title")
};

export default globalObject;
