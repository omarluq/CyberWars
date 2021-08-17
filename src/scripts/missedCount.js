class MissedCount {
    constructor(){
        this.count = 0 
    }


    draw(ctx) {
        ctx.beginPath()
        ctx.rect(650, 20, 40, 30)
        ctx.fillStyle = 'black'
        ctx.strokeStyle = "black"
        ctx.stroke()
        ctx.font = "20px black"
        ctx.fillText(this.count,660, 41.5 )
    }


}

export default MissedCount