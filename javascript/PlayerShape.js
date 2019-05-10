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
    hit,
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
      hit,
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

    for (let i = this.startAngle; i < this.endAngle; i += 10) {
      this.location.push({
        x: Math.round((this.widthOrRadius / 2) * Math.cos(i) + this.xcord),
        y: Math.round((this.widthOrRadius / 2) * Math.sin(i) + this.ycord)
      });
    }
    this.canvasContext.stroke();
  };

  movePlayerShape = () => {
    this.xcord += this.speed;
  };

  clearPlayerShape = () => {
    this.location.length = 0;
  };
}

export default PlayerShape;
