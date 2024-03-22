"use strict";
const names = ['Hassan', 'Zahid', 'Asad', 'Eid'];
for (const name of names) {
    console.log(name);
}
// Greetings: Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, but each message should be personalized with the person’s name.//
for (const name of names) {
    console.log(`This is the name of person ${name}.`);
}
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
const favoriteVehicales = ['Tesla Model S', 'Audi R8', 'Porsche 911', 'Ford Mustang', 'bike'];
for (const car of favoriteVehicales) {
    console.log(`I would like to own a ${car}`);
}
