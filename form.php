<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $asnt = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $cuerpo = "Correo recibido de: " . $nombre . " \r\n";
    $cuerpo .= "Correo: " . $correo . " \r\n";
    $cuerpo .= "Asunto: " . $asnt . " \r\n";
    $cuerpo .= "Mensaje: " . $mensaje . " \r\n";
    $cuerpo .= "enviado el " . date('d/m/Y', time());

    $destinatario = 'lauluc004@gmail.com';

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=utf-8\r\n";
    $headers .= "From: $nombre <$correo>\r\n";
    $headers .= "Reply-To: $correo\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (!mail($destinatario, $asnt, $cuerpo, $headers)) {
        // Handle the error if mail sending fails
        echo "Error sending email.";
        exit; // Stop further execution
    }

    header('Location: index.html');
    exit;
}
?>
