import CreateShapes from "./../CreateShapes.js";

class Wall extends CreateShapes {
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

    this.drawWall();
  }

  drawWall = () => {
    this.drawShape();
    this.canvasContext.beginPath();
    this.canvasContext.moveTo(this.xcord, this.ycord);
    this.location.push({ x: this.xcord, y: this.ycord });

    this.canvasContext.lineTo(this.xcord, this.ycord + this.height);
    for (let i = this.ycord; i < this.ycord + this.height; i += 5) {
      this.location.push({ x: this.xcord, y: Math.floor(i) });
    }
    this.canvasContext.stroke();
  };

  moveWall = () => {
    this.xcord -= this.speed;
  };
}

export default Wall;
