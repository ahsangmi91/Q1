/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/

let alien_color: string = 'green'; // or 'yellow', or 'red'

// Version that passes the if test
if (alien_color === 'green') {
  console.log("You earned 5 points!");
}

// Version that fails the if test (no output)
if (alien_color !== 'green') {
  // no output
}
/*Note that in TypeScript, you need to declare the type of the variable alien_color.
 Here, we are using the string type.
In the first if statement, we are checking whether alien_color is equal to 'green'. 
If it is, we print out the message.
In the second if statement, we are checking whether alien_color is not equal to 'green'. 
If it is not equal to 'green', we do nothing, so there is no output.*/