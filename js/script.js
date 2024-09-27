
// ------- Exemplo de SWITCASE3

function verificaOperacao() {
    let numX = Number(document.getElementById("numX").value)
    let numY = Number(document.getElementById("numY").value)
    let operacao = Number(document.getElementById("operacao").value)
    let respostaOperacao
    switch(operacao){
        case "soma":
            respostaOperacao = "Janeiro"
            break
        case "subtracao":
            respostaOperacao = "Fevereiro"
            break
        case "divisao":
            if (numY == 0)
            respostaOperacao = "Março"
            break
        default:
            nomeMes = "Número inválido"
            break
    }
    document.getElementById("nomeMes").innerText = nomeMes
}