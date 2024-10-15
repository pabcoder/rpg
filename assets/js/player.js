class Player {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.spriteStep = 0;
    this.currentPose = 0;
    this.currentDirection = 3;
    this.imageSize = 50;
    this.playerStep = 2;
  }

  setCurrentDirection(direction) {
    this.currentDirection = direction;
  }

  getCurrentDirection() {
    return this.currentDirection;
  }

  setSpriteStep(step) {
    this.spriteStep = step;
  }

  getSpriteStep() {
    return this.spriteStep;
  }

  setCurrentPose(pose) {
    this.currentPose = pose;
  }

  getCurrentPose() {
    return this.currentPose;
  }

  getImageSize() {
    return this.imageSize;
  }

  getPlayerStep() {
    return this.playerStep;
  }

  getPosition() {
    return {
      x: this.x,
      y: this.y
    };
  }

  modifyX(x) {
    this.x += this.playerStep * x;
  }

  modifyY(y) {
    this.y += this.playerStep * y;
  }

  show() {    
    image(this.image[`${this.currentDirection}${this.currentPose}`], this.x, this.y, this.imageSize, this.imageSize);
  }
}