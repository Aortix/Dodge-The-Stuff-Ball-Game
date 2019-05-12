const checkForCollisions = (playerArray, otherArray) => {
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
    }
    else {
    return false;
    }
  };

  export default checkForCollisions;