
let gamebg = new Image()
gamebg.src = "./imgs/background/background.jpeg"


document.addEventListener('DOMContentLoaded', function(){
    let canv = document.getElementById('canvas')
    let ctx = canv.getContext('2d')
    canv.width = 1080
    canv.height = window.innerHeight

    gamebg.onload = function(){
        ctx.drawImage(gamebg,0, 0)
    }

})