const limitPlayerMovement = (canvas, player, level) => {
  switch (level) {
    case 0:
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
      }
      break;
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
        canvas.getCurrentWidth / 4
      ) {
        player.xcord += player.getCurrentSpeed;
      }
      break;
    case 2:
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
        Math.floor((2 * canvas.getCurrentWidth) / 5)
      ) {
        player.xcord += player.getCurrentSpeed;
      }
      break;
    case 3:
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
        Math.floor((2 * canvas.getCurrentWidth) / 5)
      ) {
        player.xcord += player.getCurrentSpeed;
      }
      break;
    case 4:
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
        Math.floor((2 * canvas.getCurrentWidth) / 5)
      ) {
        player.xcord += player.getCurrentSpeed;
      }
      break;
    default:
      break;
  }
};

export default limitPlayerMovement;
