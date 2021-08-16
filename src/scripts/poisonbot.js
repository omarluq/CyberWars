class Poison {

    constructor() {
        this.img = new Image()
        this.img.src = './imgs/enemies/poison bot/movement.png'
        this.width = 156
        this.height = 48
        this.x = 500
        this.y = 500
        this.frameX = 0
        this.frameY = 0
        this.speed = 0.1
        this.points = 10 
        this.frameCount = 0
    }

    draw(ctx){
        ctx.drawImage(this.img, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height)
        this.x -= this.speed
        if (self.frameCount < 5) {
            self.frameCount++
        } else if (self.frameX < 5) {
           self.frameX++
           self.frameCount = 0;
        } else  {
            self.frameX = 0;
            self.frameCount = 0;
        }
    }

}

export default Poison