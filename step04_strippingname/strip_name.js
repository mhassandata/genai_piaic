"use strict";
// Storing the name with whitespace characters at the beginning and end
const nameWithWhitespace = "\t\n John Doe \n\t";
// Printing the name with whitespace
console.log("Name with whitespace:");
console.log(nameWithWhitespace);
// Stripping the whitespace from both ends of the string and printing the name again
const strippedName = nameWithWhitespace.trim();
console.log("\nName after stripping whitespace:");
console.log(strippedName);
