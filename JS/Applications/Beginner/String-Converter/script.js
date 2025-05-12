function formatName(input) {
    let trimmed = input.trim(); /*Trims the input before editing it*/
    let words = trimmed.split(/\s+/);
    let capitalizedWords = words.map(function(word, index) {
        if (index === 0) {
          let first = word[0].toUpperCase();
          let rest = word.slice(1).toLowerCase();
          return first + rest;
        } else {
          return word.toLowerCase();
        }
    });
    let formattedName = capitalizedWords.join(" "); /*formats new string*/
    let characterCount = formattedName.replace(/\s/g, "").length; 
    return `${formattedName} (${characterCount} characters)`; /*displays the result*/
}

// DOM references
const nameInput = document.getElementById("wordInput");
const formatBtn = document.getElementById("submit");
const resultDiv = document.getElementById("result");


// Event listener
formatBtn.addEventListener("click", function() {
    const userInput = wordInput.value; /*Adds the input and checks it*/
    if (userInput.trim() === "") {
      resultDiv.textContent = "Please enter a name.";
      return;
    }
    const formatted = formatName(userInput);
    resultDiv.textContent = formatted;
});