var box;

function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,20,20);
 

}

function draw() 
{
  background(30);
  box.shapeColor="red";
  if (keyDown("right"))
  {
    box.x = box.x + 2;
  }
   if (keyDown("left"))
  {
    box.x = box.x -2;
  }

  drawSprites();
}




