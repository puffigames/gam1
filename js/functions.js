


function random(max){
    return ~~(Math.random()*max);
}

 
window.requestAnimationFrame=(function(){
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback){window.setTimeout(callback,17);};
})();

