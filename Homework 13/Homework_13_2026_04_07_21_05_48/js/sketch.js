let shapeArray = [];

function preload() {
  font = loadFont('assets/Nasa21-l23X.ttf');
  teapot = loadModel('assets/Teapot.stl', true);
}

function setup() {
  createCanvas(400, 400, WEBGL);
  
  pg = createGraphics(100, 100);
  pg.background(200);
  pg.square(50, 50, 25);
  
  ph = createGraphics(100, 100);
  ph.background(100);
  ph.circle(50, 50, 25);
  
  pi = createGraphics(100, 100);
  pi.background(0, 255, 0);
  pi.triangle(0, 0, 100, 0, 100, 100);
  
  for(var i = 0; i < 5; i++){
    if (i == 0){
      shapeArray[i] = new Box(-100, -100, 0.001);
    } else if (i == 1) {
      shapeArray[i] = new Cone(100, -100, 0.005);
    } else if (i == 2) {
      shapeArray[i] = new Sphere(100, 100, 0.01);
    } else if (i == 3) {
      shapeArray[i] = new Cylinder(-100, 100, 0.02);
    } else {
      shapeArray[i] = new Ellipsoid(0, -150, 0.03);
    }
  }
}

function draw() {
  background(255);
  
  fill(0);
  
  push();
  textFont(font);
  text("3D Shapes", -195, -190);
  text("Flynn", 170, 195);
  pop();
  
  push();
  scale(0.75);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial();
  model(teapot);
  pop();
  
  fill(255);
  
  for(var j = 0; j < 5; j++){
    shapeArray[j].display();
  }
}

function mousePressed(){
  shapeArray[1].x = floor(random(-200, 201));
  shapeArray[1].y = floor(random(-200, 201));
  
  shapeArray[4].x = floor(random(-200, 201));
  shapeArray[4].y = floor(random(-200, 201));
}