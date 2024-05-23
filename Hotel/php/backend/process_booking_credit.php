<?php
// Establish database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "booking";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind SQL statement
$stmt = $conn->prepare("INSERT INTO creditcard (CardNumber, CardHolderName, ExpiryDate, CVV, Phone) VALUES (?, ?, ?, ?, ?)");
if (!$stmt) {
    die("Error preparing statement: " . $conn->error);
}

// Set parameters
$phone = $_POST['phone'];
$cardHolder = $_POST['cardHolder'];
$expiryDate = $_POST['expiryDate'];
$cvv = $_POST['cvv'];
$cardNumber = $_POST['cardNumber'];

// Bind parameters
$stmt->bind_param("issss", $cardNumber, $cardHolder, $expiryDate, $cvv, $phone);

// Execute the statement
if ($stmt->execute()) {
    // Booking successfully inserted into the database
    // You can customize the response message as needed
    $response = array("success" => true, "message" => "Booking confirmed and data inserted into database.");
} else {
    // Failed to insert booking into the database
    // You can customize the response message as needed
    $response = array("success" => false, "message" => "Failed to insert booking into database.");
}

// Close statement and connection
$stmt->close();
$conn->close();

// Send JSON response back to the client
header('Content-Type: application/json');
echo json_encode($response);
