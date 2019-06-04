import CreateShapes from "../CreateShapes.js";
class Belt extends CreateShapes {
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

    this.drawBelt();
  }

  drawBelt = () => {
    this.drawShape();
    this.canvasContext.beginPath();
    this.canvasContext.moveTo(this.xcord, this.ycord);
    this.location.push({ x: this.xcord, y: this.ycord });

    this.canvasContext.arc(
      this.xcord - this.widthOrRadius,
      this.ycord,
      this.widthOrRadius,
      0,
      2 * Math.PI
    );

    for (let i = 0; i < 360; i += 10) {
      this.location.push({
        x: Math.floor(
          this.widthOrRadius * Math.cos(i) + this.xcord - this.widthOrRadius
        ),
        y: Math.floor(this.widthOrRadius * Math.sin(i) + this.ycord)
      });
    }

    //For north of the main circle
    this.canvasContext.moveTo(
      this.xcord - this.widthOrRadius / 2,
      this.ycord -
      this.widthOrRadius -
      (this.widthOrRadius / 2) * Math.sin(Math.PI / 2)
    );
    for (
      let j =
        this.ycord -
        this.widthOrRadius -
        (this.widthOrRadius / 2) * Math.sin(Math.PI / 2);
      j >
      this.ycord -
      this.widthOrRadius * 3 -
      this.widthOrRadius -
      (this.widthOrRadius / 2) * Math.sin(Math.PI / 2);
      j -= this.widthOrRadius
    ) {
      this.canvasContext.arc(
        this.xcord - this.widthOrRadius,
        j,
        this.widthOrRadius / 2,
        0,
        2 * Math.PI
      );
      for (let i = 0; i < 360; i += 10) {
        this.location.push({
          x: Math.floor(
            (this.widthOrRadius / 2) * Math.cos(i) +
            this.xcord -
            this.widthOrRadius
          ),
          y: Math.floor((this.widthOrRadius / 2) * Math.sin(i) + j)
        });
      }
      this.canvasContext.moveTo(
        this.xcord - this.widthOrRadius / 2,
        j - this.widthOrRadius
      );
    }

    //For south of the main circle
    this.canvasContext.moveTo(
      this.xcord - this.widthOrRadius / 2,
      (this.widthOrRadius / 2) * Math.sin((3 * Math.PI) / 2) +
      this.ycord +
      this.widthOrRadius * 2
    );

    for (
      let j =
        (this.widthOrRadius / 2) * Math.sin((3 * Math.PI) / 2) +
        this.ycord +
        this.widthOrRadius * 2;
      j <
      (this.widthOrRadius / 2) * Math.sin((3 * Math.PI) / 2) +
      this.ycord +
      this.widthOrRadius * 3 +
      this.widthOrRadius * 2;
      j += this.widthOrRadius
    ) {
      this.canvasContext.arc(
        this.xcord - this.widthOrRadius,
        j,
        this.widthOrRadius / 2,
        0,
        2 * Math.PI
      );
      for (let i = 0; i < 360; i += 10) {
        this.location.push({
          x: Math.floor(
            (this.widthOrRadius / 2) * Math.cos(i) +
            this.xcord -
            this.widthOrRadius
          ),
          y: Math.floor((this.widthOrRadius / 2) * Math.sin(i) + j)
        });
      }
      this.canvasContext.moveTo(
        this.xcord - this.widthOrRadius / 2,
        j + this.widthOrRadius
      );
    }

    this.canvasContext.stroke();
  };

  moveBelt = () => {
    this.xcord -= this.speed;
  };
}

export default Belt;
