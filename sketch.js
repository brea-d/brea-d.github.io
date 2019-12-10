function setup() {
  createCanvas(400, 400);
  background(140, 7, 18);
}


function draw() {

  background(140, 7, 18);  
    background(220); 
  //lines 
  
  noStroke();
  triangle(400, 0, 400, 400, 0, 0);  
    c=color(242, 213, 65);
    fill(c);  
    stroke(0,0,0); 
  
  //sun
  strokeWeight(1);
  stroke(239, 171, 41);
  arc(200, 200, 80, 80, 2, 3, PI + HALF_PI, OPEN);
  arc(200, 200, 80, 80, 6, 113.8, PI + HALF_PI, OPEN);
  ellipse(200, 200, 40, 40);   

  ellipse(200, 200, 60, 60);
  c=color(242, 22, 40); 
  fill(c); 
  
  //text
  stroke(255);
  textSize(32);
  fill(0, 140, 153);
  text('shine', 20, 50);
  fill(0, 102, 153);
  text('bright', 20, 80);
  fill(0, 102, 153, 100);
  text('sun', 20, 110);
  
  //twotone cutouts
  stroke(220);
  arc(100, 100, 130, 130, 55, PI + HALF_PI, OPEN);  
  ellipse(300, 300, 60, 60);
  
  //waves
  stroke(255);
  bezier(0, 400, 170, 360, 90, 260, 300, 460);
  bezier(0, 400, 10, 250, 350, 200, 0, 240);
  
  //lower eyes 
  c=color(220);
  fill(c) 
  ellipse(98, 248, 15, 15);
  c=color(139, 174, 195);
  fill(c) 
  ellipse(40, 357, 15, 15);
  
  
  //upperwaves
  c=color(220);
  fill(c);
  stroke(255);
  bezier(400, 0, 360, 170, 260, 90, 460, 300);
  bezier(400, 0, 250, 10, 200, 350, 240, 0);
  
  //upper eyes 
  c=color(220);
  fill(c) 
  ellipse(360, 40, 15, 15);
  c=color(139, 174, 195);
  fill(c) 
  ellipse(250, 95, 15, 15);
  
  //interactivity
  if (keyIsPressed) { 
    fill(random(422));
  } else {
  fill(139, 174, 195); 
  }
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
  
}
