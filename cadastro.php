
<?php
if (isset($_POST['submit'])) {


include_once('conexão.php');

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scined index: lastname in
/opt/lampale=1.0">
    <link rel="stylesheet" href="profile/css/style.css">
    <link rel="icon" href="profile/img/icone.png" class="icon">

    <title>Cadastre-se no Hotel Urbano</title>
</head>

<body>
    <div class="container">
        <div class="form-image">
            <img src="./profile/img/logourbano.png" class="logo">
        </div>
        <div class="form">
            <form action="cadastro.php" method="POST" name="cadastro" autocomplete="off" id="form-control">
                <div class="form-head">
                    <div class="titulo">
                        <h1>Cadastre-se</h1>
                    </div>
                    <div class="button">
                        <h3>Já tem uma conta?</h2>
                            <button><a href="./login.html" target="_blank">Entrar</a></button>
                    </div>
                </div>

                <div class="inputs">
                    <div class="input-box">
                        <label for="firstname">Nome</label>
                        <input id="firstname" type="text" name="firstname" placeholder="Digite seu nome">
                        <small> </small>
                    </div>

                    <div class="input-box">
                        <label for="lastname">Sobrenome</label>
                        <input id="lastname" type="text" name="lastname" placeholder="Digite seu sobrenome">
                        <small> </small>
                    </div>

                    <div class="input-box">
                        <label for="email">Email</label>
                        <input id="email" type="email" name="email" placeholder="Digite seu E-mail">
                        <small></small>

                    </div>

                    <div class="input-box">
                        <label for="rua">Rua</label>
                        <input id="rua" type="text" name="rua" placeholder="Digite sua rua">
                        <small> </small>
                    </div>

                    <div class="input-box">
                        <label for="rua-number">Número da rua</label>
                        <input id="rua-number" type="text" name="rua-number" placeholder="Digite o número da sua rua">
                        <small> </small>
                    </div>

                    <div class="input-box">
                        <label for="bairro">Bairro</label>
                        <input id="bairro" type="text" name="bairro" placeholder="Digite seu bairro">
                        <small></small>

                    </div>

                    <div class="input-box">
                        <label for="cidade">Cidade</label>
                        <input id="cidade" type="text" name="cidade" placeholder="Digite sua cidade">
                        <small></small>

                    </div>

                    <div class="input-box">
                        <label for="cep">CEP</label>
                        <input id="cep" type="text" name="cep" placeholder="Digite seu cep">
                        <small></small>

                    </div>
                    <div class="input-box">
                        <label for="password">Senha</label>
                        <input id="password" type="password" name="password" placeholder="Digite uma senha">
                        <small></small>
                        <div class="icon-eye">
                            <img src="profile/img/eye.png" width="20px" id="eye">

                        </div>
                    </div>

                    <div class="input-box">
                        <label for="confirmpassword">Confirme sua senha</label>
                        <input id="confirmpassword" type="password" name="confirmpassword"
                            placeholder="Confirme sua senha">
                        <small></small>
                        <div class="icon-eye-2">
                            <img src="profile/img/eye.png" width="20px" id="eye-2">


                        </div>
                    </div>
                </div>
                <div class="localidade">
                    <div class="local-title">
                        <h3>Região do Brasil</h3>
                    </div>

                    <div class="local-group">
                        <div class="local-input">
                            <input type="radio" id="north" name="local">
                            <label for="north">Norte</label>
                        </div>

                        <div class="local-input">
                            <input type="radio" id="north-east" name="local">
                            <label for="north-east">Nordeste</label>
                        </div>

                        <div class="local-input">
                            <input type="radio" id="midwest" name="local">
                            <label for="midwest">Centro Oeste</label>
                        </div>

                        <div class="local-input">
                            <input type="radio" id="southeast" name="local">
                            <label for="southeast">Sudeste</label>
                        </div>

                        <div class="local-input">
                            <input type="radio" id="south" name="local">
                            <label for="south">Sul</label>
                        </div>
                    </div>
                </div>
                <div class="continue-button">
                    <button id="button" name="submit" type="submit"><a href="#">Continuar</a></button>
                </div>
                <script type="text/javascript" src="dynamic/script.js"></script>
                <script type="text/javascript" src="dynamic/cep.js"></script>

            
        </div>
    </div>

    </div>
    </div>
</form>
</body>

</html>