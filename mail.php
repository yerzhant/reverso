<?php
$to = 'reversoint@gmail.com';
$subject = 'Reverso client';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$text = "Имя: $name\nТелефон: $phone\nПочта: $email";

$headers = "From: webmaster@reverso.kz";

mail($to, $subject, $text, $headers);

header("Location: https://reverso.kz");
exit();
?>
