let vitorias = 0
let derrotas = 0

function saldoVitorias(vitorias, derrotas) {
    let saldoLocal = vitorias - derrotas;
    return saldoLocal;
}

function nivelDoHeroi() {
    const resultado = saldoVitorias(vitorias, derrotas);

switch (true) {
    case resultado < 10:
        return "Ferro";
    case resultado <= 20:
        return "Bronze";
    case resultado <= 50:
        return "Prata";
    case resultado <= 80:
        return "Ouro";
    case resultado <= 90:
        return "Diamante";
    case resultado <= 100:
        return "Lendário";
    default:
        return "Imortal";
    }
}

let saldo = saldoVitorias(vitorias, derrotas);
let nivel = nivelDoHeroi();
console.log("O Herói tem saldo de " + saldo + " e está no nível de " + nivel);