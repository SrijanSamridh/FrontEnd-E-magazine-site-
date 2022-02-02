// <------------------------------SMOOTH SCROLL SECTION-------------------------------------->
var navMenuAnchorTags = document.querySelectorAll('.navbar-list li a');
var interval;
for(var i = 0; i < navMenuAnchorTags.length-1; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
//         event.preventDefault();  // Use this to prevent "href" redirecting
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
//         interval = setInterval(scrollVertically, 20, targetSection);
        interval = setInterval(function(){
            scrollVertically(targetSection);
        }, 20);
    });
}
function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
        if(targetSectionCoordinates.top <= 0){
            clearInterval(interval);
            return;
        }
        window.scrollBy(0, 50);
}
// This is for only one navigator on navbar --Using it on "About" section
function Scroll(){
    var targetPos = 4200;
    var currentPos = 0;
    var scrollInterval = setInterval(function(){
        if(currentPos >= targetPos){
            clearInterval(scrollInterval);
            return;
        }
        currentPos += 50;
        scrollBy(0, 50);
    }, 10);
}
// <------------------------------HOME SECTION-------------------------------------->
const texts = ["Welcome To Your TrusteeShip!"]
let count=0;
let index=0;
let currenttext="";
let letter="";

(function type(){

    if (count === texts.length){
        count=0;
    }
    currenttext=texts[count]
    letter = currenttext.slice(0,++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currenttext.length){

        index=0;
    }
    setTimeout(type,250);
})();

window.onload= function (){
     document.getElementById("transparent-container").style.color="white";
     document.getElementById("transparent-container").style.transform="scale(1.1)";
     document.getElementById("transparent-container").style.transition="2s";
}

// -------------------------------Swiper Section ----------------------------------------------------
var sliderSelector = ".swiper-container",
  options = {
    init: false,
    loop: true,
    speed: 800,
    slidesPerView: 1, // or 'auto'
    // spaceBetween: 10,
    centeredSlides: true,
    effect: "coverflow", // 'cube', 'fade', 'coverflow',
    coverflowEffect: {
      rotate: 50, // Slide rotate in degrees
      stretch: 0, // Stretch space between slides (in px)
      depth: 100, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: true // Enables slides shadows
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      stopOnLastSlide: false
    },
    grabCursor: true,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      1180: {
        slidesPerView: 2
      },
      1023: {
        slidesPerView: 1,
        spaceBetween: 0
      },
    },
    // Events
    on: {
      imagesReady: function () {
        this.el.classList.remove("loading");
      }
    }
  };
var mySwiper = new Swiper(sliderSelector, options);
function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 999 ? 'vertical' : 'horizontal';

  return direction;
}

// Initialize slider
mySwiper.init();




