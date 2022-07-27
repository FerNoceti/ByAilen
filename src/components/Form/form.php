<?php //instancio php para que me lo reconozca


//Variables
$nombre = $_POST["name"];
$apellido = $_POST["apellido"];
$mail = $_POST["mail"];
$asesorias = $_POST["asesorias"];
$grupales = $_POST["grupales"];
$diseño = $_POST["diseño"];
$generacion = $_POST["generacion"];
$mensaje = $_POST["mensaje"];


//mensaje a mail
$mensajeAMail = "Este mensaje fue enviado por" . $nombre . $apellido. ",\r\n";
$mensajeAMail .= "Su email es" . $mail .",\r\n";
$mensajeAMail .= "El servicio que requiere es" . $asesorias. ",".$grupales. ",".$diseño. ",".$generacion . ",\r\n";
$mensajeAMail .= "Y su mensaje es" . $mensaje . ",\r\n";
$mensajeAMail .= "Y fue enviado el " .date("d/m/Y",time());


$para = "reciolauti@gmail.com";


mail($para,utf8_decode($mensajeAMail),$header);

header("Location:index.html")
?>