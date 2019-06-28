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
    this.canvasContext.fillStyle = this.bgColor;
    this.canvasContext.strokeStyle = this.strokeColor;
    this.canvasContext.beginPath();

    //Origin (x,y) is the upper right of the rectangle
    this.canvasContext.moveTo(this.xcord, this.ycord);

    //Drawing the rectangle
    this.canvasContext.lineTo(this.xcord - this.widthOrRadius, this.ycord);
    this.canvasContext.lineTo(
      this.xcord - this.widthOrRadius,
      this.ycord + this.height
    );
    this.canvasContext.lineTo(this.xcord, this.ycord + this.height);
    this.canvasContext.lineTo(this.xcord, this.ycord);

    //Getting the centerpoints
    this.centerPoints.push({
      x: Math.floor(this.xcord - this.widthOrRadius / 2),
      y: this.ycord
    });
    this.centerPoints.push({
      x: Math.floor(this.xcord - this.widthOrRadius / 2),
      y: this.ycord + this.height
    });
    this.centerPoints.push({
      x: this.xcord + this.widthOrRadius,
      y: Math.floor(this.ycord + this.height / 2)
    });
    this.centerPoints.push({
      x: this.xcord,
      y: Math.floor(this.ycord + this.height / 2)
    });

    //Saving location data of rectangle to compare to player object for hits
    for (let i = this.xcord; i >= this.xcord - this.widthOrRadius; i -= 2) {
      this.location.push({
        x: i,
        y: this.ycord
      });
      this.location.push({
        x: i,
        y: this.ycord + this.height
      });
    }

    for (let i = this.ycord; i <= this.ycord + this.height; i += 2) {
      this.location.push({
        x: this.xcord - this.widthOrRadius,
        y: i
      });
      this.location.push({
        x: this.xcord,
        y: i
      });
    }

    this.location.push({
      x: this.xcord - this.widthOrRadius,
      y: Math.floor(this.ycord + this.height / 2)
    });

    this.location.push({
      x: this.xcord,
      y: Math.floor(this.ycord + this.height / 2)
    });

    this.location.push({
      x: this.xcord - this.widthOrRadius,
      y: this.ycord + this.height
    });

    this.location.push({
      x: Math.floor(this.xcord - this.widthOrRadius / 2),
      y: this.ycord
    });

    this.location.push({
      x: Math.floor(this.xcord - this.widthOrRadius / 2),
      y: this.ycord + this.height
    });

    //Move the rectangle
    this.xcord -= this.speed;

    this.canvasContext.stroke();
  }
}

export default Rectangle;
