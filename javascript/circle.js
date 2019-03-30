class Circle {
  constructor(width = 40, height = 40, velocity = 5) {
    this.width = width;
    this.height = height;
    this.velocity = velocity;
  }

  get currWidth() {
    return this.width;
  }

  get currHeight() {
    return this.height;
  }

  get currVelocity() {
    return this.velocity;
  }

  set setWidth(width) {
    return (this.width = width);
  }

  set setHeight(height) {
    return (this.height = height);
  }

  set setVelocity(velocity) {
    return (this.velocity = velocity);
  }

  drawCircle = (canvasContext, color, xcord, ycord) => {
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.moveTo(xcord, ycord);
    canvasContext.lineTo(xcord - this.width / 2, ycord + this.height / 2);
    canvasContext.lineTo(xcord, ycord + this.height);
    canvasContext.lineTo(xcord + this.width / 2, ycord + this.height / 2);
    canvasContext.lineTo(xcord, ycord);
    canvasContext.stroke();
  };
}

export default Circle;
