const Game = require('./scripts/game')
const Mc = require('./scripts/mc')
window.mc = Mc

let mc = new Mc()

let gamebg = new Image()
gamebg.src = "./imgs/background/banner.png"

let richard = new Image() 
richard.src = "./imgs/richard/idle.png"


document.addEventListener('DOMContentLoaded', function(){
    
    let canv = document.getElementById('canvas')
    let ctx = canv.getContext('2d')
    canv.width = 700
    canv.height = 600
    let game = new Game(ctx, mc)
    game.start(gamebg, canvas)

   let keys = {}
    document.addEventListener('keydown', function(event){
        
        keys[event.code] = true
        if (keys['ArrowRight'] ){
            mc.left = false
            mc.img.src = "./imgs/hero/idleandwalkr.png"
            if (mc.x < 635){
                mc.frameY += 1
                mc.move(ctx, gamebg, canvas)
                mc.x += mc.speed
            }
        }
    

        if (keys['ArrowLeft'] ) {
            mc.left = true
            mc.img.src = "./imgs/hero/idleandwalkl.png"
            if (mc.x > -52){
                mc.frameY += 1
                mc.move(ctx, gamebg, canvas)
                mc.x -= mc.speed 
            }
        }
        

        if (keys['ArrowUp']) {
            
           if (!mc.left){
            let up =setInterval(function(){
                    mc.img.src = "./imgs/hero/teleport.png"
                    mc.move(ctx, gamebg, canvas)
                    if(mc.y > 250){mc.y -= mc.speed}
                    mc.frameY += 1
                    if (mc.frameY === 9) {
                        clearInterval(up)
                        mc.frameY = 0 
                        mc.img.src = "./imgs/hero/idleandwalkr.png"
                        mc.move(ctx, gamebg, canvas)
                    }
                }, 50)} else {
                    let up =setInterval(function(){
                        mc.img.src = "./imgs/hero/teleportl.png"
                        mc.move(ctx, gamebg, canvas)
                        if(mc.y > 250){mc.y -= mc.speed}
                        mc.frameY += 1
                        if (mc.frameY === 9) {
                            clearInterval(up)
                            mc.frameY = 0 
                            mc.img.src = "./imgs/hero/idleandwalkl.png"
                            mc.move(ctx, gamebg, canvas)
                        }
                    }, 50)

                }
            
        
            
        }

        if (keys['ArrowDown']) {
            
            if(!mc.left){
            let down = setInterval(function(){
                mc.img.src = "./imgs/hero/teleport.png"
                mc.move(ctx, gamebg, canvas)
                mc.drawRichard(ctx, richard)
                if (mc.y < 490 ){mc.y += mc.speed }
                mc.frameY += 1
                if (mc.frameY === 9 ) {
                    clearInterval(down)
                    mc.frameY = 0 
                    mc.img.src = "./imgs/hero/idleandwalkr.png"
                    mc.move(ctx, gamebg, canvas)
                }
            }, 50)} else {
                let down = setInterval(function(){
                    mc.img.src = "./imgs/hero/teleportl.png"
                    mc.move(ctx, gamebg, canvas)
                    if (mc.y < 490 ){mc.y += mc.speed }
                    mc.frameY += 1
                    if (mc.frameY === 9 ) {
                        clearInterval(down)
                        mc.frameY = 0 
                        mc.img.src = "./imgs/hero/idleandwalkl.png"
                        mc.move(ctx, gamebg, canvas)
                    }
                }, 50)

            }
        }

        if (keys['KeyQ']) {
            if (!mc.left){
            let att = setInterval(function(){
                mc.img.src = "./imgs/hero/attack.png"
                mc.attack(ctx, gamebg, canvas)
                mc.drawRichard(ctx, richard)
                mc.attackFrame += 1
                if (mc.attackFrame === 18) {
                    mc.attackFrame = 0 
                    mc.img.src = "./imgs/hero/idleandwalkr.png"
                    clearInterval(att)
                    mc.move(ctx, gamebg, canvas)
                }

                
            }, 50)} else {
                let att = setInterval(function(){
                    mc.img.src = "./imgs/hero/attackl.png"
                    mc.attack(ctx, gamebg, canvas)
                    mc.attackFrame += 1
                    if (mc.attackFrame === 18) {
                        mc.attackFrame = 0 
                        mc.img.src = "./imgs/hero/idleandwalkl.png"
                        clearInterval(att)
                        mc.move(ctx, gamebg, canvas)
                    }
    
                    
                }, 50)

            }
        }
        if (mc.frameY === 6) mc.frameY = 0;

        document.addEventListener('keyup', function(event){
           delete keys[event.code] 
        })
        
          
    })

    document.addEventListener('keyup', function(event){
        delete keys[event.code]
        mc.frameY = 0 
        game.start(gamebg, canvas)
    })



    

   

})

