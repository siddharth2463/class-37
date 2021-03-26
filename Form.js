class Form{
    constructor(){
         this.title=createElement()
          this.input=createInput()
            this.button=createButton("play")
              this.reset=createButton("Reset")
               this.greeting=createElement()
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
        this.reset.hide()

    }
    display(){
        
        this.title.html("car racing game")
        this.title.position(250,10)
       
        this.input.position(250,50)
        
        this.button.position(250,80)
        this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        this.reset.position(500,50)
         player.name= this.input.value()
         playerCount+=1
         player.index = playerCount;
        player.update()
        player.updateCount(playerCount)
        
        this.greeting.html("welcome"+player.name)
        this.greeting.position(250,200)
        }) 
        this.reset.mousePressed(()=>{
            database.ref('/').update({
                players:null,
                gameState:0,
                playerCount:0
            })
        })
            }
}