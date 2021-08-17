class KillCount {
    constructor(){
        this.count = 0 
    }


    draw(ctx) {
        ctx.beginPath()
        ctx.rect(600, 20, 40, 30)
        ctx.fillStyle = 'black'
        ctx.strokeStyle = "black"
        ctx.stroke()
        ctx.font = "20px black"
        ctx.fillText(this.count,610, 41.5 )
    }


}

export default KillCount