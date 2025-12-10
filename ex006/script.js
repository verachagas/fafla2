
let nomeCompleto = prompt("Digite seu nome completo:");


let primeiroNome = nomeCompleto.split(" ")[0];


let primeiroMaiusculo = primeiroNome.toUpperCase();


let quantidadeLetras = primeiroNome.length;


alert("Primeiro nome em maiúsculas: " + primeiroMaiusculo +
      "\nQuantidade de letras: " + quantidadeLetras);
