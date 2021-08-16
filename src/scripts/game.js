// const LilShooter = require('./lilShooter.js')

class Game {
    constructor(ctx, mc, img, canvas, en, p) {
        this.ctx = ctx
        this.mc = mc
        this.img = img 
        this.canvas = canvas
        this.en = en
        this.p = p
        this.start = this.start.bind(this)
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
        this.en.draw(this.ctx)
        this.p.draw(this.ctx)

        
    }

    start() {
        this.draw()
        requestAnimationFrame(this.start)
    }




}

export default Game