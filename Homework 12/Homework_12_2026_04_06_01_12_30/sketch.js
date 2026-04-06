function preload() {
  font = loadFont('assets/Nasa21-l23X.ttf');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  
  pg = createGraphics(100, 100);
  pg.background(200);
  pg.square(50, 50, 25);
}

function draw() {
  background(255);
  
  fill(0);
  
  push();
  textFont(font);
  text("3D Shapes", -195, -190);
  text("Flynn", 170, 195);
  pop();
  
  fill(255);
  
  push();
  translate(-100, -100);
  rotateX(frameCount * 0.01);
  normalMaterial();
  box();
  pop();
  
  push();
  translate(100, -100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial();
  cone();
  pop();
  
  push();
  translate(100, 100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  pointLight(255, 255, 255, mouseX, mouseY, 0);
  specularMaterial(250, 0, 0);
  sphere();
  pop();
  
  push();
  translate(-100, 100);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  normalMaterial();
  cylinder();
  pop();
  
  push();
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  texture(pg);
  ellipsoid();
  pop();
}