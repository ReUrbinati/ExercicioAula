
function calculadoraDias(valor) {
    return valor * 365;
}
function imprime(resposta) {
    document.getElementById('resultado').textContent = "Sua idade em dias é" + resposta;
}
document.getElementById('calcularBtn').addEventListener('click', function () {
    let idade = parseInt(document.getElementById('idadeInput').value);
    let total = calculadoraDias (idade);
    imprime(total);
})


