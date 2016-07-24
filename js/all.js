$(function(){

//loading动画



	$('div#loadingimg img')
		.animate({  
				textIndent: 0 
			},{
		   		step: function(now,fx) {
		      		$(this).css('-webkit-transform','rotateY('+now+'deg)'); 
				    $(this).css('-moz-transform','rotateY('+now+'deg)');
				    $(this).css('transform','rotateY('+now+'deg)'); 
		   		},
		    	duration:'slow'
			},'linear')//logo
		.promise().done(function(){
			$(this).parent().next()
				.animate({width:'100%'})
				.animate({height:'100%'})
				.promise().done(function(){
					$(this).next().fadeIn(1000);

				}).promise().done(function(){
					$(this).parents('#loading').fadeOut();
					$(this).parents('#loading').next().fadeIn();

				})
	
		})	

			

	










		
		


});