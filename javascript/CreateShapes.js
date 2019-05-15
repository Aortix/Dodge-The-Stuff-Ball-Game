class CreateShapes {
  //12 Parameters so far
  constructor(
    xcord = 0,
    ycord = 0,
    widthOrRadius = 40,
    height = 40,
    startAngle = 0,
    endAngle = 0,
    speed = 5,
    time = 0,
    hit = 0,
    bgColor = "white",
    strokeColor = "black",
    canvasContext
  ) {
    (this.xcord = xcord),
      (this.ycord = ycord),
      (this.widthOrRadius = widthOrRadius);
    this.height = height;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.speed = speed;
    this.time = time;
    this.hit = hit;
    this.bgColor = bgColor;
    this.strokeColor = strokeColor;
    this.canvasContext = canvasContext;

    //Location is an array of the coordinates of whatever shape is being created; these coordinates will allow for
    //collision detection with the player object.
    this.location = [];
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

  get getCurrentTime() {
    return this.time;
  }

  get getCurrentHit() {
    return this.hit;
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

  set setCurrentTime(time) {
    return (this.time = time);
  }

  set setCurrentHit(hit) {
    return (this.hit = hit);
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

  drawShape = () => {
    this.canvasContext.fillStyle = this.bgColor;
    this.canvasContext.strokeStyle = this.strokeColor;
  };

  clearObject = () => {
    this.location.length = 0;
  };

  deleteObject = () => {
    delete this.xcord;
    delete this.ycord;
    delete this.widthOrRadius;
    delete this.height;
    delete this.startAngle;
    delete this.endAngle;
    delete this.speed;
    delete this.time;
    delete this.hit;
    delete this.bgColor;
    delete this.strokeColor;
    delete this.canvasContext;
    delete this.location;
  };
}

export default CreateShapes;
