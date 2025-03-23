// transform a string depending on the first and last char;

// first char, letters transform: 
// $ -> jump letters two chars, example: a -> c, d -> f, z -> b
// ^ -> transform all letters to uppercase
// _ -> transform all letters to lowerCase

//last chars, numbers transform:
// # -> transform all numbers to 7
// / -> divide all numbers by 2 and round up
// % -> verify if is pair or even, if is pair transform to 0 and if is even transform to 1
// test
function transformString(str) {
  const firstChar = str[0];
  const lastChar = str[str.length - 1];

  let charAlgorithm;
  let numberAlgorithm;

  let stringTransformed = "";

  switch (firstChar) {
    case "$":
      charAlgorithm = (input) => jumpTwoChars(input);
      break;
    case "^":
      charAlgorithm = (input) => isCharUpperCase(input) ? input : input.toUpperCase();
      break;
    case "_":
      charAlgorithm = (input) => isCharLowerCase(input) ? input : input.toLowerCase();
      break;
    default:
      charAlgorithm = null;
  }

  switch (lastChar) {
    case "#":
      numberAlgorithm = () => 7;
      break;
    case "%":
      numberAlgorithm = (input) => isPair(input) ? 0 : 1;
      break;
    case "/":
      numberAlgorithm = (input) => Math.round(input / 2);
      break;
    default:
      numberAlgorithm = null;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if ((isCharLowerCase(char) || isCharUpperCase(char)) && charAlgorithm != null) {
      stringTransformed += charAlgorithm(char);
      continue;
    }

    if (isNumeric(char) && numberAlgorithm != null) {
      stringTransformed += numberAlgorithm(char);
      continue;
    }

    stringTransformed += char;
  }

  return stringTransformed;
}

function isNumeric(char) {
  return char.charCodeAt(0) > 47 && char.charCodeAt(0) < 58;
}

function isCharUpperCase(char) {
  return char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91;
}

function isCharLowerCase(char) {
  return char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123;
}

function isPair(char) {
  return parseFloat(char) % 2 == 0;
}

function jumpTwoChars(char) {
  const charCode = char.charCodeAt(0);

  if (charCode > 120 && charCode < 123 || charCode > 88 && charCode < 91)
    return String.fromCharCode(charCode - 24);

  return String.fromCharCode(charCode + 2);
}

console.log(transformString("1$$$$111zZz!/$/$!Rafa812377!!a#elld!sadasreqwwwzz11Aaa/"));


