/*City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:

"Lahore, Pakistan"*/

function city_country(city: string = "Karachi", country: string = "Pakistan") {
    console.log(`"${city}, ${country}"`);
}

city_country();
city_country("Sydney", "Australia");
city_country("Istanbul", "Turkey");
city_country("London", "England");
