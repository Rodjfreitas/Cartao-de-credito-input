let numeroCartao = document.querySelector('.number')
let inputNumber = document.querySelector('.inputNumber')
let nomeCartao = document.querySelector('.name')
let inputName = document.querySelector('.inputName')
let validadeCartao = document.querySelector('.validade')
let inputMes = document.querySelector('.inputMes')
let inputAno = document.querySelector('.inputAno')
let numeroCvc = document.querySelector('.cvc')
let inputCvc = document.querySelector('.inputCvc')

//Expressão regular que verifica se há letras depois do espaço
function checkSpaceInName(str){
    return /\s[a-zA-Z]/.test(str)
}

function changeName(){    
    //nao permitir que seja inserido apenas o primeiro nome
    
    if(!checkSpaceInName(inputName.value)){
        alert('Digite o nome completo')
        inputName.focus()
        inputName.style.border = "1px solid var(--global-erros)"
    }else{
    nomeCartao.innerText = inputName.value
    inputName.style.border = "1px solid green"
    }
}

//esta função adiciona espaços para os números digitados no input quando foram inseridos no cartão
function addEspaco(str){
    return str.replace(/\d{4}(?=\d)/g, '$& ')
}

function changeNumero(){
    if(inputNumber.value.length != 16){
        alert('Cartão inválido')
        inputNumber.value = ""
        inputNumber.focus()
        inputNumber.style.border = "1px solid var(--global-erros)"
    }else{
    numeroCartao.innerText = addEspaco(inputNumber.value)
    inputNumber.style.border = "1px solid green"
    }

}


function validacaoDigito(n){
    if(n.value.length != 2){
        return true
    }else{
        return false
    }
}

function validacaoMes(n){
    if(n.value > 12){
        return true
    }else{
        return false
    }
}

function validacaoAno(n){
    if(n.value < 23){
        return true
    }else{
        return false
    }
}

function validade(){
    validadeCartao.innerText = `${inputMes.value}/${inputAno.value}` 
}



function changeMes(){ 
    
    if(validacaoDigito(inputMes)){
        alert('Mês precisa ter dois dígitos')
        inputMes.value = ""
        inputMes.focus()
        inputMes.style.border = "1px solid var(--global-erros)"
    }else if(validacaoMes(inputMes)){
        alert('Mês inexistente')
        inputMes.value = ""
        inputMes.focus()
        inputMes.style.border = "1px solid var(--global-erros)"
    }else{
        validade()
        inputMes.style.border = "1px solid green"
     
    }    

}


function changeAno(){ 
    
    if(validacaoDigito(inputAno)){
        alert('Ano precisa ter dois dígitos')
        inputAno.value = ""
        inputAno.focus()
        inputAno.style.border = "1px solid var(--global-erros)"
    }else if(validacaoAno(inputAno)){
        alert('Ano não pode ser menor que o atual')
        inputAno.value = ""
        inputAno.focus()
        inputAno.style.border = "1px solid var(--global-erros)"
    }else{
        validade()
        inputAno.style.border = "1px solid green"
     
    }    

}




function changeCVC(){
    if(inputCvc.value.length != 3){
        alert('Verifique o código de segurança')
        inputCvc.value = ""
        inputCvc.focus()
        inputCvc.style.border = "1px solid var(--global-erros)"
    }else{
        numeroCvc.innerText = inputCvc.value
        inputCvc.style.border = "1px solid green"
    }

}

function confirmar(){
    if(inputName.value.length == 0 || inputNumber.value.length == 0 ||
        inputMes.value.length == 0 || inputAno.value.length == 0 ||
        inputCvc.value.length == 0){
            alert('Obrigatório preencher todos os campos.')
        }else if(validacaoDigito(inputMes) || validacaoDigito(inputAno) || 
        validacaoMes(inputMes) || validacaoAno(inputAno) || 
        !checkSpaceInName(inputName.value)){
            alert('Há inconsistência nos dados informados.')
        }else{
            let screenFormulario = document.querySelector('#formulario')
            let screenAgradecimento = document.querySelector('#agradecimento')

            screenFormulario.style.display = "none"
            screenAgradecimento.style.display = "flex"
        }
}

function continuar(){
    location.reload()
}
