
import Game from './scripts/game'
import Mc from './scripts/mc'
import LilShooter from './scripts/lilShooter'
window.mc = Mc

let mc = new Mc()

let gamebg = new Image()
gamebg.src = "./imgs/background/banner.png"



document.addEventListener('DOMContentLoaded', function(){
    
    let canv = document.getElementById('canvas')
    let ctx = canv.getContext('2d')
    canv.width = 700
    canv.height = 600
    let shooter = new LilShooter()
    let shooter2 = new LilShooter()
    shooter2.y = 350
    let game = new Game(ctx, mc, shooter,gamebg, canvas)
    
    let canv2 = document.getElementById('canvas2')
    let ctx2 = canv.getContext('2d')
    canv2.width = 701
    canv2.height = 300

    let keys = {}
    game.start()
   

    document.addEventListener('keydown', function(event){
        
        keys[event.code] = true
            if (keys['KeyD'] ){
            let aud = new Audio("./imgs/sounds/step25.wav")
            aud.play()
            aud.volume = 0.2
            mc.left = false
            mc.img.src = "./imgs/hero/idleandwalkr.png"
            if (mc.x < 635){
                mc.frameY += 1
                mc.move(ctx, gamebg, canvas)
                mc.x += mc.speed
            }
        }
    

        if (keys['KeyA'] ) {
            let aud = new Audio("./imgs/sounds/step25.wav")
            aud.play()
            aud.volume = 0.2
            mc.left = true
            mc.img.src = "./imgs/hero/idleandwalkl.png"
            if (mc.x > -52){
                mc.frameY += 1
                mc.move(ctx, gamebg, canvas)
                mc.x -= mc.speed 
            }
        }
        

        if (keys['KeyW']) {
            
           if (!mc.left){
            let aud = new Audio("./imgs/sounds/Wind-Shoowsh-Transition-www.fesliyanstudios.com.mp3")
            aud.play()
            aud.volume = 0.2
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
                    let aud = new Audio("./imgs/sounds/Wind-Shoowsh-Transition-www.fesliyanstudios.com.mp3")
                    aud.play()
                    aud.volume = 0.2
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

        if (keys['KeyS']) {
            
            if(!mc.left){
                let aud = new Audio("./imgs/sounds/Wind-Shoowsh-Transition-www.fesliyanstudios.com.mp3")
                aud.play()
                aud.volume = 0.2
                let down = setInterval(function(){
                mc.img.src = "./imgs/hero/teleport.png"
                mc.move(ctx, gamebg, canvas)
                if (mc.y < 490 ){mc.y += mc.speed }
                mc.frameY += 1
                if (mc.frameY === 9 ) {
                    clearInterval(down)
                    mc.frameY = 0 
                    mc.img.src = "./imgs/hero/idleandwalkr.png"
                    mc.move(ctx, gamebg, canvas)
                }
            }, 50)} else {
                let aud = new Audio("./imgs/sounds/Wind-Shoowsh-Transition-www.fesliyanstudios.com.mp3")
                aud.play()
                aud.volume = 0.2
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
                let audio = new Audio("./imgs/sounds/2 clash 5.mp3")
                audio.volume = 0.1
                audio.play()
                
                let att = setInterval(function(){
                mc.img.src = "./imgs/hero/attack.png"
                mc.attack(ctx, gamebg, canvas)
                mc.attackFrame += 1
                if (mc.attackFrame === 18) {
                    mc.attackFrame = 0 
                    mc.img.src = "./imgs/hero/idleandwalkr.png"
                    clearInterval(att)
                    mc.move(ctx, gamebg, canvas)
                }

                
            }, 50)} else {
                let audio = new Audio("./imgs/sounds/2 clash 5.mp3")
                audio.volume = 0.1
                audio.play()
                
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
    })






    

   

})

