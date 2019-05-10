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

  get getCurrentBgColor() {
    return this.bgColor;
  }

  get getCurrentTime() {
    return this.time;
  }

  get getCurrentCanvasContext() {
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

  set setCurrentBgColor(bgColor) {
    return (this.bgColor = bgColor);
  }

  set setCurrentTime(time) {
    return (this.time = time);
  }

  set setCurrentCanvasContext(canvasContext) {
    return (this.canvasContext = canvasContext);
  }

  createCanvas = () => {
    document.getElementById("canvas").setAttribute("width", this.width);
    document.getElementById("canvas").setAttribute("height", this.height);
    this.canvasContext.fillStyle = this.bgColor;
    this.canvasContext.fillRect(
      this.xcord,
      this.ycord,
      this.width,
      this.height
    );
  };

  drawCanvas = () => {
    this.canvasContext.fillStyle = this.bgColor;
    this.canvasContext.fillRect(
      this.xcord,
      this.ycord,
      this.width,
      this.height
    );
  };

  clearCanvas = () => {
    this.canvasContext.clearRect(
      this.xcord,
      this.ycord,
      this.width,
      this.height
    );
  };
}

export default Canvas;
