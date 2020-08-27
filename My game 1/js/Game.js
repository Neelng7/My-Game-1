class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }

    update(state){
        database.ref('/').update({
          gameState: state
        });
      }

      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }

    }
    play(){
        form.hide();
        
        Player.getPlayerInfo();

    if(allPlayers !== undefined){
        background(rgb(198,135,103));
        image(backgroundImage, 0,displayHeight*0.0005,displayWidth, displayHeight-87);

        var index = 0;

    }

      drawSprites();
    }

      end(){
        console.log("Game Ended");
      }

    }