let slideIndex = 1;
showSlides(slideIndex);

function slideChange(n) {
  showSlides(slideIndex += n);
}

function changeSlideTo(n){
  showSlides(slideIndex = n);
}

function showSlides(n) {
  console.log("here");
  let i;
  let slides = document.getElementsByClassName("project");
  let slideshowDots = document.getElementsByClassName("slideshow-dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slideshowDots.length; i++) {
    slideshowDots[i].className = slideshowDots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "grid";
  slideshowDots[slideIndex-1].className += " active";
}

function toggleNavbar() {
  var x = document.getElementById("myNavBar");
  if (x.className === "navbar") {
    x.className += " navbarToggled";
  } else {
    x.className = "navbar";
  }
}