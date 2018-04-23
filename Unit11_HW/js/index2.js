$(function(){
	$('#image img').click(function(){

		 var img =$(this).attr('src');
		$('#img').attr('src',img);

		var name = $(this).data('name');
		$('#text').append('<p>' + name +'</p>');
		
		$('#lightbox').toggle();

		$('#font').css('display','block');

		$('#image').css('display','none');
	})

	$('#font').click(function(){

		$("#lightbox").css('display','none');

		$('#image').css('display','block');
	})
})