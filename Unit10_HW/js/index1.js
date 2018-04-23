function hoten(a){

	if (a.value.length > 8) {
		document.getElementById('errorName').innerHTML = "";
	} else if (a.value == "") {
		document.getElementById('errorName').innerHTML = "Yêu cầu nhập đầy đủ họ tên";
	} else {
		document.getElementById('errorName').innerHTML = "Họ tên phải lớn hơn 8 ký tự";
	}
}

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function email(b) {
	var email = document.getElementById('email').value;

	if (validateEmail(email)) {
		document.getElementById('errorEmail').innerHTML = '';
	} else if (b.value == "") {
		document.getElementById('errorEmail').innerHTML = "Yêu cầu nhập email";
	}
	else {
		document.getElementById('errorEmail').innerHTML = 'Bạn phải nhập đúng email';
	}
}

function validatePhoneNumber(dt){
	var sdt = /^[0-9]+$/;
	return sdt.test(String(dt));
}

function phone(c) {
	var number = document.getElementById('phonenumber').value;

	if (validatePhoneNumber(number)) {
		document.getElementById('phone').innerHTML = "";
	} else if (c.value == "") {
		document.getElementById('phone').innerHTML = "Yêu cầu nhập số điện thoại";
	}
	else {
		document.getElementById('phone').innerHTML = "Số điện thoại không được nhập chữ cái";
	}
}

function password(d) {
	if (d.value != 0) {
		document.getElementById('errorPassword').innerHTML = '';
	}
	else {
		document.getElementById('errorPassword').innerHTML = 'Yêu cầu nhập mật khẩu';
	}
}

function checkPass(e) {
	var pass = document.getElementById('password').value;
	var checkpass = document.getElementById('checkpass').value;

	if (pass == checkpass) {
		document.getElementById('errorPass').innerHTML = "Xác nhận mật khẩu đúng";
	} else if (e.value == "") {
		document.getElementById('errorPass').innerHTML = "Yêu cầu xác nhận mật khẩu";
	} else {
		document.getElementById('errorPass').innerHTML = "Xác nhận mật khẩu sai";
	}
}