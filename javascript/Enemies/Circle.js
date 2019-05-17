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
    for (let i = this.startAngle; i < 360; i += 15) {
      this.location.push({
        x: Math.floor(this.widthOrRadius * Math.cos(i) + this.xcord),
        y: Math.floor(this.widthOrRadius * Math.sin(i) + this.ycord)
      });
    }
    this.canvasContext.fill(newPath);
  };

  moveCircle = () => {
    this.xcord -= this.speed;
  };
}

export default Circle;
