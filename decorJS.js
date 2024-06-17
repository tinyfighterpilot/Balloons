
let popup = document.getElementById("pop");
let bars = document.getElementById("menu");
window.onclick = function(event){
  if (event.target == popup){
    popup.classList.toggle("show");
    bars.classList.toggle("change");
  }
}
function toggleMenu(x) {
    x.classList.toggle("change");
    popup.classList.toggle("show");
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("i1");
  var b = document.getElementsByClassName("i2");
  var c = document.getElementsByClassName("i3");
  //need if or condition statement to change slideIndex for slideshow
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
