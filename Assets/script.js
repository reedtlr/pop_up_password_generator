var generateBtn = document.querySelector("#generate");
var passwordText = document.getElementById("#password");

// character codes in ASCII to avoid listing each character 
var UPPERCASE_CHAR_CODES = arrayFormLowToHigh(65, 90);


var SYMBOLS_CHAR_CODES = arrayFormLowToHigh(33, 47).concat(arrayFormLowToHigh(58, 64).concat
(arrayFormLowToHigh(91, 96)).concat(arrayFormLowToHigh(123, 126))
)

var LOWERCASE_CHAR_CODES = arrayFormLowToHigh(97, 122);
var NUMBER_CHAR_CODES = arrayFormLowToHigh(48, 57);


generateBtn.addEventListener("click", e=> {
  e.preventDefault()
  var password = writePassword()
  document.getElementById("password").placeholder = password
}) 

// Write password to the #password input
function writePassword() {
  var characterAmountEL = prompt("How long do you want your password? (8-128 characters)")
  if (characterAmountEL >128 || characterAmountEL <8){
    alert("Please choose between 8 and 128 characters")
    document.querySelector("#password").textContent = " ";
    return
  } else {
    var includeLowercaseEL = confirm("Click 'ok' to include lowercase letters")
    var includeUppercaseEL = confirm("Click 'ok' to include uppercase letters")
    var includeNumbersEL = confirm("Click 'ok' to include numbers")
    var includeSymbolsEL = confirm("Click 'ok' to include symbols")
   
 
  }

  if (includeLowercaseEL !== true && includeNumbersEL !== true && includeSymbolsEL !== true && includeUppercaseEL !== true){
    alert("You must select at least one type of character to continue")
    writePassword()
  } 
    var results = {
      characterAmountEL: characterAmountEL, 
      includeLowercaseEL: includeLowercaseEL,
      includeNumbersEL: includeNumbersEL,
      includeSymbolsEL: includeSymbolsEL,
      includeUppercaseEL: includeUppercaseEL
    }
    return generatePassword(results)
  }
  

 // function to generate a password based on user input and character sets 
 function generatePassword(results) {
   document.querySelector("#password").textContent = ""
  var options = results;
  var charCodes = []
  if (options.includeLowercaseEL === true) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES);
  if (options.includeUppercaseEL === true) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (options.includeNumbersEL === true) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  if (options.includeSymbolsEL === true) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES); 
  var passwordCharacters = []
  for (var i = 0; i < options.characterAmountEL; i++) {
      var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
      passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join(''); 
}

// a loop to finds character sets for each type
function arrayFormLowToHigh(low, high) {
  var array = [];
  for (var i = low; i <= high; i++) {
  array.push(i);
  }
  return array;
}
