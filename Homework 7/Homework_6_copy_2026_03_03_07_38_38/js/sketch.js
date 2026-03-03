// Variables
var customFont;
var timerValue = 5;
var a = 25;
var b = 25;

// Food Variables
var foodFolder = "images/";
let blackberry, spaghetti, croissant, bagel, muffin;
var foodScore = 0;

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

// Timer Variables
var blackberryTimer;
var spaghettiTimer;
var croissantTimer;
var bagelTimer;
var muffinTimer;
var gameTimer = 60;

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
  
  // Foods
  blackberry = new Food("images/food0.png", 25, 150, 20, 20);
  spaghetti = new Food("images/food1.png", 25, 200, 40, 40);
  croissant = new Food("images/food2.png", 25, 250, 60, 60);
  bagel = new Food("images/food3.png", 50, 300, 80, 80);
  muffin = new Food("images/food4.png", 100, 350, 100, 100);
  
  food0 = blackberry.load();
  food1 = spaghetti.load();
  food2 = croissant.load();
  food3 = bagel.load();
  food4 = muffin.load();
}

function setup() {
  // Create the Canvas
  createCanvas(500, 500);
  
  // Time Interval
  setInterval(timeIt, 1000);
  
  // Timer Value Determinations
  blackberryTimer = floor(random(1,11));
  spaghettiTimer = floor(random(1,11));
  croissantTimer = floor(random(1,11));
  bagelTimer = floor(random(1,11));
  muffinTimer = floor(random(1,11));
}

function draw() {
  // Background
  background(220);
  
  // Food Image Generation
  blackberry.display(food0);
  spaghetti.display(food1);
  croissant.display(food2);
  bagel.display(food3);
  muffin.display(food4);
  
  // Random Food Movement - Blackberry
  if(blackberryTimer == 0){ 
    blackberry.positionX = floor(random(0,481));
    blackberry.positionY = floor(random(0,481));
    blackberryTimer = floor(random(1,11));
  }          
  
  // Random Food Movement - Spaghetti
  if(spaghettiTimer == 0){
    spaghetti.positionX = floor(random(0,461));
    spaghetti.positionY = floor(random(0,461));
    spaghettiTimer = floor(random(1,11));
  }    

  // Random Food Movement - Croissant
  if(croissantTimer == 0){
    croissant.positionX = floor(random(0,441));
    croissant.positionY = floor(random(0,441));
    croissantTimer = floor(random(1,11));
  }

  // Random Food Movement - Bagel
  if(bagelTimer == 0){
    bagel.positionX = floor(random(0,421));
    bagel.positionY = floor(random(0,421));
    bagelTimer = floor(random(1,11));
  }

  // Random Food Movement - Muffin
  if(muffinTimer == 0){
    muffin.positionX = floor(random(0,401));
    muffin.positionY = floor(random(0,401));
    muffinTimer = floor(random(1,11));
  }  

  // Title
  textFont(customFont);
  text("Zomb-eats", 0, 10);
  
  // Score
  text("Score: " + foodScore, 450, 10);

  // Name
  text("Flynn", 470, 495);
  
  // Collision - Blackberry
  if (collideRectRect(a, b, 50, 50, blackberry.positionX, blackberry.positionY, blackberry.sizeLength, blackberry.sizeWidth)) {
    foodScore += 1;
    blackberry.positionX = floor(random(0,481));
    blackberry.positionY = floor(random(0,481));
  }
  if (collideRectRect(a, b, 50, 50, spaghetti.positionX, spaghetti.positionY, spaghetti.sizeLength, spaghetti.sizeWidth)) {
    foodScore += 1;
    spaghetti.positionX = floor(random(0,461));
    spaghetti.positionY = floor(random(0,461));
  }
  
  if (collideRectRect(a, b, 50, 50, croissant.positionX, croissant.positionY, croissant.sizeLength, croissant.sizeWidth)) {
    foodScore += 1;
    croissant.positionX = floor(random(0,441));
    croissant.positionY = floor(random(0,441));
  } 
  
  if (collideRectRect(a, b, 50, 50, bagel.positionX, bagel.positionY, bagel.sizeLength, bagel.sizeWidth)) {
    foodScore += 1;
    bagel.positionX = floor(random(0,421));
    bagel.positionY = floor(random(0,421));
  } 
  
  if (collideRectRect(a, b, 50, 50, muffin.positionX, muffin.positionY, muffin.sizeLength, muffin.sizeWidth)) {
    foodScore += 1;
    muffin.positionX = floor(random(0,401));
    muffin.positionY = floor(random(0,401));
  }
  
  // Game Timer
  text("Time Left: " + gameTimer + " seconds", 0, 495);
  if(gameTimer == 0){
    textSize(50);
    text("GAME OVER", 100, 250);
    frameRate(0);
  }
  
  // Movement
  if(keyIsPressed){
    //This is commented out as I simply could not get it to work. I don't know what's wrong with it, as it's in code exactly as intended, yet the character still jumps around the screen.
    //if(key == "a") {
      //translate(frames[frameIndex].width, 0);
      //scale(-1, 1);
      //image(frames[frameIndex], -a, b, 50, 50);
      //if (totalFrames % animationSpeed === 0) {
        //frameIndex = (frameIndex + 1) % frames.length;
      //}
      //a -= 5;
    //} else {
      image(frames[frameIndex], a, b, 50, 50);
      if (totalFrames % animationSpeed === 0) {
        frameIndex = (frameIndex + 1) % frames.length;
      }

      if(key == "w") {
        b -= 5;
      }
      if(key == "a") {
        a -= 5;
      }
      if(key == "s") {
        b += 5;
      }
      if(key == "d") {
        a += 5;
      }
    //}
  } else {
    image(frames2[frameIndex2], a, b, 50, 50);
    if (totalFrames2 % animationSpeed2 === 0) {
      frameIndex2 = (frameIndex2 + 1) % frames2.length;
    }
  }
}

// Timer Function
function timeIt() {
  if(blackberryTimer > 0){
    blackberryTimer--;
  }
  
  if(spaghettiTimer > 0){
    spaghettiTimer--;
  }
  
  if(croissantTimer > 0){
    croissantTimer--;
  }
  
  if(bagelTimer > 0){
    bagelTimer--;
  }
  
  if(muffinTimer > 0){
    muffinTimer--;
  }
  
  if(gameTimer > 0){
    gameTimer--;
  }
}