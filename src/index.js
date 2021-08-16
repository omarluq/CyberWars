
import Game from './scripts/game'
import Mc from './scripts/mc'
import LilShooter from './scripts/lilShooter'
import Poison from "./scripts/poisonbot"
import AssualtDroid from './scripts/assaultDroid'
window.mc = Mc

let mc = new Mc()

let gamebg = new Image()
gamebg.src = "./imgs/background/banner.png"



document.addEventListener('DOMContentLoaded', function(){
    
    let canv = document.getElementById('canvas')
    let ctx = canv.getContext('2d')
    let enemiesArr = []

    setInterval(() => {
        enemiesArr.push(new LilShooter());
    }, 5000);
    setInterval(() => {
        enemiesArr.push(new Poison())
    }, 7000);
    setInterval(() => {
        enemiesArr.push(new AssualtDroid())
    }, 9000);



    canv.width = 700
    canv.height = 600
    let game = new Game(ctx, mc,gamebg, canvas, enemiesArr)
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
                    if(mc.y > 250){mc.y -= mc.speed}
                    mc.frameY += 1
                    if (mc.frameY === 9) {
                         clearInterval(up)
                         mc.frameY = 0 
                         mc.img.src = "./imgs/hero/idleandwalkr.png"
                    }

                }, 50)} else {
                        let aud = new Audio("./imgs/sounds/Wind-Shoowsh-Transition-www.fesliyanstudios.com.mp3")
                        aud.play()
                        aud.volume = 0.2
                        let up =setInterval(function(){
                            mc.img.src = "./imgs/hero/teleportl.png"
                            if(mc.y > 250){mc.y -= mc.speed}
                            mc.frameY += 1
                            if (mc.frameY === 9) {
                                clearInterval(up)
                                mc.frameY = 0 
                                mc.img.src = "./imgs/hero/idleandwalkl.png"
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
                        if (mc.y < 490 ){mc.y += mc.speed }
                        mc.frameY += 1
                        if (mc.frameY === 9 ) {
                            clearInterval(down)
                            mc.frameY = 0 
                            mc.img.src = "./imgs/hero/idleandwalkr.png"
                        }
                    }, 50)} else {
                        let aud = new Audio("./imgs/sounds/Wind-Shoowsh-Transition-www.fesliyanstudios.com.mp3")
                        aud.play()
                        aud.volume = 0.2
                        let down = setInterval(function(){
                            mc.img.src = "./imgs/hero/teleportl.png"
                            console.log(mc.height);
                            
                            if (mc.y < 490 ){mc.y += mc.speed }
                            mc.frameY += 1
                            if (mc.frameY === 9 ) {
                                clearInterval(down)
                                mc.frameY = 0 
                                mc.img.src = "./imgs/hero/idleandwalkl.png"
 
                            }
                        }, 50)

                    }
                }

                    if (keys['KeyQ']) {
                        mc.attack = true
                        if (!mc.left){
                            let audio = new Audio("./imgs/sounds/2 clash 5.mp3")
                            audio.volume = 0.1
                            audio.play()
                            
                            let att = setInterval(function(){
                            mc.img.src = "./imgs/hero/attack.png"
                            mc.attackFrame += 1
                            if (mc.attackFrame === 18) {
                                mc.attackFrame = 0 
                                mc.img.src = "./imgs/hero/idleandwalkr.png"
                                clearInterval(att)
                                mc.attack = false
                            }

                        
                    }, 50)} else {
                        let audio = new Audio("./imgs/sounds/2 clash 5.mp3")
                        audio.volume = 0.1
                        audio.play()
                        
                        let att = setInterval(function(){
                            mc.img.src = "./imgs/hero/attackl.png"
                            mc.attackFrame += 1
                            if (mc.attackFrame === 18) {
                                mc.attackFrame = 0 
                                mc.img.src = "./imgs/hero/idleandwalkl.png"
                                clearInterval(att)
                                mc.attack = false

                            }
            
                            
                        }, 50)

                    }
        }
            if (mc.frameY === 6) mc.frameY = 0;
        
          
    })

    document.addEventListener('keyup', function(event){
        delete keys[event.code]
        mc.frameY = 0 
    })






    

   

})

