var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(200, 200, 50, 50);
 fixedRect.shapeColor="green";

 movingRect=createSprite(400,200,80,30);
 movingRect.shapeColor="green";

 fixedRect.debug=true;
 movingRect.debug=true;
}

function draw() {
  background("black"); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  console.log(movingRect.x-fixedRect.x )

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 ){

    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }

  drawSprites();
}