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

    this.name = "Wall";
    this.animation = 0;
    this.originalHeight = this.height;
    this.drawWall();
  }

  get getCurrentName() {
    return this.name;
  }

  get getCurrentAnimation() {
    return this.animation;
  }

  set setCurrentAnimation(animation) {
    return (this.animation = animation);
  }

  drawWall() {
    this.canvasContext.fillStyle = this.bgColor;
    this.canvasContext.strokeStyle = this.strokeColor;
    this.canvasContext.beginPath();

    //Drawing the wall
    this.canvasContext.moveTo(this.xcord, this.ycord);

    this.canvasContext.lineTo(
      Math.floor(this.xcord - this.widthOrRadius / 2),
      Math.floor(this.ycord + this.height / 2)
    );

    this.canvasContext.moveTo(this.xcord, this.ycord);

    this.canvasContext.lineTo(
      Math.floor(this.xcord + this.widthOrRadius / 2),
      Math.floor(this.ycord - this.height / 2)
    );

    this.centerPoints.push({
      x: this.xcord,
      y: Math.floor(this.ycord - this.height / 2)
    });
    this.centerPoints.push({
      x: this.xcord,
      y: Math.floor(this.ycord + this.height / 2)
    });
    this.centerPoints.push({
      x: Math.floor(this.xcord - this.widthOrRadius / 2),
      y: this.ycord
    });
    this.centerPoints.push({
      x: Math.floor(this.xcord + this.widthOrRadius / 2),
      y: this.ycord
    });

    for (
      let i = Math.floor(this.ycord - this.height / 2);
      i <= Math.floor(this.ycord + this.height / 2);
      i += 2
    ) {
      this.location.push({ x: this.xcord, y: i });
    }

    for (
      let i = Math.floor(this.xcord - this.widthOrRadius / 2);
      i <= Math.floor(this.xcord + this.widthOrRadius / 2);
      i += 2
    ) {
      this.location.push({ x: i, y: this.ycord });
    }

    this.location.push({ x: this.xcord, y: this.ycord });

    this.location.push({
      x: this.xcord,
      y: Math.floor(this.ycord + this.height / 2)
    });

    this.location.push({
      x: this.xcord,
      y: Math.floor(this.ycord + this.height / 2 / 2)
    });

    this.location.push({
      x: this.xcord,
      y: Math.floor(this.ycord - this.height / 2 / 2)
    });

    this.location.push({
      x: Math.floor(this.xcord + this.widthOrRadius / 2),
      y: this.ycord
    });

    this.location.push({
      x: Math.floor(this.xcord + this.widthOrRadius / 2 / 2),
      y: this.ycord
    });

    this.location.push({
      x: Math.floor(this.xcord - this.widthOrRadius / 2 / 2),
      y: this.ycord
    });

    //Moving and animating the wall
    this.xcord -= this.speed;
    this.animation += 1;
    if (this.getCurrentAnimation % 80 === 0) {
      this.widthOrRadius === 0
        ? (this.widthOrRadius = this.originalHeight)
        : (this.widthOrRadius = 0);
      this.height === 0
        ? (this.height = this.originalHeight)
        : (this.height = 0);
    }

    this.canvasContext.stroke();
  }
}

export default Wall;
