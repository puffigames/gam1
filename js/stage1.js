function stage1(ctx){
    ctx.fillStyle='#000';
	 ctx.clearRect(0,0,canvas.width,canvas.height); 
    
  
   
  starSystem.fillBackground(ctx);

   
    starSystem.paintStars(ctx);
   player.fill(ctx);

   enemies[0].fill(ctx);
  
  for(var i=0,l=shots.length;i<l;i++){ 
    shots[i].fill(ctx);
  }
gamePad.strokeLeft(ctx);
gamePad.strokeRight(ctx);

    player.lifeBar(ctx, text);

    if(debugMode == true){
        var debug = new Debuger(ctx);
           
      
        debug.show("enemies[0].level",enemies[0].level,5);    
        debug.show("enemies[0].x",enemies[0].x,6);        
        debug.show("enemies[0].y",enemies[0].y,7);    
        // debug.show("player.y",player.y,8);    
        
        
    }
  
    
	
}

function actStage1(){

   for(var i=0,l=shots.length;i<l;i++){ 
    if(shots[i].intersects(enemies[0])){
      enemies[0].y= -40;
    }
  }

  enemies[0].y+=10;

  if(enemies[0].y>=canvas.height){
    enemies[0].y = -40;
    var x = random(canvas.width);
    enemies[0].x = x;
  }

  starSystem.moveBackground();
	starSystem.moveStars(canvas);
   
 
  player.interact(canvas, gamePad);


  if(gamePad.buttonA.touch()){
      // if(shots.length<=0){
          shots.push(new Bullet(player.x+32,player.y,5,5)); 
      // }
   
  }

  if(gamePad.buttonB.touch()){
    player.health--;
    
  }

  // Move Shots 
  for(var i=0,l=shots.length;i<l;i++){ 
      shots[i].y-=10; 
      if(shots[i].y<0){ 
        shots.splice(i--,1); l--; 
      } 
  } 
}