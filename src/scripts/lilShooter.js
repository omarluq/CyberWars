import Enemy from './enemy'

class LilShooter extends Enemy {

    constructor() {
        super()
        this.img.src = './imgs/enemies/LilShotter/run.png'
        this.width = 128
        this.height = 64
        this.x = 600
        // this.y = 400
        this.points = 10 
    }

    draw(ctx){
        ctx.drawImage(this.img, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height)
        this.x -= this.speed
        if (this.frameCount < 5) {
            this.frameCount++
        } else if (this.frameX < 5) {
           this.frameX++
           this.frameCount = 0;
        } else  {
            this.frameX = 0;
            this.frameCount = 0;
        }
        
    }
}

export default LilShooter