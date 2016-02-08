/**
* @fileoverview Classe abstracte per creació de personatges, enemics y objectes
* @author Sergi Suelves
* @version 0.1
*/

/**
* @constructor
* @brief Crea un rectangle o quadrat
* @param x {Int} Coorenada horitzontal del quadrat
* @param y {Int} Coordenada vertical del quadrat
* @param width {Int} Amplada del quadrat
* @param height {Int} Alçada del quadrat
*/
function Bullet(x, y, width, height){
    this.x = x; 
    this.y = y; 
    this.width = width;
    this.height = height;
    this.vx = 0;
    this.vy = 0;
    
    
}

/**
* Getters and Setters
*/
Bullet.prototype.getVx = function(){
    return this.vx;
}

Bullet.prototype.getVy = function(){
    return this.vy;
}

Bullet.prototype.setVx = function(vx){
    this.vx = vx;
}

Bullet.prototype.setVy = function(vy){
    this.vy = vy;
}

Bullet.prototype.fill=function(ctx){ ctx.fillRect(this.x,this.y,this.width,this.height); } 

/**
* @method intersects
* @brief Detecta quan el rectangle colisiona amb
* un altre objecte
* @param rect {Obj} Objecte amb el que ha de colisionar
* el quadrat
*/
Bullet.prototype.intersects=function(rect){
        if(rect!=null){
            return(this.x<rect.x+rect.width&&
                this.x+this.width>rect.x&&
                this.y<rect.y+rect.height&&
                this.y+this.height>rect.y);
        }
}