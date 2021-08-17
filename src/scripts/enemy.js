class Enemy {

    constructor() {
        this.img = new Image()
        this.frameX = 0
        this.frameY = 0
        this.frameCount = 0
        this.speed = (Math.random() -0.3) + 0.4
        this.y = (Math.random() * 250) + 300
    }

  


   

}

export default Enemy