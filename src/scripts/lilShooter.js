class LilShooter {

    constructor() {
        this.img = new Image()
        this.img.src = './imgs/enemies/LilShotter/run.png'
        this.width = 128
        this.height = 64
        this.x = 500
        this.y = 400
        this.frameX = 0
        this.frameY = 0
        this.speed = 10
        this.points = 10 
    }

    // move(ctx, canvas, mc){
    //     this.x -= this.speed
    //     this.frameX += 1
    //     if (this.frameX ===6 ) this.frameX = 0;

    // }
}

export default LilShooter