const input = require('readline-sync');
let str = input.question("Enter a word: ");

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
//REMOVED FOR STEP 3: let newStr = str.slice(3) + str.slice(0,3);
let newStr = str

//Use a template literal to print the original and modified string in a descriptive phrase.
//REMOVED FOR STEP 3: console.log(`Original STR is ${str} and new STR is ${newStr}.`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numLetters = input.question('Enter the number of letters that will be relocated: ');
numLetters = parseInt(numLetters);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if ( numLetters > str.length) {
    numLetters = 3;
    console.log("Error Input. Input not accepted. Defaulting to 3.");
}


let modifiedStr = str.slice(numLetters) + str.slice(0, numLetters);
console.log(`Original: ${str}, Modified: ${modifiedStr}`);