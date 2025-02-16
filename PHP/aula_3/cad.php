<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>entrada</title>
</head>
<body>
    <?php 
        $entrada = $_GET['entrada'] ?? "nada foi digitado";
        echo "A entrada digitada foi: " . $entrada;
    ?>
</body>
</html>