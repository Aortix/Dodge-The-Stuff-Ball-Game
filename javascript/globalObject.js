//This object is for CSS selectors that don't need to be tied to scope and can be used throughout
//the application
export const globalObject = {
  playGameButton: document.querySelector(".menu-play_game"),
  retryButton: document.getElementById("game_over-retry"),
  menuButton: document.getElementById("game_over-menu"),
  pauseButton: document.getElementById("game_paused-icon"),
  pauseTitle: document.getElementById("game_paused-title"),
  menuItemsToDisable: Array.from(document.querySelectorAll(".menu-options")),
  gameOverItemsToEnable: Array.from(
    document.querySelectorAll(".game_over-options")
  )
};

export default globalObject;
