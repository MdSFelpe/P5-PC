const form =document.getElementById("form");
const nome =document.getElementById("Nome");
const  email =document.getElementById("email");
const  senha =document.getElementById("senha");
const  rsenha =document.getElementById("rsenha");
const idade =document.getElementById("idade");
form.addEventListener ('submit', (event)=> {
    event.preventDefault();
    CheckForm();
  
})
function checkIdade(){
    if (idade.value === "" ){
        inputErro (idade , "preencha uma data")

    }
    else{
        const item = idade.parentElement;
        item.className= "cont";
    }
}
function checkNome(){
    
    if (nome.value === "" ){
        inputErro (nome , "preencha um nome")

    }
    else{
        const item = nome.parentElement;
        item.className= "cont";
    }
}
function checkEmail(){
    if (email.value === "" ){
        inputErro (email , "preencha um email")

    }
    else{
        const item = email.parentElement;
        item.className = "cont";
    }
}
function Checksenha(){
    if (senha.value === "" ){
        inputErro (senha , "senha obrigatória")

    }
    else{
        const item = senha.parentElement;
        item.className = "cont";
    }
}
function Checkrsenha(){
    const valorSenha = senha.value;
    const valorSenhaConfirmação =rsenha.value;
    if (valorSenhaConfirmação === "" ){
        inputErro (rsenha , "obrigatório confirmar senha")

    }
    else if (valorSenhaConfirmação != valorSenha){
        inputErro (rsenha , "as senhas não são iguais")
    }
    else{
        const item = rsenha.parentElement;
        item.className = "cont";
    }
}

function CheckForm(){
    checkNome();
    checkEmail();
    Checksenha();
    Checkrsenha();
    checkIdade();
    const item = form.querySelectorAll(".cont")

    const valido = [... item].every((item)=> { 
        return item.className === "cont"
    })
    if (valido) {
        alert('Cadastrado com sucesso')
        form.submit();
        window.location.href ="http://127.0.0.1:5000/Login"
    }

}


function inputErro(input, msg){
    const item = input.parentElement;
    const texto = item.querySelector("a")

    texto.innerText = msg;
    item.className = "cont erro";
}