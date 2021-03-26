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
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountref=await database.ref('playerCount').once("value")
        if (playerCountref.exists()){
          playerCount=playerCountref.val()
          player.getCount()
        }
        form = new Form()
        form.display();
      }
    }
    play(){
      console.log("play")
      form.hide()
        Player.getPlayerinfo()
      if(allPlayers!==undefined){
        var pos=100
        for(var plr in allPlayers){
          text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,pos)
          pos+=20
        }
      }
      if(keyDown(UP_ARROW)&& player.index!==null){
        player.distance+=50
        player.update()
      }
    }
  }