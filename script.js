// Assignment Code
var generateBtn = document.querySelector("#generate");

var length;
var lowercase;
var uppercase;
var numeric;
var special;

var characters;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  passwordConfiguration();
  //Checks for at least one character selection
  if (characters == undefined || characters == null || characters == false) {
    return;
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//PASSWORD CONFIGURATION FUNCTIONS

function passwordConfiguration() {
  
  //Reset variables
  length = undefined;
  lowercase = undefined;
  uppercase = undefined;
  numeric = undefined;
  special = undefined;
  
  characters = undefined;

  //Prompt requesting length
  promptLength();
  if (length == undefined || length == null) {
    return;
  }

  //Character configuration prompts
  promptLowercase();
  promptUppercase();
  promptNumeric();
  promptSpecial();

  //Ensures at least one character is selected
  ensureCharacters();
}

function promptLength() {

  //Initial prompt requesting length
  length = prompt("Please enter a password length of 8-128", "8");
  console.log("Length: " + length);

  //Prompt loop requesting length
  while (!(length >= 8 && length <=128)) {

    //Acceptable length
    if (length >= 8 && length <=128) {
      console.log("Length: " + length);
      return length;
    } 
    
    //Pressing 'Cancel' on initial prompt
    else if (length == null) {
      length = undefined;
      console.log("Length: " + length);
      return;
    } 
    
    //Invalid length triggers new prompt
    else if (confirm("Please enter a value between 8-128") == true) {
      length = prompt("Please enter a password length of 8-128", "8");
      console.log("Length: " + length);
    } 
    
    //Pressing 'Cancel' on confirm prompt
    else {
      length = undefined;
      console.log("Length: " + length);
      return;
    }
  }
}

function promptLowercase() {

  //Confirm prompt to configure using lowercase characters
  lowercase = confirm("Click 'OK' if you would like lowercase characters");
  console.log("Lowercase: " + lowercase);
  return lowercase;
}

function promptUppercase() {

  //Confirm prompt to configure using uppercase characters
  uppercase = confirm("Click 'OK' if you would like uppercase characters");
  console.log("Uppercase: " + uppercase);
  return uppercase;
}

function promptNumeric() {

  //Confirm prompt to configure using numeric characters
  numeric = confirm("Click 'OK' if you would like numeric characters");
  console.log("Numeric: " + numeric);
  return numeric;
}

function promptSpecial() {

  //Confirm prompt to configure using special characters
  special = confirm("Click 'OK' if you would like special characters");
  console.log("Special: " + special);
  return special;
}

function ensureCharacters() {

  //Initial check if at least one character type is selected
  if (!lowercase && !uppercase && !numeric && !special) {

    //Prompt loop to select at least one character
    while (!lowercase && !uppercase && !numeric && !special) {
      
      //Characters selected
      if (lowercase || uppercase || numeric || special) {
        console.log("characters: " + characters);
        return;
      } 
      
      //Pressing 'Cancel' on initial prompt
      else if (characters == false) {
        characters = false;
        console.log("characters: " + characters);
        return;
      } 
      
      //Second prompt requesting characters
      else if (confirm("Please select at least one character type") == true) {
        promptLowercase();
        promptUppercase();
        promptNumeric();
        promptSpecial();
        console.log("characters: " + characters);
      } 
      
      //Pressing 'Cancel' on confirm prompt
      else {
        characters = false;
        console.log("characters: " + characters);
        return;
      }
    }
  } 
  
  //Characters are selected initially
  else {
    characters = true;
    return;
  }
}


//PASSWORD GENERATION FUNCTIONS

function generatePassword() {
  
  //Resets password
  password = "";

  //Loops for as long as the password has not met length requirement
  while (password.length < length) {
    console.log("Password: " + password);

    //Adds 1 random character
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        if (lowercase) {
          password += randomLowercase();
          console.log("Password: " + password);
        }
        break;
      case 1:
        if (uppercase) {
          password += randomUppercase();
          console.log("Password: " + password);
        }
        break;
      case 2:
        if (numeric) {
          password += randomNumeric();
          console.log("Password: " + password);
        }
        break;
      case 3:
        if (special) {
          password += randomSpecial();
          console.log("Password: " + password);
        }
        break;
    }
  }

  return password;

}

//Random character generators
function randomLowercase() {
  var characters = "abcdefghijklmnopqrstuvxyz"
  return characters.charAt(Math.random() * 27);
}

function randomUppercase() {
  return randomLowercase().toUpperCase();
}

function randomNumeric() {
  var characters = "0123456789"
  return characters.charAt(Math.random() * 9);
}

function randomSpecial() {
  var characters = "!@#$%^&*()~<>?:;,.-=_+"
  return characters.charAt(Math.random() * 23);
}
