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
let reset = document.querySelector("#reset");

start.addEventListener('click',function(){
    var starterChrono = setInterval(function(){
        chronoSecondes.textContent = `${secondes} Secondes`; 
        chronoMinutes.textContent = `${minutes}  Minutes`;
        chronoHeures.textContent = `${heures}  Heures`;

        bar.style.display = "block";
        bar.style.width = addbar + "px";
        addbar += 5;
        secondes++;

        if(secondes >= 60){
         secondes = 0;
         addbar = 0;
         minutes++;
         
        }
         else if(minutes >= 60){
          minutes = 0;
          heures++;
         }
         
    },1000)

    stop.addEventListener('click',function(){
        clearInterval(starterChrono);
    })

    reset.addEventListener('click',function(){
        secondes = 0;
        minutes = 0;
        heures = 0;
        addbar =0;
        chronoSecondes.textContent = `${secondes} Secondes`; 
        chronoMinutes.textContent = `${minutes}  Minutes`;
        chronoHeures.textContent = `${heures}  Heures`;
        bar.style.width = addbar + "px";
        bar.style.display = "none";
        
      
    })
    

  })

      
        