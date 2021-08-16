const LilShooter = require('./lilShooter.js')

class Game {
    constructor(ctx, mc, enemie, img, canvas) {
        this.ctx = ctx
        this.mc = mc
        this.enemie = enemie
        this.img = img 
        this.canvas = canvas
        this.start = this.start.bind(this)

    }

    draw() {
        let self = this
        
        this.img.onload = function() {
            self.ctx.clearRect(0,0,self.canvas.width, self.canvas.height )
            self.ctx.drawImage(self.img,70,100)
            self.ctx.drawImage(self.mc.img, 0, 0, self.mc.width, self.mc.height, self.mc.x, self.mc.y , self.mc.width, self.mc.height) 
        }  
    }

    start() {
        this.draw()
        requestAnimationFrame(this.start)
    }




}

export default Game