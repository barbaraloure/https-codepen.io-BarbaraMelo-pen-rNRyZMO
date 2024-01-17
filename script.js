/* Faça um programa que tenha um menu e apresente a seguinte mensagem;
Olá usuário! Digite o número da opção desejada:
1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa

O programa deverá capturar o número digitado pelo usuário e mostrar o seguinte cenário:

Caso o usuário digite 1, ele poderá cadstrar um item em uma lista
Caso o usuário digite 2, ele poderá ver os itens cadastrados
 Se nãp houver n enhum cadastrado, mostrar a mensagem:
 "Nãp existe item cadastrado"
 Caso o usuário digite 3, a aplicação deverá ser encerrada.
 */


 /*let option
 let items = []

 while(option != 3) { 

 option = Number(prompt(`
Olá usúario! digite a opção desejada:

1. Cadastrar um item na lista
2. Mostrar itens cadastrado
3. Sair do programa
`))

 if (option == 1) {
   let item = prompt('Digite o nome do item')
   items.push(item)
}

 else if (option == 2) {

    if(items.length == 0) {
    alert('Não existe itens cadastrado')
} else {
    alert(items)
}

} else {
    alert('Tchau')
}


console.log(option, items)
 }*/


 /*
 let option
 let items = []

 while(option != 3) { 


 option = Number(prompt(` 
    Olá usúario! digite a opção desejada:

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrado
    3. Sair do programa
    `))

 switch(option){
 case 1:
    let item = prompt("Digite o nome do item")
    items.push(item)
 break;
 
 case 2: 
  if(items.legth == 0){ 
 alert("Não existem itens cadastrado")
} else {
    alert(items)
}
     break;
 
 case 3:
    alert("Tchau")
 break;

 default:
    alert("Opção inválida tente novamente")
 
}
 
 } 
 */


 //OUTRA OPÇÃO


 let items = []
let option;

while(option != 3){ 
    
option = Number(prompt(`
    Olá usauário! Digite a opção desejada.
1.Cadastrar items.
2.Mostrar itens cadastrado.
3.Sair do programa.
`))
switch(option){
case 1:
//if(option == 1){
let item = prompt("Digite o nome do item")
items.push(item)
break;

case 2:
//if(option == 2){
if(items.length == 0){
alert("Não existe item cadastrado")
            
}else{
alert(items)
}
break;

case 3:
alert("Good bye")
break;

default:
alert("Opção invalida, tente novamente")

console.log(option, items)
}
}
