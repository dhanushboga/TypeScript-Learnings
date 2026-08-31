"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//variables
let course = "TypeScript";
let price = 990;
let isCompleted = false;
course = "javascript";
//any
let value = 300;
value = "dhanush";
value = [];
value = {};
//unknown
//unknown is safe than 'any'
let response = "dhanush";
if (typeof response === "string") {
    console.log(response.toUpperCase);
}
// void --------when are returning nothing from function
function greet() {
    console.log("hello");
}
//null
let user = null;
//undefined
let person = undefined;
console.log(typeof person);
//# sourceMappingURL=variables.js.map