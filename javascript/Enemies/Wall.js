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

    this.canvasContext.lineTo(this.xcord, this.ycord - this.height);
    for (let i = this.ycord; i > this.ycord - this.height; i -= 5) {
      this.location.push({ x: this.xcord, y: Math.floor(i) });
    }
    this.canvasContext.lineTo(this.xcord - this.width, this.ycord);
    for (let i = this.xcord; i > this.xcord - this.width; i -= 5) {
      this.location.push({ x: Math.floor(i), y: this.ycord - this.height });
    }
    this.canvasContext.lineTo(
      this.xcord - this.width,
      this.ycord + this.height
    );
    for (let i = this.ycord - this.height; i < this.ycord; i += 5) {
      this.location.push({ x: this.xcord - this.width, y: Math.floor(i) });
    }
    for (let i = this.xcord - this.width; i < this.xcord; i += 5) {
      this.location.push({ x: Math.floor(i), y: this.ycord });
    }
    this.canvasContext.lineTo(this.xcord, this.ycord);
    this.canvasContext.stroke();
  };

  moveWall = () => {
    this.xcord -= this.speed;
  };
}

export default Wall;
