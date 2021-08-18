class KillCount {
    constructor(){
        this.count = 0 
    }


    draw(ctx) {
    
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