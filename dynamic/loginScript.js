//validação

const button2 = document.getElementById('button')


button2.addEventListener('click', (event) => {
  event.preventDefault()

  const email = document.getElementById('email')
  const password = document.getElementById('password')
 

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

  if (password.value == "") {
    errorValidation(password, "Preencha o campo senha.")
    password.classList.add("errorInput")
  } else if (password.value.length < 8) {
    errorValidation(password, "Deve conter no mínimo 8 caracteres.")
    password.classList.add("errorInput")
  } else {
    password.classList.remove("errorInput")
  }
})

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

let btnConfirm = document.querySelector("#eye")

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
