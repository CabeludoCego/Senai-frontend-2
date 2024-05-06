
// alert("Exemplo de comando alert");
// console.log("Mensagem enviado pelo console"); 

//efeito do botão voltar ao Topo
//Validação de Login
function login() {
	window.alert("Faça seu cadastro primeiro!");
}

let topbutton = document.getElementById("voltar-topo");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function topo() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

//Ativar alert no botão cadastrar
