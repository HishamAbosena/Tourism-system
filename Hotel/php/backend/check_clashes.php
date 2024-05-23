<?php
// check_clashes.php

// Assuming you have already connected to your database using PDO
$host = 'localhost';
$dbname = 'booking';
$username = 'root';
$password = '';

// Establish a PDO connection to the database
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // If connection fails, display an error message
    echo "Connection failed: " . $e->getMessage();
    exit();
}

// Get the arrival and departure dates and room ID from the AJAX request
$arrivalDate = $_POST['arrival_date'];
$departureDate = $_POST['departure_date'];
$roomId = $_POST['room_id'];

// Query the database to check for clashes
$query = "SELECT * FROM booking WHERE RoomID = $roomId AND (
              (:arrivalDate BETWEEN ArrivalDate AND DepartureDate)
              OR (:departureDate BETWEEN ArrivalDate AND DepartureDate)
          )";

try {
    $statement = $pdo->prepare($query);
    $statement->bindParam(':arrivalDate', $arrivalDate);
    $statement->bindParam(':departureDate', $departureDate);
    $statement->execute();

    // Check if there are any clashes
    if ($statement->rowCount() > 0) {
        // Clash found
        echo 'clash';
    } else {
        // No clash found
        echo 'no_clash';
    }
} catch (PDOException $e) {
    // Handle any errors that occur during query execution
    echo "Query failed: " . $e->getMessage();
}
