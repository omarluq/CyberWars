import KillCount from "./killCount"
import MissedCount from "./missedCount"

class Game {
    constructor(ctx, mc, img, canvas, enemies) {
        this.ctx = ctx
        this.mc = mc
        this.img = img 
        this.canvas = canvas
        this.enemies = enemies
        this.start = this.start.bind(this)
        this.killCount = new KillCount ()
        this.missedcount = new MissedCount()
    }




    collison() {
        for(let i=0; i < this.enemies.length; i++){
        if ((this.mc.x + 20 ) < this.enemies[i].x + 85 + this.enemies[i].width - 100 && 
            (this.mc.x + 20 + (this.mc.width - 50) )  > this.enemies[i].x  + 100&& 
            (this.mc.y + 50) < this.enemies[i].y  + 20 + this.enemies[i].height - 30 && 
            (this.mc.y + 50  + (this.mc.height - 50))> this.enemies[i].y  + 20 && 
            this.mc.attack
        ) {
            this.enemies[i].points -= 5 
            if (this.enemies[i].points === 0) {
                let boom = new Image() 
                boom.src = './imgs/explosion/Explosion-Pack.png'
                this.ctx.drawImage(boom, 64, 96, 36, 36, this.enemies[i].x + 85, this.enemies[i].y + 20, 36, 36)
                this.enemies.splice(i, 1)
                this.killCount.count += 1
            };
        }}
    }


    draw() {
        
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height )
        this.ctx.drawImage(this.img,70,100)
        if (!this.mc.attack) {
            this.mc.draw(this.ctx, this.mc.frameY)
        } else {
            this.mc.draw(this.ctx, this.mc.attackFrame)
        }
        this.mc.healthbar.draw(this.ctx)
        this.killCount.draw(this.ctx)
        this.missedcount.draw(this.ctx)
        this.enemies.forEach((el, i)=> {
            el.draw(this.ctx)
            if (el.x < -120) {
                this.missedcount.count++
                this.enemies.splice(i, 1)
            }

        })   
        this.collison()   
        if (this.missedcount.count === 25) {
            alert('booy the city was sacked what you doin!!')
        }
    }

    start() {
        this.draw()
        requestAnimationFrame(this.start)
        
    }

   




}

export default Game