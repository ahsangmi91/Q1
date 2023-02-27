/*Alien Colors #3: Turn your if-else chain into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

let alienColor: string = "green";

if (alienColor === "green") {
  console.log("The player earned 5 points for shooting the green alien.");
} else if (alienColor === "yellow") {
  console.log("The player earned 10 points for shooting the yellow alien.");
} else if (alienColor === "red") {
  console.log("The player earned 15 points for shooting the red alien.");
}

alienColor = "yellow";

if (alienColor === "green") {
  console.log("The player earned 5 points for shooting the green alien.");
} else if (alienColor === "yellow") {
  console.log("The player earned 10 points for shooting the yellow alien.");
} else if (alienColor === "red") {
  console.log("The player earned 15 points for shooting the red alien.");
}

alienColor = "red";

if (alienColor === "green") {
  console.log("The player earned 5 points for shooting the green alien.");
} else if (alienColor === "yellow") {
  console.log("The player earned 10 points for shooting the yellow alien.");
} else if (alienColor === "red") {
  console.log("The player earned 15 points for shooting the red alien.");
}
