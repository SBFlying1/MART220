class Shape {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}

class Donut1 extends Shape {
  constructor(x,y){
    super(x,y);
  }
  display() {
    push();
    translate(this.x, this.y);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.001);
    rotateZ(frameCount * 0.001);
    texture(donut1tex);
    torus(15);
    pop();
  }
}

class Donut2 extends Shape {
  constructor(x,y){
    super(x,y);
  }
  display() {
    push();
    translate(this.x, this.y);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.005);
    rotateZ(frameCount * 0.005);
    texture(donut2tex);
    torus(15);
    pop();
  }
}

class Donut3 extends Shape {
  constructor(x,y){
    super(x,y);
  }
  display() {
    push();
    translate(this.x, this.y);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    texture(donut3tex);
    torus(15);
    pop();
  }
}

class Donut4 extends Shape {
  constructor(x,y){
    super(x,y);
  }
  display() {
    push();
    translate(this.x, this.y);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.02);
    rotateZ(frameCount * 0.02);
    texture(donut4tex);
    torus(15);
    pop();
  }
}

class Donut5 extends Shape {
  constructor(x,y){
    super(x,y);
  }
  display() {
    push();
    translate(this.x, this.y);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.03);
    rotateZ(frameCount * 0.03);
    texture(donut5tex);
    torus(15);
    pop();
  }
}