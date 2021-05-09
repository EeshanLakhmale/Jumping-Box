var canvas;
var music;
var box1, box2, box3, box4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     box1 = createSprite(100,580,180,30)
     box1.shapeColor = "pink"

     box2 = createSprite(300,580,180,30)
     box2.shapeColor = "blue"

     box3 = createSprite(500,580,180,30)
     box3.shapeColor = "orange"

     box4 = createSprite(700,580,180,30)
     box4.shapeColor = "green"


    //create box sprite and give velocity
     ball = createSprite(random(20,750),100,40,40)
     ball.shapeColor = "white"
     ball.velocityX = 5
     ball.velocityY = 7


}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    edges = createEdgeSprites()
    ball.bounceOff(edges)

     //add condition to check if box touching surface and make it box
    if(box1.isTouching(ball) && ball.bounceOff(box1)){
        ball.shapeColor = "pink"
        music.play()
    }

    if(box2.isTouching(ball) && ball.bounceOff(box2)){
        ball.shapeColor = "blue"
        ball.velocityX = 0
        ball.velocityY = 0
        music.stop()
    }

    if(box3.isTouching(ball) && ball.bounceOff(box3)){
        ball.shapeColor = "orange"
        music.play()
    }

    if(box4.isTouching(ball) && ball.bounceOff(box4)){
        ball.shapeColor = "green"
        music.play()
    }

    drawSprites();
}
