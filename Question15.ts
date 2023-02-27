/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/



// create array of guests
let guests = ["Nelson Mendela", "Malala Yousufzai", "Imran Khan", "Tariq Jamil", "Martin Luther King Jr"];

// print message about table size
console.log("Unfortunately, the new table won't arrive in time for dinner. We can only invite two guests.");

// remove guests one at a time until only two are left
while (guests.length > 2) {
  let removedGuest = guests.pop();
  console.log("Sorry, " + removedGuest + ", we can't invite you to dinner.");
}

// print invitation for remaining guests
console.log(guests[0] + " and " + guests[1] + ", you're still invited to dinner!");

// remove the last two names from the list
guests.pop();
guests.pop();

// print the empty list
console.log("Guest list: " + guests);

