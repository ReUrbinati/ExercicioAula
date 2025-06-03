
function calculadoraDias(idade) {
    let total = idade * 365;
    return total;
}
function imprimir(valor) {
    alert("Você já viveu" + multiplicador + "dias")
}
let idade = parseInt(prompt("Quantos anos você tem?"));
let multiplicador = calculadoraDias(idade)
imprimir(multiplicador)

