import Enemy from './enemy'

class AssualtDroid extends Enemy {


    constructor() {
        super()
        this.img.src = './imgs/enemies/assualtDroid/walk.png'
        this.width = 161
        this.height = 38
        this.x = 600
        // this.y =  450
        this.points = 20
        
    }


    draw(ctx){
        let self = this
        ctx.drawImage(this.img, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height)
        this.x -= this.speed
        
            if (self.frameCount < 5) {
                self.frameCount++
            } else if (self.frameY < 5) {
               self.frameY++
               self.frameCount = 0;
            } else  {
                self.frameY = 0;
                self.frameCount = 0;
            }   
    }

}

export default AssualtDroid