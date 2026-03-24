let idleAnim;
let idlePaths = [];
let walkAnim;
let walkPaths = [];
let myAnimation;

let spaghetti;
let badtomato;

function preload() {
  for(var i = 0; i < 15; i++) {
    idlePaths[i] = "assets/zombie-idle/frame" + i + ".png";
  }
  for(var j = 0; j < 10; j++) {
    walkPaths[j] = "assets/zombie-moving/frame" + i + ".png";
  }
}

function setup() {
  new Canvas(500, 500);
  
  spaghetti = new Sprite();
  spaghetti.image = 'images/spaghetti.png';
  spaghetti.scale = 0.05;
  
  badtomato = new Sprite();
  badtomato.image = 'images/tomato.png';
  badtomato.scale = 0.05;
  
  idleAnim = loadAni('idle', idlePaths);
  walkAnim = loadAni('walk', walkPaths);
}

function update() {
  clear();
  idleAnim.scale = 0.5;
  animation(idleAnim, 50, 50);
}