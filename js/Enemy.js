/**
* @file Enemy.js
* @fileoverview Classe per crear enemics.
* Hereda de Entity
* @author Sergi Suelves
* @version 0.3
* @date gener 2016.
*/

/**
* @constructor
* @brief Crea un rectangle o quadrat
* @param x {Int} Coorenada horitzontal del quadrat
* @param y {Int} Coordenada vertical del quadrat
* @param width {Int} Amplada del quadrat
* @param height {Int} Alçada del quadrat
*/
function Enemy( x, y, width, height, level){
    Entity.call(this,x, y, width, height);  
    //this.moving = false;
    //this.movingToLeft = false;
    //this.movingToRight = false;
    //this.movingToUp = false;
    //this.movingToDown = false; 

    this.health = 100;
    this.level = level; 
 
}

/**
* @brief Herència de Entity
*/
Enemy.prototype = new Entity;


/**
* @method fill
* @brief Dibuixa l'objecte en pantalla aamb Càmera
* @param ctx {Obj} el context on es dibuixa l'objecte
* @param cam {Obj} Càmera que segueix l'objecte
*/
Enemy.prototype.fill=function(ctx){
    
        if(ctx!=null){
            
            ctx.fillStyle = "#41C3FF";
            //ctx.fillRect(this.Xtotal,this.Ytotal,this.width,this.height);
            ctx.fillRect(this.x,this.y,this.width,this.height);
        }
    
   
    }

Enemy.prototype.drawImageArea = function (ctx, sprite,counterSprite, x, y, w, h) {
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
Enemy.prototype.intersects=function(rect){
        if(rect!=null){
            return(this.x<rect.x+rect.width&&
                this.x+this.width>rect.x&&
                this.y<rect.y+rect.height&&
                this.y+this.height>rect.y);
        }
}


/**

- moviment vertical normal
- moviment ziga zaga
- moviment en cercles

- disparar al objectiu
- immolar-se
- diparo rafaga-
- disparo en varios angles a l'hora.

*/