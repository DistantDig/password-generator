// Assignment Code
var generateBtn = document.querySelector("#generate");

var length;
var lowercase;
var uppercase;
var numeric;
var special;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  promptLength();
  if (length == undefined || length == null) {
    return;
  }
  promptLowercase();
  promptUppercase();
  promptNumeric();
  promptSpecial();
}


function promptLength() {

  //Initial prompt requesting length
  length = prompt("Please enter a password length of 8-128", "8");
  console.log(length);

  //Prompt loop requesting length
  while (!(length >= 8 && length <=120)) {

    //Acceptable length
    if (length >= 8 && length <=120) {
      console.log(length);
      return length;
    } 
    
    //Pressing 'Cancel' on initial prompt
    else if (length == null) {
      length = undefined;
      console.log(length);
      return;
    } 
    
    //Invalid length triggers new prompt
    else if (confirm("Please enter a value between 8-128") == true) {
      length = prompt("Please enter a password length of 8-128", "8");
      console.log(length);
    } 
    
    //Pressing 'Cancel' on confirm prompt
    else {
      length = undefined;
      console.log(length);
      return;
    }
  }
}


function promptLowercase() {

  //Confirm prompt to configure using lowercase characters
  lowercase = confirm("Click 'OK' if you would like lowercase characters");
  console.log(lowercase);
  return lowercase;

}

function promptUppercase() {

  //Confirm prompt to configure using uppercase characters
  uppercase = confirm("Click 'OK' if you would like uppercase characters");
  console.log(uppercase);
  return uppercase;

}

function promptNumeric() {

  //Confirm prompt to configure using numeric characters
  numeric = confirm("Click 'OK' if you would like numeric characters");
  console.log(numeric);
  return numeric;

}

function promptSpecial() {

  //Confirm prompt to configure using special characters
  special = confirm("Click 'OK' if you would like special characters");
  console.log(special);
  return special;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

