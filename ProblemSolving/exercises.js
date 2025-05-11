
//  Given two positive integers, return if they have the same frequency
// Example: 123 and 321 or 312
//  Time O(N)
function sameFrequency(num1, num2) {
  let num1Str = num1.toLocaleString();
  let num2Str = num2.toLocaleString();

  if (num1Str.length != num2Str.length) return false;

  for (let i = 0; i < num1Str.length; i++) {
    let char = num1Str[i];
    let char2 = num2Str[i];
  }

  return false;
}

console.log(sameFrequency(300, 32));

