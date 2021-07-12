const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var stoneObj;
var launch;

function preload(){
  //polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,400,10);
  stand2 = new Stand(900,200,random(600,700),10);
	stoneObj=new stone(35,220,30);  
 
  //level one
  block1 = new Block(300,275,30,40);

  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

    //level one
    block17 = new Block(300,275,30,40);
    
    block18 = new Block(330,275,30,40);
    block19 = new Block(360,275,30,40);
    block20 = new Block(390,275,30,40);
    block21 = new Block(420,275,30,40);
    block22 = new Block(450,275,30,40);
    block23 = new Block(480,275,30,40);
    //level two
    block24 = new Block(330,235,30,40);
    block25 = new Block(360,235,30,40);
    block26 = new Block(390,235,30,40);
    block27 = new Block(420,235,30,40);
    block28 = new Block(450,235,30,40);
    //level three
    block29 = new Block(360,195,30,40);
    block30 = new Block(390,195,30,40);
    block31 = new Block(420,195,30,40);
    //top
    block32 = new Block(390,155,30,40);
  
        //level one
        block33 = new Block(750,185,30,40);
    
        block34 = new Block(715,185,30,40);
        block35 = new Block(785,185,30,40);
        block36 = new Block(768,140,30,40);
        block37 = new Block(710,140,30,40);
        block38 = new Block(739,100,60,20);
        block39 = new Block(780,275,30,40);
        //level two
        block40 = new Block(730,235,30,40);
        block41 = new Block(760,235,30,40);
        block42 = new Block(790,235,30,40);
        block43 = new Block(720,235,30,40);
        block44 = new Block(950,235,30,40);
        //level three
        block45 = new Block(760,195,30,40);
        block46 = new Block(790,195,30,40);
        block47 = new Block(720,195,30,40);
        //top
        block48 = new Block(790,55,30,40);

        launch=new Launcher(stoneObj.body,{x:86,y:200})

}
function draw() {
  background(255,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill(random(0,255),random(0,255),random(0,255));
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill(random(0,255),random(0,255),random(0,255));
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill(random(0,255),random(0,255),random(0,255));
  block13.display();
  block14.display();
  block15.display();
  fill(random(0,255),random(0,255),random(0,255));
  block16.display();
 
 strokeWeight(2);
  stroke(15);
  fill(random(0,255),random(0,255),random(0,255));
  block33.display();
 block34.display();
  block35.display();
 block36.display();
  block37.display();
  block38.display();
 
  stoneObj.display();
  launch.display()
}
//create mouseDragged function here
function mouseDragged(){
 Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

//create mouseReleased function here
function mouseReleased(){
  launch.fly()
}