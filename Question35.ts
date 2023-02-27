/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with 
a message that reads I love TypeScript. 
Make a large shirt and a medium shirt with the default message, 
and a shirt of any size with a different message.*/

function make_shirt(size: string = "Large", message: string = "I love typescript") {
    console.log(`Shirt size: ${size.toUpperCase()} \nMessage: ${message}`);
}

//large shirt with default message
make_shirt();
//medium shirt with default message
make_shirt("medium");
//shirt of any size with custom message
make_shirt("small", "friends!");
