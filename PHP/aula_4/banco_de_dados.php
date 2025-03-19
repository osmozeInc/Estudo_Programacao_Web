<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<?php 
    $DBservername = "localhost";
    $DBusername = "root";
    $DBpassword = "";
    $DBname = "usuarios";

    $conn = new mysqli($DBservername, $DBusername, $DBpassword, $DBname);

    if ($conn->connect_error) {
        echo "<script>alert('Erro de conexão ao servidor');</script>";    }

    $conn->close();
?>


<body>




<form class="log-in" action="" method="post">
    <input class="input" id="email-log" name="email-log" type="email" placeholder="E-mail">
    <input class="input" id="password-log" name="password-log" type="password" placeholder="Senha" required>

    <a href="" class="a">Esqueci a Senha</a>
    <br><br><br><br>

    <input class="button" id="log-in-button" type="submit" value="Entrar">
</form>


<?php
                    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                        
                        $email = $_POST['email-log'];
                        $password = $_POST['password-log'];

                        $conn = new mysqli($DBservername, $DBusername, $DBpassword, $DBname);
                        $sql = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";

                        $stmt = $conn->prepare($sql);
                        $stmt->bind_param("ss", $email, $password);
                        $stmt->execute();

                        $result = $stmt->get_result();
                        
                        if ($result->num_rows > 0)
                        {
                            echo "<script>alert('Logado com sucesso!');</script>";
                        }
                    }
                ?>


</body>
</html>