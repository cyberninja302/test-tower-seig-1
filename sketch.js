
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world
var ground, platform
function setup() {
    createCanvas(1200,400);
    engine=Engine.create();
    world=engine.world;
    ground = new Ground(600, 380, 1200, 10);
    chain1 = new Chain( {x:200,y:50});
  
  platform = new Ground(150,305,300,170)

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);

}
function draw(){
    chain1.display();

    platform.display();

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
}