const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5
var bird
var log1, log2, log3, log4
var pig1, pig2

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground= new Ground (600, height, 1200, 20)
    bird= new Bird (100, 200)
    box1= new Box (700, 320, 70, 70);
    box2= new Box (900, 320, 70, 70);
    box3= new Box (700, 225, 70, 70);
    box4= new Box (900, 225, 70, 70);
    log1= new Log (800, 245, 300, PI/2);console.log (log1.y)
    
    pig1= new Pig (800, 380);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    log1.display();
    pig1.display();

    ground.display();
    bird.display();

}