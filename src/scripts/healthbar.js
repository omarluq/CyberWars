class Healthbar {
    constructor(x, y, w, h, maxHealth, color) {
        this.x = x
        this.y = y
        this.w = w
        this.maxW = w
        this.h = h
        this.maxHealth = maxHealth
        this.color = color
    }


    draw(ctx) {
        ctx.strokeStyle = '#333'
        ctx.lineWith = 5 
        ctx.fillStyle = this.color 
        ctx.fillRect(this.x, this.y, this.w, this.h)
        ctx.strokeRect(this.x, this.y, this.w, this.h)
    }

}

export default Healthbar