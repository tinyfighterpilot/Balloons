var elements = ['intro', 'logo', 'menu', 'bar', 'lilpop', 'popup', 'navbutton', 'fa-facebook', 'fa-instagram', 'fa-paypal'];

function toggleMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        elements.forEach(function(element) {
            var els = document.getElementsByClassName(element);
            for (var i = 0; i < els.length; i++) {
                els[i].classList.add('mobile');
            }
        });
    } else {
        elements.forEach(function(element) {
            var els = document.getElementsByClassName(element);
            for (var i = 0; i < els.length; i++) {
                els[i].classList.remove('mobile');
            }
        });
    }
}

toggleMobile(); // Call the function to initially set classes
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