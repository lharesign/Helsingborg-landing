//FOR STICKY HEADER & ELEVATOR BUTTON

// When the user scrolls, run the function
window.onscroll = function() {fixStickyHeader()};

// Assign the header and elevator buttons to variables so we can assign new classes later
var header = document.getElementById("sticky-header");
var elevator = document.getElementById("scroll-elevator");

// Get the offset position of the header
var sticky = header.offsetTop;

// Add the sticky class to the header & elevator button when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixStickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    elevator.classList.add("scroll-elevator-sticky")
  } else {
    header.classList.remove("sticky");
    elevator.classList.remove("scroll-elevator-sticky")
  }
}

//FOR SLIDESHOW

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

