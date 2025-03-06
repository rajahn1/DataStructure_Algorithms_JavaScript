
// 1 somar dois numeros
// 2 são dois números, positivos ou negativos?
// 3 deve retornar um número, float ou int?
//
// 5 numero 1 e numero 2
function sum(x, y) {
    return x + y;
}

// se o usuario botar uma string vazia, o que devemos retornar?
// se botar um outro tipo que nao seja string, um number ou booleano?
// se botar uma palavra com espaço?
function charCount(str) {

    // contar somente caracteres alfanumericos e minusculos;
    // iterar sobre a string
    // verificar qual o caracter, armazenar ele e a quantidade;
    // verificar se o caracter passado ja existe, se existir somar 1, se não criar 1 novo com quantidade 1;
    // se for uma entrada inválida, continua para o proximo
    // retornar um objeto com a key(char) e o valor (quantidade)
    // primeiro ignorar se é alfanumerico ou nao, só tentar adicionar todos no objeto

    const result = {};
    for (const char of str) {
        if (!isCharAlfaNumeric(char)) continue;
        result.hasOwnProperty(char) ? result[char]++ : result[char] = 1;
    }

    return result;
}

function isCharAlfaNumeric(char) {
    const code = char.charCodeAt(0);
    return code > 96 && code < 123 || code > 47  && code < 58 || code > 64 && code < 91;
}

let c1 = performance.now();
console.log(charCount("RAFAEL123213!!!sdadas!daskdjsak]{}||sa ++..-- rrrRRaaAAff123920180129 "));
let c2 = performance.now();

console.log((c2 - c1) / 1000);
