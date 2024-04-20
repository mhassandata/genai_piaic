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
export {};
