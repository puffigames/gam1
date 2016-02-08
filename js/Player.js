/**
* @file Player.js
* @fileoverview Classe per crear al jugador.
* Hereda de Entity
* @author Sergi Suelves
* @version 0.3
* @date desembre 2015.
*/

/**
* @constructor
* @brief Crea un rectangle o quadrat
* @param x {Int} Coorenada horitzontal del quadrat
* @param y {Int} Coordenada vertical del quadrat
* @param width {Int} Amplada del quadrat
* @param height {Int} Alçada del quadrat
*/
function Player( x, y, width, height){
    Entity.call(this,x, y, width, height);  
    //this.moving = false;
    //this.movingToLeft = false;
    //this.movingToRight = false;
    //this.movingToUp = false;
    //this.movingToDown = false; 

    this.health = 100;
    this.nearDeathCounter = 0;
    this.level = 1;  
}

/**
* @brief Herència de Entity
*/
Player.prototype = new Entity;



Player.prototype.interact = function(canvas, gamePad) {
    if(this.x <= 0){
  this.x = 0;
}

if(this.y <= 0){
  this.y = 0;
}
if(this.y >= canvas.height -  this.height){
  this.y = canvas.height - this.height;
}

if(this.x >= canvas.width -  this.width){
  this.x = canvas.width - this.width;
}



if(gamePad.up.touch()){
    this.y-=8;
  }
  if(gamePad.down.touch()){
    this.y+=8;
  }
  if(gamePad.left.touch()){
    this.x-=8;
  }
  if(gamePad.right.touch()){
    this.x+=8;
  } 
  if(gamePad.leftUp.touch()){
    this.x-=8;
    this.y-=8;
  }


  if(gamePad.rightUp.touch()){
    this.x+=8;
    this.y-=8;
  }
  if(gamePad.rightDown.touch()){
    this.x+=8;
    this.y+=8;
  }
if(gamePad.leftDown.touch()){
    this.x-=8;
    this.y+=8;
  }

};
/**
* @method fill
* @brief Dibuixa l'objecte en pantalla aamb Càmera
* @param ctx {Obj} el context on es dibuixa l'objecte
* @param cam {Obj} Càmera que segueix l'objecte
*/
/*Player.prototype.fill=function(ctx,cam){
    if(cam!=null)
        ctx.fillRect(this.x-cam.x,this.y-cam.y,this.width,this.height);
    else
        ctx.fillRect(this.x,this.y,this.width,this.height);
}*/

Player.prototype.fill=function(ctx){
    
   
    
        if(ctx!=null){
            
            ctx.fillStyle = "#41C3FF";
            //ctx.fillRect(this.Xtotal,this.Ytotal,this.width,this.height);
            ctx.fillRect(this.x,this.y,this.width,this.height);
        }
    
   
    }

Player.prototype.drawImageArea = function (ctx, sprite,counterSprite, x, y, w, h) {
        if (sprite.width){
            ctx.drawImage(sprite, counterSprite, 0, 64, 128,this.x, this.y, this.w, this.h);
        }else{
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
}
/**
* @method intersects
* @brief Detecta quan el rectangle colisiona amb
* un altre objecte
* @param rect {Obj} Objecte amb el que ha de colisionar
* el quadrat
*/
Player.prototype.intersects=function(rect){
        if(rect!=null){
            return(this.x<rect.x+rect.width&&
                this.x+this.width>rect.x&&
                this.y<rect.y+rect.height&&
                this.y+this.height>rect.y);
        }
}


Player.prototype.lifeBar = function(ctx, text){
    this.life = Math.min(this.health,100);
    if(this.nearDeathCounter>=20){
        this.nearDeathCounter=0;
    }
    if(this.health<=0){
        this.health=0;
    }
    if(this.health>=100){
        this.health=100;
    }

    //if(this.superPower==true){
    //    this.health=100;
    //}
    
    ctx.fillStyle = "#000";
    ctx.fillRect(50,80,200,20);
    
    text.size=20;
    text.textAlign= "left";
    text.write("Health: "+this.health, 50, 50);
    
    if(this.health>=75){
        ctx.fillStyle ="#00ff51";
        ctx.fillRect(50,80,this.life*2,20);
    } else if(this.health<75 && this.health>=25){
        ctx.fillStyle ="#ffff00";
        ctx.fillRect(50,80,this.life*2,20);
    } else if(this.health<25){
        this.nearDeathCounter++;
        if(this.nearDeathCounter>=0 && this.nearDeathCounter<=10){
        ctx.fillStyle ="#ff0000";
        ctx.fillRect(50,80,this.life*2,20);
        }else{
            //res de res   
        }
    }
    
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(50,80);
    ctx.lineTo(250,80);
    ctx.lineTo(250,100);
    ctx.lineTo(50,100);
    ctx.lineTo(50,80);
    ctx.stroke();
}

/**
* Getters and setters
*/
Player.prototype.getX = function(){
    return this.x;
}

Player.prototype.getY = function(){
    return this.y;
}

Player.prototype.getWidth = function(){
    return this.width;
}

Player.prototype.getHeight = function(){
    return this.height;
}

Player.prototype.getMoving = function(){
    return this.moving;
}

Player.prototype.getMovingToDown = function(){
    return this.movingToDown;
}

Player.prototype.getMovingToUP = function(){
    return this.movingToUp;
}

Player.prototype.getMovingToLeft = function(){
    return this.movingToLeft;
}

Player.prototype.getMovingToRight = function(){
    return this.movingToRight;
}

Player.prototype.setX = function(x){
    this.x = x;
}

Player.prototype.setY = function(x){
    this.y = y;
}

Player.prototype.setWidth = function(width){
    this.width = width;
}

Player.prototype.setHeight = function(height){
    this.height = height;
}

Player.prototype.setMoving = function(moving){
    this.moving = moving;
}

Player.prototype.setMovingToDown = function(movingToDown){
    this.movingToDown = movingToDown;
}

Player.prototype.setMovingToUP = function(movingToUp){
    this.movingToUp = movingToUp;
}

Player.prototype.setMovingToLeft = function(movingToLeft){
    this.movingToLeft = movingToLeft;
}

Player.prototype.setMovingToRight = function(movingToRight){
    this.movingToRight = movingToRight;
}

/*

 /**
* @fileoverview Classe per crear un Jugador
* @author Sergi Suelves
* @version 0.1
*/

/**
* @constructor
* @brief Crea un rectangle o quadrat
* @param x Int Coorenada horitzontal del quadrat
* @param y Int Coordenada vertical del quadrat
* @param width Int Amplada del quadrat
* @param height Int Alçada del quadrat
*/


/*
function Player(x,y,w,h){
    //TODO habilitat, energia, vida, municio, nivell?
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        
        this.health = 100;
       
    
}
*/


/*
Player.prototype.drawEnemy = function (ctx, sprite,counterSprite, x, y, w, h) {
        if (sprite.width){
   
    ctx.drawImage(sprite, counterSprite, 0, x, y,this.x, this.y, 128, 256);
        }else{
     ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
        }




*/
//TODO Mètode disparar


/**
* @method intersects
* @brief Detecta quan el rectangle colisiona amb
* un altre objecte
* @param rect Obj Objecte amb el que ha de colisionar
* el quadrat
*/
/*
Player.prototype.intersects=function(rect){
        if(rect!=null){
            return(this.x<rect.x+rect.w&&
                this.x+this.w>rect.x&&
                this.y<rect.y+rect.h&&
                this.y+this.h>rect.y);
        }
}*/

/**
* @method fill
* @brief Dibuixa l'objecte en pantalla aamb Càmera
* @param ctx Obj el context on es dibuixa l'objecte
* @param cam Obj Càmera que segueix l'objecte
*/
/*Player.prototype.fill2=function(ctx,cam){
    if(cam!=null)
        m.ctx.fillRect(this.x,this.y,this.width,this.height);
    else
        m.ctx.fillRect(this.x,this.y,this.width,this.height);

}*/

