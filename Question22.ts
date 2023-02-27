//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

let x = ["cars", "bikes", "buses", "trucks", "vans"]
let y = [10, 20, 40, 60, 80]

//Tests for equality and inequality with strings
console.log(`Is x[0] equal to "cars"? I predict true.`);
console.log(x[0] == "cars");

console.log(`Is x[1] not equal to "buses"? I predict true.`);
console.log(x[1] != "buses");

//Tests using the lower case function
console.log(`Is x[2] equal to "Buses" (case-insensitive)? I predict true.`);
console.log(x[2].toLowerCase() == "buses");

console.log(`Is x[3] not equal to "TRUCKS" (case-insensitive)? I predict false.`);
console.log(x[3].toLowerCase() != "TRUCKS");

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(`Is y[2] equal to 40? I predict true.`);
console.log(y[2] == 40);

console.log(`Is y[4] not equal to 70? I predict true.`);
console.log(y[4] != 70);

console.log(`Is y[1] greater than y[0]? I predict true.`);
console.log(y[1] > y[0]);

console.log(`Is y[3] less than y[2]? I predict false.`);
console.log(y[3] < y[2]);

console.log(`Is y[0] greater than or equal to 10? I predict true.`);
console.log(y[0] >= 10);

console.log(`Is y[2] less than or equal to 60? I predict true.`);
console.log(y[2] <= 60);

//Tests using "and" and "or" operators
console.log(`Is x[1] equal to "bikes" and y[2] equal to 40? I predict true.`);
console.log(x[1] == "bikes" && y[2] == 40);

console.log(`Is x[0] not equal to "cars" or y[3] not equal to 50? I predict true.`);
console.log(x[0] != "cars" || y[3] != 50);

//Test whether an item is in a array
console.log(`Is "trucks" in the x array? I predict true.`);
console.log(x.includes("trucks"));
console.log(`Is 30 in the y array? I predict false.`);
console.log(y.includes(30));
//Test whether an item is not in a array
console.log(`Is "scooters" not in the x array? I predict true.`);
console.log(!x.includes("scooters"));

console.log(`Is 50 not in the y array? I predict true.`);
console.log(!y.includes(50));


