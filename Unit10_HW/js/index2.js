var j = 1;

function next() {
	if (j < 5) {
		j++;
	}
	document.getElementById('content2').src = "img/" + j + ".jpg";
}
function prev(){
	if (j >= 1){
		j--;	
	}
	document.getElementById('content2').src = "img/" + j + ".jpg";
}
function img(n){
	document.getElementById('content2').src = "img/" + n + ".jpg";
}

setInterval(function(){
	next();
},10000)
