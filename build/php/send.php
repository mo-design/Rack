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
        $headers .= "From: Заказ на стеллаж <zakaz@netbardaka.net>\r\n";
        $headers .= "To: $to\n";


        $result = mail("", $subject, $message, $headers);


        $client = $_POST['z_email'];

        $tema = 'Уведомление от netbardaka.net';

        $text = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Здравствуйте, '.$_POST['z_name'].'!</p>
                        <p>Ваш запрос принят.</p>
                        <p>Мы свяжемся с Вами в ближайшее время.</p>
                        <p>Удачного дня!</p>
                                                 
                    </body>
                </html>';


        $head  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $head .= "From: Уведомление о Вашем заказе <callback@netbardaka.net>\r\n";
        $head .= "To: $client\n";
        
        mail("", $tema, $text, $head);



        if ($result) 
        	echo "Ваше сообщение отправлено!";
        else
        	echo "Не удалось отправить сообщение!";
} else {
	echo "Не все поля заполнены!";
}





?>