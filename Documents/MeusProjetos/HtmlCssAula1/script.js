const form = document.querySelector("#form");
const nameInput =  document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

//console.log(form, nameInput, emailInput);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nome está vazio
    if(nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    //verifica se o e-mail está preenchido e se é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por Favor, preencha o seu email");    
        return;
    }

    //verifica se a senha está preenchida
    if(!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ser no mínimo de 8 caracteres");    
        return;
    }

    //Verificar se a situação foi selecionada
    if(jobSelect.value === "") {
        alert("Por favor, selecione sua situação.");    
        return;    
    }

    //Verificar se a situação foi selecionada
    if(messageTextarea.value === "") {
        alert("Por favor, escreva uma mensagem.");    
        return;    
    }

    //Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
});

//Função que valida e-mail
function isEmailValid(email) {
    //Cria uma regex para validar email
    const emailRegex = new RegExp(
        //user12@host.com.br
        /^[a-zA-Z0-9.-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/ 
    );

    return emailRegex.test(email);

    //return false;
}

//Função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        //senha válida
        return true;
    }  
    //senha inválida
    return false
}