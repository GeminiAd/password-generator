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

/*
 *  The following steps must be taken to generate a password:
 *    1. Prompt the user for a password length.
 *    2. If the length of the password is not within the proper range, complain and stop. Otherwise, continue.
 *    3. Ask the user if they want upper case letters included in the password.
 *    4. Ask the user if they want lower case letters included in the password.
 *    5. Ask the user if they want numeric values included.
 *    6. Ask the user if they want special characters included.
 *    7. If the user responds 'No' to the previous 4 steps, complain and quit. Otherwise, continue with generation.
 *    8. Generate a password.
 *      a. Generate a list of acceptable characters based on the confirmation box selections.
 *      b. For each character in our password
 *        i. Choose a character from the list of acceptable characters at random
 *        ii. Add it to the password we are creating.
 *    9. Return password.
 */
function generatePassword() {

  /* 
   *  1. Prompt the user for a password length.
   */
  var userResponse = prompt("Enter a password length (the value must be an integer of at least 8 and at most 128): ");

  /* If userResponse is null here, that means the user clicked "Cancel", and we should quit. */
  if (userResponse === null) {
    alert("ERROR: The password length must be an integer of at least 8 and at most 128.");

    /* Just return an empty string so the password display box doesn't display anything inappropriate. */
    return "";
  }

  var passwordLength = parseInt(userResponse);

  /*
   *  2. If the length of the password is not within the proper range, complain and stop. Otherwise, continue.
   *
   *  NOTE: If password length is equal to NaN, it means that the user entered something that was not a number,
   *  such as a string.
   */
  if (passwordLength === NaN || passwordLength < 8 || passwordLength > 128) {
    alert("ERROR: The password length must be an integer of at least 8 and at most 128.");

    /* Just return an empty string so the password display box doesn't display anything inappropriate. */
    return "";
  }

  /*
   *  3. Ask the user if they want upper case letters included in the password.
   */
  var includesUpperCase = confirm("Include upper case characters in your password?");

  /*
   *  4. Ask the user if they want lower case letters included in the password.
   */
  var includesLowerCase = confirm("Include lower case characters in your password?");

  /*
   *  5. Ask the user if they want numeric values included in the password.
   */
  var includesNumeric = confirm("Include numeric characters in your password?");

  /*
   *  6. Ask the user if they want special characters included in the password.
   */
  var includesSpecial = confirm("Include special characters in your password?");

  /*
   *  7. If the user responds 'No' to the previous 4 steps, complain and quit. Otherwise, continue with generation.
   */
  if (!includesUpperCase && !includesLowerCase && !includesNumeric && !includesSpecial) {
    alert("ERROR: You must include at least one character type in your password.");

    /* Just return an empty string so the password display box doesn't display anything inappropriate. */
    return "";
  }

  /* 
   *  8. Generate a password.
   *  
   *  The general concept here is that we are to form a list of acceptable characters based on the previous confirmation boxes.
   *  Then, we choose a character from that list at random.
   *  
   *  Credit goes to:
   *  https://www.programiz.com/javascript/examples/generate-random-strings#:~:text=random()%20method%20is%20used,a%20random%20character%20is%20generated.
   *  for an example about selecting a random character from a list of characters that I used here.
   */

  var password = ""; // The password we are creating. We'll add to it later.

  /*
   *  8. a. Generate a list of acceptable characters based on the confirmation box selections.
   *
   *  First, we have to set up a list of all possible characters organized by criteria.
   * 
   *  Credit goes to:
   *  https://owasp.org/www-community/password-special-characters for a list of special characters
   */
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var numericCharacters = "0123456789";
  /*  NOTE: \" is the double quote character in a string, and \\ is the backslash character in a string. */
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  /*
   *  Next, we initialize our list of all acceptable password characters and set it based on the selections in the confirmation box before.
   */
  var acceptablePasswordCharacters = "";

  /* 
   *  If the user selected upper case characters, we add them to the list. 
   *  Note that I'm not using else-if statements here as these options aren't mutually exclusive: the user can choose more than one.
   */ 
  if (includesUpperCase) {
    acceptablePasswordCharacters = acceptablePasswordCharacters + upperCaseCharacters;
  }

  /* If the user selected lower case characters, we add them to the list. */
  if (includesLowerCase) {
    acceptablePasswordCharacters = acceptablePasswordCharacters + lowerCaseCharacters
  }

  /* If the user selected numeric characters, we add them to the list. */
  if (includesNumeric) {
    acceptablePasswordCharacters = acceptablePasswordCharacters + numericCharacters;
  }

  /* If the user selected special characters, we add them to the list. */
  if (includesSpecial) {
    acceptablePasswordCharacters = acceptablePasswordCharacters + specialCharacters;
  }

  /*
   *  8. b. For each character in our password
   */
  for (var i = 0; i < passwordLength; i++) {

    /*
    *  8. b. i. Choose a character from the list of acceptable characters at random
    *  
    *  First, we generate a random number that is a valid index for the acceptable character list.
    *  A valid index would be from 0 to acceptablePasswordCharacters.length - 1.
    */
    var randomIndex = Math.floor(Math.random() * acceptablePasswordCharacters.length);

    /* Then we select the character to add from that list using that index. */
    var charToAdd = acceptablePasswordCharacters[randomIndex];

    /*
    *  8. b. ii. Add the character to the password we are creating.
    */
    password = password + charToAdd;
  }

  /* 
   *  9. Return password.
   *
   *  At this point, we're done.
   */
  return password;
}