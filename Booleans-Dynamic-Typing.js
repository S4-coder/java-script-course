// Boolean usage
let isLoggedIn = true;
let isOver18 = false;

if (isLoggedIn) {
  console.log("Welcome!");
}

// Truthy / Falsy
if (0) { console.log("Won't run"); }
if ("hello") { console.log("Will run"); }

// Dynamic typing
let x = 5;          // number
x = "hello";        // string
x = true;           // boolean
