<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "booking";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data from the hotels table
$sql = "SELECT * FROM hotels";
$result = $conn->query($sql);

$hotels = array();

if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        $hotels[] = $row;
    }
} else {
    echo "0 results";
}

$conn->close();

// Send JSON response
header('Content-Type: application/json');
echo json_encode($hotels);
