function areThereDuplicates(arr) {
  let lookUp = {};

  for (var item of arr) {
    lookUp[item] = (lookUp[item] || 0) + 1;
  }

  for (var key in lookUp) {
    if (lookUp[key] > 1) return true;
  }

  return false;
}

let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
let arrChars = ["a", "b", "c", "g", "f"];

//console.log(areThereDuplicates(arrChars));

function sameFrequency(num1, num2) {
  const num1Str = num1.toString();
  const num2Str = num2.toString();

  if (num1Str.length != num2Str.length) return false;

  const frequency = {};

  for (const char of num1Str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (const char of num2Str) {
    if (!frequency[char]) return false;
    frequency[char]--
  }

  return true;
}

//console.log(sameFrequency(123, 213))

// accept a message and some letters
// return true if the message can be built with the letters
function constructNote(message, letters) {

  const frequency = {};

  for (const char of letters) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (const letter of message) {
    if (!frequency[letter]) return false;
    frequency[letter]--
  }

  return true;
}

//console.log(constructNote("rafael", "aafelzzrrrr"))
function findAllDuplicates(arrNumbers) {
  const frequency = {};
  const duplicateNumbers = [];
  for (const number of arrNumbers) {
    frequency[number] = (frequency[number] || 0) + 1;
  }

  for (const key in frequency) {
    if (frequency[key] > 1) duplicateNumbers.push(Number(key));
  }

  return duplicateNumbers;
}

// console.log(findAllDuplicates([2, 3, 3, 4, 5, 2, 5, 6, 7, 6, 8, 9, 9])); 

// mudar a estrutura de dados original, e adicionar referencias para fazer a comparacao neecessaria
// calcular se tem um par de numeros que a media deles corresponda ao targetAverage
// array is sorted
function averagePair(arrNumbers, targetAverage) {
  let start = 0;
  let end = arrNumbers.length - 1;

  while (start < end) {
    let firstNumber = arrNumbers[start];
    let secondNumber = arrNumbers[end];
    let avg = (firstNumber + secondNumber) / 2

    if (avg == targetAverage) return true
    else if (avg < targetAverage) start++
    else end--
  }
  return false
}
const arrAvg = [1, 2, 1, 2, 5];
const targetAverage = 3.5;

// console.log(averagePair(arrAvg, targetAverage))

// given two string, check if the first appear in the seccond without the other change
function isSubsequence(firstStr, secondStr) {
  if (firstStr == secondStr) return true;

  let i = 0;
  for (const char of secondStr) {
    if (char == firstStr[i]) i++;
    if (i == firstStr.length) return true;
  }

  return false;
}

const word = "abc";
const wordToSearch = "acrabadabra";

//console.log(isSubsequence(word, wordToSearch));

// o log n
function findPairSorted(arr, n) {
  if (arr.length === 0) return false;

  arr.sort((a, b) => a - b);

  let i = 0;
  let j = 1;

  while (j < arr.length) {
    const diff = arr[j] - arr[i];

    if (i !== j && diff === Math.abs(n)) return true;
    else if (diff < Math.abs(n)) j++;
    else i++;

    if (i === j) j++; // garantir j sempre à frente
  }

  return false;
}
// o(n)

function findPairSorted2(arr, n) {
  if (n == 0) {
    const frequency = {};
    for (const number of arr) {
      if (frequency[number]) return true;
      frequency[number] = 1;
    }

    return false;
  }

  const set = new Set();

  for (const num of arr) {
    if (set.has(num + n) || set.has(num - n)) return true;
    set.add(num);
  }

  return false;
}

const arrPairs = [-3, -2, 1, 2, 3, -4];
const n = 7;
console.log(findPairSorted2(arrPairs, n));

function findSubArrayMaxSum(arrNumbers, elements) {
  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < elements; i++) {
    maxSum += arrNumbers[i];
  }

  tempSum = maxSum;

  for (let i = elements; i < arrNumbers.length; i++) {
    tempSum = tempSum - arrNumbers[i - elements] + arrPairs[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

function miniSubArrayLen() {

}





