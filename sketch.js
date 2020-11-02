const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Tank1, Tank2;
var map1, map2, map3;
var shield, healthPack;
var tripleShot, doubleDamage;
var canvas;
var gameState = "play";
var engine, world;
var mountain, bullet;
var form;

function preload(){

}

function setup(){
    canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    //if (gameState === "play"){
        Tank1 = new Tank(100,600,50,50);
        Tank2 = new Tank(1100,600,50,50);
        mountain = new Tank(600,500,300,300);
        bullet = new Bullet(300,400);
        launcher = new Launcher(bullet.body,{x:200,y:300});
    // }

    //if (gameState === "menu"){
        //form = new Form();
    //}
}

function draw(){
    background("pink");
    // if (gameState === "play"){
    Tank1.display();
    Tank2.display();
    mountain.display();
    bullet.display();
    launcher.display();
    // }
    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(bullet.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
    gameState = "fly";
}

function keyPressed(){
    if (keyCode === RIGHT_ARROW){
        Matter.Body.setPosition(Tank1.body,{x: Tank1.body.position.x + 10, y: Tank1.body.position.y});
    }
    if (keyCode === LEFT_ARROW){
        Matter.Body.setPosition(Tank1.body,{x: Tank1.body.position.x - 10, y: Tank1.body.position.y});
    }
}