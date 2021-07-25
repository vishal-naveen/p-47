var bg,bgi, butterfly1i,butterfly2i,maxi,neti,max,net,ground,butterfly1,butterfly2,butterfly3,butterfly4
var butterfly5,butterfly6, vbutteri, vbutter
var gamestate = "play"
var score = 0
var butterfly
var wini, losei, reseti,win, lose, reset


function preload() {
    bgi = loadImage("bg.jpg");
    butterfly1i = loadImage("butterfly1.png");
    butterfly2i = loadImage("butterfly2.png");
    neti = loadImage("net.png");
    maxi = loadImage("max.png");
    vbutteri = loadImage("vbutter.png")

    wini = loadImage("win.png")
    losei = loadImage("lose.png")
    reseti = loadImage("reset.png")
}

function setup() {
    
    bg = createSprite(500,300,1000,600)
    bg.addImage(bgi)
    bg.scale = 2
    max = createSprite(500,500,50,50);
    max.addImage(maxi);
    max.scale = 0.3
    net = createSprite(570,490,50,50);
    net.addImage(neti);
    net.scale = 0.2

    ground = createSprite(500,580,2000,0.01)
    ground2 = createSprite(500,540,2000,0.01)

    vbutter = createSprite(480,330,50,50);
    vbutter.addImage(vbutteri);
    vbutter.scale = 0.15

    butterfly1 = createSprite(100,330,50,50)
    butterfly1.addImage(butterfly1i)
    butterfly1.scale = 0.1

    butterfly2 = createSprite(250,330,50,50)
    butterfly2.addImage(butterfly2i)
    butterfly2.scale = 0.1

    butterfly3 = createSprite(400,330,50,50)
    butterfly3.addImage(butterfly1i)
    butterfly3.scale = 0.1

    butterfly4 = createSprite(550,330,50,50)
    butterfly4.addImage(butterfly2i)
    butterfly4.scale = 0.1

    butterfly5 = createSprite(700,330,50,50)
    butterfly5.addImage(butterfly1i)
    butterfly5.scale = 0.1
    
    butterfly6 = createSprite(850,330,50,50)
    butterfly6.addImage(butterfly2i)
    butterfly6.scale = 0.1
    
    butterfly1.velocityX = -3
    butterfly2.velocityX = -3
    butterfly3.velocityX = 4
    butterfly4.velocityX = 4
    butterfly5.velocityX = 5
    butterfly6.velocityX = -4
    vbutter.velocityX = 7

    reset = createSprite(500,450,50,50)
    reset.addImage(reseti);
    reset.visible = false 

    lose = createSprite(500,200,50,50)
    lose.addImage(losei)
    lose.visible = false 

    win = createSprite(500,200,50,50)
    win.addImage(wini)
    win.visible = false 

}
  
  function draw() {
    createCanvas(1000,600);
    background("white");

    if(gamestate === "play"){
        max.velocityY = 2
    net.velocityY = 2
    max.collide(ground)
    net.collide(ground2)
    
    if(butterfly1.x>900){
        butterfly1.velocityX = -4
    }
    if(butterfly1.x<12){
        butterfly1.velocityX = 4
    }
    if(butterfly2.x>900){
        butterfly2.velocityX = -4
    }
    if(butterfly2.x<12){
        butterfly2.velocityX = 4
    }
    if(butterfly3.x>900){
        butterfly3.velocityX = -4
    }
    if(butterfly3.x<12){
        butterfly3.velocityX = 4
    }
    if(butterfly4.x>900){
        butterfly4.velocityX = -4
    }
    if(butterfly4.x<12){
        butterfly4.velocityX = 4
    }
    if(butterfly5.x>900){
        butterfly5.velocityX = -4
    }
    if(butterfly5.x<12){
        butterfly5.velocityX = 4
    }
    if(butterfly6.x>900){
        butterfly6.velocityX = -4
    }
    if(butterfly6.x<12){
        butterfly6.velocityX = 4
    }
    if(vbutter.x>900){
        vbutter.velocityX = -8
    }
    if(vbutter.x<12){
        vbutter.velocityX = 8
    }
    
    if(keyDown  ("SPACE")){
        max.y = max.y - 5
        net.y = net.y - 5
    }
    if(keyDown  ("LEFT_ARROW")){
        net.x = net.x - 4
        max.x = max.x - 4

    }
    if(keyDown ("RIGHT_ARROW")){
        net.x = net.x + 4
        max.x = max.x + 4
    }

    if(max.y < 400){
        max.y = 430;
        net.y = 430
    }

    if(max.x > 979){
        max.x = 888;
        net.x = 978
    }
    if(max.x < 12){
        max.x = 40;
        net.x = 126
    }
    console.log(butterfly6.x)
    if(max.isTouching(butterfly1)){
        score++
        butterfly1.x = 10000
    }
    if(max.isTouching(butterfly2)){
      score++
      butterfly2.x = 10000
    }   
    if(max.isTouching(butterfly3)){
      score++
      butterfly3.x = 10000
    }
    if(max.isTouching(butterfly4)){
      score++
      butterfly4.x = 10000
    }
    if(max.isTouching(butterfly5)){
      score++
      butterfly5.x = 10000
    }
    if(max.isTouching(butterfly6)){
      score++
      butterfly6.x = 10000
    }
    drawSprites();
    textSize(30);
    fill("black")
    text("Use left right arrow keys and space to control the player",150,50)
    text("Note: DONT TOUCH THE BIG BUTTERFLY IT IS POSISONOUS",100,100)
    text("score: "+score,450,200)
  }
  
  if(score === 6){
      gamestate ="win"
  }
  
  if(max.isTouching(vbutter)){
      gamestate = "lose"
  }
  if(gamestate === "win"){
      max.x = 500
      max.y = 500
      net.x = 570
      net.y = 490
      vbutter.x = 10000
      butterfly1.x = 10000
      butterfly2.x = 10000
      butterfly3.x = 10000
      butterfly4.x = 10000
      butterfly5.x = 10000
        butterfly6.x = 10000
      reset.visible = true
      win.visible = true 
      drawSprites();

  }
  if(gamestate === "lose"){
    max.x = 500
    max.y = 500
    net.x = 570
    net.y = 490
    vbutter.x = 10000
    butterfly1.x = 10000
    butterfly2.x = 10000
    butterfly3.x = 10000
    butterfly4.x = 10000
    butterfly5.x = 10000
    butterfly6.x = 10000
    reset.visible = true
    lose.visible = true 
    drawSprites();

    }
    if(mousePressedOver(reset)){
        gamestate = "play"
        reset.visible = false
        win.visible = false 
        lose.visible = false 
        score = 0 
        max.x = 500
        max.y = 500
        net.x = 570
        net.y = 490
        butterfly1.x = 100
        butterfly2.x = 250
        butterfly3.x = 400
        butterfly4.x = 550
        butterfly5.x = 700
        butterfly6.x = 850
        butterfly1.y = 330
        butterfly2.y = 330
        butterfly3.y = 330
        butterfly4.y = 330
        butterfly5.y = 330
        butterfly6.y = 330
        vbutter.x = 480
        vbutter.y = 330
    }
  
}
    