// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  /*
   *  The following steps must be taken to generate a password:
   *    1. Prompt the user for a password length.
   *    2. If the length of the password is not within the proper range, complain and stop. Otherwise, continue.
   *    3. Ask the user if they want upper case letters included in the password
   *    4. Ask the user if they want lower case letters included in the password
   *    5. Ask the user if they want numeric values included
   *    6. Ask the user if they want special characters included
   *    7. If the user responds 'No' to the previous 4 steps, complain and quit. Otherwise, continue with generation.
   *    8. Generate a random character.
   *    9. See if it satisfies one criteria they select.
   *    10. If it does, add that to the password. Otherwise, generate a new random character.
   *    11. Keep doing this until the length specified is hit.
   *    12. Return password.
   */

  /* 
   *  1. Prompt the user for a password length.
   */
  var passwordLength = parseInt(prompt("Enter a password length (the value must be an integer between 8 and 128): "));

  console.log(passwordLength);
  console.log(typeof passwordLength);

  /*
   *  2. If the length of the password is not within the proper range, complain and stop. Otherwise, continue.
   */
  if (passwordLength === NaN || passwordLength < 8 || passwordLength > 128) {
    alert("ERROR: The password length must be an integer between 8 and 128 (inclusive).");

    return;
  }
}