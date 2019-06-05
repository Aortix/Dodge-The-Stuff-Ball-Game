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

    this.addKeyboardCommands = this.addKeyboardCommands.bind(this);
    this.removeKeyboardCommands = this.removeKeyboardCommands.bind(this);

    this.keyClicks = {};
    this.hit = 0;
    this.invincibility = 0;
    this.addKeyboardCommands();
    this.drawPlayerShape();
  }

  get getCurrentHit() {
    return this.hit;
  }

  get getCurrentKeyClicks() {
    return this.keyClicks;
  }

  set setCurrentHit(hit) {
    return (this.hit = hit);
  }

  drawPlayerShape(state){
    this.drawShape();
    this.canvasContext.beginPath();
    let newPath = new Path2D();
    //Origin (x,y) is the middle of the circle
    newPath.arc(
      this.xcord,
      this.ycord,
      this.widthOrRadius,
      this.startAngle,
      this.endAngle
    );

    for (let i = this.startAngle; i < this.endAngle; i += 8) {
      this.location.push({
        x: Math.floor(this.widthOrRadius * Math.cos(i) + this.xcord),
        y: Math.floor(this.widthOrRadius * Math.sin(i) + this.ycord)
      });
    }

    if (state === 0) {
      this.canvasContext.stroke(newPath);
    } else {
      this.canvasContext.fill(newPath);
    }
  };

  movePlayerShape() {
    this.xcord += this.speed;
  };

  addKeyboardCommands() {
    window.addEventListener("keydown", (e) => {this.keyDownCommands(e)}, false);
    window.addEventListener("keyup", (e) => {this.keyUpCommands(e)}, false);
  };

  removeKeyboardCommands() {
    window.removeEventListener("keydown", (e) => {this.keyDownCommands(e)}, false);
    window.removeEventListener("keyup", (e) => {this.keyUpCommands(e)}, false);
  };

  keyDownCommands(e) {
    switch (e.key) {
      case "ArrowUp":
        this.keyClicks.up = true;
        this.keyClicks.down = false;
        break;
      case "ArrowDown":
        this.keyClicks.down = true;
        this.keyClicks.up = false;
        break;
      default:
        break;
    }
  };

  keyUpCommands(e) {
    switch (e.key) {
      case "ArrowUp":
        this.keyClicks.up = false;
        break;
      case "ArrowDown":
        this.keyClicks.down = false;
        break;
      default:
        break;
    }
  };
}

export default PlayerShape;
