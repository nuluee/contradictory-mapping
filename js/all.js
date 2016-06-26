$(function(){

	$('div#loadingbar img').animate({  
		textIndent: 0 
	},{
   		step: function(now,fx) {
      		$(this).css('-webkit-transform','rotateY('+now+'deg)'); 
		    $(this).css('-moz-transform','rotateY('+now+'deg)');
		    $(this).css('transform','rotateY('+now+'deg)'); 
   		},
    	duration:'slow'
	},'linear');

});