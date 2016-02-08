/**
* @file dialog.js
* @fileoverview Objecte literal que conté tota la informació del joc. Tot els atributs són de lectura a l'hora
* d'inicialitzar el joc i depenent de la configuració el joc s'inicialitzarà en mode debug o tindrà soport per
* a smartphone o serà per a PC. Amplada i açada de canvas. A més d'informació textual dels diàlegs i copys 
* que apareixen al joc. Informació de desenvolupadors, etc.  
* @author Sergi Suelves.
* @version 0.2
* @date gener 2016.
*/
//'use strict';
var d;

d = {

	/**
	* @brief Informació referent a la configuració del canvas
	*/
	config: {
		debugMode: true,
		idCanvas: 'canvas',
		canvasWidth: 540,
		canvasHeight: 960,
		oritentationDevice:'portrait', //No funcional
		backgroundColor: '#000'		
	},

	/**
	* @brief Informació referent a la informació general del joc, desenvolupadors, copyright, número de
	* versió, idiomes, plataformes, etc.
	*/
	info: {
		version: 0.1,
		statusDevelopment: 'alpha',
		languageGame:'english',
		titleGame: 'Metal',
		description:'Lorem Ipsum',
		shortDescription: 'Lorem Ipsum',
		platform: 'Android OS',
		builtOn:'Ludei',
		bulitOnURL:'https://www.ludei.com',
		size:'0 MB',
		developmentPlatform: 'Google Chrome webkit',
		developmentTech: 'HTML5 Canvas',
		framework: 'native javascript',

		 crew: {
			developer:'',
		 	screenplay:'',
		 	programming:'Sergi Suelves',
		 	graphicDesign:'',
		 	music:'',
		 	
		 }
	},

	/**
	* @brief informació textual del joc. Tots els copys que hi apareixen estaran aquí.
	*/

	// userInterface: {},

	intro:{
		title: 'Metal Invaders',
		start: 'Touch the screen to play'
	},

	// stage1:{}
}