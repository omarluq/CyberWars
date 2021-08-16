import Enemy from './enemy'

class Poison extends Enemy {

    constructor() {
        super()
        this.img.src = './imgs/enemies/poison bot/movement.png'
        this.width = 156
        this.height = 48
        this.x = 600
        // this.y = 500
        this.points = 10 
    }

    draw(ctx){
        ctx.drawImage(this.img, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height)
        this.x -= this.speed
        if (this.frameCount < 3) {
            this.frameCount++
        } else if (this.frameY < 3) {
           this.frameY++
           this.frameCount = 0;
        } else  {
            this.frameY = 0;
            this.frameCount = 0;
        }
    }

}

export default Poison