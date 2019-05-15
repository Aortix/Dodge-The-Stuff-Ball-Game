import CreateShapes from "./../CreateShapes.js";
class Zigzag extends CreateShapes {
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

    this.drawZigzag();
  }

  drawZigzag = () => {
    this.drawShape();
    this.canvasContext.beginPath();
    this.canvasContext.moveTo(this.xcord, this.ycord);
    for (let i = 3; i > 0; i--) {
      this.canvasContext.lineTo(
        this.xcord - (this.widthOrRadius - i + 1),
        this.ycord + this.height + i
      );
      this.canvasContext.lineTo(
        this.xcord - (this.widthOrRadius - i + 1),
        this.ycord - this.height + i
      );
    }
    this.canvasContext.stroke();
  };

  moveZigzag = () => {
    this.xcord -= this.speed;
  };
}

export default Zigzag;
