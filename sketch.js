var rect1, rect2, rect3;



function setup() {
  createCanvas(800,800);
  rect1 = createSprite(400, 200, 50, 50);
  rect2 = createSprite(500,300,80 ,50);
  rect2.velocityY = -9
  rect2.velocityX = -9
  rect1.shapeColor = "green"
  rect2.shapeColor = "green"
}

function draw() {
  background(0,0,0);
  rect1.x = mouseX;
  rect1.y = mouseY; 
  
  if( isTouching(rect1,rect2)){
  
   rect1.shapeColor = "red"
   rect2.shapeColor = "red"

  } else{  
    rect1.shapeColor = "green"
    rect2.shapeColor = "green"
}
  
bounceOff(rect1, rect2);
  drawSprites();
}

