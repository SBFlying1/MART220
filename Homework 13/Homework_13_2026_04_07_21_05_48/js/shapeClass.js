class Shape {
  constructor(x,y,s){
    this.x = x;
    this.y = y;
    this.speed = s;
  }
}

class Box extends Shape {
  constructor(x,y,s){
    super(x,y,s);
  }
  display() {
    rotateZ(frameCount * this.speed);
    push();
    translate(this.x, this.y);
    rotateX(frameCount * 0.01);
    normalMaterial();
    box(25);
    pop();
  }
}

class Cone extends Shape {
  constructor(x,y,s){
    super(x,y,s);
  }
  display() {
    rotateZ(frameCount * this.speed);
    push();
    translate(this.x, this.y);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(pg);
    cone(25, 25);
    pop();
  }
}

class Sphere extends Shape {
  constructor(x,y,s){
    super(x,y,s);
  }
  display() {
    rotateZ(frameCount * this.speed);
    push();
    translate(this.x, this.y);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    pointLight(255, 255, 255, mouseX, mouseY, 0);
    specularMaterial(250, 0, 0);
    sphere(25);
    pop();
  }
}

class Cylinder extends Shape {
  constructor(x,y,s){
    super(x,y,s);
  }
  display() {
    rotateZ(frameCount * this.speed);
    push();
    translate(this.x, this.y);
    rotateX(frameCount * 0.01);
    texture(ph);
    cylinder(25, 25);
    pop();
  }
}

class Ellipsoid extends Shape {
  constructor(x,y,s){
    super(x,y,s);
  }
  display() {
    rotateZ(frameCount * this.speed);
    push();
    translate(this.x, this.y);
    rotateY(frameCount * 0.01);
    texture(pi);
    ellipsoid(30, 25);
    pop();
  }
}