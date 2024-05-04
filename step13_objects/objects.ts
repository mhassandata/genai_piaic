// // let person = "Hassan"

import { dirname } from "path";

// let person = {
//     name: "Hassan",
//     age: 29,
//     adress:{
//         street: "F8 65",
//         city: "Islamabad",
//         country: "Pakistan"
//     }
// }
// console.log(person)
// // console.log(person['name'])

// // #another method to do the same thing

// let student: {
//     name: string,
//     age: number
// }
// student = {
//     name: "Hassan",
//     age: 29
// }


//Custome data types
// type Students ={
//     name: string,
//     age: number
// }
// let student: Students = {
//     name: "Hassan",
//     age: 28

// }
// Read the article for other data types

interface Ball {
    diameter : number;
}
interface Sphere {
    diameter: number;
}

let ball1 : Ball = {
    diameter: 10
}

let sphere1: Sphere = {
    diameter: 20

}
interface Tube {
    diameter: number,
    length: number;
}
let tube1 Tube ={
    diameter: 10,
    length: 20
}

ball1 = sphere1
sphere1 = ball1

tube1 = ball1   //not equal
ball1 = tube1 //both are equal
