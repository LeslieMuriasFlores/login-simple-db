<?php
date_default_timezone_set('America/Costa_Rica');

$host = 'localhost';
$dbname = 'testloginweb';
$username = 'root';
$password = '';
     
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}


?>




