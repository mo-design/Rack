$(document).ready(function () {




$("#z_form").submit(function() { //устанавливаем событие отправки для формы с id=form
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "../php/send.php", //путь до php файла отправителя
            data: form_data,
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отправлено!");
                  },
            error: function(){
                  console.log("form_data", form_data);
                  alert('error!');

                  }
            });


});










  
   $('a[name=modal]').click(function(e) {
 
      e.preventDefault();
 
      var id = $(this).attr('href');
   
      var maskHeight = $(document).height();
      var maskWidth = $(document).width();


      $('#mask').css({'width':maskWidth*2,'height':maskHeight});
         
      $('#mask').fadeIn(700);   
      $('#mask').fadeTo("slow",0.9);   
   
      //Get the window height and width
      
      var winW = $(window).width();

         
      $(id).css('top',  0);
      $(id).css('left', winW/2-$(id).width()/2);
   
      $(id).fadeIn(2000); 
   
   });
   
   //if close button is clicked
   $('.close').click(function (e) {
      //Cancel the link behavior
      e.preventDefault();
      $('#mask, .zakaz__window').hide();
   });      
   
   //if mask is clicked
   $('#mask').click(function () {
      $(this).hide();
      $('.zakaz__window').hide();
   });         
 








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