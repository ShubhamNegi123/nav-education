<?php
$to = "shubham@navchetanaglobal.com";
$name = $_REQUEST['name'];
$phone = $_REQUEST['phone'];
$email = $_REQUEST['email'];
$city = $_REQUEST['city'];
$message = $_REQUEST['message'];



$subject = "Message from: $name";
$headers = "shubham@navchetanaglobal.com";


$body = "From: $name \n
\n  phone: $phone  \n
\n email : $email  \n
\n city : $city  \n
\n message : $message  \n

$sent = mail($to, $subject, $body, $headers);
if ($sent) {
    echo "<script language=javascript>
        window.location = 'index.html';
    </script>";
} else {
    echo "<script language=javascript>
        window.location = 'index.html';
    </script>";
}


$retval = mail($to, $subject, $message, $header);
if ($retval == true) {
    echo "Message sent successfully...";
} else {
    echo "Message could not be sent...";
}
