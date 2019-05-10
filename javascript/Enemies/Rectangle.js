import CreateShapes from "./../CreateShapes.js";

class Rectangle extends CreateShapes {
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

    this.drawRectangle();
  }

  drawRectangle = () => {
    this.drawShape();
    this.canvasContext.beginPath();
    this.canvasContext.moveTo(this.xcord, this.ycord);
    this.location.push({ x: this.xcord, y: this.ycord });
    this.canvasContext.lineTo(this.xcord - this.widthOrRadius, this.ycord);
    for (
      let i = this.xcord;
      i > this.xcord - this.widthOrRadius;
      i -= this.widthOrRadius / 6
    )
      this.location.push({
        x: Math.round(i),
        y: this.ycord
      });
    this.canvasContext.lineTo(
      this.xcord - this.widthOrRadius,
      this.ycord + this.height
    );
    for (
      let i = this.ycord;
      i < this.ycord + this.height;
      i += this.height / 6
    ) {
      this.location.push({
        x: this.xcord - this.widthOrRadius,
        y: Math.round(i)
      });
    }
    this.canvasContext.lineTo(this.xcord, this.ycord + this.height);
    for (
      let i = this.xcord - this.widthOrRadius;
      i < this.xcord;
      i += this.widthOrRadius / 6
    ) {
      this.location.push({
        x: Math.round(i),
        y: this.ycord + this.height
      });
    }
    for (
      let i = this.ycord + this.height;
      i > this.ycord;
      i -= this.height / 6
    ) {
      this.location.push({
        x: this.xcord,
        y: Math.round(i)
      });
    }
    this.canvasContext.lineTo(this.xcord, this.ycord);
    this.canvasContext.stroke();
  };

  moveRectangle = () => {
    this.xcord -= this.speed;
  };

  clearRectangle = () => {
    this.location.length = 0;
  };
}

export default Rectangle;
