// function greet(name:string){
//     console.log("Hello" +name)
// }
//parameters, augruments 
// zero parametres 
function getFullTime(hours, minutes) {
    if (!hours) {
        return `00:${minutes}`;
    }
    if (!minutes) {
        return `${hours}:00`;
    }
    return `${hours}:${minutes}`;
}
//arow funciton
let getFullTime2 = (hours, minutes) => {
    if (!hours) {
        return `00:${minutes}`;
    }
    if (!minutes) {
        return `${hours}:00`;
    }
    return `${hours}:${minutes}`;
};
getFullTime2(2); //funciton calling
export {};
// let fullTime3 =() => 30 //expression
// let fullTime4 =() => a + b;
