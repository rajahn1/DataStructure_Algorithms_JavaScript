
function areThereDuplicates(arr) {
  let lookUp = {};

  for (item of arr) {
    lookUp[item] = (lookUp[item] || 0) + 1;
  }

  for (key in lookUp) {
    if (lookUp[key] > 1) return true;
  }

  return false;
}

let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
let arrChars = ["a", "b", "c", "g", "f"];

console.log(areThereDuplicates(arrChars));


