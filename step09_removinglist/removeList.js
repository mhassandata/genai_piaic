"use strict";
// Initial guest list for dinner
let MyGuestList = ['Shah', 'Suraj', 'Khan'];
// Removing the guest who can't make it
MyGuestList = MyGuestList.filter(guest => guest !== 'Khan');
// Adding a new guest to the list
MyGuestList.push('Imran');
// Loop through the updated guest list and print an invitation message for each
for (const guest of MyGuestList) {
    console.log(`Dear ${guest}, I would be honored if you could join me for dinner.`);
}
console.log("Khan is not came to the ceremony");
