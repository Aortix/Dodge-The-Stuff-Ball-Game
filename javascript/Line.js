import CreateShapes from "./CreateShapes.js";

class Line extends CreateShapes {
  constructor(
    xcord,
    ycord,
    widthOrRadius,
    height,
    startAngle,
    endAngle,
    speed,
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
      bgColor,
      strokeColor,
      canvasContext
    );

    this.drawLine();
  }

  drawLine () {
    this.drawShape();
    this.canvasContext.beginPath();

    this.canvasContext.moveTo(this.xcord, this.ycord);
    this.canvasContext.lineTo(this.xcord, this.height);

    this.canvasContext.stroke();
  };

  moveline () {
    this.xcord -= this.speed;
  };
}

export default Line;
