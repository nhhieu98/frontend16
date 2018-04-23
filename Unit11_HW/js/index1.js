var bar = '<i class="fa fa-bars" aria-hidden="true"></i>';
var close = '<i class="fa fa-times" aria-hidden="true"></i>';

$(function(){

	var check = true;
	$('#font').click(function(){
				
		if(check == true){
			$('#font').html(close).animate({  borderSpacing: -90 }, {step: function(now,fx) {
				$(this).css('-webkit-transform','rotate('+now+'deg)'); 
				$(this).css('-moz-transform','rotate('+now+'deg)');
				$(this).css('transform','rotate('+now+'deg)');
  				},
   				duration:'slow'
			},'linear');

			$("#menu").animate({"left":"0px"}, "slow");
			check = !check;
		}else {   
			$('#font').html(bar).animate({  borderSpacing: 180 }, {step: function(now,fx) {
				$(this).css('-webkit-transform','rotate('+now+'deg)'); 
				$(this).css('-moz-transform','rotate('+now+'deg)');
				$(this).css('transform','rotate('+now+'deg)');
  				},
   				duration:'slow'
			},'linear');

			$("#menu").animate({"left":"-60%"}, "slow");
			check = !check;
		}
	})

	$('#fa').click(function(){
		$('#sub').css('display','block');
	})

	$('#minus').click(function(){
		$('#sub').css('display','none');
	})
})
