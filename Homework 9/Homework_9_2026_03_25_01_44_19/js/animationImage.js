class animationImage {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.currentAnimation;
    this.createAnimation();
    this.direction = "";
  }
  
  createAnimation() {
    this.currentAnimation = new Sprite(this.x, this.y, this.w, this.h);
  }
  
  loadAnimation(animationType, fileNames) {
    this.currentAnimation.addAni(animationType, fileNames);
    this.currentAnimation.scale = 0.5;
  }
  
  // display the animation
  drawAnimation(animationType) {
    this.currentAnimation.rotationSpeed = 0;
    this.currentAnimation.changeAnimation(animationType);

    if (animationType == 'walk' && this.direction == 'forward') {
      this.currentAnimation.scale.x = 0.5;
      this.currentAnimation.velocity.x = 1;
    }
    else if (animationType == 'walk' && this.direction == 'up') {
      this.currentAnimation.velocity.y = -1;
    }
    else if (animationType == 'walk' && this.direction == 'down') {
      this.currentAnimation.scale.y = 0.5;
      this.currentAnimation.velocity.y = 1;
    }
    else if (animationType == 'walk' && this.direction == 'reverse') {
      this.currentAnimation.scale.x = -0.5;
      this.currentAnimation.velocity.x = -1;
    }
    else {
      this.currentAnimation.velocity.x = 0;
      this.currentAnimation.velocity.y = 0;
    }
  }
  
  updatePosition(direction) {
    this.direction = direction;
  }
  
  isColliding(myImage) {
    return this.currentAnimation.collide(myImage);
  }
}