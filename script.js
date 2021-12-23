var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("randomGradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function displayCSS(){
	css.textContent = body.style.background + ";";
}

function generateRandomColor(){
	var randomGradientNum = [];
	var hex;
	for(var i = 0; i < 3; i++){
		num = Math.floor(Math.random() * 255);
		randomGradientNum[i] = num;
		console.log(num);
	}

	hex = rgbToHex(randomGradientNum[0],randomGradientNum[1],randomGradientNum[2]);
	return hex;
}

function rgbToHex(r, g, b) {
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function generateRandomGradient(){
	color1.value = generateRandomColor();
	color2.value = generateRandomColor();
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", generateRandomGradient);

setGradient();
displayCSS();