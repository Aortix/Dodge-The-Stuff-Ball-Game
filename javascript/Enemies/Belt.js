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

    this.name = "Belt";
    this.drawBelt();
  }

  get getCurrentName() {
    return this.name;
  }

  drawBelt() {
    this.canvasContext.fillStyle = this.bgColor;
    this.canvasContext.strokeStyle = this.strokeColor;
    this.canvasContext.beginPath();

    this.canvasContext.moveTo(this.xcord, this.ycord);
    this.location.push({ x: this.xcord, y: this.ycord });

    this.canvasContext.arc(
      this.xcord - this.widthOrRadius,
      this.ycord,
      this.widthOrRadius,
      this.startAngle,
      this.endAngle
    );

    for (let i = this.startAngle; i < this.endAngle; i += 10) {
      this.location.push({
        x: Math.floor(
          this.widthOrRadius * Math.cos(i) + this.xcord - this.widthOrRadius
        ),
        y: Math.floor(this.widthOrRadius * Math.sin(i) + this.ycord)
      });
    }

    //Getting the centerpoints
    this.centerPoints.push({
      x: Math.floor(
        this.widthOrRadius * Math.cos(90) + this.xcord - this.widthOrRadius
      ),
      y: Math.floor(this.widthOrRadius * Math.sin(90) + this.ycord)
    });
    this.centerPoints.push({
      x: Math.floor(
        this.widthOrRadius * Math.cos(270) + this.xcord - this.widthOrRadius
      ),
      y: Math.floor(this.widthOrRadius * Math.sin(270) + this.ycord)
    });
    this.centerPoints.push({
      x: Math.floor(
        this.widthOrRadius * Math.cos(180) + this.xcord - this.widthOrRadius
      ),
      y: Math.floor(this.widthOrRadius * Math.sin(180) + this.ycord)
    });
    this.centerPoints.push({
      x: Math.floor(
        this.widthOrRadius * Math.cos(360) + this.xcord - this.widthOrRadius
      ),
      y: Math.floor(this.widthOrRadius * Math.sin(360) + this.ycord)
    });

    //For north of the main circle
    this.canvasContext.moveTo(
      Math.floor(this.xcord - this.widthOrRadius / 2),
      Math.floor(
        this.ycord -
          this.widthOrRadius -
          (this.widthOrRadius / 2) * Math.sin(Math.PI / 2)
      )
    );
    for (
      let j = Math.floor(
        this.ycord -
          this.widthOrRadius -
          (this.widthOrRadius / 2) * Math.sin(Math.PI / 2)
      );
      j >
      Math.floor(
        this.ycord -
          this.widthOrRadius * 3 -
          this.widthOrRadius -
          (this.widthOrRadius / 2) * Math.sin(Math.PI / 2)
      );
      j -= this.widthOrRadius
    ) {
      this.canvasContext.arc(
        this.xcord - this.widthOrRadius,
        j,
        Math.floor(this.widthOrRadius / 2),
        0,
        360
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
        Math.floor(this.xcord - this.widthOrRadius / 2),
        j - this.widthOrRadius
      );
    }

    //For south of the main circle
    this.canvasContext.moveTo(
      Math.floor(this.xcord - this.widthOrRadius / 2),
      Math.floor(
        (this.widthOrRadius / 2) * Math.sin((3 * Math.PI) / 2) +
          this.ycord +
          this.widthOrRadius * 2
      )
    );

    for (
      let j = Math.floor(
        (this.widthOrRadius / 2) * Math.sin((3 * Math.PI) / 2) +
          this.ycord +
          this.widthOrRadius * 2
      );
      j <
      Math.floor(
        (this.widthOrRadius / 2) * Math.sin((3 * Math.PI) / 2) +
          this.ycord +
          this.widthOrRadius * 3 +
          this.widthOrRadius * 2
      );
      j += this.widthOrRadius
    ) {
      this.canvasContext.arc(
        this.xcord - this.widthOrRadius,
        j,
        Math.floor(this.widthOrRadius / 2),
        0,
        360
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
        Math.floor(this.xcord - this.widthOrRadius / 2),
        j + this.widthOrRadius
      );
    }

    //Moving the belt
    this.xcord -= this.speed;

    this.canvasContext.stroke();
  }
}

export default Belt;
