var cat,mouse,backgroundImage;

var catImg,mouseImg,catrun;

var gamestate, PLAY, END;


function preload(){
 
    backgroundImage = loadImage("garden.png");
    catImg = loadImage("tomOne.png");
    catrun = loadAnimation("tomTwo.png","tomThree.png")
    mouseImg = loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png");
  
  Ccollided = loadImage("tomFour.png")
  Mcollided = loadImage("jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    background = createSprite(0,0,1000,400);
    background.addImage(backgroundImage);
    background.scale = 2.5;

    mouse = createSprite(210, 360,0,0);
    mouse.addAnimation("mouser", mouseImg);
    mouse.scale = 0.1;
  
  
    cat = createSprite(750,360,0,0)
    cat.addAnimation("catr", catImg);
    cat.scale = 0.1;
    
 
}

function draw() {

   // background(220);
  
    
  
  if (cat.collide(mouse)) {
    cat.addAnimation("ccollided",Ccollided)
    cat.changeAnimation("ccollided")
    cat.velocityX = 0;
    
    mouse.addAnimation("mcollided",Mcollided)
    mouse.changeAnimation("mcollided")
  }
  
  keyPressed();
  

    drawSprites();
   
}


function keyPressed(){
  
  if(keyDown(LEFT_ARROW)){
    cat.velocityX = -5;
    cat.addAnimation("catrunning",catrun)
    cat.changeAnimation("catrunning")
    
    
  }
  


}
