
let slideIndex = 1;
let si = 1;
let s3 = 1;
showDivs(slideIndex);
showDiv(si);
showDivv(s3);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function plusDiv(o){
  showDiv(si += o);
}
function plusDivv(a){
  showDivv(s3 += a);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("i1");

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
function showDiv(o){
  var i;
  var p = document.getElementsByClassName("i2");
  if(o>p.length){
    si = 1;
  }
  if(o <1){
    si = p.length;
  }
  for(i=0; i<p.length; i++){
    p[i].style.display = "none";
  }
  p[si-1].style.display = "block";
}
function showDivv(a){
  var i;
  var p = document.getElementsByClassName("i3");
  if(a>p.length){
    s3 = 1;
  }
  if(a < 1){
    s3 = p.length;
  }
  for(i=0; i<p.length; i++){
    p[i].style.display = "none";

  }
  p[s3-1].style.display = "block";
}
function showDiv(x, ){

}