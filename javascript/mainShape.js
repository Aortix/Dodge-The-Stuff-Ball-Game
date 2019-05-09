class mainShape {
  constructor(
    xcord = 0,
    ycord = 0,
    width = 40,
    height = 40,
    speed = 5,
    bgColor,
    strokeColor,
    canvasContext
  ) {
    (this.xcord = xcord), (this.ycord = ycord), (this.width = width);
    this.height = height;
    this.speed = speed;
    this.bgColor = bgColor;
    this.strokeColor = strokeColor;
    this.canvasContext = canvasContext;
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

  get getCurrentSpeed() {
    return this.speed;
  }

  get getCurrentBgColor() {
    return this.bgColor;
  }

  get getCurrentStrokeColor() {
    return this.strokeColor;
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
  set setWidth(width) {
    return (this.width = width);
  }

  set setHeight(height) {
    return (this.height = height);
  }

  set setSpeed(speed) {
    return (this.speed = speed);
  }

  set setBgColor(bgColor) {
    return (this.bgColor = bgColor);
  }

  set setStrokeColor(strokeColor) {
    return (this.strokeColor = strokeColor);
  }

  set setCurrentCanvasContext(canvasContext) {
    return (this.canvasContext = canvasContext);
  }

  drawShape = () => {
    this.canvasContext.fillStyle = this.bgColor;
    this.canvasContext.strokeStyle = this.strokeColor;
  };
}

export default mainShape;
