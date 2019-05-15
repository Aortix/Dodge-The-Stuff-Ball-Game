const checkForOffTheCanvas = (
  enemyObjectsLocation,
  enemyObjectsWidth,
  enemyObjectsHeight,
  canvasXcord,
  canvasYcord,
  canvasWidth,
  canvasHeight
) => {
  for (let i = 0; i < enemyObjectsLocation.length; i++) {
    if (enemyObjectsLocation[i].x <= canvasXcord - 20 - enemyObjectsWidth) {
      i = enemyObjectsLocation.length;
      return true;
    } else if (
      enemyObjectsLocation[i].x >=
      canvasWidth + 20 + enemyObjectsWidth
    ) {
      i = enemyObjectsLocation.length;
      return true;
    } else if (
      enemyObjectsLocation[i].y <=
      canvasYcord - 20 - enemyObjectsHeight
    ) {
      i = enemyObjectsLocation.length;
      return true;
    } else if (
      enemyObjectsLocation[i].y >=
      canvasHeight + 20 + enemyObjectsHeight
    ) {
      i = enemyObjectsLocation.length;
      return true;
    }
  }
};

export default checkForOffTheCanvas;
