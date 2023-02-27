/*Your Own Array: Think of your favorite mode of transportation, 
such as a motorcycle or a car, and make a list that stores several examples. 
Use your list to print a series of 
statements about these items, such as “I would like to own a Honda motorcycle.”*/

let vehicles = ["TVS Apache RTR 160 sports bike", "Tesla Model S", "Ford Mustang", "Boeing 747"];

// Print a statement about each vehicle in the array
for (let i = 0; i < vehicles.length; i++) {
    console.log("I would like to own a " + vehicles[i] + ".");
}
