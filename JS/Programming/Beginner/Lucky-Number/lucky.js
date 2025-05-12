//Purpose: Create a program that generates a random "lucky number" for a user based on their birth year and favorite number.

const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


/*Let's start by creating a function with 2 parameters*/
function luckyNumber(birthYear, favNumber){
    //Next we should create three new variables for each Math method we will use 
    const baseNumber = Math.abs(birthYear - favNumber); /*Gets the absolute difference using Math.abs*/
    const randomNumber = Math.random() * 100; /*generates random number*/
    const luckyNumber = Math.floor((baseNumber + randomNumber) % 100); //Rounds luckyNumber after calculation

    return luckyNumber;
}

//Now, we can ask the user for input then return their luckyNumber 
rl.question("Enter your birth year: ", (birthYearInput) => {
  rl.question("Enter your favorite number: ", (favNumberInput) => {
    const birthYear = parseInt(birthYearInput, 10);
    const favoriteNumber = parseInt(favNumberInput, 10);

    const lucky = luckyNumber(birthYear, favoriteNumber);
    console.log("Your lucky number is: " + lucky);

    rl.close(); // Close the interface after getting the result
  });
});