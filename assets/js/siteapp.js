const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
const section = document.querySelector("div");
const end = section.querySelector("div");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 6000,
  triggerElement: intro,
  triggerHook: 0
})
  // .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation
// const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });
const textAnim = gsap.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 8000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  // console.log(scrollpos, delay);
  video.currentTime = delay;
}, 33.33);

//Get the button
let mybutton = document.getElementById("btn-back-to-top");
let mybutton2 = document.getElementById("btn-scroll");
// Get the navbar
let mynavbar = document.getElementById("navbarrask");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // Control buttons
  if (
    document.body.scrollTop > 6000 ||
    document.documentElement.scrollTop > 6000
  ) {
    mybutton.style.display = "block";
    mybutton2.style.display = "none";
  } else {
    mybutton.style.display = "none";
    mybutton2.style.display = "block";
  }

  // Control navbar
  if (
    document.body.scrollTop > 6530 ||
    document.documentElement.scrollTop > 6530
  ) {
    mynavbar.classList.add("navbar-colored");
    mynavbar.classList.remove("navbar-transparent");
  } else {
    mynavbar.classList.remove("navbar-colored");
    mynavbar.classList.add("navbar-transparent");
  }

}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Kill right click (I will replace the default context menu with my own)
document.addEventListener('contextmenu', event => event.preventDefault());
