<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input data
    $nombre = htmlspecialchars(trim($_POST['nombre']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $asunto = htmlspecialchars(trim($_POST['asunto']));
    $mensaje = htmlspecialchars(trim($_POST['mensaje']));
    
    // Validation
    if (empty($nombre) || empty($email) || empty($asunto) || empty($mensaje)) {
        echo "<p style='color: red;'>Todos los campos son obligatorios.</p>";
        exit;
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<p style='color: red;'>Correo electrónico inválido.</p>";
        exit;
    }
    
    // Email details
    $to = "tuemail@ejemplo.com"; // Replace with your email
    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "Content-Type: text/plain; charset=UTF-8\r\n";
    $body = "Nombre: $nombre\nCorreo: $email\nAsunto: $asunto\nMensaje:\n$mensaje";
    
    // Send email
    if (mail($to, $asunto, $body, $headers)) {
        echo "<p style='color: green;'>Mensaje enviado con éxito.</p>";
    } else {
        echo "<p style='color: red;'>Error al enviar el mensaje.</p>";
    }
} else {
    echo "<p style='color: red;'>Acceso no permitido.</p>";
}
?>
