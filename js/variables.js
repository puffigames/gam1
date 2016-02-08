var canvas= null;
var ctx=null;

//debug

var debugMode = d.config.debugMode;
//game pad controls

var gamePad = new GamePad(ctx);
//Variable player
var x = 30;

//Array de recursos

var res = [
            ["img","bgStage1","img/bgStage1.jpg"],
        ];


	
	
//touch events
//var scaleX=1,scaleY=1;
var touches=[];


//GAME STATES
var CURRENT_GAME_STATE = 0;

var GAME_STATE_INTRO = 0;
var GAME_STATE_STAGE1 = 1;



var stars = [];



//var bg1 = 0;
//var bg2 = -960;
 
//Creació d'objectes
var R = new PreLoader();
var starSystem = new StarSystem();
var text = null;
var button = null;

var player = null;

//array que conté els disparos del player
var shots=[];

//array que conté els enemics genèrics
var enemies = [];

enemies.push(new Enemy(100,500,34,34,3));