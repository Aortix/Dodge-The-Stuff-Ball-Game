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
    this.originalHeight = this.height;
    this.originalWidth = this.widthOrRadius;
    this.drawWall();
  }

  get getCurrentAnimation() {
    return this.animation;
  }

  set setCurrentAnimation(animation) {
    return (this.animation = animation);
  }

  drawWall = () => {
    this.drawShape();
    this.canvasContext.beginPath();
    this.canvasContext.moveTo(this.xcord, this.ycord);
    this.location.push({ x: this.xcord, y: this.ycord });

    this.canvasContext.lineTo(
      this.xcord - this.widthOrRadius / 2,
      this.ycord + this.height / 2
    );

    this.canvasContext.moveTo(this.xcord, this.ycord);

    this.canvasContext.lineTo(
      this.xcord + this.widthOrRadius / 2,
      this.ycord - this.height / 2
    );

    for (let i = this.ycord; i < this.ycord + this.height; i += 2.5) {
      this.location.push({ x: this.xcord, y: Math.floor(i) });
    }
    this.location.push({ x: this.xcord, y: this.ycord + this.height / 2 });
    this.location.push({ x: this.xcord, y: this.ycord + this.height });
    this.canvasContext.stroke();
  };

  moveWall = () => {
    this.xcord -= this.speed;
    if (this.getCurrentAnimation >= 0 && this.getCurrentAnimation < 2) {
      this.animation += 0.1;
    } else if (this.getCurrentAnimation >= 2 && this.getCurrentAnimation <= 4) {
      this.animation += 0.1;
      this.height = 0;
      this.widthOrRadius = this.originalHeight;
    } else if (this.getCurrentAnimation >= 4 && this.getCurrentAnimation <= 6) {
      this.animation += 0.1;
      this.height = this.originalHeight;
      this.widthOrRadius = this.originalWidth;
    } else if (this.getCurrentAnimation >= 6 && this.getCurrentAnimation <= 8) {
      this.animation += 0.1;
      this.height = 0;
      this.widthOrRadius = this.originalHeight;
    } else if (
      this.getCurrentAnimation >= 8 &&
      this.getCurrentAnimation <= 10
    ) {
      this.animation += 0.1;
      this.height = this.originalHeight;
      this.widthOrRadius = this.originalWidth;
    } else if (this.getCurrentAnimation >= 10) {
      this.animation = 0;
    }
  };
}

export default Wall;
