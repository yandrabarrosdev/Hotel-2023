<?php
require_once 'cadastro.php';
require_once 'conexão.php';

$email= $_POST['email'];
$password = $_POST['password'];

$inserir = "insert into cadastro (nome, cpf, email, rua, numero_rua, bairro, cidade, cep, senha, confirmar_senha) values ('$name_completed', '$cpf', '$email', '$rua', '$rua_number', '$bairro', '$cidade', '$cep', '$password', '$$confirmpassword')";
$conexao->query($inserir);

mysqli_close($conexao);

echo "
<script>
window.location=\"cadastro.php\"
</script>
"

?>