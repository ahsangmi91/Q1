/*Checking Usernames: Do the following to create a program that simulates 
how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure 
one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. 
If it has, print a message that the person will need to enter a new username. 
If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

let current_users: string[] = ['ahsan', 'ali', 'bilal', 'abid', 'usman'];
let new_users: string[] = ['ahsan', 'ali', 'ather', 'asgher', 'shamim'];

for (let new_username of new_users) {
    let username_taken: boolean = false;
  
    for (let current_username of current_users) {
      if (new_username.toLowerCase() === current_username.toLowerCase()) {
        username_taken = true;
        break;
      }
    }
  
    if (username_taken) {
      console.log(`Sorry, the username "${new_username}" is already taken. Please choose a different username.`);
    } else {
      console.log(`Congratulations, the username "${new_username}" is available!`);
    }
  }
  /*This code first declares two arrays: 'current_users' and 'new_users'. 
  It then loops through each username in the 'new_users' array and checks if 
  it has already been used in the 'current_users' array. It does this by*/ 
