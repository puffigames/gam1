
function intro(ctx) {
     
    ctx.clearRect(0,0,canvas.width,canvas.height); 
    
    //gamePad.screenButton.stroke(ctx);
    text.size = 50;        
    text.write(d.intro.title,canvas.width/2,300);
     text.size = 20;
      text.write(d.intro.start,canvas.width/2,500);
}
           
function actIntro() {
 
 if(gamePad.screenButton.touch()){
  CURRENT_GAME_STATE = GAME_STATE_STAGE1;
 }

}
                 