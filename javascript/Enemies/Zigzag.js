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

    this.drawZigzag();
  }

  drawZigzag = () => {
    this.drawShape();
    this.canvasContext.beginPath();
    this.canvasContext.moveTo(this.xcord, this.ycord);
    this.canvasContext.lineTo(
      this.xcord - this.widthOrRadius / 3,
      this.ycord + this.height / 7
    );
    this.canvasContext.lineTo(
      this.xcord - this.widthOrRadius / 2,
      this.ycord - this.height / 6
    );
    this.canvasContext.lineTo(
      this.xcord - this.widthOrRadius,
      this.ycord + this.height / 5
    );
    this.canvasContext.lineTo(
      this.xcord - this.widthOrRadius,
      this.ycord - this.height / 4
    );
    this.canvasContext.stroke();
  };

  moveZigzag = () => {
    this.xcord -= this.speed;
  };
}

export default Zigzag;
