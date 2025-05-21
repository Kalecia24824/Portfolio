/* Purpose: Create a number guessing game where the user can guess three times
to see if the answer is correct. MUST use loops (for or while), conditional logic (if..else) and use prompt by using readline for Node.js and output using console.log()
*/

//Firstly, we must add readline for input 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Next, let define variables 
const correctNumber = Math.floor(Math.random() * 10) + 1; //Generates a random number 

let maxAttempts = 3; //Number of tries 

let attempts = 0; 

//Display the intro 
console.log("Welcome to the Number Guessing Game!");
console.log("Here, you have 3 tries to guess a number from 1 to 10. Good luck!");

//Now we are going to create a function called askGuess to store each attempt the user makes along with seeing if the guess is correct 
function askGuess(){
    rl.question(`Attempt ${attempts + 1}: Your guess? `, (input) => {
    const guess = parseInt(input); //stores input

    if (isNaN(guess)) {
      console.log("⚠️ Please enter a valid number.");
      askGuess(); // Try again without using up an attempt
      return;
    }

    attempts++;

    if (guess === correctNumber) { //if loop to determine if the guess is correct
      console.log("That's correct! You guessed the right number!");
      rl.close();
    } else if (attempts >= maxAttempts) {
      console.log(`Sorry, out of attempts. The number was ${correctNumber}.`);
      rl.close();
    } else {
      console.log("Nope, wrong guess. Try again.");
      askGuess(); // Repeat
    }
  });
}
askGuess(); //closes the function