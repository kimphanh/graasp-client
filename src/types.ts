export type OnChangeLangProp = (lang: string) => void;


function resolveAfter2Seconds(x) {
  return 10;
}

async function f1() {
  const x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();

// critical vulnerability
const crypto = require("crypto");

crypto.createCipheriv("DES", "key", "iv");

// high bug reliability issue
const numbers = [10, 2, 30, 1, 5];
numbers.sort(); // Noncompliant: lexicographic sort
console.log(numbers); // Output: [1, 10, 2, 30, 5]
