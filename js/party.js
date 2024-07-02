var index=0;
var i;
  var x = document.getElementsByClassName("slides");
  x[0].style.display = "none";
  x[1].style.display = "none";
function slideTimer(){
  for (i=0;i<x.length; i++){
    x[i].style.display = "none";
  }
  index++;
  if(index > x.length) {
    index=1;
  }0
  x[index-1].style.display = "block";
  setTimeout(slideTimer, 5000);
}