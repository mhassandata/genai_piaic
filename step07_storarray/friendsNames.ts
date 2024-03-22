const names: string[] = ['Hassan', 'Zahid', 'Asad', 'Eid'];

for (const name of names){
    console.log(name)
}


// Greetings: Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, but each message should be personalized with the person’s name.//

for (const name of names){
    console.log(`This is the name of person ${name}.`);
}

