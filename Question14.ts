/*More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/

// Start with the previous guest list
let guestList = ['Nelson Mandela', 'Imran Khan', 'Tariq Jamil']
console.log(`Inviting ${guestList.length} more guests to dinner.`);

// Informing people that you found a bigger dinner table
console.log("Great news, we found a bigger dinner table!");

// Add one new guest to the beginning of your array
guestList.unshift('Barak Obamm');

// Add one new guest to the middle of your array
guestList.splice(Math.ceil(guestList.length / 2), 0, 'Martin Luther King Jr.');

// Use append() to add one new guest to the end of your list
guestList.push('Malala Yousafzai');

// Print a new set of invitation messages
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, please join us for dinner on Saturday night.`);
}
