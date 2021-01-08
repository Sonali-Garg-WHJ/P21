var canvas;
var music;
var edges;
var wall1, wall2, wall3, wall4, box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
wall1 = createSprite(50,50,50,20);
wall1.shapeColor = "green";
wall2 = createSprite(150,50,50,20);
wall2.shapeColor = "red";
wall3 = createSprite(300,50,50,20);
wall3.shapeColor = "blue";
wall4 = createSprite(450,50,50,20);
wall4.shapeColor = "yellow";

    //create box sprite and give velocity
box = createSprite(50,550,20,20);
box.shapeColor = "white";

edges = createEdgeSprites();

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    box.bounceOff(edges);

if (keyDown("left_arrow")){
    box.x = box.x -5;
}
if (keyDown("right_arrow")){
    box.x = box.x +5;
}

if (keyDown("up_arrow")){
   box.velocityY = -5;
}

if (isTouching(box,wall1)){
    box.shapeColor = "green";    
    BounceOff(box,wall1);
} else if (isTouching(box,wall2)){
    BounceOff(box,wall2);
    box.shapeColor = "red";
} else if (isTouching(box,wall3)){
    BounceOff(box,wall3);
    box.shapeColor = "blue";
} else if (isTouching(box,wall4)){
    BounceOff(box,wall4);
    box.shapeColor = "yellow";
}
    //add condition to check if box touching surface and make it box
    drawSprites();
}

