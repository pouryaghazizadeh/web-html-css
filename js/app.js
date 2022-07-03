const iconBar = document.querySelector("#icon-navbar");

const menu = document.querySelector(".menu-container");

let mood = false;

iconBar.addEventListener("click", (e) => {
  mood = !mood;
  mood
    ? (iconBar.classList = "fal fa-bars")
    : (iconBar.classList = "fal fa-times");

  mood ? (menu.style.left = " -100%") : (menu.style.left = " 0%");
});
