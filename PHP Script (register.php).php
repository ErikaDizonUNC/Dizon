<?php

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $password = $_POST['password'];

  // Validate the form data
  if (empty($name) || empty($email) || empty($password)) {
    echo json_encode(['success' => false, 'error' => 'Please fill in all required fields']);
    return;
  }

  // Check if email already exists