class Canvas {
  constructor(xcord, ycord, width, height, bgColor, time, canvasContext) {
    this.xcord = xcord;
    this.ycord = ycord;
    this.width = width;
    this.height = height;
    this.bgColor = bgColor;
    this.time = time;
    this.canvasContext = canvasContext;

    this.createCanvas();
  }

  get getCurrentXcord() {
    return this.xcord;
  }

  get getCurrentYcord() {
    return this.ycord;
  }

  get getCurrentWidth() {
    return this.width;
  }

  get getCurrentHeight() {
    return this.height;
  }

  get getBgColor() {
    return this.bgColor;
  }

  get getTime() {
    return this.time;
  }

  get getCanvasContext() {
    return this.canvasContext;
  }

  set setCurrentXcord(xcord) {
    return (this.xcord = xcord);
  }

  set setCurrentYcord(ycord) {
    return (this.ycord = ycord);
  }

  set setCurrentWidth(width) {
    return (this.width = width);
  }

  set setCurrentHeight(height) {
    return (this.height = height);
  }

  set setBgColor(bgColor) {
    return (this.bgColor = bgColor);
  }

  set setTime(time) {
    return (this.time = time);
  }

  set setCanvasContext(canvasContext) {
    return (this.canvasContext = canvasContext);
  }

  createCanvas = () => {
    document.getElementById("canvas").style.width = this.width + "px";
    document.getElementById("canvas").style.height = this.height + "px";
    this.canvasContext.fillStyle = this.bgColor;
    this.canvasContext.fillRect(
      this.xcord,
      this.ycord,
      this.width,
      this.height
    );
  };
}

export default Canvas;
