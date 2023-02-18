let numeroCartao = document.querySelector('.number')
let inputNumber = document.querySelector('.inputNumber')
let nomeCartao = document.querySelector('.name')
let inputName = document.querySelector('.inputName')

function changeName(){
    nomeCartao.innerText = inputName.value
    //nao permitir que seja inserido apenas o primeiro nome
    if(inputName.value.indexOf(" ") === -1){
        alert('Digite o nome completo')
        inputName.focus()
    }
}

function changeNumber(){
    numeroCartao.innerText = inputNumber.value
    console.log(inputNumber.value.length)
    
    if(inputNumber.value.length = 4){
        
    }
    
}