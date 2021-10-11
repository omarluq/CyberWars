# [Cyber Wars](https://omarluq.github.io/CyberWars/)


<p align="center">
  <img src="https://github.com/omarluq/CyberWars/blob/main/imgs/landingpage.png" />
</p>

# Background

Cyber wars is an arcade shooter style game , in the year 2170 the robots rebelled against humans due to all the damage that we have caused to the planet, your mission is to protect one of the last standing human cities and prevent the robots from entering it.

# Functionality & MVP
Users will be able to:
  * Start and restart the game.
  * Move using up, down, left and right arrow keys, shoot your weapon using the Q key.
  * Toggle music on and off.


This project will also include:
  * Instructional guide explaining the rules of the game.
  * Links to github/linkedin/twitter/email.
  * A production README.


# Architecture and Technologies
This project will use the following technologies: 
  * Javascript for game logic.
  * Canvas and Animation API.
  * HTML and CSS for the layout and styling.


# Wireframe 

![wireframe](./Wireframe.png)


# Implementation Timeline


Friday Afternoon & Weekend 8/15/21 - Will start working on implementing the environment and the background.

Monday - 8/16/21 - Will have background up and running and have my first bots spawn on the map.

Tuesday - 8/17/21 - I will have a working skeleton with proper game logic.

Wednesday - 8/18/21 - I will have added functionality and effects/add a menu button, start/restart button, health bars, sound effects.

Thursday Morning - 8/19/21 - The final polishing will be done.

# Development
Collision detection calculations using vanilla JS 
```Javascript 
  collison() {
    for (let i = 0; i < this.enemies.length; i++) {
      if (
        this.mc.x + 20 < this.enemies[i].x + 85 + this.enemies[i].width - 100 &&
        this.mc.x + 20 + (this.mc.width - 30) > this.enemies[i].x + 100 &&
        this.mc.y + 50 < this.enemies[i].y + 20 + this.enemies[i].height - 30 &&
        this.mc.y + 50 + (this.mc.height - 50) > this.enemies[i].y + 20
      ) {
        if (this.mc.attack) {
          this.enemies[i].points -= 5;
          this.enemies[i].x += 0.5;
          if (this.enemies[i].points === 0) {
            let boom = new Image();
            boom.src = "./imgs/explosion/Explosion-Pack.png";
            this.ctx.drawImage(
              boom,
              64,
              96,
              36,
              36,
              this.enemies[i].x + 85,
              this.enemies[i].y + 20,
              36,
              36
            );
            this.enemies.splice(i, 1);
            this.killCount.count += 1;
            this.mc.killCount++;
          }
        } else {
          this.enemies[i].x += 0.5;
        }
      }
    }
  }
```
# Credits

Art and sprites courtesy of Penusbmic https://penusbmic.itch.io/

special thanks to Daniel Mechenko github: https://github.com/dmechenko/ && Richard Leung github: https://github.com/rzleu


