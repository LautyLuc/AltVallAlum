<?php

$name = $_POST['name'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];


$formcontent="
    Nombre: $name \n
    Mensaje: $mensaje \n
    E-mail: $email \n
";

$recipient = "lauluc004@gmail.com";

$header = "From: $email \r\n";
$header .= "Content-Type: text/plain; charset=UTF-8";
mail($recipient, $asunto, $formcontent, $header) or die("Error!");
header("Location: index.html");

?>