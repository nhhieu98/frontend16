function defaul(a) {
	for (var i = 0; i < document.getElementsByClassName('text').length; i++) {
		document.getElementsByClassName('text')[i].style.fontSize='100%';
	}
}
var dem = 0;
function big(a) {
	for (var i = 0; i < document.getElementsByClassName('text').length; i++) {
		dem+=20;
		document.getElementsByClassName('text')[i].style.fontSize=(dem+100)+'%';
	}
}
function small(a) {
	for (var i = 0; i < document.getElementsByClassName('text').length; i++) {
		dem-=20;
		document.getElementsByClassName('text')[i].style.fontSize=(100+dem)+'%';
	}
}