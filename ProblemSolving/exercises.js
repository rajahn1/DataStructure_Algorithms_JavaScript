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

console.log(sameFrequency(123, 213))






