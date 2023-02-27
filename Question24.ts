/*Alien Colors #2: Choose a color for an alien as you did in above Exercise, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/

let alien_color: string = 'green'; // can be 'green', 'yellow', or 'red'

// Version 1: runs the if block
if (alien_color === 'green') {
  console.log("The player just earned 5 points for shooting the alien.");
}

// Version 2: runs the else block
if (alien_color !== 'green') {
  console.log("The player just earned 10 points.");
}

