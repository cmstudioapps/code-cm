//O Código javascript que verifica se o usuários ja colocou um nome, se não ele solicita o nome do usuário.
//  Caso o usuário ainda não tenha um ID, o código gerará um ID de 4 digitos.

let nome = localStorage.getItem("nome") || "Usuário"
let ID = localStorage.getItem("ID") || 0
if (nome == "Usuário" || ID == 0) {
  
  nome = prompt("Qual seu nome?")
  localStorage.setItem("nome",nome)
  
  ID = Math.floor(Math.random() * 90000) + 10000;
  localStorage.setItem("ID",ID)
}

console.log(nome)
console.log(ID)


//O código abaixo serve para conhecer um pouco mais sobre o usuário.
//informações sobre a largura da tela, assim podemos indetificar qual dispositivo ele está usando para acessar a aplicação.

let tela = innerWidth;
console.log(tela)

//Esse codigo pode ser usado em varias aplicações, por tanto ao enviar esses dados ao desenvolvedor, precisamos saber de qual aplicação esses dados estão vindo, e é pra isso que serve a variável abaixo.
//A variável "Acessando" serve para pegar a url que o usuário está acessando no momento que os dados foram adquiridos, para assim saber de onde veio os dados.

let acessando = window.location.href;
console.log(acessando)


//Um pouco mais abaixo, temos um código bem conhecido, ele adquire o horário do momento em que o usuário esta acessando.

var data = new Date()
var mes = data.toLocaleString('pt-BR', { month: 'long' });
console.log(mes);
var hora = data.getHours()+":"+data.getMinutes()
var dia = data.getDate() +"/"+mes+"/"
+data.getFullYear()+" Hora: "+hora

console.log(dia)

//Tipo de rede de Internet que o usuário usa.

let rede = navigator.connection.effectiveType


//Ao todo, os dados enviados ao desenvolvedor são:
//Data, Página acessado no momento, nome e ID e a largura da tela.