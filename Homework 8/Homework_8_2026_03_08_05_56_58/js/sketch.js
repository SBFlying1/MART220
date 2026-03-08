// Variables
var customFont;
var timerValue = 5;
var a = 25;
var b = 25;
var health = 5;
var keyPresses;

// Food Variables
var foodFolder = "images/";
var foodScore = 0;
var foodArray = [];
var imageArray = [];
var sizeX = 20;
var sizeY = 20;

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
var blackberryTimer;
var spaghettiTimer;
var croissantTimer;
var bagelTimer;
var muffinTimer;
var badFoodTimer;
var gameTimer = 60;

// Sound Variables
var backgroundMusic;
var goodFoodSound;
var badFoodSound;

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
  
  // Foods
  for(var i = 0; i < 6; i++){
    foodArray[i] = new Food("images/food" + i + ".png", 250, 350, sizeX, sizeY)
    imageArray[i] = foodArray[i].load();
    sizeX += 20;
    sizeY += 20;
  }
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
  badFoodTimer = floor(random(1,11));
}

function draw() {
  // Background
  background(220);
  
  // Food Image Generation
  for(var i = 0; i < 6; i++){
    foodArray[i].display(imageArray[i]);
  }
  
  // Volume
  backgroundMusic.setVolume(0.1);
  goodFoodSound.setVolume(0.25);
  badFoodSound.setVolume(0.25);
  
  // Random Food Movement - Blackberry
  if(blackberryTimer == 0){ 
    foodArray[0].positionX = floor(random(0,481));
    foodArray[0].positionY = floor(random(0,481));
    blackberryTimer = floor(random(1,11));
  }          
  
  // Random Food Movement - Spaghetti
  if(spaghettiTimer == 0){
    foodArray[1].positionX = floor(random(0,461));
    foodArray[1].positionY = floor(random(0,461));
    spaghettiTimer = floor(random(1,11));
  }    

  // Random Food Movement - Croissant
  if(croissantTimer == 0){
    foodArray[2].positionX = floor(random(0,441));
    foodArray[2].positionY = floor(random(0,441));
    croissantTimer = floor(random(1,11));
  }

  // Random Food Movement - Bagel
  if(bagelTimer == 0){
    foodArray[3].positionX = floor(random(0,421));
    foodArray[3].positionY = floor(random(0,421));
    bagelTimer = floor(random(1,11));
  }

  // Random Food Movement - Muffin
  if(muffinTimer == 0){
    foodArray[4].positionX = floor(random(0,401));
    foodArray[4].positionY = floor(random(0,401));
    muffinTimer = floor(random(1,11));
  }
  
  // Random Food Movement - Bad Food (Tomato)
  if(badFoodTimer == 0){
    foodArray[5].positionX = floor(random(0,401));
    foodArray[5].positionY = floor(random(0,401));
    badFoodTimer = floor(random(1,11));
  }

  // Title
  textFont(customFont);
  text("Zomb-eats", 0, 10);
  
  // Score
  text("Score: " + foodScore, 450, 15);
  
  // Name
  text("Flynn", 470, 495);
  
  // Collision - Blackberry
  if (collideRectRect(a, b, 50, 50, foodArray[0].positionX, foodArray[0].positionY, foodArray[0].sizeLength, foodArray[0].sizeWidth)) {
    goodFoodSound.play();
    foodScore += 1;
    foodArray[0].positionX = floor(random(0,481));
    foodArray[0].positionY = floor(random(0,481));
  }
  
  // Collision - Spaghetti
  if (collideRectRect(a, b, 50, 50, foodArray[1].positionX, foodArray[1].positionY, foodArray[1].sizeLength, foodArray[1].sizeWidth)) {
    goodFoodSound.play();
    foodScore += 1;
    foodArray[1].positionX = floor(random(0,461));
    foodArray[1].positionY = floor(random(0,461));
  }
  
  // Collision - Croissant
  if (collideRectRect(a, b, 50, 50, foodArray[2].positionX, foodArray[2].positionY, foodArray[2].sizeLength, foodArray[2].sizeWidth)) {
    goodFoodSound.play();
    foodScore += 1;
    foodArray[2].positionX = floor(random(0,441));
    foodArray[2].positionY = floor(random(0,441));
  } 
  
  // Collision - Bagel
  if (collideRectRect(a, b, 50, 50, foodArray[3].positionX, foodArray[3].positionY, foodArray[3].sizeLength, foodArray[3].sizeWidth)) {
    goodFoodSound.play();
    foodScore += 1;
    foodArray[3].positionX = floor(random(0,421));
    foodArray[3].positionY = floor(random(0,421));
  } 
  
  // Collision - Muffin
  if (collideRectRect(a, b, 50, 50, foodArray[4].positionX, foodArray[4].positionY, foodArray[4].sizeLength, foodArray[4].sizeWidth)) {
    goodFoodSound.play();
    foodScore += 1;
    foodArray[4].positionX = floor(random(0,401));
    foodArray[4].positionY = floor(random(0,401));
  }
  
  // Collision - Bad Food (Tomato)
  if (collideRectRect(a, b, 50, 50, foodArray[5].positionX, foodArray[5].positionY, foodArray[5].sizeLength, foodArray[5].sizeWidth)) {
    health -= 1;
    badFoodSound.play();
    foodArray[5].positionX = floor(random(0,401));
    foodArray[5].positionY = floor(random(0,401));
  }
  
  // Game Timer
  text("Time Left: " + gameTimer + " seconds", 0, 495);
  if(gameTimer == 0 || health == 0){
    textSize(50);
    text("GAME OVER", 100, 250);
    textSize(30);
    if(foodScore >= 10){
      text("Score: " + foodScore, 185, 280);
    } else {
      text("Score: " + foodScore, 190, 280);
    }
    backgroundMusic.stop();
    goodFoodSound.stop();
    frameRate(0);
  }
  
  // Health
  textSize(12);
  text("Health: " + health, 445, 30);
  
  // Movement
  if(keyIsPressed){
    //This is commented out as I simply could not get it to work. I don't know what's wrong with it, as it's in code exactly as intended, yet the character still jumps around the screen.
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
  
  if(badFoodTimer > 0){
    badFoodTimer--;
  }
  
  if(gameTimer > 0){
    gameTimer--;
  }
}

function keyPressed() {
  if(!backgroundMusic.isPlaying() && gameTimer != 0){
    backgroundMusic.play();
    backgroundMusic.loop();
  }
}