<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Se livrando da maldição</title>
</head>
<body>
    <?php 
        date_default_timezone_set('America/Sao_Paulo');
        $dia = date("d");
        $mes = date("M");
        const MENSAGEM = "Hello World!";
    ?>


    <h1> <?php echo MENSAGEM?> </h1>
    <p> 
        <?php 
            echo "hoje é dia " . $dia . " de " . $mes;
        ?>
    </p>
</body>
</html>