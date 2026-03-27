//Variables - Animation
let idleAnim;
let idlePaths = [];
let walkAnim;
let walkPaths = [];
let attkPaths = [];
let myAnimation;

// Variables - Foods
let spaghetti;
let blackberries;
let croissant;
let bagel;
let muffin;
let tomato1;
let tomato2;
let tomato3;

// Variables - Statistics
let score = 0;
let tomato1health = 100;
let tomato2health = 100;
let tomato3health = 100;

// Variables - Particles
const particles = [];

function preload() {
  for(var i = 0; i < 15; i++) {
    idlePaths[i] = "assets/zombie-idle/frame" + i + ".png";
  }
  for(var j = 0; j < 10; j++) {
    walkPaths[j] = "assets/zombie-moving/frame" + j + ".png";
  }
  for(var k = 0; k < 8; k++) {
    attkPaths[k] = "assets/zombie-attack/frame" + k + ".png";
  }
}

function setup() {
  new Canvas(500, 500);
  
  spaghetti = new Sprite();
  spaghetti.image = 'images/spaghetti.png';
  spaghetti.pos.x = floor(random(50,476));
  spaghetti.pos.y = floor(random(50,476));
  spaghetti.scale = 0.5;
  spaghetti.width = 25;
  spaghetti.height = 25;
  spaghetti.collider = 'rectangle';
  spaghetti.physics = STATIC;
  
  blackberries = new Sprite();
  blackberries.image = 'images/blackberries.png';
  blackberries.pos.x = floor(random(50,476));
  blackberries.pos.y = floor(random(50,476));
  blackberries.scale = 0.15;
  blackberries.width = 25;
  blackberries.height = 25;
  blackberries.collider = 'rectangle';
  blackberries.physics = STATIC;
  
  croissant = new Sprite();
  croissant.image = 'images/croissant.png';
  croissant.pos.x = floor(random(50,476));
  croissant.pos.y = floor(random(50,476));
  croissant.scale = 0.2;
  croissant.width = 25;
  croissant.height = 25;
  croissant.collider = 'rectangle';
  croissant.physics = STATIC;
  
  bagel = new Sprite();
  bagel.image = 'images/bagel.png';
  bagel.pos.x = floor(random(50,476));
  bagel.pos.y = floor(random(50,476));
  bagel.scale = 0.2;
  bagel.width = 25;
  bagel.height = 25;
  bagel.collider = 'rectangle';
  bagel.physics = STATIC;
  
  muffin = new Sprite();
  muffin.image = 'images/muffin.png';
  muffin.pos.x = floor(random(50,476));
  muffin.pos.y = floor(random(50,476));
  muffin.scale = 0.1;
  muffin.width = 25;
  muffin.height = 25;
  muffin.collider = 'rectangle';
  muffin.physics = STATIC;
  
  tomato1 = new Sprite();
  tomato1.image = 'images/tomato.png';
  tomato1.scale = 0.4;
  tomato1.pos.x = floor(random(50, 481));
  tomato1.pos.y = floor(random(50, 481));
  tomato1.width = 20;
  tomato1.height = 20;
  tomato1.physics = STATIC;
  
  tomato2 = new Sprite();
  tomato2.image = 'images/tomato.png';
  tomato2.scale = 0.4;
  tomato2.pos.x = floor(random(50, 481));
  tomato2.pos.y = floor(random(50, 481));
  tomato2.width = 20;
  tomato2.height = 20;
  tomato2.physics = STATIC;
  
  tomato3 = new Sprite();
  tomato3.image = 'images/tomato.png';
  tomato3.scale = 0.4;
  tomato3.pos.x = floor(random(50, 481));
  tomato3.pos.y = floor(random(50, 481));
  tomato3.width = 20;
  tomato3.height = 20;
  tomato3.physics = STATIC;
  
  myAnimation = new animationImage(50, 50, 25, 25);
  myAnimation.loadAnimation('idle', idlePaths);
  myAnimation.loadAnimation('walk', walkPaths);
  myAnimation.loadAnimation('attk', attkPaths);
  
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
  
  // Score + Health Displays
  textStyle(NORMAL);
  textSize(11);
  fill(0);
  text("Score: " + score, 450, 15);
  text("WASD to Move", 5, 480);
  text("X to Eat", 5, 495);
  
  // Keyboard Controls
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
  else if (kb.pressing('x')) {
    myAnimation.drawAnimation('attk');
    
    if (spaghetti != null) {
      if (dist(
          myAnimation.currentAnimation.pos.x,
          myAnimation.currentAnimation.pos.y,
          spaghetti.pos.x,
          spaghetti.pos.y
        ) < 50) {
        spaghetti.remove();
        spaghetti = null;
        score += 1;
      }
    }
    
    if (blackberries != null) {
      if (dist(
          myAnimation.currentAnimation.pos.x,
          myAnimation.currentAnimation.pos.y,
          blackberries.pos.x,
          blackberries.pos.y
        ) < 50) {
        blackberries.remove();
        blackberries = null;
        score += 1;
      }
    }
    
    if (croissant != null) {
      if (dist(
          myAnimation.currentAnimation.pos.x,
          myAnimation.currentAnimation.pos.y,
          croissant.pos.x,
          croissant.pos.y
        ) < 50) {
        croissant.remove();
        croissant = null;
        score += 1;
      }
    }
    
    if (bagel != null) {
      if (dist(
          myAnimation.currentAnimation.pos.x,
          myAnimation.currentAnimation.pos.y,
          bagel.pos.x,
          bagel.pos.y
        ) < 50) {
        bagel.remove();
        bagel = null;
        score += 1;
      }
    }
    
    if (muffin != null) {
      if (dist(
          myAnimation.currentAnimation.pos.x,
          myAnimation.currentAnimation.pos.y,
          muffin.pos.x,
          muffin.pos.y
        ) < 50) {
        muffin.remove();
        muffin = null;
        score += 1;
      }
    }
    
    if (tomato1 != null) {
      if (dist(
          myAnimation.currentAnimation.pos.x,
          myAnimation.currentAnimation.pos.y,
          tomato1.pos.x,
          tomato1.pos.y
        ) < 50) {
        createParticles(tomato1.pos.x, tomato1.pos.y);
        tomato1health -= 1;
        if (tomato1health == 0) {
          tomato1.remove();
          tomato1 = null;
        }
      }
    }
    
    if (tomato2 != null) {
      if (dist(
          myAnimation.currentAnimation.pos.x,
          myAnimation.currentAnimation.pos.y,
          tomato2.pos.x,
          tomato2.pos.y
        ) < 50) {
        createParticles(tomato2.pos.x, tomato2.pos.y);
        tomato2health -= 1;
        if (tomato2health == 0) {
          tomato2.remove();
          tomato2 = null;
        }
      }
    }
    
    if (tomato3 != null) {
      if (dist(
          myAnimation.currentAnimation.pos.x,
          myAnimation.currentAnimation.pos.y,
          tomato3.pos.x,
          tomato3.pos.y
        ) < 50) {
        createParticles(tomato3.pos.x, tomato3.pos.y);
        tomato3health -= 1;
        if (tomato3health == 0) {
          tomato3.remove();
          tomato3 = null;
        }
      }
    }
  }
  else {
    myAnimation.drawAnimation('idle');
  }
  
  if (tomato1 == null && tomato2 == null && tomato3 == null) {
    textbox.text = "YOU WIN!";
    textbox.visible = true;
    noLoop();
  }
}

function createParticles(x, y) {

  for (let i = 0; i < 5; i++) {
    let p = new Particle(x, y);
    particles.push(p);
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();

    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}