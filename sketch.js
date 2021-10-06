var canvas,bg;
var tom,tom1,tom2,tom3,tom4;
var mouse,mouse1,mouse2,mouse3,mouse4;
function preload() {
    bg=loadImage("images/garden.png")
    tom1=loadAnimation("images/cat1.png")
    tom2=loadAnimation("images/cat2.png","images/cat3.png")
    tom3=loadAnimation("images/cat4.png")

    
    mouse1=loadAnimation("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3=loadAnimation("images/mouse4.png")
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(800,600);
tom.addAnimation("sleeping",tom1)
tom.scale=0.2
mouse=createSprite(200,600);
mouse.addAnimation("standing",mouse1)
mouse.scale=0.2
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-mouse.x<(tom.width-mouse.width)/2){
        tom.velocityX=0
        tom.addAnimation("happytom",tom3)
        tom.changeAnimation("happytom")
        tom.x=300
        

        
        mouse.addAnimation("happymouse",mouse3)
        mouse.changeAnimation("happymouse")

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    mouse.addAnimation("mouseteasing",mouse2)
    mouse.changeAnimation("mouseteasing")
    mouse.frameDelay=25

    tom.velocityX=-5
    tom.addAnimation("catwalking",tom2)
    tom.changeAnimation("catwalking")
    tom.frameDelay=20
}

}
