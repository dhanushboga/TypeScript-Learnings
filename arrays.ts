let fruits: string[] = ["apple","mango","orange"]
let marks: number[] = [90,67,89];

let status : boolean[] = [true, false,true];


//read only ----it cannot be updated 
let marks1:readonly number[] = [90,67,89];

//object

let user:{name: string,age: number} = {
    name : "dhanush",
    age : 22
}


//nested object
let student: {
    name: string,
    address:{
        city : string,
        pincode:number
    }
} = {
    name: "Dhanush",
    address: {
        city: "vizag",
        pincode: 535009
    }

}




//array of objects
let marks2: number[] = [98,42,65];
let users :{
    id: number,
    name: string
}[]= [
    {
        id: 1,
        name: "rohith"
    },
    {
        id : 2,
        name: "rahul"
    }

]

//array of tuples
let marks5:[string,number] = ["dhanush",85]

let arrayTuple: [string,number][] = [
    ["dhanush",200],
    ["sai",100]
]