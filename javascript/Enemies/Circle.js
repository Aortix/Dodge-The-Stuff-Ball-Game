import CreateShapes from "./../CreateShapes.js";

class Circle extends CreateShapes {
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

    this.drawCircle();
  }

  drawCircle = () => {
    this.drawShape();
    this.canvasContext.beginPath();
    let newPath = new Path2D();
    newPath.arc(
      this.xcord,
      this.ycord,
      this.widthOrRadius,
      this.startAngle,
      2 * Math.PI
    );
    this.canvasContext.fill(newPath);
  };

  moveCircle = () => {
    this.xcord -= this.speed;
  };
}

export default Circle;
