var button = document.getElementById("button")
var numero = document.getElementById("numero")
var resultado = document.getElementById("resultado");

var numeroAleatorio = gerarNumeroAleatorio();

console.log(numeroAleatorio);

button.addEventListener("click", () =>{
 var palpite = parseInt(numero.value);

   if (palpite === numeroAleatorio) {
       resultado.textContent = "Parabéns! Você acertou o número!";

   } else if (palpite > numeroAleatorio) {

       resultado.textContent = "Tente um número menor.";
   } else {
    
       resultado.textContent = "Tente um número maior.";
   }
})

function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * 100) + 1;
}