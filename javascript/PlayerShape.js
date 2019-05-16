import CreateShapes from "./CreateShapes.js";

class PlayerShape extends CreateShapes {
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

    this.hit = 0;
    this.addKeyboardCommands();
    this.drawPlayerShape();
  }

  get getCurrentHit() {
    return this.hit;
  }

  set setCurrentHit(hit) {
    return (this.hit = hit);
  }

  drawPlayerShape = () => {
    this.drawShape();
    this.canvasContext.beginPath();
    //Origin (x,y) is the middle of the circle
    this.canvasContext.arc(
      this.xcord,
      this.ycord,
      this.widthOrRadius,
      this.startAngle,
      this.endAngle
    );

    for (let i = this.startAngle; i < this.endAngle; i += 5) {
      this.location.push({
        x: Math.floor(this.widthOrRadius * Math.cos(i) + this.xcord),
        y: Math.floor(this.widthOrRadius * Math.sin(i) + this.ycord)
      });
    }
    this.canvasContext.stroke();
  };

  movePlayerShape = () => {
    this.xcord += this.speed;
  };

  addKeyboardCommands = () => {
    window.addEventListener("keydown", this.keyboardCommands, false);
  };

  removeKeyboardCommands = () => {
    window.removeEventListener("keydown", this.keyboardCommands, false);
  };

  keyboardCommands = function(e) {
    switch (e.key) {
      case "ArrowUp":
        return (this.ycord -= this.speed);
      case "ArrowDown":
        return (this.ycord += this.speed);
      default:
        break;
    }
  }.bind(this);
}

export default PlayerShape;
