
class Game {
    constructor(ctx, mc, img, canvas, enemies) {
        this.ctx = ctx
        this.mc = mc
        this.img = img 
        this.canvas = canvas
        this.enemies = enemies
        this.start = this.start.bind(this)
    }

    collison() {
        for(let i=0; i < this.enemies.length; i++){
        if (this.mc.x - 10 < this.enemies[i].x + this.enemies[i].width && 
            this.mc.x + this.mc.width  > this.enemies[i].x + 10 && 
            this.mc.y - 10 < this.enemies[i].y + this.enemies[i].height && 
            this.mc.y + this.mc.height > this.enemies[i].y  + 10 && 
            this.mc.attack
        ) {
            this.enemies[i].points -= 5 
            if (this.enemies[i].points === 0) {
                let boom = new Image() 
                boom.src = './imgs/explosion/Explosion-Pack.png'
                this.ctx.drawImage(boom, 64, 96, 36, 36, this.enemies[i].x - 5, this.enemies[i].y - 5, 36, 36)
                this.enemies.splice(i, 1)
                this.mc.killCount += 1
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
        this.enemies.forEach(el=> el.draw(this.ctx))   
        this.collison()   
    }

    start() {
        this.draw()
        requestAnimationFrame(this.start)
        
    }

   




}

export default Game