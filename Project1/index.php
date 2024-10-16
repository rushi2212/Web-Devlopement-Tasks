<?php
$insert = false;
if (isset($_POST['name'])){
    $server = "localhost" ;
    $username ="root" ;
    $password = "Rushi@2212";
    $db="trip";
    
    // Connect to the database and select `trip`
    $con = mysqli_connect($server, $username, $password,$db);
    if($con){
        // echo 'Connection Successful';
    }
    if( !$con){
        die("Connection to this database failed due to".mysqli_connect_error()) ;
    }

    // mysqli_select_db($con, 'trip');
    // Collect post variables
    $name = $_POST['name'];
    $gender = $_POST['gender'];
    $age = $_POST['age'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    // Use prepared statement to insert data
    if ($stmt = $con->prepare("INSERT INTO `trip`.`trip` (`name`, `age`, `gender`, `email`, `phone`, `date`) VALUES (?, ?, ?, ?, ?, current_timestamp())")) {
        $stmt->bind_param("sisss", $name, $age, $gender, $email, $phone);
        if ($stmt->execute()) {
            // echo "Successfully inserted";
            $insert = true;
        } else {
            echo "ERROR: Could not execute query: $stmt->error";
        }
        $stmt->close();
    }
    $con->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project1</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet">
</head>
<body>
    <img src="bg.jpg" class="bg" alt="beach">
    <div class="container">
        <h3>Welcome to Goa Trip</h3>
        <p>Enter your details and submit this form to confirm your seat.</p>
        <form action="index.php" method="post">
            <input type="text" name="name" id="name" placeholder="Enter your name">
            <input type="text" name="age" id="age" placeholder="Enter your age">
            <input type="text" name="gender" id="gender" placeholder="Enter your gender">
            <input type="email" name="email" id="email" placeholder="Enter your email">
            <input type="tel" name="phone" id="phone" placeholder="Enter your phone">
            <button class="btn">Submit</button>
            <?php
                if ($insert == true){
                    echo "<p class='msg' style='font-size: 20px; margin:20px;'>Your Response is Submitted Successfully.</p>";
                }
            ?>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>
