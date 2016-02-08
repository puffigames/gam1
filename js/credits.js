function credits(ctx) {
    'use strict';
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    //canvas.style.backgroundColor = "#fff";
    //button = new Button(60,30,100,100);
     button = new Button(50,canvas.height-140,300,100);
    text.size= 70;
    text.maxWidth=900;
    text.textAlign="left";
    text.textBox(dialog.gameInfo.Title,50,150);   
    
    
    text.size= 20;
    text.maxWidth=900;
    text.textAlign="left";
    text.textBox(dialog.gameInfo.description,50,200); 
    
    
    
    text.size= 30;
    text.maxWidth=600;
    text.textAlign="right";
    text.textBox("All content developed by: "+dialog.gameInfo.author,canvas.width-50,canvas.height-150); 
    
    text.size= 20;
    text.maxWidth=200;
    text.textAlign="right";
    text.textBox("Version: "+dialog.gameInfo.v,canvas.width-text.maxWidth+150,canvas.height-50);  
    button.stroke(ctx);
    text.size= 35;
    text.maxWidth=600;
    text.textAlign="left";
    text.textBox(dialog.menu.credits,70,canvas.height-80);
    if(touches[0]!=null){
    text.write(touches[0].x,500,500);
    text.write(touches[0].y,500,550);
    }
    
    
    
     if(button.touch()==true){
               CURRENT_GAME_STATE=GAME_STATE_MENU;
        text.write(touches[0],500,500);
    
    }
}

function actCredits(){
    
   
    
}


function credits2(ctx){
    ctx.clearRect(0,0,canvas.width,canvas.height); 
   
     text.write(touches[0].x,500,500);
    
}

