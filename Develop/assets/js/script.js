// Assignment code here

//lowercase characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
//uppercase characters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//numeric characters
var numericCase = '0123456789'
//special characters
var specialCase = '!@#$%^&*()_+~`|}{[]:;?><,./-='
//password length place holder variable for passwordLength() function
var passlength
//complete character set that will be added apon in confirmCharSet() fuction
//charSet = character set
var charSet = ""



//function asking for length of password
function passwordLength(){
  //prompt asking for length of password
  passLength = prompt("Please specify a length for the password between 8-128 characters long.")
  //check making sure a value was entered
  if (passLength === "" || passLength === null){
    alert("Please enter a valid answer.")
    passwordLength()
  }
  // changing legnth to a number and not a string
  passLength = parseInt(passLength)
  //checking to make sure the number is between 8-128
  if(passLength < 8  || passLength > 128){
    alert("Please Enter a password length between 8-128")
    passwordLength()
  }
  console.log(passlength)
}

function confirmCharSet(){
  //confirm lowerCase
  var conLower = confirm("Would you like to you have lower case characters?")
  //if confirm add lowerCase to the charSet
  if(conlower){
    charSet + lowerCase
  }
  //confirm upperCase
  var conUpper = confirm("Would you like to you have upper case characters?")
  //if confirm add upperCase to the charSet
  if(conUpper){
    charSet + upperCase
  }
  //confirm numeric 
  var conNum = confirm("Would you like to you have numeric case characters?")
  //if confirm add numericCase to charSet
  if (conNum){
    charSet + numericCase
  }
  //confirm specialChars
  var conSepcial = confirm("Would you like to you have special case characters?")
  //if confirm add specialCase to charSet
  if(conSepcial){
    charSet + specialCase
  }

}

function generatePassword(){
// passwordLength() function call
passwordLength()
//confirmCharSet() function call (or confirm character set)
confirmCharSet()
  




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
