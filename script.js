var css = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomButton");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

function getRandomColor1() {
  var letters = '0123456789abcdef';
  var rColor1 = '#';
  for (var i = 0; i < 6; i++) {
    rColor1 += letters[Math.floor(Math.random() * 16)];
  }
  return rColor1;
}


function randomBackground() {
	var rancol1 = getRandomColor1();
	var rancol2 = getRandomColor1();

body.style.background = 
	"linear-gradient(to right, " 
	+ rancol1 
	+ ", " 
	+ rancol2 
	+ ")";

	css.textContent = body.style.background + ";";

	color1.value=rancol1;
	color2.value=rancol2;
}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomBackground);