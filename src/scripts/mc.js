class Mc {
    constructor() {
        this.img = new Image()
        this.img.src = "./imgs/hero/idleandwalkr.png"
        this.width = 142
        this.height = 107
        this.x = 20
        this.y = 400
        this.frameX = 0
        this.frameY = 0
        this.attackFrame = 0 
        this.speed = 10
        this.left = false
    }

    
    

    move(ctx, img,canvas) {
        ctx.clearRect(0,0, canvas.width, canvas.height)
        ctx.drawImage(img,70,100)
        ctx.drawImage(this.img, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y , this.width, this.height)  
    }

    attack(ctx, img, canvas) {
        ctx.clearRect(0,0, canvas.width, canvas.height)
        ctx.drawImage(img,70,100)
        ctx.drawImage(this.img, this.width * this.frameX, this.height * this.attackFrame, this.width, this.height, this.x, this.y , this.width, this.height)   
    }
  
}

export default Mc