timeg=0
function el() {
    img.classList.add("nonn")
    chargetout.classList.remove("nonn")
    counterLinel = setInterval(timerls, 20);
    function timerls(){
        timeg += 1;
        chargementh.style.width = timeg + "%";
        suivi.classList.add("rotsuivi") 
        if(timeg > 99){ 
            clearInterval(counterLinel); 
            accueil.classList.add("nonn")
level.classList.remove("nonn")
chargetout.classList.add("nonn")
img.classList.remove("nonn")
suivi.classList.remove("rotsuivi")
timeg=0
        }
    }

   
}

 