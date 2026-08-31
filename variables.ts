//variables
let course : string = "TypeScript"
let price: number = 990;
let isCompleted: boolean = false;

course = "javascript"

//any
let value : any = 300
value = "dhanush"
value = [];
value = {};

//unknown
//unknown is safe than 'any'
let response: unknown = "dhanush"
if (typeof response === "string"){
    console.log(response.toUpperCase);
}


// void --------when are returning nothing from function
function greet(): void{
   console.log("hello");
}


//null
let user : null = null;

//undefined
let person : undefined = undefined;
console.log(typeof person);