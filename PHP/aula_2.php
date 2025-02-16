<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strings</title>
</head>
<body>
    <?php 
    $linguagem = "PHP";
    // Strings double quoted (aspas duplas)
        echo "$linguagem \u{1F418} "; // o conteudo do texto é interpretado
        
    // Strings single quoted (aspas simples)
        echo '<br> $linguagem \u{1F418}'; // o conteudo do texto é interpretado

    // Strings heredoc (aspas duplas duplas)
        echo <<< "STRING"
            <br> $linguagem \u{1F418}
        STRING;
    
    // Strings nowdoc (aspas simples duplas)
        echo <<<'STRING'
            <br> $linguagem \u{1F418}
        STRING;

    // Concatenando strings
    $nome = "João";
    $sobrenome = "Silva";
    echo "<br> Concatenando strings: " . $nome . " " . $sobrenome;
    ?>
</body>
</html>