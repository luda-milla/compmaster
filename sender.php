<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['text'];

	$to = "L-Aladysheva@yandex.ru";
	$date = date ("d.m.Y");
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";


	$msg="
    Имя: $name /n
    Телефон: $phone /n
    Почта: $email /n
    Текст: $text";
	mail($to, $subject, $msg, "From: $from ");

?>

<p>Спасибо! Ваша заявка принята. Я свяжусь с Вами в ближайшее время.</p>
