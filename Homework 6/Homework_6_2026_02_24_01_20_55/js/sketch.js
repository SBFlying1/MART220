// Variables
var clickArray = [];
var move1;
var move2;
var y = 220;
var z = 370;
var randomArrayLeft = [];
var randomArrayRight = [];
var customFont;
var timerValue = 3;
var timerCount = 0;

//Food Variables
var foodFolder = "images/";

//Variables for the First Animation
var frames = [];
var totalFrames = 6;
let animationFolder = "assets/animation/";
var frameIndex = 0;
var animationSpeed = 6;
var a = 25;
var b = 500;

//Variables for the Second Animation
var frames2 = [];
var totalFrames2 = 15;
let animationFolder2 = "assets/animation2/";
var frameIndex2 = 0;
var animationSpeed2 = 15;
var c = 475;
var d = 500;

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

//Class Objects (Foods)
let blackberry = new Food(
  "images/food0.png",
  25,
  150,
  20,
  20
);

let spaghetti = new Food(
  "images/food1.png",
  25,
  200,
  40,
  40
);

let croissant = new Food(
  "images/food2.png",
  25,
  250,
  60,
  60
);

let bagel = new Food(
  "images/food3.png",
  500,
  100,
  80,
  80
);

let muffin = new Food(
  "images/food4.png",
  475,
  400,
  100,
  100
);

function preload() {
  //Loading the Font
  customFont = loadFont('assets/Nasa21-l23X.ttf');
  
  //Loading the Foods
  food0 = blackberry.load();
  food1 = spaghetti.load();
  food2 = croissant.load();
  food3 = bagel.load();
  food4 = muffin.load();
  
  //Loading the Animation Frames
  for (j = 0; j < totalFrames; j++) {
    frames[j] = loadImage(animationFolder + "frame" + j + ".png");
  }
  
  //Loading the Second Set of Animation Frames
  for (k = 0; k < totalFrames2; k++) {
    frames2[k] = loadImage(animationFolder2 + "frame" + k + ".png");
  }
}

function setup() {
  //Create the Canvas
  createCanvas(600, 600);
  
  //Generate the movement values for the inner eyes
  move1 = floor(random() * 10) + 1;
  move2 = floor(random() * 10) + 1;
  
  // Background
  background(220);
  
  //Time Interval
  setInterval(timeIt, 1000);
}

function mousePressed() {
  clickArray[0] = mouseX;
  clickArray[1] = mouseY;
}

function draw() {
  
  // Background
  background(220);
  
  // Food Image Generation
  blackberry.display(food0);
  spaghetti.display(food1);
  bagel.display(food3);
  muffin.display(food4);
  
  // Title
  textFont(customFont);
  text("Robot", 0, 10);
  
  // Key
  fill(0, 0, 0);
  text("Press 'h' to make", 0, 400);
  text("the robot happy!", 0, 410);
  text("Press 's' to make", 0, 430);
  text("the robot sad!", 0, 440);
  text("Click to place a circle!", 0, 460);
  
  // Black Wire - Left
  fill(0, 0, 0);
  quad(100, 270, 160, 280, 160, 285, 100, 275);
  quad(80, 250, 87, 250, 100, 270, 100, 275);
  
  // Red Wire - Left
  fill(256, 0, 0);
  quad(110, 290, 160, 290, 160, 295, 110, 295);
  quad(110, 290, 113, 295, 112, 305, 108, 300);
  
  // Blue Wire - Left
  fill(0, 0, 256);
  quad(130, 250, 160, 270, 160, 275, 130, 255);
  
  // Black Wire - Right
  fill(0, 0, 0);
  quad(480, 290, 475, 285, 475, 255, 480, 260);
  quad(475, 285, 480, 290, 440, 310, 440, 305);
  
  // Green Wire - Right
  fill(0, 256, 0);
  quad(440, 240, 440, 245, 480, 245, 480, 240);
  
  // Blue Wire - Right
  fill(0, 0, 256);
  quad(440, 330, 440, 335, 500, 345, 500, 340);
  
  // Head and Body
  fill(211, 211, 211);
  rect(160, 440, 280, 160);
  rect(150, 150, 300, 300);
  
  // Eye Sockets and Nose
  fill(120, 120, 120);
  circle(225, 250, 75);
  circle(375, 250, 75);
  rect(295, 275, 10, 50);
  
  // Screw Bases
  circle(160, 160, 15);
  circle(440, 160, 15);
  circle(170, 440, 15);
  circle(430, 440, 15);
  
  // Mouth
  fill(256, 256, 256);
  rect(250, 350, 100, 20);
  
  // Mouth Iterations
  if (keyIsPressed) {
    if (key == "s") {
      quad(230, 365, 250, 350, 250, 370, 230, 385);
      quad(350, 350, 370, 365, 370, 385, 350, 370);
    }
    else if (key == "h") {
      quad(230, 345, 250, 350, 250, 370, 230, 365);
      quad(350, 350, 370, 345, 370, 365, 350, 370);
    }
    else {
      // Make no extra shapes
    }
  }
  
  // Teeth Lines
  line(275, 350, 275, 370);
  line(300, 350, 300, 370);
  line(325, 350, 325, 370);
  
  // Inner Eyes - Left
  rect(y, 225, 10, 50);
  if(y >= 240 || y <= 200){
    move1 *= -1
  }
  y += move1
  
  // Inner Eyes - Right
  rect(z, 225, 10, 50);
  if(z >= 390 || z <= 350){
    move2 *= -1
  }
  z += move2
  
  // Screw Notches
  fill(150, 150, 150);
  rect(158, 155, 3, 10);
  rect(155, 158, 10, 3);
  rect(438, 155, 3, 10);
  rect(435, 158, 10, 3);
  rect(168, 435, 3, 10);
  rect(165, 438, 10, 3);
  rect(428, 435, 3, 10);
  rect(425, 438, 10, 3);
  
  // Name
  text("Flynn", 570, 595);
  
  // Left Antenna
  line(250, 165, 200, 50);
  line(200, 50, 125, 40);
  
  // Left Antenna Movement
  for (var i = 0; i < 1; i++) {
    randomArrayLeft[0] = floor(random(0, 600));
    randomArrayLeft[1] = floor(random(0, 600));
    line(125, 40, randomArrayLeft[0], randomArrayLeft[1]);
    circle(randomArrayLeft[0], randomArrayLeft[1], 20);
  }
  
  // Right Antenna
  line(350, 165, 400, 70);
  line(400, 70, 500, 40);
  
  // Right Antenna Movement
  for (var j = 0; j < 1; j++) {
    randomArrayRight[0] = floor(random(0, 600));
    randomArrayRight[1] = floor(random(0, 600));
    line(500, 40, randomArrayRight[0], randomArrayRight[1]);
    circle(randomArrayRight[0], randomArrayRight[1], 20);
  }
  
  //Croissant Timer - Shows a croissant picture at specific coordinates every three seconds
  if(timerValue == 0){
    timerCount++;
    if(timerCount % 4 == 0){
      croissant.display(food2);
    }
    else if(timerCount % 4 == 1){
      croissant.positionX = 250;
      croissant.positionY = 25;
      croissant.display(food2);
    }
    else if(timerCount % 4 == 2){
      croissant.positionX = 525;
      croissant.positionY = 250;
      croissant.display(food2);
    }
    else if(timerCount % 4 == 3){
      croissant.positionX = 250;
      croissant.positionY = 525;
      croissant.display(food2);
    }
    timerValue = 3;
  }
  
  // Placed Obstacle (Mouse Click)
  fill(256, 256, 256);
  circle(clickArray[0], clickArray[1], 10);
  
  // Animation Frame Generation
  image(frames[frameIndex], a, b, 100, 100);
  if (totalFrames % animationSpeed === 0) {
    frameIndex = (frameIndex + 1) % frames.length;
  }
  
  image(frames2[frameIndex2], c, d, 100, 100);
  if (totalFrames2 % animationSpeed2 === 0) {
    frameIndex2 = (frameIndex2 + 1) % frames2.length;
  }
}

//Timer Function
function timeIt() {
  if(timerValue > 0){
    timerValue--;
  }
}