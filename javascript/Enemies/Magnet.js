import CreateShapes from "./../CreateShapes.js";

class Magnet extends CreateShapes {
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
    this.originalWidth = this.widthOrRadius;
    this.drawMagnet();
  }

  get getCurrentAnimation() {
    return this.animation;
  }

  set setCurrentAnimation(animation) {
    return (this.animation = animation);
  }

  drawMagnet = () => {
    this.drawShape();
    this.canvasContext.beginPath();
    this.canvasContext.arc(
      this.xcord - this.widthOrRadius,
      this.ycord,
      this.widthOrRadius,
      0,
      Math.PI,
      true
    );
    for (let i = Math.PI; i < 2 * Math.PI; i += Math.PI / 12) {
      this.location.push({
        x: Math.floor(
          this.xcord - this.widthOrRadius - this.widthOrRadius * Math.cos(i)
        ),
        y: Math.floor(this.widthOrRadius * Math.sin(i) + this.ycord)
      });
    }
    this.canvasContext.moveTo(this.xcord - 5, this.ycord);
    this.canvasContext.arc(
      this.xcord - this.widthOrRadius,
      this.ycord,
      this.widthOrRadius - 5,
      0,
      Math.PI,
      true
    );
    for (let i = Math.PI; i < 2 * Math.PI; i += Math.PI / 12) {
      this.location.push({
        x: Math.floor(
          this.xcord -
            this.widthOrRadius -
            (this.widthOrRadius - 5) * Math.cos(i)
        ),
        y: Math.floor((this.widthOrRadius - 5) * Math.sin(i) + this.ycord)
      });
    }
    this.canvasContext.moveTo(this.xcord, this.ycord);
    this.canvasContext.lineTo(this.xcord - 5, this.ycord);
    this.canvasContext.moveTo(this.xcord - this.widthOrRadius * 2, this.ycord);
    this.canvasContext.lineTo(
      this.xcord - this.widthOrRadius * 2 + 5,
      this.ycord
    );
    this.canvasContext.stroke();
  };

  moveMagnet = () => {
    this.xcord -= this.speed;

    if (this.getCurrentAnimation >= 0 && this.getCurrentAnimation < 2) {
      this.animation += 0.1;
    } else if (this.getCurrentAnimation >= 2 && this.getCurrentAnimation <= 4) {
      this.animation += 0.1;
      this.widthOrRadius = this.originalWidth - 10;
    } else if (this.getCurrentAnimation >= 4 && this.getCurrentAnimation <= 6) {
      this.animation += 0.1;
      this.widthOrRadius = this.originalWidth + 10;
    } else if (this.getCurrentAnimation >= 6 && this.getCurrentAnimation <= 8) {
      this.animation += 0.1;
      this.widthOrRadius = this.originalWidth - 10;
    } else if (
      this.getCurrentAnimation >= 8 &&
      this.getCurrentAnimation <= 10
    ) {
      this.animation += 0.1;
      this.widthOrRadius = this.originalWidth + 10;
    } else if (this.getCurrentAnimation >= 10) {
      this.animation = 0;
    }
  };
}

export default Magnet;
