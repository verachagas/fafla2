
let valor = parseFloat(prompt("Digite um valor numérico:"));


let formatado = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
});

alert("Valor formatado: " + formatado);
