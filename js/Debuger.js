
if(d.config.debugMode == true){
	/**
	* @file Debuger.js
	* @fileoverview Classe per veure informació de variables en pantalla mentre el canvas està en marxa. 
	* Pot arribar a mostrar fins a 13 variables en pantalla simulatnies. 
	* @author Sergi Suelves.
	* @version 0.2
	* @date gener 2016.
	*/

	/**
	* @constructor
	* @param ctx {obj} objecte que conté el context 2d del canvas
	*/
	function Debuger(ctx){
		this.debugMode = true;
		this.ctx = ctx;
		this.color = "#ff0000";
		this.font = "Arial";
		this.sizeFont = "20";
		this.side= "left";
		
		this.initialize();
	}

	/**
	* @constructor
	* @method initialize
	* @brief Mètode constructor de la classe Debuger. Únicament mostra el text en pantalla que s'etsà 
	* executant el Debug mode. S'inicialitza automàticament en crear l'objecte Debuger.
	*/
	Debuger.prototype.initialize = function(){

		if(this.side == "left"){
			this.x = 30;
		}else if(this.side == "right"){
			this.x =500;
		}
		this.fontFill = 30+"px "+this.font;	
		this.ctx.font= this.fontFill;
		this.ctx.textAlign = 'left';
		
		this.ctx.fillStyle = this.color;
		this.ctx.fillText('Debug Mode: '+this.debugMode,this.x,30);
	}

	/**
	* @method show
	* @brief Mètode que ensenya la variable desitjada.
	* @param text {String} Text que especificarà el nom del valor a mostrar.
	* @param valor {var} variable amb el valor a mostrar
	* @param position {Int} posició en la que vols mostrar el missatge. La posició 1 és la primera a mostrar
	* mentre que la posicició 7 és la últmia a mostrar.
	*/
	Debuger.prototype.show = function(text, valor, position){
		this.ctx.fillStyle = this.color;
		this.fontFill = this.sizeFont+"px "+this.font;
		if(this.side == "left"){
			this.x = 30;
		}else if(this.side == "right"){
			this.x =560;
		}
		this.ctx.font = this.fontFill;
		if(position==1){

			this.ctx.fillText(text+': '+valor, this.x, 65);
		}else if(position==2){

			this.ctx.fillText(text+': '+valor, this.x, 95);
		}else if(position==3){

			this.ctx.fillText(text+': '+valor, this.x, 125);
		}else if(position==4){

			this.ctx.fillText(text+': '+valor, this.x, 155);
		}else if(position==5){

			this.ctx.fillText(text+': '+valor, this.x, 185);
		}else if(position==6){

			this.ctx.fillText(text+': '+valor, this.x, 215);
		}else if(position==7){

			this.ctx.fillText(text+': '+valor, this.x, 245);
		}else if(position==8){

			this.ctx.fillText(text+': '+valor, this.x, 275);
		}else if(position==8){

			this.ctx.fillText(text+': '+valor, this.x, 305);
		}
	}
}