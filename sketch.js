var bg,bgimage;
var boy,boyimage;
var boss,bossimage,bossgroup
var money,moneyimage,moneygroup
var ground
var gameState="play"
var gameover,gameoverimage,restart,restartimage
var score=0
var boyStope
function preload(){
bgimage=loadImage("background.jpg")
boyimage=loadAnimation("1.png","3.png","4.png","5.png","6.png","7.png","8.png")
bossimage=loadImage("boss.png")
moneyimage=loadImage("money.png")
gameoverimage=loadImage("game over.jpg")
restartimage=loadImage("restart.png")
boyStope=loadImage("6.png")







}


















function setup(){
    createCanvas(800,500);
bg=createSprite(400,250,800,500)
bg.addImage(bgimage)
boy=createSprite(90,370,50,80)
boy.addAnimation("running",boyimage)
bossgroup=new Group()
moneygroup=new Group()
ground=createSprite(400,440,800,10)
ground.visible=false
restart=createSprite(700,100,20,20)
restart.addImage(restartimage)
restart.visible=false
gameover=createSprite(400,250,250,250)
gameover.addImage(gameoverimage)
gameover.visible=false
gameover.scale=0.3
restart.scale=0.3
boy.setCollider("rectangle",0,0,boy.width,boy.height);

}

function draw(){
background(180);
if(gameState==="play"){
 bg.velocityX=-6   
if(bg.x<200){
    bg.x=bg.width/2
}
if(keyDown("UP_ARROW")&&boy.y>=350){
    boy.velocityY=-15
}
boy.velocityY+=0.8

if(boy.isTouching(moneygroup)){
score=score+5
moneygroup.destroyEach()
}
if(boy.isTouching(bossgroup)){
gameState="over"
}
cash()
obstacles()
textSize(22)
text("score"+score,450,40)
}

if(gameState==="over"){
gameover.visible=true
restart.visible=true
ground.velocityX=0
bg.velocityX=0
boy.velocityY=0
bossgroup.setVelocityXEach(0)
moneygroup.setVelocityXEach(0)
boy.addImage(boyStope)

if(mousePressedOver(restart)) {
    reset();
  }
}
boy.collide(ground)
drawSprites();
}

function obstacles(){
if(frameCount%80===0){
boss=createSprite(550,375,10,10)
boss.addImage(bossimage)
boss.velocityX=-10
boss.scale=0.25
bossgroup.add(boss)
}
}

function cash(){
if(frameCount%200===0){
money=createSprite(700,390,10,10)
money.addImage(moneyimage)
money.velocityX=-6
money.scale=0.3
moneygroup.add(money)
}
}
 
function reset(){
gameState="play"
gameover.visible=false
restart.visible=false
moneygroup.destroyEach()
bossgroup.destroyEach()
score=0
boy.addAnimation("running",boyimage)
}












