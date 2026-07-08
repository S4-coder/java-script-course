let result1 = 0 / 0;             // NaN
let result2 = Math.sqrt(-1);     // NaN
let result3 = Number("abc");     // NaN
let result4 = parseInt("hello"); // NaN

let x;
let result5 = x * 5;             // NaN

console.log(isNaN(NaN));         // true
console.log(Number.isNaN(NaN));  // true
