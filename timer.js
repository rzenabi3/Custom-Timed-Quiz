var timer;
var ele = document.getElementById("timeSeconds");

(function(){
    var sec = 60;
    timer = setInterval(()=>{
        ele.innerHTML = ":" +sec;
        sec--;
    }, 1000)
})();

