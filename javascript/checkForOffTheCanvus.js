const checkForOffTheCanvus = (
  enemyObjects,
  canvasXcord,
  canvasYcord,
  canvasWidth,
  canvasHeight
) => {
  for (let i = 0; i < enemyObjects.length; i++) {
    if (enemyObjects[i].x <= canvasXcord - 10) {
      i = enemyObjects.length;
      return true;
    } else if (enemyObjects[i].x >= canvasWidth + 10) {
      i = enemyObjects.length;
      return true;
    } else if (enemyObjects[i].y <= canvasYcord - 10) {
      i = enemyObjects.length;
      return true;
    } else if (enemyObjects[i].y >= canvasHeight + 10) {
      i = enemyObjects.length;
      return true;
    }
  }
};

export default checkForOffTheCanvus;
