var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function makeRandomColor() {
    var length = 6;
    var chars = '0123456789ABCDEF';
    var hex = '#';
    while(length--) hex += chars[(Math.random() * 16) | 0];
    return hex;
  }

function randomColor(){
    color1.value = makeRandomColor();
    color2.value = makeRandomColor();
    setGradient();
}

body.addEventListener("onload", setGradient());
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", randomColor);