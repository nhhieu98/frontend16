$(function(){
	account();
	profile();
});

function account(){
	$('#tab1').show();
	$('#tab2').hide();
	$('#tab3').hide();
	$('#tab4').hide();

	var check;
	$('#username').on('blur',function(){
		var username = $('#username').val();
		if (username == "") {
			$('#err-username').html('Không được để trống');
		}
		else if (username.length < 6) {
			$('#err-username').html('Username phải lớn hơn 6 ký tự');
		}
		 else {
			$('#err-username').html('');
		}
	});

	$('#password').on('blur', function(){
		var password = $('#password').val();
		if (password != "") {
			$('#err-password').html('');
		}
		else {
			$('#err-password').html('Không được để trống');
		}
	});

	$('#con-pass').on('blur', function(){
		var password = $('#password').val();
		var con_pass = $('#con-pass').val();
		if (con_pass != password) {
			$('#err-con-pass').html('Xác nhận sai');
		}
		else if (con_pass == "") {
			$('#err-con-pass').html('Không được để trống');
		}
		else {
			$('#err-con-pass').html('');
		}
	});

	$('#next').on('click', function(){
		var username = $('#username').val();
		var passwword = $('#passwword').val();
		var con_pass = $('#con-pass').val();
		if( username != '' && passwword != '' && con_pass != ''){
			$('#tab1').hide('slide',{duration:'right'},500);
			$('#tab2').show('slide',{duration:'right'},500);
			$('#tab-pro').css('cssText', 'background-color: #2184BE !important; color:white !important;');
			$('#tab-acc').css('backgroundColor', '#eee');
			$('#pre').css('backgroundColor', '#2184BE');
		}
		else {
			$('#tab-acc').css('backgroundColor', 'red');
			$('#err-username').html('Không được để trống')
			$('#err-password').html('Không được để trống');
			$('#err-con-pass').html('Không được để trống');
		}
	});
	$('#pre').on('click', function(){
		$('#tab1').show('slide',{duration:'left'},500);
		$('#tab2').hide('slide',{duration:'left'},500);
		$('#tab-acc').css('cssText', 'background-color: #2184BE !important; color:white !important;');
		$('#tab-pro').css('backgroundColor', '#eee');
		$('#pre').css('backgroundColor', '');
	});
};

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function profile(){

	$('#firstname').on('blur', function(){
		var firstname = $('#firstname').val();
		if (firstname == "") {
			$('#err-firstname').html('Không được để trống');
		} 
		else {
			$('#err-firstname').html('');
		}
	});

	$('#lastname').on('blur', function(){
		var lastname = $('#lastname').val();
		if (lastname == "") {
			$('#err-lastname').html('Không được để trống');
		} 
		else {
			$('#err-lastname').html('');
		}
	});

	$('#email').on('blur', function(){
		var email = $('#email').val();
		if (email == "") {
			$('#err-email').html('Không được để trống');
		}
		else if (validateEmail(email)) {
			$('#err-email').html('');
		}
		else {
			$('#err-email').html('Nhập email theo dạng abc@domain.com');
		}
	});

	$('#address').on('blur', function(){
		var address = $('#address').val();
		if (address == "") {
			$('#err-address').html('Không được để trống');
		}
		else {
			$('#err-address').html('');
		}
	});

	$('#age').on('blur', function(){
		var age = $('#age').val();
		if (age == "") {
			$('#err-age').html('Không được để trống');
		}
		else {
			$('#err-age').html('');
		}
	});

	$('#next').on('click', function(){
		var firstname = $('#firstname').val();
		var lastname = $('#lastname').val();
		var email = $('#email').val();
		var address = $('#address').val();
		var age = $('#age').val();
		if (firstname != "" && lastname != "" && email != "" && address != "" && age >= 18){
			$('#tab2').hide('slide',{duration:'right'},500);
			$('#tab4').show('slide',{duration:'right'},500);
			$('#tab-fin').css('cssText', 'background-color: #2184BE !important; color:white !important;');
			$('#tab-pro').css('backgroundColor', '#eee');
			$('#pre').css('backgroundColor', '#2184BE');
		}
		else if (firstname != "" && lastname != "" && email != "" && address != "" && age < 18) {
			$('#tab2').hide('slide',{duration:'right'},500);
			$('#tab3').show('slide',{duration:'right'},500);
			$('#tab-war').css('cssText', 'background-color: #2184BE !important; color:white !important;');
			$('#tab-pro').css('backgroundColor', '#eee');
			$('#pre').css('backgroundColor', '#2184BE');
		}
		else {
			$('#tab-pro').css('backgroundColor', 'red');
			$('#err-firstname').html('Không được để trống')
			$('#err-lastname').html('Không được để trống');
			$('#err-email').html('Không được để trống');
			$('#err-address').html('Không được để trống');
			$('#err-18').html('Không được để trống');
		}
	});
}