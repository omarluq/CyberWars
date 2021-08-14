class Mc {
    constructor() {
        this.img = new Image()
        this.img.src = "./imgs/mc/walk/herowalking0.png"
        this.width = 200
        this.height = 200
        this.x = 20
        this.y = 580
        this.points = 25 
        this.left = false 
    }

    
    

    movef(ctx, img,canvas, n, i) {
        let self = this
        this.left = false
        self.img.src = `./imgs/mc/walk/herowalking${n}.png`
          this.img.onload  = function() {
            ctx.clearRect(0,0, canvas.width, canvas.height)
            ctx.drawImage(img,0,0)
            ctx.drawImage(self.img, i, 580, self.width, self.height)
        }
        this.x = i
        
    }

    moveb(ctx, img,canvas, n, i) {
        this.left = true 
        let self = this
        self.img.src = `./imgs/mc/walkb/herowalking${n}.png`
          this.img.onload  = function() {
            ctx.clearRect(0,0, canvas.width, canvas.height)
            ctx.drawImage(img,0,0)
            ctx.drawImage(self.img, i, 580, self.width, self.height)
        }
        this.x = i
        
    }

    jump(ctx, img, canvas, b, i, j) {
        let self = this 
        console.log(this.x)
        self.img.src = `./imgs/mc/walkb/jump/robot4-jump${b}.png`
        this.img.onload  = function() {
            ctx.clearRect(0,0, canvas.width, canvas.height)
            ctx.drawImage(img,0,0)
            ctx.drawImage(self.img, this.x, j, 420, 420)
            this.x += 20
        }
        
    }

    down(ctx, img, canvas, b, i, ) {
        let self = this
        this.img.src = `./imgs/mc/walkb/down/robot4-crouch${b}.png`
        this.img.onload  = function() {
            console.log(ctx)
            ctx.clearRect(0,0, canvas.width, canvas.height)
            ctx.drawImage(img,0,0)
            ctx.drawImage(self.img, i-10, 610, 175, 175)
        }
    }

    attack(ctx, img, canvas, b) {
        let self = this 
        this.img.src = `./imgs/mc/walkb/attack/robot4-attack${b}.png`
        this.img.onload = function() {
            ctx.clearRect(0,0, canvas.width, canvas.height)
            ctx.drawImage(img,0,0)
            ctx.drawImage(self.img, self.x, self.y-25, 225, 225)
        }
    }
}

module.exports = Mc