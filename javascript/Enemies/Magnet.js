import CreateShapes from "./../CreateShapes.js";

class Magnet extends CreateShapes {
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

    this.drawMagnet();
  }

  drawMagnet = () => {
    this.drawShape();
    this.canvasContext.beginPath();
    this.canvasContext.arc(
      this.xcord - this.widthOrRadius,
      this.ycord,
      this.widthOrRadius,
      this.startAngle,
      Math.PI
    );
    this.canvasContext.moveTo(this.xcord, this.ycord);
    this.canvasContext.arc(
      this.xcord - this.widthOrRadius,
      this.ycord,
      this.widthOrRadius - 5,
      this.startAngle,
      Math.PI
    );
    this.canvasContext.stroke();
  };

  moveMagnet = () => {
    this.xcord -= this.speed;
  };
}

export default Magnet;
