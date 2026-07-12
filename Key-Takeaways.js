// Identifiers → camelCase for variables/functions, PascalCase for classes
let userName = "Alice";
class UserAccount {}

// Booleans → true/false + truthy/falsy
let isActive = true;

// Strings → single, double, backticks
let msg = `Hello ${userName}`;

// Concatenation vs Template Literals
let concatMsg = "Hello " + userName;
let templateMsg = `Hello ${userName}`;

// Null vs Undefined
let x;          // undefined
let y = null;   // null

// Equality
console.log(5 == "5");   // true
console.log(5 === "5");  // false
