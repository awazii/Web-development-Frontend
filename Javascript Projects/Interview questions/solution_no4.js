// The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

// Solution:
let password = "Awais123@"
let hasuppercase=/[A-Z]/;
let haslowercase=/[a-z]/;
let hasdigit=/[0-9]/;
let specialcharacter=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
if (haslowercase.test(password) && hasuppercase.test(password) && hasdigit.test(password) && specialcharacter.test(password) && password.length >= 8) {
    console.log("Password is valid") 
}
else { 
    console.log("Password is invalid")
}