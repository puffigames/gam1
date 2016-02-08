

               
function init(){
    canvas = document.getElementById(d.config.idCanvas);
    ctx = canvas.getContext('2d');
    canvas.width = d.config.canvasWidth;
    canvas.height = d.config.canvasHeight;
    canvas.style.backgroundColor = d.config.backgroundColor;
    canvas.style.position='fixed';
    canvas.style.top='0';
    canvas.style.left='0';
    canvas.style.width='100%';
    canvas.style.height='100%';
    starSystem.createStars(canvas,200);
    text = new Text(ctx,"20","onesize","center");
    ctx.font = "30pt Arial";
    ctx.fillText("Loading", 50, 50);
    resize();
    
        canvas.addEventListener('touchstart',function(evt){
            var t=evt.changedTouches;
            for(var i=0;i<t.length;i++){
                var x=~~((t[i].clientX-canvas.offsetLeft)*scaleX);
                var y=~~((t[i].clientY-canvas.offsetTop)*scaleY);
                touches[t[i].identifier%100]=new Vtouch(x,y);
                lastPress=1;
            }
        },false);
        canvas.addEventListener('touchmove',function(evt){
            evt.preventDefault();
            var t=evt.changedTouches;
            for(var i=0;i<t.length;i++){
                if(touches[t[i].identifier%100]){
                    touches[t[i].identifier%100].x=~~((t[i].clientX-canvas.offsetLeft)*scaleX);
                    touches[t[i].identifier%100].y=~~((t[i].clientY-canvas.offsetTop)*scaleY);
                }
            }
        },false);
        canvas.addEventListener('touchend',function(evt){
            var t=evt.changedTouches;
            for(var i=0;i<t.length;i++){
                touches[t[i].identifier%100]=null;
            }
        },false);
        canvas.addEventListener('touchcancel',function(evt){
            var t=evt.changedTouches;
            for(var i=0;i<t.length;i++){
                touches[t[i].identifier%100]=null;
            }
        },false);
        
        canvas.addEventListener('mousedown',function(evt){
            evt.preventDefault();
            var x=~~((evt.clientX-canvas.offsetLeft)*scaleX);
            var y=~~((evt.clientY-canvas.offsetTop)*scaleY);
            touches[0]=new Vtouch(x,y);
            lastPress=1;
        },false);
        document.addEventListener('mousemove',function(evt){
            if(touches[0]){
                touches[0].x=~~((evt.clientX-canvas.offsetLeft)*scaleX);
                touches[0].y=~~((evt.clientY-canvas.offsetTop)*scaleY);
            }
        },false);
        document.addEventListener('mouseup',function(evt){
            touches[0]=null;
        },false);

        function Vtouch(x,y){
            this.x=x||0;
            this.y=y||0;
        }
    


    
    player = new Player(238,596,64,64);
    
    /*if(R.mentre==false){
      preLoading();
    }*/
    R.cargar(res);
   
   
}


function preLoading(){
    requestAnimationFrame(preLoading);
    loading(ctx);
}
function loading(ctx){
     
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    //canvas.style.backgroundColor = "#000";
    //button = new Button(60,30,100,100);
    //ctx.fillStyle = "#0fd";
    text.size= 30;
    text.textBox("preloader.mentre "+R.mentre,canvas.width/2,(canvas.height/2-80));
    text.textBox("preloader.mentre "+R.totalLoaded,canvas.width/2,(canvas.height/2-60));
    text.size= 70;
    text.maxWidth=900;
    text.textAlign="center";
    text.textBox("Loading",canvas.width/2,canvas.height/2);  
    R.barCharge(); 
   
}
function resize(){
        if(window.innerWidth>window.innerHeight){
            canvas.width=960;
            canvas.height=540;
        }
        else{
            canvas.width=540;
            canvas.height=960;
        }
        scaleX=canvas.width/window.innerWidth;
        scaleY=canvas.height/window.innerHeight;
    }
               
function switchStates(){
    requestAnimationFrame(switchStates);
    
    if(CURRENT_GAME_STATE==GAME_STATE_INTRO){
        
        actIntro();
        intro(ctx);
    }

    if(CURRENT_GAME_STATE==GAME_STATE_STAGE1){
        actStage1();
        stage1(ctx);
    }
    
   
}
           
           
function inter(){
  
}
         
           

window.addEventListener('load', init, false);
        
