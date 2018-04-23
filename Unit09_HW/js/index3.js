function tab1(a) {
	document.getElementById('content1').style.display='block';
	document.getElementById('content2').style.display='none';
	document.getElementById('content3').style.display='none';
	document.getElementById('box1').style.backgroundColor='white';
	document.getElementById('box2').style.backgroundColor='';
	document.getElementById('box3').style.backgroundColor='';
}
function tab2(a) {
	document.getElementById('content1').style.display='none';
	document.getElementById('content2').style.display='block';
	document.getElementById('content3').style.display='none';
	document.getElementById('box1').style.backgroundColor='';
	document.getElementById('box2').style.backgroundColor='white';
	document.getElementById('box3').style.backgroundColor='';
}
function tab3(a) {
	document.getElementById('content1').style.display='none';
	document.getElementById('content2').style.display='none';
	document.getElementById('content3').style.display='block';
	document.getElementById('box1').style.backgroundColor='';
	document.getElementById('box2').style.backgroundColor='';
	document.getElementById('box3').style.backgroundColor='white';
}