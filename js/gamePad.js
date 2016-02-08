function GamePad(ctx,canvas){
	this.x = 20;
	this.y = 700;

	this.leftUp = new Button(this.x,this.y,80,80);
	this.up = new Button(this.x+85,this.y,80,80);
	this.rightUp = new Button(this.x+170,this.y,80,80);
	this.right = new Button(this.x+170,this.y+85,80,80);
	this.rightDown = new Button(this.x+170,this.y+170,80,80);
	this.down = new Button(this.x+85,this.y+170,80,80);
	this.leftDown = new Button(this.x,this.y+170,80,80);
	this.left = new Button(this.x,this.y+85,80,80);


	this.buttonA = new Button(405,700,80,80);
	this.buttonB = new Button(355,800,80,80);


	this.screenButton = new Button(0,0,540,960);

	
}


GamePad.prototype.strokeLeft = function(ctx){
	this.leftUp.stroke(ctx);
	this.up.stroke(ctx);
	this.rightUp.stroke(ctx); 
	this.right.stroke(ctx);
	this.rightDown.stroke(ctx); 
	this.down.stroke(ctx); 
	this.leftDown.stroke(ctx);
	this.left.stroke(ctx);

	this.down.stroke(ctx);
}

GamePad.prototype.strokeRight = function(ctx){
	this.buttonA.stroke(ctx);
	this.buttonB.stroke(ctx);
}

