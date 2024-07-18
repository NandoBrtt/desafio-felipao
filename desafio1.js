let nome = "Fernando"
let xp = 7378

function nivelDoHeroi(xp){
switch (true) {
    case xp <= 1000:
         return "Ferro."
    case xp >= 1001 &&  xp <= 2000:
        return "Bronze."        
    case xp >= 2001 && xp<= 5000:
        return "Prata."
    case xp >= 6001 && xp <= 7000:
        return "Ouro."
    case xp >= 7001 && xp <= 8000:
        return "Platina."
    case xp >= 8001 && xp <= 9000:
        return "Ascendente."
    case xp >= 9001 && xp <= 10000:
        return "Imortal."
    default:
        return "Radiante."
    }
}

let nivel = nivelDoHeroi(xp)
console.log("O Herói de nome: " + nome + ", está no nível de: " + nivel)