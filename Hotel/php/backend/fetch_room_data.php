<?php
// Retrieve the room ID from the request
$roomId = $_GET['room_id'];

// Fetch room data from the database based on the room ID
// Connect to your database
$conn = new mysqli("localhost", "root", "", "booking");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to fetch room data using the provided room ID
$sql = "SELECT * FROM rooms WHERE RoomID = $roomId";
$result = $conn->query($sql);

// Check if there's a result
if ($result->num_rows > 0) {
    // Fetch and return the data as JSON
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    // No data found for the provided room ID
    echo json_encode(array("error" => "No data found for the provided room ID"));
}

$conn->close();
