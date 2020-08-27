var backgroundImage, canvas;
//var board_img, board;

var gameState = 0;
var database;

var allPlayers, playerCount;;
var board, pegBoard, boardimg, pegBoardimg;
var form, player, game; 

//var boardpeg, boardpegimg;
var yellow, white, blue, red, orange, purple, green, brown;
var yellowimg, whiteimg, blueimg, redimg, orangeimg, purpleimg, greenimg, brownimg;
var testpeg, testpegIMG;


function preload(){
 backgroundImage = loadImage("../images/background.jpg");
 pegBoardimg = loadImage("../images/pegsboard.png");
 boardimg = loadImage("../images/gameboard.png")

yellowimg = loadImage("../pegImages/yellow.png");
orangeimg = loadImage("../pegImages/orange.png");
blueimg = loadImage("../pegImages/blue.png");
purpleimg = loadImage("../pegImages/Purple.png");
greenimg = loadImage("../pegImages/green.png");
brownimg = loadImage("../pegImages/Brown.png");
whiteimg = loadImage("../pegImages/white.png");
redimg = loadImage("../pegImages/redpeg.png");
testpegIMG = loadImage("../pegImages/redpeg.png");
}


function setup (){
    canvas = createCanvas(displayWidth - 4, displayHeight - 87);
    database = firebase.database();

   board = createSprite(displayWidth/2, displayHeight/2 - 40);
   pegBoard = createSprite(displayWidth/2 - 50, displayHeight/2 - 40);
   board.addImage(boardimg);
   pegBoard.addImage(pegBoardimg); 
   board.scale = 1.5; 
   pegBoard.scale = 1.432;  

    yellow = createSprite(displayWidth/6 + 6.6, displayHeight/3);
    green = createSprite(displayWidth/6 + 6.6, displayHeight/2.317);
    brown = createSprite(displayWidth/6 + 6.6, displayHeight/2.6259);
    purple = createSprite(displayWidth/6 + 6.6, displayHeight/2.077);
    blue = createSprite(displayWidth/4.63, displayHeight/2.98);
    orange = createSprite(displayWidth/4.65, displayHeight/2.58);
    red = createSprite(displayWidth/4.6201, displayHeight/2.21);
    white = createSprite(displayWidth/4.6201, displayHeight/2.021);

    testpeg = createSprite(displayWidth/2, displayHeight/2.021);

    yellow.addImage(yellowimg);
    blue.addImage(blueimg);
    orange.addImage(orangeimg);
    purple.addImage(purpleimg);
    green.addImage(greenimg);
    brown.addImage(brownimg);
    white.addImage(whiteimg);
    red.addImage(redimg);
    testpeg.addImage(testpegIMG);

    orange.scale = 1.5;
    yellow.scale = 1.6;
    purple.scale = 1.5;
    green.scale = 1.5;
    blue.scale = 1.5;
    brown.scale = 1.5;
    red.scale = 1.7;
    white.scale = 1.7;
    testpeg.scale = 1.8;
    
    game = new Game();
    game.getState();
    game.start();
    
   // x = 1440, y = 816 
   // board = createSprite(400,100);
  //  board.addImage("gameboard1.png",board_img);
}

function draw(){
    if(playerCount === 2){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
        mouse();
      }
      if(gameState === 2){
        game.end();
      }
console.log("x = " + testpeg.x);
console.log("y = " + testpeg.y);

}

function mouse(){
 
  if (mousePressedOver(orange)){
    orange.x = mouseX;
    orange.y = mouseY;
  }

  if (mousePressedOver(blue)){
    blue.x = mouseX;
    blue.y = mouseY;
  }
  if (mousePressedOver(purple)){
    purple.x = mouseX;
    purple.y = mouseY;
  }
  if (mousePressedOver(brown)){
    brown.x = mouseX;
    brown.y = mouseY;
  }
  if (mousePressedOver(green)){
    green.x = mouseX;
    green.y = mouseY;
  }
  if (mousePressedOver(yellow)){
    yellow.x = mouseX;
    yellow.y = mouseY;
  }
  if (mousePressedOver(testpeg)){
    testpeg.x = mouseX;
    testpeg.y = mouseY;
  }

}