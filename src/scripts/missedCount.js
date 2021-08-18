class MissedCount {
    constructor(){
        this.count = 0 
    }


    draw(ctx) {
        // ctx.beginPath()
        // ctx.rect(650, 20, 40, 30)
        ctx.fillStyle = 'black'
        ctx.strokeStyle = "black"
        ctx.stroke()
        ctx.font = "13px CyberPunk"
        ctx.fillText(`missed bots: ${this.count}`,570, 41.5 )
    }


}

export default MissedCount