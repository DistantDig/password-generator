// Assignment Code
var generateBtn = document.querySelector("#generate");

var length;

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

  //Prompt loop requesting length
  while (!(length >= 8 && length <=120)) {

    //Acceptable length
    if (length >= 8 && length <=120) {
      //Save length and continue
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
    } 
    
    //Pressing 'Cancel' on confirm prompt
    else {
      length = undefined;
      console.log(length);
      return;
   }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

