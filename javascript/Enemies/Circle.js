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

    this.animation = 0;
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

  get getCurrentAnimation() {
    return this.animation;
  }

  set setCurrentAnimation(animation) {
    return (this.animation = animation);
  }

  moveCircle = () => {
    this.xcord -= this.speed;

    if (this.getCurrentAnimation < 4) {
      this.ycord -= this.speed;
      this.animation = this.getCurrentAnimation + 0.2;
    }

    if (this.getCurrentAnimation >= 4 && this.getCurrentAnimation < 8) {
      this.ycord += this.speed;
      this.animation = this.getCurrentAnimation + 0.2;
    }

    if (this.getCurrentAnimation >= 8) {
      this.animation = 0;
    }
  };
}

export default Circle;
