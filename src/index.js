const Game = require('./scripts/game')
const Mc = require('./scripts/mc')
window.mc = Mc

let mc = new Mc()

let gamebg = new Image()
gamebg.src = "./imgs/background/background.jpeg"


document.addEventListener('DOMContentLoaded', function(){
    
    let canv = document.getElementById('canvas')
    let ctx = canv.getContext('2d')
    canv.width = 1080
    canv.height = window.innerHeight
    let game = new Game(ctx, mc)
    game.start(gamebg, canvas)

    let n = 0
    let i = 20 
    let j = this.y
    let b = 0

    document.addEventListener('keydown', function(){
        if (event.code === 'ArrowRight'){
        mc.movef(ctx, gamebg, canvas, n, i)
        n++
        if (i < 1000) i += 10;
        if (n === 33) n = 1;    
        b = 0
        }

        if (event.code === 'ArrowLeft'){
            mc.moveb(ctx, gamebg, canvas, n, i)
            n++
            if (i > -100) i -= 10;
            if (n === 33) n = 1;    
            b = 0 
        }

        if (event.code === 'Space'){
            setInterval(function(){mc.jump(ctx, gamebg, canvas, b, mc.x, j)
                b++
                if (j < 330) j -= 5; else {
                    j = 350
                }
                if (b === 33) b = 0;  },50)
            
        }

        if (event.code === 'ArrowDown'){
           if (mc.left) {
               mc.down(ctx, gamebg, canvas, b, i, mc.y)
                mc.y-- 
                b ++
                if (i > -100) i -= 10;
                if (b === 16) b = 0
            }
        }

        if (event.code === 'KeyQ') {
            if (mc.left) {
            let int = setInterval(function(){
                    mc.attack(ctx, gamebg, canvas, b)
                    b++
                    if (b === 16) {
                        clearInterval(int)
                        b === 0
                    }
                }, 50)
            
            }
        }

       


    })



    

   

})

