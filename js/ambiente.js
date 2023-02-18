let numeroCartao = document.querySelector('.number')
let inputNumber = document.querySelector('.inputNumber')
let nomeCartao = document.querySelector('.name')
let inputName = document.querySelector('.inputName')
let validadeCartao = document.querySelector('.validade')
let inputMes = document.querySelector('.inputMes')
let inputAno = document.querySelector('.inputAno')
let numeroCvc = document.querySelector('.cvc')
let inputCvc = document.querySelector('.inputCvc')


function changeName(){
    
    //nao permitir que seja inserido apenas o primeiro nome
    if(inputName.value.indexOf(" ") === -1){
        alert('Digite o nome completo')
        inputName.focus()
    }else{
    nomeCartao.innerText = inputName.value
    }
}

function changeNumber(){
        let digito1 = document.querySelector('.inputN1') 
        let digito2 = document.querySelector('.inputN2') 
        let digito3 = document.querySelector('.inputN3') 
        let digito4 = document.querySelector('.inputN4') 

    if(inputNumber.value.length != 4){
        alert('Verifique os números digitados')
    }else{        

        numeroCartao.innerText = `${digito1.value} ${digito2.value} ${digito3.value} ${digito4.value}`
    }
    
    
    
}




function changeValidade(){   

    if(inputMes.value.length != 2 || inputAno.value.length != 2){
        alert('Mês e ano não podem ser menores/maiores que dois dígitos')
        inputAno.value = ""
        inputMes.value = ""
        inputMes.focus()
    }else{
        if(inputMes.value > 12 || inputAno.value < 23){
            alert('Mes/Ano Inválido')
            inputMes.focus()
        }
    
        validadeCartao.innerText = `${inputMes.value}/${inputAno.value}`
        
    }

}

function changeCVC(){
    if(inputCvc.value.length != 3){
        alert('Verifique o código de segurança')
        inputCvc.value = ""
        inputCvc.focus()
    }else{
        numeroCvc.innerText = inputCvc.value
    }

}

function confirmar(){
    if(inputName.value.length == 0 || inputNumber.value.length == 0 ||
        inputMes.value.length == 0 || inputAno.value.length == 0 ||
        inputCvc.value.length == 0){
            alert('Confira os dados informados')
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
