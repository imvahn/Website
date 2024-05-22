<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Database connection
$conn = new mysqli('http://127.0.0.1:5500/public/', 'root', 'pooh1234', 'test');
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
}

// Prepare and execute SQL query
$stmt = $conn->prepare("INSERT INTO contact (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close connections
$stmt->close();
$conn->close();
