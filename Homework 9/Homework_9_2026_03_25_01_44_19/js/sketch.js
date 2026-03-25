let idleAnim;
let idlePaths = [];
let walkAnim;
let walkPaths = [];
let myAnimation;

let spaghetti;
let badtomato;

let health = 5;
let score = 0;

let square1;
let square2;
let square3;
let a;
let b;
let c;
let d;
let e;
let f;

function preload() {
  for(var i = 0; i < 15; i++) {
    idlePaths[i] = "assets/zombie-idle/frame" + i + ".png";
  }
  for(var j = 0; j < 10; j++) {
    walkPaths[j] = "assets/zombie-moving/frame" + j + ".png";
  }
}

function setup() {
  new Canvas(500, 500);
  
  spaghetti = new Sprite();
  spaghetti.image = 'images/spaghetti.png';
  spaghetti.pos.x = floor(random(50,451));
  spaghetti.pos.y = floor(random(50,451));
  spaghetti.scale = 0.5;
  spaghetti.width = 50;
  spaghetti.height = 50;
  spaghetti.collider = 'rectangle';
  spaghetti.physics = STATIC;
  
  badtomato = new Sprite();
  badtomato.image = 'images/tomato.png';
  badtomato.pos.x = floor(random(50,451));
  badtomato.pos.y = floor(random(50,451));
  badtomato.scale = 0.5;
  badtomato.width = 50;
  badtomato.height = 50;
  badtomato.collider = 'rectangle';
  badtomato.physics = STATIC;
  
  square1 = new Sprite();
  square1.pos.x = floor(random(20, 481));
  square1.pos.y = floor(random(20, 481));
  square1.width = 20;
  square1.height = 20;
  square1.physics = STATIC;
  
  square2 = new Sprite();
  square2.pos.x = floor(random(20, 481));
  square2.pos.y = floor(random(20, 481));
  square2.width = 20;
  square2.height = 20;
  square2.physics = STATIC;
  
  square3 = new Sprite();
  square3.pos.x = floor(random(20, 481));
  square3.pos.y = floor(random(20, 481));
  square3.width = 20;
  square3.height = 20;
  square3.physics = STATIC;
  
  myAnimation = new animationImage(50, 50, 25, 25);
  myAnimation.loadAnimation('idle', idlePaths);
  myAnimation.loadAnimation('walk', walkPaths);
  
  textbox = new Sprite();
  textbox.pos.x = 250;
  textbox.pos.y = 475;
  textbox.width = 300;
  textbox.height = 50;
  textbox.stroke = 220;
  textbox.color = 220;
  textbox.textSize = 50;
  textbox.visible = false;
  textbox.physics = STATIC;
}

function update() {
  clear();
  background(220);
  
  if (myAnimation.isColliding(spaghetti)) {
    score += 1;
    if (score < 10) {
      spaghetti.pos.x = floor(random(25,476));
      spaghetti.pos.y = floor(random(25,476));
    }
  }
  if (myAnimation.isColliding(badtomato)) {
    health -= 1;
    if (health > 0) {
      badtomato.pos.x = floor(random(25,476));
      badtomato.pos.y = floor(random(25,476));
    }
  }
  
  textStyle(NORMAL);
  textSize(11);
  text("Score: " + score, 450, 15);
  text("Health: " + health, 450, 30);
  
  if (kb.pressing('d')) {
    myAnimation.updatePosition('forward');
    myAnimation.drawAnimation('walk');
  }
  else if (kb.pressing('a')) {
    myAnimation.updatePosition('reverse');
    myAnimation.drawAnimation('walk');
  }
  else if (kb.pressing('w')) {
    myAnimation.updatePosition('up');
    myAnimation.drawAnimation('walk');
  }
  else if (kb.pressing('s')) {
    myAnimation.updatePosition('down');
    myAnimation.drawAnimation('walk');
  }
  else {
    myAnimation.drawAnimation('idle');
  }
  
  if (health == 0) {
    textbox.text = "GAME OVER";
    textbox.visible = true;
    noLoop();
  }
  
  if (score == 10) {
    textbox.text = "YOU WIN!";
    textbox.visible = true;
    noLoop();
  }
}