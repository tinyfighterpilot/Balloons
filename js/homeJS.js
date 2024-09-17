let index = 1;
showDivs(index);
function plusSlide(x){
    showDivs(index += x);
}
function showDivs(x){
    var slide = document.getElementsByClassName("slide");
    if(x > slide.length){
        index = 1;
    }
    if(x < 1){
        index = 2;
    }
    var i;
    for(i=0; i < slide.length; i++){
        slide[i].style.display = "none";

    }
    slide[index - 1].style.display = "inline-grid";
}