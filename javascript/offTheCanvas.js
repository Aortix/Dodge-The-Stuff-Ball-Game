import checkForOffTheCanvas from "./checkForOffTheCanvas.js";

const offTheCanvas = (
  canvas,
  object,
  player,
  offCanvasTracker,
  speedModifier
) => {
  object.forEach(obj => {
    if (
      checkForOffTheCanvas(
        obj.getCurrentLocation,
        obj.getCurrentWidthOrRadius,
        obj.getCurrentHeight,
        canvas.getCurrentXcord,
        canvas.getCurrentYcord,
        canvas.getCurrentWidth,
        canvas.getCurrentHeight
      ) == true
    ) {
      offCanvasTracker.y = obj.getCurrentYcord;
      if (offCanvasTracker.p === 1) {
        obj.ycord = player.getCurrentLocation[0].y;
        offCanvasTracker.p = 0;
      } else {
        offCanvasTracker.i === 1
          ? (obj.ycord = Math.floor(
              Math.random() *
                (offCanvasTracker.y +
                  offCanvasTracker.h -
                  (canvas.getCurrentYcord + obj.getCurrentHeight)) +
                canvas.getCurrentYcord +
                obj.getCurrentHeight
            ))
          : (obj.ycord = Math.floor(
              Math.random() *
                (canvas.getCurrentHeight -
                  obj.getCurrentHeight -
                  offCanvasTracker.y +
                  offCanvasTracker.h) +
                offCanvasTracker.y +
                offCanvasTracker.h
            ));
        offCanvasTracker.h = obj.getCurrentHeight;
        offCanvasTracker.i = offCanvasTracker.i === 1 ? 0 : 1;
        offCanvasTracker.p = Math.floor(Math.random() * 2);
      }
      obj.xcord = canvas.getCurrentWidth + obj.getCurrentWidthOrRadius;
      obj.speed = speedModifier + Math.floor(Math.random() * (6 - 4) + 4);
      return offCanvasTracker;
    } else {
      return null;
    }
  });
};

export default offTheCanvas;
