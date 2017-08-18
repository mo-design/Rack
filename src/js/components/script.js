$(document).ready(function () {

$("#flip_img1").flip();
$("#flip_img2").flip();
$("#flip_img3").flip();
$("#flip_img4").flip();
$("#flip_img5").flip();




/*Плавный скроллинг*/
$('a[href^="#"]').bind('click.smoothscroll',function (e) { 
   e.preventDefault(); 

   var target = this.hash, 
   $target = $(target); 

   $('html, body').stop().animate({ 
   'scrollTop': $target.offset().top 
   }, 1500, 'swing', function () { 
   window.location.hash = target; 
   }); 
});



/*Маска для телефона*/
$('#z_tel').mask("+38(999) 999-99-99");




/*  SLIDER  */



$('.responds__slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
}); 






//Modal window call

    $('#call').click(function(){
       $('#winzakaz').show(500);
    });


    $('#bardak__call').click(function(){
       $('#winzakaz').show(500);
    });



    $('#winzakaz .win__close').click(function(){
       $('#winzakaz').hide(500);

    });


    $("#winzakaz").click(function(e) {

        if($(e.target).closest("#winzakaz .win__wrapper").length==0) {
             $("#winzakaz").hide(500);
        } 

    });
    



   $("#winsendmail .win__close").click(function(){
        $("#winsendmail").hide(500);
    });
    
    $("#winsendmail .win__ok").click(function(){
        $("#winsendmail").hide(500);
    });
       
    $("#winsendmail").click(function(e) {
        if($(e.target).closest("#winsendmail .winsend__wrapper").length==0) {
             $("#winsendmail").hide(500);
        } 
    });
 










    $('#winzakaz_form').submit(function() {
        var form_data = $(this).serialize(); //собираем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "/build/php/send.php", //путь до php файла отправителя
            async: false,
            data: form_data,
            success: function(html) {
                //код в этом блоке выполняется при успешной отработке php-скрипта
                if (html == 'true') {
                    $('#winsendmail .win__header').html('Запрос отправлен');
                    $('#winsendmail .win__text').html('Ваш запрос на обратный звонок отправлен! Наш менеджер свяжется с Вами в указанное время.');
                    $('#winsendmail .win__newcalc').hide();
                    $('#winzakaz').hide();
                    $('#winsendmail').show();
                } else {
                    alert('Ошибка отправки сообщения: ' + html);
                }
            },
            error: function(html){
                console.log("form_data", form_data);
                alert('error!');
            }
        });
    
        return false;
    });




 
 



	
});