// Assignment code here

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var character = ",./;'[]=!@#$%^&*<>?:";
var password = []

function generatePassword() {
  getLength();
  getLowercase();
  getUppercase();
  getNumber();
  getCharacter();
}

function getLength(){
  var userInput = window.prompt("Enter desired password length. Must be between 8 and 128.");
  if (userInput < 8) {
    window.alert ("Length must be between 8 and 128. Please try again")
    getLength();
  } else if (userInput > 128){
    window.alert ("Length must be between 8 and 128. Please try again")
    getLength();
  }else {
    var passLength = userInput;
    window.alert (passLength)
  }
}

function getLowercase() {
  var userLower = window.prompt("Should it include lower case letter? Enter Y for yes and N for no");
  if (userLower == "n") {
    return;
  } else if (userLower == 'y') {
    password.push(lowerCase);
    window.alert ("password");
  } else {
    window.alert ("Please try again.");
    userLower = window.prompt("Should it include lower case letter? Enter Y for yes and N for no");
  }
}

function getUppercase() {
  var userUpper = window.prompt("Should it include upper case letters? Enter Y for yes and N for no");
  if (userUpper == "n") {
    return;
  } else if (userUpper == "y") {
    password.push(upperCase);
    window.alert ("password");
  } else {
    window.alert ("Please try again.");
    userUpper = window.prompt("Should it include upper case letters? Enter Y for yes and N for no");
  }
}

function getNumber() {
  var userNumber = window.prompt("Should it include numbers? Enter Y for yes and N for no.");
  if (userNumber == 'n'){
    return;
  }else if (userNumber == 'y'){
    password.push(number);
    window.alert("password")
  } else {
    window.alert ("Please try again.");
    userNumber =  window.prompt("Should it include numbers? Enter Y for yes and N for no.")
  }
 
}

function getCharacter() {
  var userCharacter = window.prompt("Should it include special characters? Enter Y for yes and N for no.");
  if (userCharacter == 'n') {
    return;
  } else if (userCharacter == 'y') {
    password.push(character);
    window.alert ("password")
  } else {
    window.alert ("Please try again");
    userCharacter = window.prompt("Should it include special characters? Enter Y for yes and N for no.")
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
