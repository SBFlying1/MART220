class Food {
  constructor(img, positionX, positionY, sizeLength, sizeWidth) {
    this.img = img;
    this.positionX = positionX;
    this.positionY = positionY;
    this.sizeLength = sizeLength;
    this.sizeWidth = sizeWidth;
  }
  
  load() {
    return loadImage(this.img);
  }
  
  display(f) {
    image(f, this.positionX, this.positionY, this.sizeLength, this.sizeWidth);
  }
}