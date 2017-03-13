<?
if((isset($_POST['z_name'])&&$_POST['z_name']!="")&&(isset($_POST['z_tel'])&&$_POST['z_tel']!="")) { 
//Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'maximova.olga@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['z_name'].'</p>
                        <p>Телефон: '.$_POST['z_tel'].'</p>                        
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}


?>