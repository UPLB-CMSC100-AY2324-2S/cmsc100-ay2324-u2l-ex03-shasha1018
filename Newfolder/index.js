// Sha Sha Marie M. Dineros
// Exercise 3
// February 26, 2024
// This program validates two passwords and stores them into an object.

// function for validating the password
function validatePassword(ps1, ps2){

    // checks first if the two given parameters are strings
    if (typeof(ps1) !== 'string' || typeof(ps2) !== 'string'){
        console.log("Must be a String Input!");
        return false;
    }

    // checks if the two passwords match
    if(ps1 !== ps2){
        console.log("Wrong Password!");
        return false;
    } 

    // checks if the password has at least 8 characters
    if (ps1.length<8){
        console.log("Insufficient Number of Strings!");
        return false;
    } 
    
    // for checking if the password has at least 1 number, 1 uppercase character, and 1 lowercase character
    let hasNum = false;
    let hasUppercase = false;
    let hasLowercase = false;

    // loops through the characters of the string password
    for (let i=0; i<ps1.length; i++){
        const char = ps1.charAt(i);

        if (char >= 'A' && char <= 'Z'){  // checks for uppercase characters
            hasUppercase = true;
        } else if (char >= 'a' && char <= 'z'){  // checks for lowercase characters
            hasLowercase = true;
        } else if (!isNaN(parseInt(char))){  // checks for numbers by converting the string into an integer
            hasNum = true; 
        }
    }

    // checks if all conditions are met
    if (!hasUppercase || !hasLowercase || !hasNum){
        console.log("Invalid Password!");
        return false;
    } else {
        return true; 
    }

}

// function for reversing the password
function reversePassword(pw){
    let reversedPW = '';  // the reversed password is stored here

    for (let i = pw.length-1; i>=0; i--){  // looping through the password string in reverse order and storing them in the reversedPw variable
        reversedPW += pw[i];
    }

    return reversedPW;
}

// function for storing the password to an object
function storePassword(uname, pw1, pw2){

    isValid = validatePassword(pw1, pw2);
    
    if (isValid){
        newPw = reversePassword(pw1);
        return {name: uname, newpassword: newPw};
    }

}

// try
console.log(validatePassword("helloworld", "hello"))// returns false
console.log(validatePassword("hello", "hello")) // returns false
console.log(validatePassword("hello1234", "hello1234")) // returns false
console.log(validatePassword("Hello1234", "Hello1234")) // returns true
console.log(validatePassword("HELLO1234", "HELLO1234")) // returns false

console.log(storePassword("John", "Pass1234", "Pass1234")); // returns {name: "John", newpassword:"4321ssaP"}
console.log(storePassword("John", "pass1234", "pass1234")); // prompts “Invalid Password!”
console.log(storePassword("John", "pass1234", "pass1234567")); //prompts “Wrong Password!”
console.log(storePassword("John", "pass1", "pass1")); //prompts “Insufficient Number of Strings!”
