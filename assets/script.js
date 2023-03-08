// Assignment code here
function generatePassword() {
  var password = "";
  var validChar = "";

  // check password length
  var passwordLength = window.prompt("How many characters would you like to have in your password?(Input number between 8 and 128!)");

  while (true) {
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length must be between 8 and 128 characters.");
      passwordLength = window.prompt("How many characters would you like to have in your password?(Input number between 8 and 128!)");
    } else {
      break;
    }
  }
  
  // check character type
  var lcaseLetter = window.confirm("Would you like to include lowercase letters?");
  var ucaseLetter = window.confirm("Would you like to include uppercase letters?");
  var num = window.confirm("Would you like to include numeric characters?");
  var special = window.confirm("Would you like to include special characters?");

  while (true) {
    if (!lcaseLetter && !ucaseLetter && !num && !special) {
      window.alert("You must choose at least one character type to include in your password.");
      lcaseLetter = window.confirm("Would you like to include lowercase letters?");
      ucaseLetter = window.confirm("Would you like to include uppercase letters?");
      num = window.confirm("Would you like to include numeric characters?");
      special = window.confirm("Would you like to include special characters?");
    } else {
      break;
    }
  } (!lcaseLetter && !ucaseLetter && !num && !special)

  // generate password
  if (lcaseLetter) {
    validChar += "qwertyuiopasdfghjklzxcvbnm";
  }
  if (ucaseLetter) {
    validChar += "QWERTYUIOPASDFGHJKLZXCVBNM";
  }
  if (num) {
    validChar += "1234567890";
  }
  if (special) {
    validChar += "`-=[]\\;',./~!@#$%^&*()_+{}|:\"<>?";
  }

  for (var i = 0; i < passwordLength; i++) {
    password += validChar.charAt(Math.floor(Math.random() * validChar.length));
  }

  // show result
  window.alert("Your secure password is: " + password);
  return password;
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
