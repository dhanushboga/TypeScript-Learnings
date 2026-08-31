function greet(): void{
    console.log("hello");
}
greet();

//function with parameters
function greet1(name: string) : void{
     console.log(`hello ${name}`);
}
greet1("dhanush")

//function with multiple parameters
function add(a: number,b: number) : number{
    return a+b;
}
console.log(add(10,20));


//optional parameters
function greet3(name: string, age?: number){
    console.log(name,age);
}
greet3("dhanush");
greet3("dhanush",29);


// default parameters
function greet4(name: string = "guest") : void {
    console.log(name);
}
greet4();
greet4("dhanush");



//rest parameters
function sum(...numbers: number[]) : number{
 return numbers.reduce((total, num) => total + num,0)
}
console.log(sum(10,20,30,40,50));


//arrow function
const add2 = (a: number,b: number) : number => {
    return a+b;
};
console.log(add(10,20));


// function returning an Array
function getNumbers(): number[] {
    return [10,20,30];
}
console.log(getNumbers());


// function returning object
 
function getuser() : {name : string, age : number, isadmin: boolean}{
    return {
        name : "dhanush",
        age: 27,
        isadmin : true
    };
}
console.log(getuser());