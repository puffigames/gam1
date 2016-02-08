/**
* @fileoverview Classe per carregar recursos del joc.
* @author Sergi Suelves
* @version 0.6
*/

/**
* @constructor
* @brief Inicialitza l'objecte
*/
function PreLoader(){
    //La llista d'objectes
    this.lista=[];
    //la llista de recursos esperats
	this.esperades=0;
	//el numero de recursos que s'han carregat
    this.carregades=0;
	//switch per mostrar la pantalla de carregar mentre es carrega
    this.mentre =false;
    //tant per cent de les carregues
	this.totalLoaded = 0;
}

/**
* @method cargar
* @brief crea objectes imatge per a cadqa recurs
* @param ctx {Obj} el context on es dibuixa l'objecte
*/
PreLoader.prototype.cargar=function(lista){
    var self=this;
    this.esperades=lista.length;
    
	for (var i=0;i<this.esperades;i++){
        
		//TODO
			if(lista[i][0]=="img"){
				
				var img=new Image();
				img.src=lista[i][2];
				img.onload=function(){
					self.imagenCargada();
				};
				this.lista[lista[i][1]]=img;
			
			}else if(lista[i][0]=="audio"){
				this.lista[lista[i][2]]=img;
				var audio=new Audio();
				audio.src=lista[i][1];
				audio.onload=function(){
					self.imagenCargada();
				};
				this.lista[lista[i][1]]=audio;
			}
			
			
      /*
		var img=new Image();
        img.src=lista[i][1];
        img.onload=function(){
            self.imagenCargada();
        };
        this.lista[lista[i][0]]=img;*/
    }
};

PreLoader.prototype.imagenCargada=function(){
    this.carregades++;
    if (this.carregades==this.esperades)
    {
        this.mentre = true;
        this.completado();
    }
};

PreLoader.prototype.get=function(id){
    return this.lista[id];
};
PreLoader.prototype.completado=function(){
  if(this.mentre==true){
    switchStates(); 
  }
};

PreLoader.prototype.barCharge = function(){
        
        ctx.fillStyle = "red";
        this.totalLoaded = (this.carregades*100)/this.esperades;
        ctx.fillRect((canvas.width/2)-150,(canvas.height/2)+50,300,50);
        ctx.fillStyle = "#51C9FF";
        ctx.fillRect((canvas.width/2)-150,(canvas.height/2)+50,(this.totalLoaded)*3,50);
        text.size=20;
        text.textAlign="center";
        var num = this.totalLoaded.toFixed();
        text.write(num+" %",(canvas.width/2),(canvas.height/2)+80);
        
    
}