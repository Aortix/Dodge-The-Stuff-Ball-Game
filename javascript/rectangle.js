import mainShape from "./mainShape.js";

class Rectangle extends mainShape {
  constructor(
    xcord,
    ycord,
    width,
    height,
    speed,
    bgColor,
    strokeColor,
    canvasContext
  ) {
    super(
      xcord,
      ycord,
      width,
      height,
      speed,
      bgColor,
      strokeColor,
      canvasContext
    );

    this.drawRectange();
  }

  drawRectange = () => {
    this.drawShape();
    this.canvasContext.beginPath();
    this.canvasContext.moveTo(this.xcord, this.ycord);
    this.canvasContext.lineTo(
      this.xcord - this.width / 2,
      this.ycord + this.height / 2
    );
    this.canvasContext.lineTo(this.xcord, this.ycord + this.height);
    this.canvasContext.lineTo(
      this.xcord + this.width / 2,
      this.ycord + this.height / 2
    );
    this.canvasContext.lineTo(this.xcord, this.ycord);
    this.canvasContext.stroke();
  };
}

export default Rectangle;
