/*Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly.*/

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function cardetails(manufacturer: string, model: string, ...args: any[]): Car {
    const car: Car = {
        manufacturer,
        model,
    };
    for (let i=0; i < args.length; i += 2) {
        const key = args[i];
        const value = args[i + 1];
        car[key] = value;
    }
    return car;
}

const myCar = cardetails("toyota", "corolla", "color", "blue", "year")