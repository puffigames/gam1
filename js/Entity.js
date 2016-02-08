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
function Entity(x, y, width, height){
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
Entity.prototype.getVx = function(){
    return this.vx;
}

Entity.prototype.getVy = function(){
    return this.vy;
}

Entity.prototype.setVx = function(vx){
    this.vx = vx;
}

Entity.prototype.setVy = function(vy){
    this.vy = vy;
}

