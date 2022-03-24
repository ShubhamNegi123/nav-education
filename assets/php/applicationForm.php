<?php
$to = "shubham@navchetanaglobal.com";
$first_name = $_REQUEST['first_name'];
$last_name = $_REQUEST['last_name'];
$father_name = $_REQUEST['father_name'];
$mother_name = $_REQUEST['mother_name'];
$dob = $_REQUEST['dob'];
$nationality = $_REQUEST['nationality'];
$select_cast = $_REQUEST['select_cast'];
$ssc_board = $_REQUEST['ssc_board'];
$ssc_tenth_percentage = $_REQUEST['ssc_tenth_percentage'];
$ssc_tenth_year = $_REQUEST['ssc_tenth_year'];
$ssc_tenth_marks = $_REQUEST['ssc_tenth_marks'];
$ssc_marks_out_of = $_REQUEST['ssc_marks_out_of'];
$hsc_board = $_REQUEST['hsc_board'];
$hsc_tenth_percentage = $_REQUEST['hsc_tenth_percentage'];
$hsc_tenth_year = $_REQUEST['hsc_tenth_year'];
$hsc_tenth_marks = $_REQUEST['hsc_tenth_marks'];
$hsc_marks_out_of = $_REQUEST['hsc_marks_out_of'];
$physics = $_REQUEST['physics'];
$chemistry = $_REQUEST['chemistry'];
$biology = $_REQUEST['biology'];
$pcb_percentage = $_REQUEST['pcb_percentage'];
$aggregate = $_REQUEST['aggregate'];
$neet_exam_year = $_REQUEST['neet_exam_year'];
$neet_marks = $_REQUEST['neet_marks'];
$passout = $_REQUEST['passout'];


$subject = "Message from: $name";
$headers = "shubham@navchetanaglobal.com";


$body = "From: $name \n
\n first_name : $first_name  \n
\n last_name : $last_name  \n
\n father_name  : $father_name  \n
\n mother_name  : $mother_name  \n
\n dob  : $dob  \n
\n nationality  : $ nationality  \n
\n select_cast : $select_cast  \n
\n ssc_board : $ssc_board  \n
\n ssc_tenth_percentage : $ssc_tenth_percentage  \n
\n ssc_tenth_year : $ssc_tenth_year  \n
\n ssc_tenth_marks : $ssc_tenth_marks  \n
\n ssc_marks_out_of : $ssc_marks_out_of  \n
\n hsc_board : $hsc_board  \n
\n hsc_tenth_percentage : $hsc_tenth_percentage  \n
\n hsc_tenth_year : $hsc_tenth_year  \n
\n hsc_tenth_marks : $hsc_tenth_marks  \n
\n hsc_marks_out_of : $hsc_marks_out_of  \n
\n physics : $physics  \n
\n chemistry : $chemistry  \n
\n biology : $biology  \n
\n pcb_percentage : $pcb_percentage  \n
\n aggregate : $aggregate  \n
\n neet_exam_year : $neet_exam_year  \n
\n neet_marks : $neet_marks  \n
\n passout : $passout \n
";


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
