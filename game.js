

function aide() {
   niveauun.classList.add("nonn")
   aider.classList.remove("nonn")
   sousbody.classList.add("flou")
}

function feraide() {
   niveauun.classList.remove("nonn")
   aider.classList.add("nonn")
   sousbody.classList.remove("flou")
    menu1.classList.remove("cachee")
    menu1.classList.add("cache")
    chrona.classList.remove("inv")
    time_line.classList.remove("inv")
    scoreu.classList.remove("inv")
    scoreun.classList.remove("inv")
    counter = setInterval(timer, 1000);
 function timer(){
         if (secun.textContent>0) {
           secun.textContent--
        }
        if (secun.textContent==10) {
            time_line.classList.remove("fondlinevert")
            time_line.classList.add("fondlineorange")
        }
         if (secun.textContent==5) {
            time_line.classList.remove("fondlineorange")
            time_line.classList.add("fondlinerouge")
        }
        if (secun.textContent<=9) {
            secun.textContent="0"+secun.textContent
        }
        if(secun.textContent == 0){ 
            clearInterval(counter); 
            time= 99
            time = 99
            nivechouer.classList.remove("nonn")
            cardun1.classList.add("disabled")
    cardun2.classList.add("disabled")
    cardun3.classList.add("disabled")
    cardun4.classList.add("disabled")
    cardun5.classList.add("disabled")
    cardun6.classList.add("disabled")
            boupau.classList.add("disabled")
        }

}

    counterLine = setInterval(timers, 300);
    function timers(){
        time += 1;
        time_line.style.width = time + "%"; 
        if(time > 99){ 
            clearInterval(counterLine); 
        }
    }
    cardun1.classList.remove("disabled")
    cardun2.classList.remove("disabled")
    cardun3.classList.remove("disabled")
    cardun4.classList.remove("disabled")
    cardun5.classList.remove("disabled")
    cardun6.classList.remove("disabled")
}


 







function ret() {
    
accueil.classList.remove("nonn")
level.classList.add("nonn")
}

function em(niv, tempsniv) {
    nivechouer.classList.add("nonn")
    nivgagner.classList.add("nonn")
 n=0
red=1
stopcountun=0
comvrai=0

    var divTest = document.getElementById("body");
divTest.className = "foniv1";
    level.classList.add("nonn")
    niveauun.classList.remove("nonn")
    secun.textContent=tempsniv
    time_line.style.width = 0;
    time_line.classList.remove("fondlineorange")
    time_line.classList.remove("fondlinerouge")
    time_line.classList.add("fondlinevert")
    time_line.classList.remove("inv")
    scoreun.textContent=0
    time=0
    counter = setInterval(timer, 1000);
    boupau.classList.remove("disabled")

 function timer(){
        secun.textContent--;
        if (secun.textContent==10) {
            time_line.classList.remove("fondlinevert")
            time_line.classList.add("fondlineorange")
        }
         if (secun.textContent==5) {
            time_line.classList.remove("fondlineorange")
            time_line.classList.add("fondlinerouge")
        }
        if (secun.textContent<=9) {
            secun.textContent="0"+secun.textContent
        }
        if(secun.textContent == 0){ 
            clearInterval(counter); 
            time = 99
            nivechouer.classList.remove("nonn")
            cardun1.classList.add("disabled")
    cardun2.classList.add("disabled")
    cardun3.classList.add("disabled")
    cardun4.classList.add("disabled")
    cardun5.classList.add("disabled")
    cardun6.classList.add("disabled")
    boupau.classList.add("disabled")
        }

}

    counterLine = setInterval(timers, (tempsniv*10));
    function timers(){
        time += 1;
        time_line.style.width = time + "%"; 
        if(time > 99){ 
            clearInterval(counterLine); 
        }
    }





    const images = [
'<img src="Hamburger juteux.jpg" class="nonnre cardn" id="cardn1"><img src="card.jpg" id="cardun1" class="cardun burger" onclick="tour(cardun1, cardn1, 1000, 3, e, ee, eee, 1750, 2500, 2750, 3000, 2, und, unc)" >',
'<img src="Hamburger juteux.jpg" class="nonnre cardn" id="cardn4"><img src="card.jpg" id="cardun4" class="cardun burger" onclick="tour(cardun4, cardn4, 1000, 3, e, ee, eee, 1750, 2500, 2750, 3000, 2, und, unc)">',
'<img src="gateau vanille fraise.jpg" class="nonnre cardn" id="cardn2"><img src="card.jpg" id="cardun2" class="cardun gateau" onclick="tour(cardun2, cardn2, 1000, 3, e, ee, eee, 1750, 2500, 2750, 3000, 2, und, unc)">',
'<img src="gateau vanille fraise.jpg" class="nonnre cardn" id="cardn6"><img src="card.jpg" id="cardun6" class="cardun gateau" onclick="tour(cardun6, cardn6, 1000, 3, e, ee, eee, 1750, 2500, 2750, 3000, 2, und, unc)">',
'<img src="pizza amour.jpg" class="nonnre cardn" id="cardn3"><img src="card.jpg" id="cardun3" class="cardun pizza" onclick="tour(cardun3, cardn3, 1000, 3, e, ee, eee, 1750, 2500, 2750, 3000, 2, und, unc)" >',
'<img src="pizza amour.jpg" class="nonnre cardn" id="cardn5"><img src="card.jpg" id="cardun5" class="cardun pizza" onclick="tour(cardun5, cardn5, 1000, 3, e, ee, eee, 1750, 2500, 2750, 3000, 2, und, unc)">'
];

const conteneur = document.getElementById('imageuna');
const conteneura = document.getElementById('imageunb');
const conteneurb = document.getElementById('imageunc');
const conteneurc = document.getElementById('imageund');
const conteneurd = document.getElementById('imageune');
const conteneurh = document.getElementById('imageunf');
function afficherImage() {
    
    
    
    d=0
    b=0
    c=0
    h=0
    f=0

    
            var a = Math.floor(Math.random() * images.length);
            
    while(b==a||b==c||b==d||b==h||b==f){
        var b = Math.floor(Math.random() * images.length);
    }
    while(c==a||c==b||c==d||c==h||c==f){
        var c = Math.floor(Math.random() * images.length);
    }
    while(d==a||d==b||d==c||d==h||d==f){
        var d = Math.floor(Math.random() * images.length);
    }
    while(h==a||h==b||h==c||h==d||h==f){
        var h = Math.floor(Math.random() * images.length);
    }
    while(f==a||f==b||f==c||f==d||f==h){
        var f = Math.floor(Math.random() * images.length);
    }
    
        
        
        
    
        
        
    

var imagea = images[a];
var imageb = images[b];
var imagec = images[c];
var imaged = images[d];
var imageh = images[h];
var imagef = images[f];
conteneur.innerHTML = imagea;
conteneura.innerHTML = imageb;
conteneurb.innerHTML = imagec;
conteneurc.innerHTML = imaged;
conteneurd.innerHTML = imageh;
conteneurh.innerHTML = imagef;
}
setTimeout(afficherImage, 0);




 clearInterval(counterscore);
gagnescore.textContent=0
    ej.classList.remove("ehg")
    ejj.classList.remove("ehg")
    ejjj.classList.remove("ehg")







}

function et(x) {
    x.classList.add("nonn")
    
    ej.classList.remove("ehg")
    ejj.classList.remove("ehg")
    ejjj.classList.remove("ehg")
    cardun2.classList.remove("disabled")
    cardun3.classList.remove("disabled")
    cardun4.classList.remove("disabled")
    cardun5.classList.remove("disabled")
    cardun6.classList.remove("disabled")
    boupau.classList.remove("disabled")
    var divTest = document.getElementById("body");
divTest.className = "foniv1";
    level.classList.add("nonn")
    niveauun.classList.remove("nonn")
    secun.textContent=30
    time_line.style.width = 0;
    time_line.classList.remove("fondlineorange")
    time_line.classList.remove("fondlinerouge")
    time_line.classList.add("fondlinevert")
    time_line.classList.remove("inv")
    scoreun.textContent=0
    time=0
    counter = setInterval(timer, 1000);
 function timer(){
        secun.textContent--;
        if (secun.textContent==10) {
            time_line.classList.remove("fondlinevert")
            time_line.classList.add("fondlineorange")
        }
         if (secun.textContent==5) {
            time_line.classList.remove("fondlineorange")
            time_line.classList.add("fondlinerouge")
        }
        if (secun.textContent<=9) {
            secun.textContent="0"+secun.textContent
        }
        if(secun.textContent == 0){ 
            clearInterval(counter); 
            time = 99
            nivechouer.classList.remove("nonn")
            cardun1.classList.add("disabled")
    cardun2.classList.add("disabled")
    cardun3.classList.add("disabled")
    cardun4.classList.add("disabled")
    cardun5.classList.add("disabled")
    cardun6.classList.add("disabled")
    boupau.classList.add("disabled")
        }

}

    counterLine = setInterval(timers, 300);
    function timers(){
        time += 1;
        time_line.style.width = time + "%"; 
        if(time > 99){ 
            clearInterval(counterLine); 
        }
    }




const images = [
'<img src="Hamburger juteux.jpg" class="nonnre cardn" id="cardn1" onclick="tour1(cardun1, cardn1)"><img src="card.jpg" id="cardun1" class="cardun burger" onclick="tour(cardun1, cardn1, 1000, 3, e, ee, eee, 1750, 2500, 2750, 3000, 2)" >',
'<img src="Hamburger juteux.jpg" class="nonnre cardn" id="cardn4" onclick="tour1(cardun4, cardn4)"><img src="card.jpg" id="cardun4" class="cardun burger" onclick="tour(cardun4, cardn4, 1000, 3, e, ee, eee, 1750, 2500, 2750, 3000, 2)">',
'<img src="gateau vanille fraise.jpg" class="nonnre cardn" id="cardn2" onclick="tour1(cardun2, cardn2)"><img src="card.jpg" id="cardun2" class="cardun gateau" onclick="tour(cardun2, cardn2, 1000, 3, e, ee, eee, 1750, 2500, 2750, 3000, 2)">',
'<img src="gateau vanille fraise.jpg" class="nonnre cardn" id="cardn6" onclick="tour1(cardun6, cardn6)"><img src="card.jpg" id="cardun6" class="cardun gateau" onclick="tour(cardun6, cardn6, 1000, 3, e, ee, eee, 1750, 2500, 2750, 3000, 2)">',
'<img src="pizza amour.jpg" class="nonnre cardn" id="cardn3" onclick="tour1(cardun3, cardn3)"><img src="card.jpg" id="cardun3" class="cardun pizza" onclick="tour(cardun3, cardn3, 1000, 3, e, ee, eee, 1750, 2500, 2750, 3000, 2)" >',
'<img src="pizza amour.jpg" class="nonnre cardn" id="cardn5" onclick="tour1(cardun5, cardn5)"><img src="card.jpg" id="cardun5" class="cardun pizza" onclick="tour(cardun5, cardn5, 1000, 3, e, ee, eee, 1750, 2500, 2750, 3000, 2)">'
];

const conteneur = document.getElementById('imageuna');
const conteneura = document.getElementById('imageunb');
const conteneurb = document.getElementById('imageunc');
const conteneurc = document.getElementById('imageund');
const conteneurd = document.getElementById('imageune');
const conteneurh = document.getElementById('imageunf');
function afficherImage() {
    
    
    
    d=0
    b=0
    c=0
    h=0
    f=0

    
            var a = Math.floor(Math.random() * images.length);
            
    while(b==a||b==c||b==d||b==h||b==f){
        var b = Math.floor(Math.random() * images.length);
    }
    while(c==a||c==b||c==d||c==h||c==f){
        var c = Math.floor(Math.random() * images.length);
    }
    while(d==a||d==b||d==c||d==h||d==f){
        var d = Math.floor(Math.random() * images.length);
    }
    while(h==a||h==b||h==c||h==d||h==f){
        var h = Math.floor(Math.random() * images.length);
    }
    while(f==a||f==b||f==c||f==d||f==h){
        var f = Math.floor(Math.random() * images.length);
    }
    
        
        
        
    
        
        
    

var imagea = images[a];
var imageb = images[b];
var imagec = images[c];
var imaged = images[d];
var imageh = images[h];
var imagef = images[f];
conteneur.innerHTML = imagea;
conteneura.innerHTML = imageb;
conteneurb.innerHTML = imagec;
conteneurc.innerHTML = imaged;
conteneurd.innerHTML = imageh;
conteneurh.innerHTML = imagef;
}
setTimeout(afficherImage, 0);






clearInterval(counterscore);
gagnescore.textContent=0



}




function sor() {
   sousbody.classList.add("flou")
    menu1.classList.remove("cache")
    menu1.classList.add("cachee")
    chrona.classList.add("inv")
    time_line.classList.add("inv")
    scoreu.classList.add("inv")
    scoreun.classList.add("inv")
    cardun1.classList.add("disabled")
    cardun2.classList.add("disabled")
    cardun3.classList.add("disabled")
    cardun4.classList.add("disabled")
    cardun5.classList.add("disabled")
    cardun6.classList.add("disabled")
    clearInterval(counter); 
clearInterval(counterLine); 
}



function ren() {
    sousbody.classList.remove("flou")
    menu1.classList.remove("cachee")
    menu1.classList.add("cache")
    chrona.classList.remove("inv")
    time_line.classList.remove("inv")
    scoreu.classList.remove("inv")
    scoreun.classList.remove("inv")
    cardun1.classList.remove("disabled")
    cardun2.classList.remove("disabled")
    cardun3.classList.remove("disabled")
    cardun4.classList.remove("disabled")
    cardun5.classList.remove("disabled")
    cardun6.classList.remove("disabled")

    counter = setInterval(timer, 1000);
 function timer(){
         if (secun.textContent>0) {
           secun.textContent--
        }
        if (secun.textContent==10) {
            time_line.classList.remove("fondlinevert")
            time_line.classList.add("fondlineorange")
        }
         if (secun.textContent==5) {
            time_line.classList.remove("fondlineorange")
            time_line.classList.add("fondlinerouge")
        }
        if (secun.textContent<=9) {
            secun.textContent="0"+secun.textContent
        }
        if(secun.textContent == 0){ 
            clearInterval(counter); 
            time= 99
            nivechouer.classList.remove("nonn")
            cardun1.classList.add("disabled")
    cardun2.classList.add("disabled")
    cardun3.classList.add("disabled")
    cardun4.classList.add("disabled")
    cardun5.classList.add("disabled")
    cardun6.classList.add("disabled")
      boupau.classList.add("disabled")
        }

}

    counterLine = setInterval(timers, 300);
    function timers(){
        time += 1;
        time_line.style.width = time + "%"; 
        if(time > 99){ 
            clearInterval(counterLine); 
        }
    }


}



function menu() {
    var divTest = document.getElementById("body");
    scoreun.textContent=0
divTest.className = "foniv";
sousbody.classList.remove("flou")
level.classList.remove("nonn")
    niveauun.classList.add("nonn")
    menu1.classList.remove("cachee")
    menu1.classList.add("cache")
    chrona.classList.remove("inv")
    scoreu.classList.remove("inv")
    scoreun.classList.remove("inv")
clearInterval(counterscore);
gagnescore.textContent=0
ej.classList.remove("ehg")
    ejj.classList.remove("ehg")
    ejjj.classList.remove("ehg")
clearInterval(counter);
clearInterval(counterLine); 


}
n=0
red=1
stopcountun=0
comvrai=0
jt1=0
 jt2=0
 jt3=0
 k=0
function tour(x, y, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12) {
x.classList.add("nonnre")
x.classList.remove("nonnren")

y.classList.remove("nonnres")
y.classList.add("nonnren")
n=n-(-1)
 if (n==1) {
    h=x
    j=y 
 }
  if (n==2){
    n=0
    cardun1.classList.add("disabled")
    cardun2.classList.add("disabled")
    cardun3.classList.add("disabled")
    cardun4.classList.add("disabled")
    cardun5.classList.add("disabled")
    cardun6.classList.add("disabled")
    function choisirun(){
    cardun1.classList.remove("disabled")
    cardun2.classList.remove("disabled")
    cardun3.classList.remove("disabled")
    cardun4.classList.remove("disabled")
    cardun5.classList.remove("disabled")
    cardun6.classList.remove("disabled")
    }
    setTimeout(choisirun, 1000);

    if (h.className!=x.className) {
        function faux(){
        x.classList.remove("nonnre")
x.classList.add("nonnren")
y.classList.remove("nonnren")
y.classList.add("nonnres")
h.classList.remove("nonnre")
h.classList.add("nonnren")
j.classList.remove("nonnren")
j.classList.add("nonnres")
red++

    }
setTimeout(faux, 1000);
    }
    if (h.className==x.className){
        if (red==1) {
            score=x1
        } else {
            score=x1/(red-1)
        }

 score = Math.round(score);
scoreun.textContent=scoreun.textContent-(-score)

        
x.classList.add("inv")
y.classList.add("inv")
h.classList.add("inv")
j.classList.add("inv")
red=1
comvrai=comvrai-(-1)

if (comvrai==x2){

    comvrai=0
    clearInterval(counter);
clearInterval(counterLine);
nivgagner.classList.remove("nonn") 
boupau.classList.add("disabled")
counterscore = setInterval(monscore, 0.000000000000000000000000000000000000000000000001);

if (scoreun.textContent>=x6&&scoreun.textContent<x7) {
            x3.classList.remove("e")
             x3.classList.add("ehg")
          
        }
       else if (scoreun.textContent>=x7&&scoreun.textContent<x8) {
            x3.classList.remove("e")
            x4.classList.remove("e")
            x3.classList.add("ehg")
            x4.classList.add("ehg")
           
        }
       else if (scoreun.textContent>=x8&&scoreun.textContent<=x9) {
             x3.classList.remove("e")
            x4.classList.remove("e")
            x5.classList.remove("e")
             x3.classList.add("ehg")
            x4.classList.add("ehg")
            x5.classList.add("ehg")
          
        }
        
 function monscore(){

         gagnescore.textContent=gagnescore.textContent-(-1)
         if (gagnescore.textContent==x6) {
            ej.classList.add("ehg")
           
         }
         if (gagnescore.textContent==x7) {
            ejj.classList.add("ehg")
            
         }
         if (gagnescore.textContent==x8) {
            ejjj.classList.add("ehg")
           
         }
         
         

        if(gagnescore.textContent == scoreun.textContent){ 
            clearInterval(counterscore); 
            
        }

}

if (scoreun.textContent>=x6&&scoreun.textContent<x7) {
    if((1-k)>0){
        pien.textContent=pien.textContent-(k-1)
    }
    if (k<1) {
        k=1
    }
        }
       
     if (scoreun.textContent>=x7&&scoreun.textContent<x8) {
        
        if((2-k)>0){
        pien.textContent=pien.textContent-(k-2)
    }
    
           if (k<2) {
        k=2
    }
        }
      if (scoreun.textContent>=x8&&scoreun.textContent<=x9) {
        if((3-k)>0){
        pien.textContent=pien.textContent-(k-3)
    }
          if (k<3) {
        k=3
    }
    
        }
        if (pien.textContent>=x10) {
         x11.classList.remove("nonn")
         x12.classList.add("nonn")
    }

}



    }
    
 }

 
}



function cond(x) {
   level.classList.add("nonn")
   nbreet.classList.remove("nonn")
   sousbody.classList.add("flou")
   if (x<10) {
    x="0"+x
   }
   nbreto.textContent=x
}
function fercond(x) {
   level.classList.remove("nonn")
   nbreet.classList.add("nonn")
   sousbody.classList.remove("flou")
  
}


