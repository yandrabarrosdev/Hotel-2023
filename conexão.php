<?php

$dbHost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'CadastroUser';


$conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if($conexao -> connect_errno) {
    echo "conexão mal sucedida";
} else {
    echo "conexão bem sucedida";
}







?>