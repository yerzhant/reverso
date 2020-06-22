<?php
$to = 'reversoint@gmail.com';
$subject = 'Вам оставлена заявка';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$text = "Уважаемый Зандосик, спешу Вам сообщить, что на сайте ревёрсо.кз Вам оставили заявку на консультацию.\n\nИмя: $name\nТелефон: $phone\nПочта: $email";

$headers = "From: webmaster@reverso.kz";

mail($to, $subject, $text, $headers);
?>
