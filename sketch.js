var bgimg, bg2img, bg3img, plr1img, plr2img;
var gameState= "start";
var bg, bg2, bg3, plr, plr2;

function setup() {
  createCanvas(3000,1000);
  
  bg = createSprite(0,0,5000,1000);
  bg.addImage("bg",bgimg);
  bg.scale=2.5;
  
  bg2 = createSprite(200,200);
  bg2.addImage("bg",bgimg);
 // bg2.visible= false;
 
  bg3 = createSprite(200,200);
  bg3.addImage("bg",bgimg);
 // bg3.visible=false;
 
  plr = createSprite(50,200);
  plr.addImage("plr",plr1img);
  
  plr2 = createSprite(350,200);
  plr2.addImage("plr2",plr2img);
}

function preload(){
  bgimg = loadImage("bg.jpg")
  bg2img = loadImage("bg2.jpg")
  bg3img = loadImage("bg3.jpg")

plr1img = loadImage("plr.gif")
plr2img = loadImage("plr2.png")


}

function draw() {
  background("black");  
  if (gameState==="start") {
    bg2.visible= false;
    bg3.visible= false;


  }
 
 
  drawSprites();
}