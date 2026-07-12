// Loose equality (==) → type conversion allowed
console.log(5 == "5");   // true
console.log(null == undefined); // true

// Strict equality (===) → type + value both must match
console.log(5 === "5");  // false
console.log(null === undefined); // false
