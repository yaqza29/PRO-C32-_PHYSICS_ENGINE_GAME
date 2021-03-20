const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10, ball11, ball12, ball13, ball14, ball15, ball16, ball17, ball18, ball19, ball20, ball21, ball22, ball23, ball24, ball25, ball26, ball27, ball28, ball29, ball30, ball31, ball32, ball33, ball34, ball35, ball36, ball37, ball38, ball39, ball40, ball41, ball42, ball43, ball44, ball45, ball46, ball47, ball48, ball49, ball50, ball51, ball52, ball53, ball54, ball55, ball56, ball57, ball58, ball59, ball60;
var mainBall;
var backgroundImg,ground;
var shooter, slingshot;

var gameState = "onSling";
var bg = "morning.jpg";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,180,1200,5);

    ball1 = new Ball(200,120);
    ball2 = new Ball(210,120);
    ball3 = new Ball(220,120);
    ball4 = new Ball(230,120);
    ball5 = new Ball(240,120);
    ball6 = new Ball(250,120);
    ball7 = new Ball(260,120);
    ball8 = new Ball(270,120);
    ball9 = new Ball(280,120);
    ball10 = new Ball(290,120);
    ball11 = new Ball(200,140);
    ball12 = new Ball(210,140);
    ball13 = new Ball(220,140);
    ball14 = new Ball(230,140);
    ball15 = new Ball(240,140);
    ball16 = new Ball(250,140);
    ball17 = new Ball(260,140);
    ball18 = new Ball(270,140);
    ball19 = new Ball(280,140);
    ball20 = new Ball(290,140);
    ball21 = new Ball(200,160);
    ball22 = new Ball(210,160);
    ball23 = new Ball(220,160);
    ball24 = new Ball(230,160);
    ball25 = new Ball(240,160);
    ball26 = new Ball(250,160);
    ball27 = new Ball(260,160);
    ball28 = new Ball(270,160);
    ball29 = new Ball(280,160);
    ball30 = new Ball(290,160);
    ball31 = new Ball(200,100);
    ball32 = new Ball(210,100);
    ball33 = new Ball(220,100);
    ball34 = new Ball(230,100);
    ball35 = new Ball(240,100);
    ball36 = new Ball(250,100);
    ball37 = new Ball(260,100);
    ball38 = new Ball(270,100);
    ball39 = new Ball(280,100);
    ball40 = new Ball(290,100);
    ball41 = new Ball(200,80);
    ball42 = new Ball(210,80);
    ball43 = new Ball(220,80);
    ball44 = new Ball(230,80);
    ball45 = new Ball(240,80);
    ball46 = new Ball(250,80);
    ball47 = new Ball(260,80);
    ball48 = new Ball(270,80);
    ball49 = new Ball(280,80);
    ball50 = new Ball(290,80);
    ball51 = new Ball(200,60);
    ball52 = new Ball(210,60);
    ball53 = new Ball(220,60);
    ball54 = new Ball(230,60);
    ball55 = new Ball(240,60);
    ball56 = new Ball(250,60);
    ball57 = new Ball(260,60);
    ball58 = new Ball(270,60);
    ball59 = new Ball(280,60);
    ball60 = new Ball(290,60);

    fill(51, 255, 51)
    mainBall = new Ball(250,40)

    shooter = new Shooter(200,900);
    
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(shooter.body,{x:100, y:20});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        /*noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)*/
    
    Engine.update(engine);
    //strokeWeight(4);

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    ball7.display();
    ball8.display();
    ball9.display();
    ball10.display();
    ball11.display();
    ball12.display();
    ball13.display();
    ball14.display();
    ball15.display();
    ball16.display();
    ball17.display();
    ball18.display();
    ball19.display();
    ball20.display();
    ball21.display();
    ball22.display();
    ball23.display();
    ball24.display();
    ball25.display();
    ball26.display();
    ball27.display();
    ball28.display();
    ball29.display();
    ball30.display();
    ball31.display();
    ball32.display();
    ball33.display();
    ball34.display();
    ball35.display();
    ball36.display();
    ball37.display();
    ball38.display();
    ball39.display();
    ball40.display();
    ball41.display();
    ball42.display();
    ball43.display();
    ball44.display();
    ball45.display();
    ball46.display();
    ball47.display();
    ball48.display();
    ball49.display();
    ball50.display();
    ball51.display();
    ball52.display();
    ball53.display();
    ball54.display();
    ball55.display();
    ball56.display();
    ball57.display();
    ball58.display();
    ball59.display();
    ball60.display();

    mainBall.display();

    shooter.display();
    ground.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        Shooter.trajectory = [];
        Matter.Body.setPosition(shooter.body, {x: 200,y: 50})
       slingshot.attach(shooter.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=15){
        bg = "morning.jpg";
    }
    else{
        if(hour>=16 && hour<=19){
        bg = "evening.jpg";
        }
        else{
        bg = "night.jpg";
        }
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}