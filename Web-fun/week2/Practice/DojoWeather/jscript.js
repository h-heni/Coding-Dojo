var pop=document.querySelector(".pop");
function del (){
    pop.remove();
}

function convert(element){
    for (var i=0 ; i<4 ;i++){
        var red=document.querySelector(".red"+i);
        var blue=document.querySelector(".blue"+i);
    if(element.value=="°F"){
        
        red.innerText=Math.round((parseInt(red.innerText)* 1.8) + 32) ;
        blue.innerText=Math.round((parseInt(blue.innerText) * 1.8 ) + 32);
    }else {
        red.innerText=Math.round((parseInt(red.innerText)- 32) /1.8);
        
        blue.innerText=Math.round((parseInt(blue.innerText)- 32) /1.8);

    }
}

}