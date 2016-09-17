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
				.delay(1000)
				.animate({top:'-196'})
				.animate({width:'1%'})
				.delay(2000)
				.animate({
					textIndent: -90,
					width:'90%',
				},{

					step: function(now,fx){

						$(this).css('-webkit-transform','rotateZ('+now+'deg)'); 
						$(this).css('-moz-transform','rotateZ('+now+'deg)');
						$(this).css('transform','rotateZ('+now+'deg)'); 

						},duration:500
					},'linear')
				.promise().done(function(){
					$(this).animate({
						width:'0',
						top:'-200px'
					})
					$('div#loadingimg').animate({
						width:'0',
						height:'0'
					})
					$('div#loadingimg img').animate({
						width:'0',
						height:'0'
					})

				})
				.promise().done(function(){
					$('#loading').delay(1000).animate({
						top:'100%'
					})
				})
	
		})//promise	

			

	










		
		


});