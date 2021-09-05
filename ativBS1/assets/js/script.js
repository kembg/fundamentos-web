

let email = document.querySelector('#email')
let habitat = document.querySelector('#habitat')
let linkFoto = document.querySelector('#linkFoto')
let emailOk = false
let habitatOk = false
let linkFotoOk = false

function validaEmail(){
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

function validaHabitat(){
    let txtHabitat = document.querySelector('#txtHabitat')
    if(habitat.value.length < 5){
        txtHabitat.innerHTML = 'habitat invalido'
        txtHabitat.style.color = 'red'
    } else {
        txtHabitat.innerHTML = 'habitat valido'
        txtHabitat.style.color = 'green'
        habitatOk = true
    }
}

function validaLink(){
    let txtLink = document.querySelector('#txtLink')
    if(linkFoto.value.indexOf('.') == -1 || linkFoto.value.indexOf('com') == -1) {
        txtLink.innerHTML = 'Link invalido'
        txtLink.style.color = 'red'
    } else{
        txtLink.innerHTML = ' Link valido'
        txtLink.style.color = 'green'
        linkFotoOk = true
    }
}

function validaEnviar(){
    if(linkFotoOk == true && emailOk == true && habitatOk == true){
        alert('preencha os campos corretamente')
    } else {
        alert('formulario enviado com sucesso')
    }
}