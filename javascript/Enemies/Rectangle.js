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

    this.drawRectangle();
  }

  drawRectangle() {
    //Calling CreateShapes method
    this.drawShape();
    this.canvasContext.beginPath();

    //Origin (x,y) is the upper right of the rectangle
    this.canvasContext.moveTo(this.xcord, this.ycord);
    this.location.push({ x: this.xcord, y: this.ycord });

    this.canvasContext.lineTo(this.xcord - this.widthOrRadius, this.ycord);
    for (let i = this.xcord; i > this.xcord - this.widthOrRadius; i -= 2)
      this.location.push({
        x: Math.floor(i),
        y: this.ycord
      });
    this.location.push({ x: this.xcord - this.widthOrRadius, y: this.ycord });
    this.location.push({
      x: Math.floor(this.xcord - this.widthOrRadius / 2),
      y: this.ycord
    });

    this.canvasContext.lineTo(
      this.xcord - this.widthOrRadius,
      this.ycord + this.height
    );
    for (let i = this.ycord; i < this.ycord + this.height; i += 2) {
      this.location.push({
        x: Math.floor(this.xcord - this.widthOrRadius),
        y: Math.floor(i)
      });
    }
    this.location.push({
      x: Math.floor(this.xcord - this.widthOrRadius),
      y: Math.floor(this.ycord + this.height / 2)
    });

    this.location.push({
      x: Math.floor(this.xcord - this.widthOrRadius),
      y: Math.floor(this.ycord + this.height)
    });

    this.canvasContext.lineTo(this.xcord, this.ycord + this.height);
    for (let i = this.xcord - this.widthOrRadius; i < this.xcord; i += 2) {
      this.location.push({
        x: Math.floor(i),
        y: Math.floor(this.ycord + this.height)
      });
    }

    this.location.push({
      x: Math.floor(this.xcord - this.widthOrRadius / 2),
      y: Math.floor(this.ycord + this.height)
    });

    for (let i = this.ycord + this.height; i > this.ycord; i -= 2) {
      this.location.push({
        x: this.xcord,
        y: Math.floor(i)
      });
    }
    this.location.push({ x: this.xcord, y: Math.floor(this.ycord + this.height) });
    this.canvasContext.lineTo(this.xcord, this.ycord);

    this.canvasContext.stroke();
  };

  moveRectangle() {
    this.xcord -= this.speed;
  };
}

export default Rectangle;
