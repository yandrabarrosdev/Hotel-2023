//mostrar senha 
let btn = document.querySelector('#eye')

btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#password')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
    btn.setAttribute("src", "profile/img/hide.png")

  } else {
    inputSenha.setAttribute('type', 'password')
    btn.setAttribute("src", "profile/img/eye.png")
  }
})

let btnConfirm = document.querySelector("#eye-2")

btnConfirm.addEventListener("click", () => {
  let inputConfirmSenha = document.querySelector("#confirmpassword")

  if (inputConfirmSenha.getAttribute('type') == 'password') {
    inputConfirmSenha.setAttribute('type', 'text')
    btnConfirm.setAttribute("src", "profile/img/hide.png")
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
    btnConfirm.setAttribute("src", "profile/img/eye.png")
  }
});

//validação

const button2 = document.getElementById('button')

button2.addEventListener('click', (event) => {
  event.preventDefault()

  const name_completed = document.getElementById('name-completed')
  const cpf= document.getElementById('cpf')
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const confirmpassword = document.getElementById('confirmpassword')
  const rua = document.getElementById('rua')
  const rua_number = document.getElementById('rua-number')
  const bairro = document.getElementById('bairro')
  const cidade = document.getElementById('cidade')
  const cep = document.getElementById('cep')
  

  //message 
  function errorValidation(input, message) {
    const FormControl = input.parentElement
    const small = FormControl.querySelector('small')
    small.innerText = message

  }

  if (email.value == "") {
    errorValidation(email, "Preencha o campo email.")
    email.classList.add("errorInput")
  } else if ( (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1))) {
    errorValidation(email, "'@' necessário e '.' após o endereço informado.")
    email.classList.add("errorInput")
  } else {
    errorValidation(email, "")
    email.classList.remove("errorInput")
  }


  if (name_completed.value == "") {
    errorValidation(name_completed, "Preencha o seu nome completo.")
    name_completed.classList.add("errorInput")
  } else if (name_completed.value >= 0 && name_completed.value >= 9) {
    errorValidation(name_completed, "Valores númericos não são considerados.")
    name_completed.classList.add("errorInput")
  } else {
    errorValidation(name_completed, "")
    name_completed.classList.remove("errorInput")
  }

  if (cpf.value == "") {
    errorValidation(cpf, "Preencha o campo CEP.")
    cpf.classList.add("errorInput")
  } else if (cpf.value.length <= 13) {
    errorValidation(cpf, "Deve conter no mínimo 14 caracteres.")
    cpf.classList.add("errorInput")
  } else {
    errorValidation(cpf, "")
    cpf.classList.remove("errorInput")
  }

  if (password.value == "") {
    errorValidation(password, "Preencha o campo senha.")
    password.classList.add("errorInput")
  } else if (password.value.length < 8) {
    errorValidation(password, "Deve conter no mínimo 8 caracteres.")
    password.classList.add("errorInput")
  } else {
    errorValidation(password, "")
    password.classList.remove("errorInput")
  }

  if (confirmpassword.value == "") {
    errorValidation(confirmpassword, "Preencha o campo de confirmação.")
    confirmpassword.classList.add("errorInput")
  } else if (confirmpassword.value.length < 8) {
    errorValidation(confirmpassword, "Deve conter no mínimo 8 caracteres.")
    confirmpassword.classList.add("errorInput")
  } else if (password.value !== confirmpassword.value) {
    errorValidation(confirmpassword, "Senhas informadas não coincidem.")
    confirmpassword.classList.add("errorInput")
    password.classList.add("errorInput")
  } else {
    errorValidation(confirmpassword, "")
    confirmpassword.classList.remove("errorInput")
    password.classList.remove("errorInput")
  }

  if (rua.value == "") {
    errorValidation(rua, "Preencha o campo rua.")
   
  } else {
    errorValidation(rua, "")
    rua.classList.remove("errorInput")
  }

  if (rua_number.value == "") {
    errorValidation(rua_number, "Preencha o número da sua rua.")
    rua_number.classList.add("errorInput")
  } else if (rua_number.value.length  >= 4 ) {
    errorValidation(rua_number, "No máximo 3 caracteres")
    rua_number.classList.add("errorInput")
  } else {
    errorValidation(rua_number, "")
    rua_number.classList.remove("errorInput")
  }

  if (bairro.value == "") {
    errorValidation(bairro, "Preencha o campo bairro.")
    bairro.classList.add("errorInput")
  } else {
    errorValidation(bairro, "")
    bairro.classList.remove("errorInput")
  }
  if (cidade.value == "") {
    errorValidation(cidade, "Preencha o campo cidade.")
    cidade.classList.add("errorInput")
  } else {
    errorValidation(cidade, "")
    cidade.classList.remove("errorInput")
  }
  if (cep.value == "") {
    errorValidation(cep, "Preencha o campo cep.")
  cep.classList.add("errorInput")
  } else if (cep.value.length < 8) {
    errorValidation(cep, "Deve conter no mínimo 8 caracteres")
    cep.classList.add("errorInput")
  }
 else {
    errorValidation(cep, "")
    cep.classList.remove("errorInput")
  }
})


