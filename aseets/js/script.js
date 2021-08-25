/*
--definindo variaveis em js-- 
var -> variavel de escopo global
let -> varivael de escopo local 
const -> variavel inateravel de escopo global 
--diferentes formas de acessar um elemento (*atenção nas maiusculas*)--
por tag : getElementByTagName()
por id : getElementById()
por nome : GetElementsByName()
por classe : getElementsByClassName()
por seletor : querrySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '98%'
email.style.width = '98%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Digite menos do que 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso')
    } else {
        alert('Preencha os campos corretamente.')
    }
}

function mapaZoom(){
    mapa.style.heigth = '600px'
    mapa.style.width = '800px'
    
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.heigth = '250px'
}
