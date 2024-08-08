<html>
    <body>
        <?php
            // define variables and set to empty values
        $nameErr = $emailErr = $genderErr = $websiteErr = "";
        $name = $email = $comment = $website = "";
            if ($_SERVER["REQUEST_METHOD"] == "POST"){
                if(!preg_match("/^[a-zA-Z-' ]*$/", $name)){
                    $nameErr = "Only letters nd white space are allowed";
                }
            }
            if(empty($_POST["email"])){
                $emailErr = "Email is required";
            }else{
                $email = test_input($_POST["email"]);
                //checking email form
                if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                    $emailErr = "Invalid email format";
                }
            }
            if(empty($_POST["websit"])){
                $website = "";
            }else{
                $website = test_input($_POST["website"]);
                //checking url is good syntax
                if(!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
                    $websiteErr = "Invalid URL";
                }    
            }
            if(empty($_POST["comment"])){
                $comment = "";
            }else{
                $comment = test_input($_POST["comment"]);
            }
            function test_input($data){
                $data = trim($data);
                $data = stripslashes($data);
                $data = htmlspecialchars($data);
                return $data;
            }
        ?>
        <h2>php below</h2>
        <p><span class="error">* required</span></p>
        <form method="post" action="<?php echp htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            Name: <input type="text" name="name">
            <span class="error">* <?php echo $nameErr;?></span>
            <br><br>
            E-mail: <input type="text" name="email">
            <span class="error">* <?php echo $emailErr;?></span>
            <br><br>
            Website: <input type="text" name="website">
            <span class="error"><?php echo $websiteErr;?></span>
            <br><br>
            Comment: <textarea name="comment" rows="5" cols="40"></textarea>
            <input type="submit" name="submit" value="Submit">
            </form>
            <?php
                echo "<h2>Your Input:</h2>";
                echo $name;
                echo "<br>";
                echo $email;
                echo "<br>";
                echo $website;
                echo "<br>";
                echo $comment;
                echo "<br>";
                echo $gender;
                ?>
    </body>
</html>