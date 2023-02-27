/*Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.*/




// Create an array of people to invite to dinner
let guestList = ["Albert Einstein", "Imran Khan", "Tariq Jamil"];

// Print the original invitations
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ", you are cordially invited to a dinner party at my house. Please let me know if you can attend. Best regards, [Muhammad Ahsan]");
}

// Change one of the guests and print the new invitations
guestList[2] = "Nelson Mandela"; // Replace Albert Einstein with Nelson Mandela
console.log("Unfortunately, " + guestList[0] + " cannot make it to the dinner party. Instead, we have invited " + guestList[2] + " to join us.");

for (let i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ", you are cordially invited to a dinner party at my house. Please let me know if you can attend. Best regards, [Muhammad Ahsan]");
}
