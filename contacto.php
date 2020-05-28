<?php
    $destinatario = 'ramonurchipia@gmail.com';
    $nombre = $_POST['nombre'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
    $email = $_POST['email'];

    $header = "Enviado desde el formulario de prueba";
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

    mail($destinatario, $asunto, $mensajeCompleto, $header);
    echo "<script>alert('correo enviado OK')</script>"; // con netlify no hace falta esta linea
    echo "<script>setTimeout(\"location.href="index.html"\",1000)</script>"; // con netlify no hace falta esta linea

?>