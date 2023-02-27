/*seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/


// Create an array of 5 places to visit
let placesToVisit = ['Istanbul', 'Sydney', 'Dubai', 'Mecca', 'Medina'];

// Print the original order of the array
console.log('Original Order:', placesToVisit);

// Print the array in alphabetical order
let sortedPlaces = placesToVisit.slice().sort();
console.log('Alphabetical Order:', sortedPlaces);

// Show that the original array is still in its original order
console.log('Original Order:', placesToVisit);

// Print the array in reverse alphabetical order
let reverseSortedPlaces = placesToVisit.slice().sort().reverse();
console.log('Reverse Alphabetical Order:', reverseSortedPlaces);

// Show that the original array is still in its original order
console.log('Original Order:', placesToVisit);

// Reverse the order of the array
placesToVisit.reverse();
console.log('Reversed Order:', placesToVisit);

// Reverse the order of the array again to get back to original order
placesToVisit.reverse();
console.log('Original Order:', placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log('Alphabetical Order:', placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();
console.log('Reverse Alphabetical Order:', placesToVisit);


