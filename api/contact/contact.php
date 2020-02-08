<?php
	$toEmail      = 'sanish@auravue.com';
	$errorMSG = "";

	if (empty($_POST["name"])) {
		$errorMSG = "Name is required";
	} else {
		$name = $_POST["name"];
		// check if name only contains letters and whitespace
		if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
			$errorMSG = "Only letters and white space allowed"; 
		}
	}

	if (empty($_POST["email"])) {
		$errorMSG = "Email is required";
	} else {
		$from = $_POST["email"];
		// check if e-mail address is well-formed
		if (!filter_var($from, FILTER_VALIDATE_EMAIL)) {
			$errorMSG = "Invalid email format"; 
		}
	}

	$subject = "E-Mail from AURAVUE.COM";

	if (empty($_POST["message"])) {
		$errorMSG = "Message is required";
	} else {
		$message = $_POST["message"];
	}

	if ($errorMSG == ""){
   		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= 'From: ' . $name  . ' <' . $from  . '>' . "\r\n";
		if(mail($toEmail, $subject, $message, $headers)){
			echo "success";
		  	exit;
		}else{
			echo "Email not sent";
		}
	}else{
	    echo $errorMSG;
	}
	
?>