const limitPlayerMovement = (canvas, player, mode) => {
  switch (mode) {
    case 1:
      if (
        player.getCurrentYcord - player.getCurrentWidthOrRadius <=
        canvas.getCurrentYcord
      ) {
        player.ycord += player.getCurrentSpeed;
      } else if (
        player.getCurrentYcord + player.getCurrentWidthOrRadius >=
        canvas.getCurrentHeight
      ) {
        player.ycord -= player.getCurrentSpeed;
      } else if (
        player.getCurrentXcord - player.getCurrentWidthOrRadius <=
        canvas.getCurrentXcord
      ) {
        player.xcord += player.getCurrentSpeed;
      } else if (
        player.getCurrentXcord + player.getCurrentWidthOrRadius >=
        canvas.getCurrentWidth
      ) {
        player.xcord += player.getCurrentSpeed;
      }
      break;
    default:
      break;
  }
};

export default limitPlayerMovement;
