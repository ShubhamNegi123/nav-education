<?php
$to = "shubham@navchetanaglobal.com";
$newsletter = $_REQUEST['newsletter'];


$subject = "Newsletter : ";
$headers = "shubham@navchetanaglobal.com";


$body = "User Email: $newsletter \n";


$sent = mail($to, $subject, $body, $headers);
if ($sent) {
    echo "<script language=javascript>window.location = 'index.html';</script>";
} else {
    echo "<script language=javascript>window.location = 'index.html';</script>";
}


$retval = mail($to, $subject, $message, $header);
if ($retval == true) {
    echo "Message sent successfully...";
} else {
    echo "Message could not be sent...";
}
