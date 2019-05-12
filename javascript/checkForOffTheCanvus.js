const checkForOffTheCanvus = (enemyObjects) => {
    for (let i=0; i < enemyObjects.length; i++) {
        if (enemyObjects[i].x <= -10) {
            i = enemyObjects.length;
            return true;
        }
    }
}

export default checkForOffTheCanvus;