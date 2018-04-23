$(function(){
	$('#font2').on('click', function(){
		$('#note').slideUp(1000);
		$('#font2').hide();
		$('#font1').show();
	});
	$('#font1').on('click', function(){
		$('#note').slideDown(1000);
		$('#font1').hide();
		$('#font2').show();
	});
	$('#font4').on('click', function(){
		$('#note1').slideUp(1000);
		$('#font4').hide();
		$('#font3').show();
	});
	$('#font3').on('click', function(){
		$('#note1').slideDown(1000);
		$('#font3').hide();
		$('#font4').show();
	});
	$('#font6').on('click', function(){
		$('#note2').slideUp(1000);
		$('#font6').hide();
		$('#font5').show();
	});
	$('#font5').on('click', function(){
		$('#note2').slideDown(1000);
		$('#font5').hide();
		$('#font6').show();
	});
	$('#font8').on('click', function(){
		$('#note3').slideUp(1000);
		$('#font8').hide();
		$('#font7').show();
	});
	$('#font7').on('click', function(){
		$('#note3').slideDown(1000);
		$('#font7').hide();
		$('#font8').show();
	});
})