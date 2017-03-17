<?php
if((isset($_POST['z_name'])&&$_POST['z_name']!="")&&(isset($_POST['z_tel'])&&$_POST['z_tel']!="")&&(isset($_POST['z_email'])&&$_POST['z_email']!="")) { 
//Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'maximova.olga@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно
        if ( isset($_POST['z_checkbox'])&&$_POST['z_checkbox']=='on' ) {$help = 'Нужна консультация специалиста';}
        else $help = 'Консультация специалиста не нужна';
        $subject = 'ЗАКАЗ'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['z_name'].'</p>
                        <p>Телефон: '.$_POST['z_tel'].'</p>
                        <p>Email: '.$_POST['z_email'].'</p>
                        <p>Примечания: '.$_POST['z_text'].'</p>
                        <p>'.$help.'</p>                             
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Заказ на стеллаж <callback@gir.ua>\r\n"; //Наименование и почта отправителя
        if (mail($to, $subject, $message, $headers)) //Отправка письма с помощью функции mail
        	echo "Ваше сообщение отправлено!";
        else
        	echo "Не удалось отправить сообщение!";
} else {
	echo "Не все поля заполнены!";
}
?>