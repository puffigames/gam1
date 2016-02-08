
//'use strict';

/**
* @fileoverview Classe per crear un fondo d'estrelles rotllo l'espai
* @author Sergi Suelves
* @version 0.1
*/

/**
* @constructor
* @brief Crea el sistema
*/   
function StarSystem(){
    this.stars = [];
    this.numStars = 10;

    this.bg1 = 0;
    this.bg2 = -960;
   
}

/**
* @method createStars
* @brief crea el numero d'estrelles que ha de tenir el sistema.
* @param canvas {obj} és l'objecte canvas del qual en necesita l'ampada i l'alçada 
*/
StarSystem.prototype.createStars = function(canvas, timer) {
     for(var i=0;i<this.numStars;i++){
        this.stars.push(new Star(random(canvas.width),random(canvas.height),random(timer)));
    }
};

/**
* @method moveStars
* @brief crea el numero d'estrelles que ha de tenir el sistema.
* @param canvas {obj} és l'objecte canvas del qual en necesita l'ampada i l'alçada 
*/
StarSystem.prototype.moveStars = function(canvas) {
     for(var i=0,l=this.stars.length;i<l;i++){
            this.stars[i].y+=5;
            if(this.stars[i].y>canvas.height)
                this.stars[i].y=0;
            this.stars[i].timer+=10;
            if(this.stars[i].timer>200)
                this.stars[i].timer-=200;
        }
};


StarSystem.prototype.paintStars = function(ctx) {
    for(var i=0,l=this.stars.length;i<l;i++){
        var c=255-Math.abs(100-this.stars[i].timer);
        ctx.fillStyle='rgb('+c+','+c+','+c+')';
        ctx.fillRect(this.stars[i].x,this.stars[i].y,3,3);
    }
};

StarSystem.prototype.fillBackground = function(ctx) {
    ctx.drawImage(R.get("bgStage1"),0,this.bg1);
ctx.drawImage(R.get("bgStage1"),0,this.bg2);
};

StarSystem.prototype.moveBackground = function() {
    this.bg1+=2;
  this.bg2+=2;

  if(this.bg1>=960){
    this.bg1=-960;
  }

  if(this.bg2>=960){
    this.bg2=-960;
  }
};

/**
* @fileoverview Classe Vector tunejada per a fer d'estrelles
* @author Sergi Suelves
* @version 0.1
*/

/**
* @constructor
* @brief Crea una Estrella
*/ 
function Star(x,y,timer){
    this.x=(x==null)?0:x;
    this.y=(y==null)?0:y;
    this.timer=(timer==null)?0:timer;
}





/*

window.addEventListener('load',init,false);


var canvas=null,ctx=null;

//var aTimer=0;

//var stars=[];



    

function init(){
    canvas=document.getElementById('canvas');
    ctx=canvas.getContext('2d');
    canvas.width=540;
    canvas.height=960;
    canvas.style.position='fixed';
    canvas.style.top='0';
    canvas.style.left='0';
    canvas.style.width='100%';
    canvas.style.height='100%';
    
    starSystem.createStars(canvas, 200);
    
    repaint();
}



function repaint(){
    requestAnimationFrame(repaint);
    act();
    paint(ctx);
}


function act(){
        starSystem.moveStars();
}

function paint(){
    ctx.fillStyle='#000';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
    starSystem.paintStars();
    
}


window.requestAnimationFrame=(function(){
    return window.requestAnimationFrame || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame || 
        function(callback){window.setTimeout(callback,17);};
})();*/
