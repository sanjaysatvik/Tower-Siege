var a;
var circles=[];
var polygon;
function preload(){
  polygon_img = loadImage('polygon.png');
}
function setup() {
  createCanvas(800,800);
  stroke(255)

  
  ground = new Ground(400,height,800,20);

  block8 = new Block(330, 235, 30, 40);
  block9 = new Block(360, 235, 30, 40);
  block10 = new Block(390, 235, 30, 40);
  block11 = new Block(420, 235, 30, 40);
  block12 = new Block(450, 235, 30, 40);

  block13 = new Block(360, 195, 30, 40);
  block14 = new Block(390, 195, 30, 40);
  block15 = new Block(420, 195, 30, 40);

  block16 = new Block(390, 155, 30, 40);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});

  imageMode(CENTER)
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
  
 
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  a=a-1;
  
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}

ground.display();

 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
  }
} 
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
