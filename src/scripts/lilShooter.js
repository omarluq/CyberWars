class LilShooter {

    constructor() {
        this.img = new Image()
        this.img.src = './imgs/enemies/LilShotter/run.png'
        this.x = 600
        this.y = Math.floor(Math.random() * (500 - 250 + 1) + 250)
        this.points = 10 
        this.frameX = 0 
        this.frameY = 0 
        this.width = 64
        this.height = 64
        this.speed = 10
    }

    draw(ctx, img, canvas){
        
        ctx.clearRect(0,0, canvas.width, canvas.height)
        ctx.drawImage(img,70,100)
        ctx.drawImage(this.img, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y , this.width, this.height)  
    }
}

module.exports = LilShooter 