"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet() {
    console.log("hello");
}
greet();
//function with parameters
function greet1(name) {
    console.log(`hello ${name}`);
}
greet1("dhanush");
//function with multiple parameters
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
//optional parameters
function greet3(name, age) {
    console.log(name, age);
}
greet3("dhanush");
greet3("dhanush", 29);
// default parameters
function greet4(name = "guest") {
    console.log(name);
}
greet4();
greet4("dhanush");
//rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(10, 20, 30, 40, 50));
//arrow function
const add2 = (a, b) => {
    return a + b;
};
console.log(add(10, 20));
// function returning an Array
function getNumbers() {
    return [10, 20, 30];
}
console.log(getNumbers());
// function returning object
function getuser() {
    return {
        name: "dhanush",
        age: 27,
        isadmin: true
    };
}
console.log(getuser());
//# sourceMappingURL=functions.js.map