<?php
  // if($_POST){
  //   $line = "\n";
  //   $name = "Name: {$_POST['name']}";
  //   $email = "Email: {$_POST['email']}";
  //   $message = "Message: {$_POST['message']}";

  //   $to = 'alex@croissant.io';
  //   $subject = 'New contact form inquiry';
  //   $body = $name.$line.$email.$line.$message;

  //   mail($to, $subject, $body);
  // }
if($_POST){
  $contactData = json_decode($_POST['contactData']);
  $line = "\n";
  $name = "Name: {$contactData->name}";
  $email = "Email: {$contactData->email}";
  $message = "Message: {$contactData->message}";

  $to = 'alex@croissant.io';
  $subject = 'New contact form inquiry';
  $body = $name.$line.$email.$line.$message;

  mail($to, $subject, $body);
}
?>
