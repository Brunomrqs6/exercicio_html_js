
const form = document.getElementById('formulario')
const numA = document.getElementById('campo-a')
const numB = document.getElementById('campo-b')
let formValido = false;

function validaCampo (numA, numB){
    return numB > numA
}



form.addEventListener('submit', function(e){
    e.preventDefault()

    const mensagemSucesso = `Resultado correta, pois o número ${numB.value} é maior que o número ${numA.value}`
    const mensagemErro = `Resposta errada, pois o número ${numA.value} é maior ou igual ao número ${numB.value}`

    formValido = validaCampo(numA.value, numB.value)

    if(formValido == true){
        const mensagemSuc = document.querySelector('.mensagem-sucesso')
        mensagemSuc.innerHTML = mensagemSucesso
        mensagemSuc.style.display = 'block';
        const mensagemError = document.querySelector('.mensagem-erro')
        mensagemError.innerHTML = mensagemErro
        mensagemError.style.display = 'none';
    }
    else if(formValido == false){
        const mensagemSuc = document.querySelector('.mensagem-sucesso')
        mensagemSuc.innerHTML = mensagemSucesso
        mensagemSuc.style.display = 'none';
        const mensagemError = document.querySelector('.mensagem-erro')
        mensagemError.innerHTML = mensagemErro
        mensagemError.style.display = 'block';
    }
    else{
        const mensagemError = document.querySelector('.mensagem-erro')
        mensagemError.innerHTML = mensagemErro
        mensagemError.style.display = 'block';
    }
}
)





