<?php

$phone = htmlspecialchars(trim($_POST['inputPhone']));
$whereYouFrom = htmlspecialchars(trim($_POST['whereYouFrom']));
$captcha = htmlspecialchars(trim($_POST['token']));

$to      = "kostya@a1-reklama.ru";
$subject = 'Форма обратной связи ' . $whereYouFrom;
$message = "На сайте был заказан обратный звонок!\n\nТЕЛЕФОН: " . $phone;
$headers = 'From: hostmaster@jino.ru';

$secretKey = "6LconTspAAAAADP1GD8YNINoJWxjKsc2hwCvTWdo";
$ip = $_SERVER['REMOTE_ADDR'];

// post request to server

$url =  'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($secretKey) .  '&response=' . urlencode($captcha);
$response = file_get_contents($url);
$responseKeys = json_decode($response, true);
header('Content-type: application/json');

if ($responseKeys["success"]) {
    if ($responseKeys["score"] > 0.5) {
        mail($to, $subject, $message, $headers);
        echo json_encode(["error" => false]);
    } else {
        echo json_encode(["error" => true]);
    }
}