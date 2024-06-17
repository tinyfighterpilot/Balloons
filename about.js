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