<?php
require_once 'cadastro.php';
require_once 'conexão.php';

$name_completed= $_POST['name-completed'];
$cpf = $_POST['cpf'];
$email= $_POST['email'];
$rua = $_POST['rua'];
$rua_number= $_POST['rua-number'];
$bairro= $_POST['bairro'];
$cidade = $_POST['cidade'];
$cep= $_POST['cep'];
$password= $_POST['password'];
$confirmpassword= $_POST['confirmpassword'];

$inserir = "insert into cadastro (nome, cpf, email, rua, numero_rua, bairro, cidade, cep, senha, confirmar_senha) values ('$name_completed', '$cpf', '$email', '$rua', '$rua_number', '$bairro', '$cidade', '$cep', '$password', '$$confirmpassword')";
$conexao->query($inserir);

mysqli_close($conexao);

echo"
<script>
window.location=\"cadastro.php\"
</script>
"



?>