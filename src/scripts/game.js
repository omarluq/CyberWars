class Game {
    constructor(ctx, mc, ...enemies) {
        this.ctx = ctx
        this.mc = mc
        this.enemies = enemies

    }

    start(img, canvas) {
        let self = this
        img.onload = function() {
            self.ctx.clearRect(0,0,canvas.width, canvas.height )
            self.ctx.drawImage(img,70,100)
            self.ctx.drawImage(self.mc.img, 0, 0, self.mc.width, self.mc.height, self.mc.x, self.mc.y , self.mc.width, self.mc.height)
        }


    }


}

module.exports = Game