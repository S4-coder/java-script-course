let bigNumber = 9007199254740991n;
let huge = 12345678901234567890n;

let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 === id2); // false

console.log(bigNumber + huge); // 12345678901234567891n
console.log(typeof bigNumber); // "bigint"
console.log(typeof id1); // "symbol"
