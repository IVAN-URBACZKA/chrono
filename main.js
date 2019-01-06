let secondes = 0;
let minutes = 0;
let heures = 0;
let addbar = 0;

let chronoSecondes = document.querySelector("#chronosecondes");
let chronoMinutes = document.querySelector("#chronominutes");
let chronoHeures = document.querySelector("#chronoheures");

let bar = document.querySelector("#bar");







let start = document.querySelector("#starter");

let stop = document.querySelector("#stoper");





 start.addEventListener('click',function(){
    var starterChrono = setInterval(function(){
        chronoSecondes.textContent = `${secondes} Secondes`; 
        bar.style.width = addbar + "px";
        addbar += 20;
        secondes++;
        if(secondes == 60){
         addbar = 0;
         minutes++;
         secondes = 0;
         chronoMinutes.textContent = `${minutes}  Minutes`;
        }
         else if(minutes == 59){
          minutes = 0;
          heures++;
          chronoHeures.textContent = `${heures}  Heures`;
         }
    },1000)


    stop.addEventListener('click',function(){
        clearInterval(starterChrono);
    })
    
})




