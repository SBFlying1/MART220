function setup() {
  createCanvas(600, 600);
}

function draw() {
  
  // Background
  background(220);
  
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
  
  // Left Antenna
  line(250, 165, 200, 50);
  line(200, 50, 125, 40);
  line(125, 40, 110, 80);
  circle(110, 80, 20);
  
  // Right Antenna
  line(350, 165, 400, 70);
  line(400, 70, 500, 40);
  line(500, 40, 525, 100);
  circle(525, 100, 20);
  
  // Mouth
  fill(256, 256, 256);
  rect(250, 350, 100, 20);
  quad(230, 345, 250, 350, 250, 370, 230, 365);
  quad(350, 350, 370, 345, 370, 365, 350, 370);
  
  // Teeth Lines
  line(275, 350, 275, 370);
  line(300, 350, 300, 370);
  line(325, 350, 325, 370);
  
  // Inner Eyes
  rect(220, 225, 10, 50);
  rect(370, 225, 10, 50);
  
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
}