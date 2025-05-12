//This is an input template for Node.js for the browser 
// Prompt and alert will be used for the browser which is in the Applications folder 

const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ex.) Ask a question and store the answer
rl.question("What's your name? ", function(answer) {

  // Store the input using a variable
  const userName = answer;

  // Use console.log to display the output which can be used with "", '', or ``
  console.log(`Hello, ${userName}!`);

  // lastly you must close the interface
  rl.close();
});

/* Notes: 
Yes, a function is require for input and storage answer 

rl.question prompts the user and runs the callback once the input is received.

Always call rl.close() after you're done to prevent the script from hanging.

You can store multiple inputs by chaining or using async/await with promisify.

As seen here: 
const readline = require('readline');
const { promisify } = require('util');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = promisify(rl.question).bind(rl);

async function main() {
  const name = await question("What's your name? ");
  console.log(`Hello, ${name}!`);
  rl.close();
}

main();

*/
