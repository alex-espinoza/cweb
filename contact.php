<?php
  if($_POST){
    $line = "\n";
    $name = "Name: {$_POST['name']}";
    $email = "Email: {$_POST['email']}";
    $message = "Message: {$_POST['message']}";

    $to = 'hello@croissant.io';
    $subject = 'New contact form inquiry';
    $body = $name.$line.$email.$line.$message;

    mail($to, $subject, $body);
  }
?>
