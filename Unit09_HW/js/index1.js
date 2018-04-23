function mouseOver(a) {
	a.style.backgroundColor='green';
}
function mouseOut(a) {
	a.style.backgroundColor='';
}
function checkAll(a) {
	for (var i = 0; i < document.getElementsByName('checkbox').length; i++) {
		document.getElementsByName('checkbox')[i].checked= true;
	}
}
function UncheckAll(a) {
	for (var i = 0; i < document.getElementsByName('checkbox').length; i++) {
		document.getElementsByName('checkbox')[i].checked= false;
	}
}