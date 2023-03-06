var cabecera = document.querySelector(".cabecera");

window.onscroll = function(){
    var pantalla = cabecera.getBoundingClientRect().top;
   
    if (pantalla < -369 ){
        cabecera.classList.add("stickyCabecera");
              
    }
    
    
}


