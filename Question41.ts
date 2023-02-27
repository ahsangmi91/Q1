/*Unchanged Magicians: 
Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original 
names and one array with the Great added to each magician’s name.*/


//Define an array of magician's names
const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Function to print each magician's name in the array
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Function to add "the Great" to each magician's name and return a new array
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `THE GREAT ${magician}`);
}

// Call make_great() with a copy of the array of magician's names
let greatmagicians: string[] = make_great([...magicians]);

// Call show_magicians() with each array to show the original and new arrays
console.log("Original Megicians:");
show_magicians(magicians);


console.log("Great Magician:");
show_magicians(greatmagicians)

