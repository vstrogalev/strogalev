<?php 

$name = $_POST['userName'];
$email = $_POST['userEmail'];
$message = $_POST['userMessage'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = '';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = '';                 // Наш логин
$mail->Password = '';                           // Наш пароль от ящика
// $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->SMTPAutoTLS = false;
$mail->SMTPSecure = false;
$mail->Port = 25;				// $mail->Port = 465;    // TCP port to connect to
 
$mail->setFrom('', 'MyHosting');   // От кого письмо 
$mail->addAddress('');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные формы с сайта strogalev.com';
$mail->Body    = 'Пользователь оставил данные <br>
				<p>Имя: ' . $name . '</p> <br>
				<p>E-mail: ' . $email . '</p>
				<br><p>Сообщение: ' . $message . '</p>';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>
