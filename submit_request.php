<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection
$servername = "127.0.0.1:3306";
$username = "devine";
$password = "Sajan@may24";
$dbname = "u722064628_TourAndTravel";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO requests (name, email, mobile, destination, travel_dates, duration, companions, accommodation, activities, budget, transportation, special_requests, insurance, payment, emergency_contact, loyalty_programs) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssisissssss", $name, $email, $mobile, $destination, $travel_dates, $duration, $companions, $accommodation, $activities, $budget, $transportation, $special_requests, $insurance, $payment, $emergency_contact, $loyalty_programs);

// Set parameters and execute
$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$destination = $_POST['destination'];
$travel_dates = $_POST['travelDates'];
$duration = $_POST['duration'];
$companions = $_POST['companions'];
$accommodation = $_POST['accommodation'];
$activities = $_POST['activities'];
$budget = $_POST['budget'];
$transportation = $_POST['transportation'];
$special_requests = $_POST['specialRequests'];
$insurance = $_POST['insurance'];
$payment = $_POST['payment'];
$emergency_contact = $_POST['emergencyContact'];
$loyalty_programs = $_POST['loyaltyPrograms'];

$stmt->execute();

echo "New request submitted successfully";

$stmt->close();
$conn->close();
?>
