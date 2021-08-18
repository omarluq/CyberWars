class KillCount {
    constructor(){
        this.count = 0 
    }


    draw(ctx) {
        // ctx.beginPath()
        // ctx.rect(600, 20, 40, 30)
        ctx.fillStyle = 'black'
        ctx.strokeStyle = "black"
        ctx.shadowColor = "white"
        ctx.lineWidth = 2
        ctx.stroke()
        ctx.font = "13px CyberPunk"
        ctx.fillText(`score: ${this.count}`, 480, 41.5)
        
    }


}

export default KillCount