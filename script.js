// Assignment Code
var generateBtn = document.querySelector("#generate");
var numericCharacters =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];



var characterPool = []
var finalPassword = []
function generatePassword () { 
var passWordLength = prompt ("How long would you like your password to be?")

if(passWordLength < 8 || passWordLength > 128){
  alert("WTF????? Must be greaer than 8 or less than 128!")
  return;
}

var chooseLower = confirm ("Do you want lowercase characters in your password?")
var chooseUpper = confirm ("Do you want uppercase characters in your password?")
var chooseSpecial = confirm ("Do you want special characters in your password?")
var chooseNumeric = confirm ("Do you want numeric characters in your password?")

if (chooseLower === true) {
  characterPool = characterPool.concat(lowerCase)
}
if (chooseUpper === true) {
  characterPool = characterPool.concat(upperCase)
}
if (chooseSpecial === true) {
  characterPool = characterPool.concat(specialCharacters)
}
if (chooseNumeric === true) {
  characterPool = characterPool.concat(numericCharacters)
}

for (var i = 0; i < passWordLength; i++){
  var newIndex = Math.floor(Math.random ()* characterPool.length )
  var indexValue = characterPool[newIndex]
finalPassword.push(indexValue)
console.log(finalPassword)
}

 return finalPassword.join("") 

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordTextArea = document.querySelector("#password");

  passwordTextArea.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
