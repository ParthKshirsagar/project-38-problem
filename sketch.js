var playerCar, tire1, tire2;
var gameState;
var randomX, x;
var lines1, lines2;
var dist;
var score;

function setup() {
  createCanvas(700,657);

  dist = 0;
  score = 0;
  gameState = 0;

  playerCar = createSprite(width/2, 550, 50, 50);
  playerCar.shapeColor = "blue";
}

function draw() {
  background(200);

  if(gameState === 0){
  camera.position.y = playerCar.y - width/4;

  if(keyDown("space")){
    playerCar.velocityY = 0;
  }

  if(keyDown("up")){
    dist = dist + 10;
    playerCar.y = playerCar.y - 10;
  }
  else if(keyDown("left") && playerCar.x>=166.665){
    playerCar.x = playerCar.x - 233.33;
  }
  else if(keyDown("right") && playerCar.x<=583.325){
    playerCar.x = playerCar.x + 233.33;
  }

  if(dist%200 == 0 && dist!==0){
    score = score + 1;
  }

  if(frameCount/1===1 || frameCount%30000===0){
  for(var y = 400; y > -50000; y = y-200){
  randomX = Math.round(random(1,3));
  //console.log(randomX);
  if(randomX == 1){
    x = 116.665;
  }
  else if(randomX === 2){
    x = 349.995;
  }
  else if(randomX === 3){
    x = 583.325;
  }
   tire1 = createSprite(x, y, 50, 50);
   tire1.lifetime = 25000;
   tire1.shapeColor = "black";
  }
  }
  //console.log(tire1);

  for(var i = -50000; i<height+400; i = i+70){
  lines1 = line(233.33, i, 233.33, i+30);
  lines2 = line(466.66, i, 466.66, i+30);
  }

  //if(tire1 != undefined){
    if(playerCar.isTouching(tire1)){
      gameState = 1;
    }
    //}
    console.log(gameState);
}

if(gameState === 1){
  playerCar.destroy();
}
  

  textSize(20);
  fill(0)
  text("Score: " + score, 30, playerCar.y-460);
  drawSprites();
}