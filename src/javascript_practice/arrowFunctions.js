//jshint esversion:6

// regular JS function
var add = function (x, y) {
    return x + y;
};

// same above with Arrow Syntax
var add = (x, y) => x + y;


// concise bocy syntax, implied "return"
var func = x => x * x;

// with block body, explicit "return" needed
var func = (x, y) => { return x + y; };

// following  example where the first and second version of the function are the same
let greetUser = username => `Hello, ${username}!`;
let greetUserSecondVersion = username => { return `Hello, ${username}!` };
console.log(greetUser('Kenn') === greetUserSecondVersion('Kenn'));  // true

// simpler version that represents the syntax of React Component
var func = () => {
    console.log("Hello React");
};
func();

