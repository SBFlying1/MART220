// Variables
var customFont;
var timerValue = 5;
var a = 0;
var b = 0;
var health = 5;
var keyPresses;

// Variables for the Moving Animation
var frames = [];
var totalFrames = 10;
let animationFolder = "assets/zombie-moving/";
var frameIndex = 0;
var animationSpeed = 10;

// Variables for the Idle Animation
var frames2 = [];
var totalFrames2 = 15;
let animationFolder2 = "assets/zombie-idle/";
var frameIndex2 = 0;
var animationSpeed2 = 15;

// Variables for the Moving Left Animation
var frames3 = [];
var totalFrames3 = 10;
let animationFolder3 = "assets/zombie-moving-left/";
var frameIndex3 = 0;
var animationSpeed3 = 10;

// Timer Variables
var donut1Timer;
var donut2Timer;
var donut3Timer;
var donut4Timer;
var donut5Timer;
var badFoodTimer;
var gameTimer = 60;

// Sound Variables
var backgroundMusic;
var goodFoodSound;
var badFoodSound;

let donutArray = [];
var badFood;
var foodScore = 0;
let texter = true;

let bg;

function preload() {
  // Loading the Font
  customFont = loadFont('assets/Nasa21-l23X.ttf');
  
  // Loading the Set of Moving Animation Frames
  for (j = 0; j < totalFrames; j++) {
    frames[j] = loadImage(animationFolder + "frame" + j + ".png");
  }
  
  // Loading the Set of Idle Animation Frames
  for (k = 0; k < totalFrames2; k++) {
    frames2[k] = loadImage(animationFolder2 + "frame" + k + ".png");
  }
  
  for (l = 0; l < totalFrames3; l++) {
    frames3[l] = loadImage(animationFolder3 + "frame" + l + ".png");
  }
  
  // Loading the Sounds
  backgroundMusic = loadSound("sounds/backgroundMusic.mp3");
  goodFoodSound = loadSound("sounds/goodSound.mp3");
  badFoodSound = loadSound("sounds/badSound.mp3");
  
  // Donuts
  for(var i = 0; i < 5; i++){
    if (i == 0){
      donutArray[i] = new Donut1(-100, -100);
    } else if (i == 1) {
      donutArray[i] = new Donut2(100, -100);
    } else if (i == 2) {
      donutArray[i] = new Donut3(100, 100);
    } else if (i == 3) {
      donutArray[i] = new Donut4(-100, 100);
    } else {
      donutArray[i] = new Donut5(0, -150);
    }
  }
  
  badFood = new Food("images/badfood.png", 0, -150, 30, 30);
  img = badFood.load();
  
  bg = loadImage("images/cafe.jpg");
}

function setup() {
  // Create the Canvas
  createCanvas(400, 400, WEBGL);
  
  donut1tex = createGraphics(100, 100);
  donut1tex.background(200, 0, 0);
  
  donut2tex = createGraphics(100, 100);
  donut2tex.background(0, 200, 0);
  
  donut3tex = createGraphics(100, 100);
  donut3tex.background(0, 0, 200);
  
  donut4tex = createGraphics(100, 100);
  donut4tex.background(100, 100, 0);
  
  donut5tex = createGraphics(100, 100);
  donut5tex.background(0, 100, 100);
  
  // Time Interval
  setInterval(timeIt, 1000);
  
  // Timer Value Determinations
  donut1Timer = floor(random(1,11));
  donut2Timer = floor(random(1,11));
  donut3Timer = floor(random(1,11));
  donut4Timer = floor(random(1,11));
  donut5Timer = floor(random(1,11));
  badFoodTimer = floor(random(1,11));
}

function draw() {
  background(200);
  image(bg, -200, -200, 400, 400);
  
  fill(255);
  textFont(customFont);
  
  badFood.display(img);
  
  for(var j = 0; j < 5; j++){
    donutArray[j].display();
  }
  
  // Volume
  backgroundMusic.setVolume(0.1);
  goodFoodSound.setVolume(0.25);
  badFoodSound.setVolume(0.25);
  
  // Random Food Movement - Donut 1
  if(donut1Timer == 0){ 
    donutArray[0].x = floor(random(-200,171));
    donutArray[0].y = floor(random(-200,171));
    donut1Timer = floor(random(1,11));
  }          
  
  // Random Food Movement - Donut 2
  if(donut2Timer == 0){
    donutArray[1].x = floor(random(-200,171));
    donutArray[1].y = floor(random(-200,171));
    donut2Timer = floor(random(1,11));
  }    

  // Random Food Movement - Donut 3
  if(donut3Timer == 0){
    donutArray[2].x = floor(random(-200,171));
    donutArray[2].y = floor(random(-200,171));
    donut3Timer = floor(random(1,11));
  }

  // Random Food Movement - Donut 4
  if(donut4Timer == 0){
    donutArray[3].x = floor(random(-200,171));
    donutArray[3].y = floor(random(-200,171));
    donut4Timer = floor(random(1,11));
  }

  // Random Food Movement - Donut 5
  if(donut5Timer == 0){
    donutArray[4].x = floor(random(-200,171));
    donutArray[4].y = floor(random(-200,171));
    donut5Timer = floor(random(1,11));
  }
  
  // Random Food Movement - Bad Food (Tomato)
  if(badFoodTimer == 0){
    badFood.positionX = floor(random(-200,171));
    badFood.positionY = floor(random(-200,171));
    badFoodTimer = floor(random(1,11));
  }
  
  // Collision - Donut 1
  if (collideRectCircle(a, b, 50, 50, donutArray[0].x, donutArray[0].y, 25)) {
    goodFoodSound.play();
    foodScore += 1;
    donutArray[0].x = floor(random(-200,171));
    donutArray[0].y = floor(random(-200,171));
  }
  
  // Collision - Donut 2
  if (collideRectCircle(a, b, 50, 50, donutArray[1].x, donutArray[1].y, 25)) {
    goodFoodSound.play();
    foodScore += 1;
    donutArray[1].x = floor(random(-200,171));
    donutArray[1].y = floor(random(-200,171));
  }
  
  // Collision - Donut 3
  if (collideRectCircle(a, b, 50, 50, donutArray[2].x, donutArray[2].y, 25)) {
    goodFoodSound.play();
    foodScore += 1;
    donutArray[2].x = floor(random(-200,171));
    donutArray[2].y = floor(random(-200,171));
  }
  
  // Collision - Donut 4
  if (collideRectCircle(a, b, 50, 50, donutArray[3].x, donutArray[3].y, 25)) {
    goodFoodSound.play();
    foodScore += 1;
    donutArray[3].x = floor(random(-200,171));
    donutArray[3].y = floor(random(-200,171));
  }
  
  // Collision - Donut 5
  if (collideRectCircle(a, b, 50, 50, donutArray[4].x, donutArray[4].y, 25)) {
    goodFoodSound.play();
    foodScore += 1;
    donutArray[4].x = floor(random(-200,171));
    donutArray[4].y = floor(random(-200,171));
  }
  
  // Collision - Bad Food (Tomato)
  if (collideRectRect(a, b, 50, 50, badFood.positionX, badFood.positionY, badFood.sizeLength, badFood.sizeWidth)) {
    health -= 1;
    badFoodSound.play();
    badFood.positionX = floor(random(-200,171));
    badFood.positionY = floor(random(-200,171));
  }
  
  // Movement
  if(keyIsPressed){
    if(key == "a") {
      image(frames3[frameIndex3], a, b, 50, 50);
      if (totalFrames3 % animationSpeed3 === 0) {
        frameIndex3 = (frameIndex3 + 1) % frames3.length;
      }
      a -= 5;
    } else {
      image(frames[frameIndex], a, b, 50, 50);
      if (totalFrames % animationSpeed === 0) {
        frameIndex = (frameIndex + 1) % frames.length;
      }

      if(key == "w") {
        b -= 5;
      }
      if(key == "s") {
        b += 5;
      }
      if(key == "d") {
        a += 5;
      }
    }
  } else {
    image(frames2[frameIndex2], a, b, 50, 50);
    if (totalFrames2 % animationSpeed2 === 0) {
      frameIndex2 = (frameIndex2 + 1) % frames2.length;
    }
  }
  
  // Title
  textSize(12);
  text("Zomb-eats Donuts", -200, -190);
  
  // Score
  text("Score: " + foodScore, 150, -185);
  
  // Name
  text("Flynn", 470, 495);
  
  // Game Timer
  text("Time Left: " + gameTimer + " seconds", -200, 195);
  if(gameTimer == 0 || health == 0){
    textSize(50);
    text("GAME OVER", -145, 0);
    textSize(30);
    if(foodScore >= 10){
      text("Score: " + foodScore, -60, 30);
    } else {
      text("Score: " + foodScore, -55, 30);
    }
    backgroundMusic.stop();
    goodFoodSound.stop();
    frameRate(0);
  }
  
  // Health
  textSize(12);
  text("Health: " + health, 145, -170);
  
  if(texter && gameTimer != 0){
    textSize(24);
    text("Eat as many donuts", -90, -10)
    text("as you can!", -50, 10)
  }
  
}

// Timer Function
function timeIt() {
  if(donut1Timer > 0){
    donut1Timer--;
  }
  
  if(donut2Timer > 0){
    donut2Timer--;
  }
  
  if(donut3Timer > 0){
    donut3Timer--;
  }
  
  if(donut4Timer > 0){
    donut4Timer--;
  }
  
  if(donut5Timer > 0){
    donut5Timer--;
  }
  
  if(badFoodTimer > 0){
    badFoodTimer--;
  }
  
  if(gameTimer > 0){
    gameTimer--;
  }
}

function keyPressed() {
  texter = false;
  if(!backgroundMusic.isPlaying() && gameTimer != 0 && health != 0){
    backgroundMusic.play();
    backgroundMusic.loop();
  }
}