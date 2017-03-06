$(document).ready(function () {




//Обработка клика на стрелку вправо
$(document).on('click', ".responds__nav_r",function(){ 
	var carusel = $("#slider");
	right_carusel(carusel);
	return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".responds__nav_l",function(){ 
	var carusel = $("#slider");
	left_carusel(carusel);
	return false;
});



function left_carusel(carusel){
   var block_width = $(carusel).find('.responds__list').outerWidth();
   $(carusel).find(".responds__list .responds__box").eq(-1).clone().prependTo($(carusel).find(".responds__list")); 
   $(carusel).find(".responds__list").css({"left":"-"+block_width+"px"});
   $(carusel).find(".responds__list .responds__box").eq(-1).remove();    
   $(carusel).find(".responds__list").animate({left: "0px"}, 200); 
   
}


function right_carusel(carusel){
   var block_width = $(carusel).find('.responds__list').outerWidth();
   $(carusel).find(".responds__list").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carusel).find(".responds__list .responds__box").eq(0).clone().appendTo($(carusel).find(".responds__list")); 
      $(carusel).find(".responds__list .responds__box").eq(0).remove(); 
      $(carusel).find(".responds__list").css({"left":"0px"}); 
   }); 
}




	
});