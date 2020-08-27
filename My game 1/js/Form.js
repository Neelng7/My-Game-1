class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.notice = createElement('h2');
      this.title = createElement('h1');
      this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.notice.hide();
    }
  
    display(){
      this.title.html("Game");
      this.title.position(displayWidth/2 - 50, 10);
  
      this.input.position(displayWidth/2 - 67.2 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 27.2, displayHeight/2 - 37);
      this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        this.notice.html("Waiting For Another Player...") 
        this.notice.position(displayWidth/2 - 145, displayHeight/4 + 60);
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
  
    }
  }
  