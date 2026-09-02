type dhanush = {
    id : number,
    name: string,
    age: number,

}


let user : dhanush = {
    id: 1,
    name: "rohith",
    age : 22,
}


let student: dhanush = {
    id: 2,
    name: "rahul",
    age: 20
}










//Example - 2

type person = {
    id: number,
    name: string,
    age : number
}



const admin : person = {
    id :3,
    name: "admin",
    age: 30
}

const employee : person = {
    id: 4,
    name: "john",
    age: 28
}








type kumar = {
    id: number,
    name: string
}[]


let users : kumar =
[
    {
        id: 1,
        name : "Rohith"
    },
    {
        id: 2,
        name: "Rahul"
    }
]


// Type Aliases for functions

let add = (a: number,b:number) : number => a+b;

type calculation = (a: number,b: number) => number;

let sub : calculation = (a,b) => a - b;
let mul : calculation = (a,b) => a * b;




//Union Types


type UserID = number | string


let id1 : UserID = 101;
let id2 : UserID = "empoo1";



type statustype = "Success" | "Pending" | "Failed";

let status : statustype = "Success";
let status1 : statustype = "Pending";
let status2 : statustype = "Failed";



// intersection types

type Person = {
    name: string;
    age: number;
}

type Employee = {
    employeeID: number;
    salary: number;
}

type staff = Person & Employee;

let staff1 : staff = {
    name: "Rohith",
    age: 21,
    employeeID: 2001,
    salary : 50000
}


// Type Alias with Primitive Types

type username = string | number;


let username1: username = "Rohith";
let firstName: username = "Rahul";
let lastName: username = "Kumar";

