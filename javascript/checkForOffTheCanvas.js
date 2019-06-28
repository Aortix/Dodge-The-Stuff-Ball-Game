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
    enemyObjectsLocation[1].y <=
    canvasYcord - enemyObjectsHeight - 70
  ) {
    return true;
  } else if (
    enemyObjectsLocation[0].y >=
    canvasHeight + enemyObjectsHeight + 70
  ) {
    return true;
  } else {
    return false;
  }
};

export default checkForOffTheCanvas;
