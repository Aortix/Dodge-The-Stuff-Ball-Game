class CreateShapes {
  //10 Parameters so far
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
    this.xcord = xcord;
    this.ycord = ycord;
    this.widthOrRadius = widthOrRadius;
    this.height = height;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.speed = speed;
    this.bgColor = bgColor;
    this.strokeColor = strokeColor;
    this.canvasContext = canvasContext;

    //Location is an array of the coordinates of whatever shape is being created; these coordinates will allow for
    //collision detection with the player object.
    this.location = [];

    this.centerPoints = [];
  }

  get getCurrentXcord() {
    return this.xcord;
  }

  get getCurrentYcord() {
    return this.ycord;
  }

  get getCurrentWidthOrRadius() {
    return this.widthOrRadius;
  }

  get getCurrentHeight() {
    return this.height;
  }

  get getCurrentStartAngle() {
    return this.startAngle;
  }

  get getCurrentEndAngle() {
    return this.endAngle;
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

  get getCurrentLocation() {
    return this.location;
  }

  get getCurrentCenterPoints() {
    return this.centerPoints;
  }
  set setCurrentXcord(xcord) {
    return (this.xcord = xcord);
  }

  set setCurrentYcord(ycord) {
    return (this.ycord = ycord);
  }
  set setCurrentWidthOrRadius(widthOrRadius) {
    return (this.widthOrRadius = widthOrRadius);
  }

  set setCurrentHeight(height) {
    return (this.height = height);
  }

  set setCurrentStartAngle(startAngle) {
    return (this.startAngle = startAngle);
  }

  set setCurrentEndAngle(endAngle) {
    return (this.endAngle = endAngle);
  }

  set setCurrentSpeed(speed) {
    return (this.speed = speed);
  }

  set setCurrentBgColor(bgColor) {
    return (this.bgColor = bgColor);
  }

  set setCurrentStrokeColor(strokeColor) {
    return (this.strokeColor = strokeColor);
  }

  set setCurrentCanvasContext(canvasContext) {
    return (this.canvasContext = canvasContext);
  }

  clearObject() {
    this.location = [];
    this.centerPoints = [];
  }
}

export default CreateShapes;
