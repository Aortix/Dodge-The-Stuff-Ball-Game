const checkForOffTheCanvas = (
  enemyObjectsLocation,
  enemyObjectsWidth,
  enemyObjectsHeight,
  canvasXcord,
  canvasYcord,
  canvasHeight
) => {
  if (enemyObjectsLocation[3].x <= canvasXcord - enemyObjectsWidth) {
    return true;
  } else if (
    enemyObjectsLocation[0].y <=
    Math.floor(canvasYcord - enemyObjectsHeight / 2)
  ) {
    return true;
  } else if (
    enemyObjectsLocation[0].y >=
    Math.floor(canvasHeight + enemyObjectsHeight / 2)
  ) {
    return true;
  } else {
    return false;
  }
};

export default checkForOffTheCanvas;
