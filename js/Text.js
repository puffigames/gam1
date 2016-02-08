/**
* @file Text.js
* @fileoverview Classe per crear textos de videojocs
* @author Sergi Suelves
* @version 0.4
* @date gener 2016.
*/

/**
* @constructor
* @brief Crea una càmera amb coordenades exactes
* @param ctx {obj} objecte del context del canvas
* @param size {int} tamany de la lletra
* @param font {string} nom de la tipografia
* @param textAlign {string} alineació del text 'left, 'center', 'right'
*/
function Text(ctx, size, font,textAlign){
    this.ctx = ctx;
    this.size = size;
    this.font = font;
    this.textAlign = textAlign;
    this.baseline = 'alphabetic';
    this.maxWidth = 500;
    this.lineHeight = 50;
}

/**
* @method write
* @brief escriu en pantalla el text
*/
Text.prototype.write = function(String, x, y){
     
        
   	   
   	//this.ctx.font = this.size+"pt "+this.font;
		//this.ctx.textAlign = this.textAlign;
		//this.ctx.fillStyle = "#FF529D";
		//this.ctx.fillText(String, x, y);
        
       	this.ctx.font = this.size+"pt arial";
		this.ctx.textAlign = this.textAlign;
		this.ctx.fillStyle = "#FF529D";
		this.ctx.fillText(String, x,y);
}


/**
* @method textBox
* @brief escriu en pantalla el text amb salts de linia.
* @param String {string} String és el text que escriurà en pantalla.
* @param x {int} Posició en l'eix de les x.
* @param y {int} Posició en l'eix de les y.
*/
Text.prototype.textBox = function(String, x, y){

    function saltLinia(ctx, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = ctx.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        ctx.fillText(line, x, y);
      }
    
    //TODO ajustar les grandaries i fonts al canvas real del joc
    this.ctx.font = this.size+'pt onesize';
    this.ctx.textAlign = this.textAlign;
    this.ctx.fillStyle = '#51C9FF';
    saltLinia(this.ctx, String, x, y, this.maxWidth, this.lineHeight);
        
    this.ctx.font = this.size+'pt onesizer';
    this.ctx.textAlign = this.textAlign;
    this.ctx.fillStyle = '#000';
    saltLinia(this.ctx, String, x, y, this.maxWidth, this.lineHeight);
}


Text.prototype.warning = function(String, x, y){
     
        
   	   
   	  //  this.ctx.font = this.size+"pt "+this.font;
		//this.ctx.textAlign = this.textAlign;
		//this.ctx.fillStyle = "#51C9FF";
		//this.ctx.fillText(String, x, y);
        
       	this.ctx.font = this.size+"pt onesizer";
		this.ctx.textAlign = this.textAlign;
		this.ctx.fillStyle = "#000";
		this.ctx.fillText(String, x,y);
}
