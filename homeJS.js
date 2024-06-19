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
var index=0;
slideTimer();
function slideTimer(){
  var i;
  var x = document.getElementsByClassName("slides");
  for (i=0;i<x.length; i++){
    x[i].style.display = "none";
  }
  index++;
  if(index > x.length) {
    index=1;
  }0
  x[index-1].style.display = "block";
  setTimeout(slideTimer, 3000);
}