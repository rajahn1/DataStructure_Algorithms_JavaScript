
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
  return code > 96 && code < 123 || code > 47 && code < 58 || code > 64 && code < 91;
}

let c1 = performance.now();
console.log(charCount("RAFAEL123213!!!sdadas!daskdjsak]{}||sa ++..-- rrrRRaaAAff123920180129 "));
let c2 = performance.now();

console.log((c2 - c1) / 1000);

// receive a sorted array of integers, and found the first pair that the sum of this pair equals ZERO
// Example: 3 & -3, 1 pair that equals zero
// return undefined if the pair doesnt exist
function sumZero(arrNumbers) {
  let j = arrNumbers.length - 1;
  let i = 0;
  while (i < j) {

    const leftNumber = arrNumbers[i];
    const rightNumber = arrNumbers[j];
    const sum = leftNumber + rightNumber;

    if (sum == 0) return [leftNumber, rightNumber];

    if (sum > 0) {
      j--;
      continue;
    }
    if (sum < 0) {
      i++;
      continue;
    }
  }
};

let testArr = [-4, -3, -2, 0, 1, 4, 5];

let result = sumZero(testArr);
console.log(result);

function coutUniqueValues(arrNumbers) {
  let i = 0;

  if (arrNumbers.length == 0) return 0;

  for (let j = 1; j < arrNumbers.length; j++) {

    if (arrNumbers[i] != arrNumbers[j]) {
      i++;
      arrNumbers[i] = arrNumbers[j];
    }
  }

  return i + 1;
}

let uniqueValuesArr = [1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8];
let uniqueValuesCount = coutUniqueValues(uniqueValuesArr);
console.log("Unique values count: ", uniqueValuesCount);

