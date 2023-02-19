# Formulário de Cartão de Crédito

Como é bom finalizar mais um projeto, e saber que entregou o seu melhor para execução do mesmo. Para este projeto, me dediquei a continuar evoluindo nos meus conhecimentos em HTML e CSS. As principais ferramentas utilizadas foram: 

✅ Flexbox;<br>
✅ Grid;<br>
✅ Media Query;<br>
✅ Declaração de variáveis em CSS;<br>
✅ Position absolute e relative;<br>
✅ background image;<br>
✅ Input Number e Text;<br>
✅ funções onclick e onchange;<br>

Através do Javascript, pude excecutar as seguintes tarefas:

✅ funções;<br>
✅ Condicionais;<br>

O código foi bem simples, em alguns casos foram necessários a criação de validações no formulário, principalmente para quantidade de dígitos permitido em alguns campos, tais como o exemplo abaixo:

````
 if(inputMes.value.length != 2 || inputAno.value.length != 2 ||
        inputMes.value > 12 || inputAno.value < 23){
        alert('Mês e ano Inválidos. Insira dois dígitos.')
        inputAno.value = ""
        inputMes.value = ""
        inputMes.focus()
    }else{
````

Outra validação importante, foi para que o usuário informasse nome e sobrenome. para isso usei a seguinte lógica:

````
function changeName(){
    
    //nao permitir que seja inserido apenas o primeiro nome
    if(inputName.value.indexOf(" ") === -1){
        alert('Digite o nome completo')
        inputName.focus()
    }else{
    nomeCartao.innerText = inputName.value
    }
}
````
Com o código acima, se não fosse encontrado ao menos um espaço no texto, o mesmo era considerado inválido.

## 🖥️📱 Capturas<br><br>


> Tela principal para Desketop

![main](https://user-images.githubusercontent.com/119018022/219973851-c76b8932-0e4a-429d-981e-44af621d21c7.jpg)
<br><br>

> Tela principal para Mobile

![mobile](https://user-images.githubusercontent.com/119018022/219973852-3b882617-cbf0-475e-8e57-149f6002b4f9.jpg)
<br><br>

> Tela principal para Tablet

![tablet](https://user-images.githubusercontent.com/119018022/219973854-48485535-90bb-4e00-83b6-149b3740a768.jpg)