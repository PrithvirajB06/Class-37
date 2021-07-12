class Game {
  constructor(){}
  
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

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hideDetails();
    Player.getPlayerInfo();
    if(allplayers !== undefined){
      var ypos = 130;
      for(var plr in allplayers){
        if(plr === "player"+player.index){
          fill("red");
        }
        else fill("black");
      }
      ypos +=20;
      text(allplayers[plr].name+" :"+allplayers[plr].distance, 120, ypos);
    }
  }
}
