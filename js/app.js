const iconBar = document.querySelector("#icon-navbar");

const menue = document.querySelector(".menue-container");


let mood = false


iconBar.addEventListener("click",(e)=>{
    mood = !mood
   mood
      ? (iconBar.classList = "fal fa-bars")
      : (iconBar.classList = "fal fa-times");

      mood ?(menue.style.left = " -100%"): (menue.style.left = " 0%") ;



});

