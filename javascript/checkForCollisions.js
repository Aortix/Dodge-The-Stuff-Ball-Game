const checkForCollisions = (
  playerArray,
  otherArray,
  playerCPs,
  otherArrayCPs
) => {
  if (
    playerCPs[3].x >= otherArrayCPs[2].x - 120 &&
    playerCPs[2].x <= otherArrayCPs[3].x + 120 &&
    playerCPs[0].y <= otherArrayCPs[1].y + 120 &&
    playerCPs[1].y >= otherArrayCPs[0].y - 120
  ) {
    let counter = 0;
    let equal = 0;
    let found = 0;
    playerArray.forEach(playerObjects => {
      otherArray.forEach(otherArrayObjects => {
        Object.values(otherArrayObjects).forEach(otherArrayObj => {
          if (Object.values(playerObjects)[counter] === otherArrayObj) {
            counter++;
            equal++;
          } else {
            counter++;
          }
          if (equal === 2) {
            found = 1;
            return false;
          }
        });
        counter = 0;
        equal = 0;
      });
    });
    if (found === 1) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export default checkForCollisions;
