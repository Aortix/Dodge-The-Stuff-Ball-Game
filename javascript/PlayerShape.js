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
    time,
    hit,
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
      time,
      hit,
      bgColor,
      strokeColor,
      canvasContext
    );

    this.addKeyboardCommands();
    this.drawPlayerShape();
  }

  drawPlayerShape = () => {
    this.drawShape();
    this.canvasContext.beginPath();
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

  clearPlayerShape = () => {
    this.location.length = 0;
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
        console.log("Random button clicked");
    }
  }.bind(this);
}

export default PlayerShape;
