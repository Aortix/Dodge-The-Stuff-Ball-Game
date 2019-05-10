import CreateShapes from "./CreateShapes.js";

class PlayerShape extends CreateShapes {
  constructor(
    xcord,
    ycord,
    widthOrRadius,
    height,
    startAngle,
    endAngle,
    speed,
    time,
    bgColor,
    strokeColor,
    canvasContext
  ) {
    super(
      xcord,
      ycord,
      widthOrRadius,
      height,
      startAngle,
      endAngle,
      speed,
      time,
      bgColor,
      strokeColor,
      canvasContext
    );

    this.drawPlayerShape();
  }

  drawPlayerShape = () => {
    this.drawShape();
    this.canvasContext.beginPath();
    this.canvasContext.arc(
      this.xcord,
      this.ycord,
      this.widthOrRadius,
      this.startAngle,
      this.endAngle
    );
    this.canvasContext.stroke();
  };
}

export default PlayerShape;
