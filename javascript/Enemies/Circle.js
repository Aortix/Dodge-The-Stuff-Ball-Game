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

    this.name = "Circle";
    this.animation = 0;
    this.drawCircle();
  }

  get getCurrentName() {
    return this.name;
  }

  drawCircle() {
    this.canvasContext.fillStyle = this.bgColor;
    this.canvasContext.strokeStyle = this.strokeColor;
    this.canvasContext.beginPath();

    //Draw the circle and add location points
    let newPath = new Path2D();
    newPath.arc(
      this.xcord,
      this.ycord,
      this.widthOrRadius,
      this.startAngle,
      this.endAngle
    );
    for (let i = this.startAngle; i <= this.endAngle; i += 10) {
      this.location.push({
        x: Math.floor(this.widthOrRadius * Math.cos(i) + this.xcord),
        y: Math.floor(this.widthOrRadius * Math.sin(i) + this.ycord)
      });
    }

    //Getting the centerpoints
    this.centerPoints.push({
      x: Math.floor(this.widthOrRadius * Math.cos(90) + this.xcord),
      y: Math.floor(this.widthOrRadius * Math.sin(90) + this.ycord)
    });
    this.centerPoints.push({
      x: Math.floor(this.widthOrRadius * Math.cos(270) + this.xcord),
      y: Math.floor(this.widthOrRadius * Math.sin(270) + this.ycord)
    });
    this.centerPoints.push({
      x: Math.floor(this.widthOrRadius * Math.cos(180) + this.xcord),
      y: Math.floor(this.widthOrRadius * Math.sin(180) + this.ycord)
    });
    this.centerPoints.push({
      x: Math.floor(this.widthOrRadius * Math.cos(360) + this.xcord),
      y: Math.floor(this.widthOrRadius * Math.sin(360) + this.ycord)
    });

    //Move the circle
    this.xcord -= this.speed;

    this.animation += 1;
    this.getCurrentAnimation % 70 > 35
      ? (this.ycord += this.speed)
      : (this.ycord -= this.speed);

    this.canvasContext.stroke(newPath);
  }

  get getCurrentAnimation() {
    return this.animation;
  }

  set setCurrentAnimation(animation) {
    return (this.animation = animation);
  }
}

export default Circle;
