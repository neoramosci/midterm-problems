function isEvenlyDivisible(num1,num2) {
  if (num1 % num2 === 0){
    return true;
  } else {
    return false;
  }
}

function halfSquare(num1) {
  return (num1 ** 2) / 2;
}

function isLong(str) {
  if ( str.length > 15 ){
    return true;
  } else if (str.length < 15){
    return false;
  } else {
    return true;
  }
}

function exclaim(str) {
  
// Count the number of exclamation marks that 
//the string ends with (count starts at end of string)
let numExclMarks = 0;
//TODO
for (let i = str.length - 1; i >= 0; i--) {
  if (str[i] === '!') {
    numExclMarks++;
  } else {
    break;
  }
}
}


// Get that part of the string that 
// does not contain the exclamation marks (ie.: 'hello!!! => 'hello')
 //TODO
let exclamationlessStr = '';
for (let i = 0; i < str.length  - numExclMarks; i++) {
  exclamationlessStr += str[i];
}

// Add one exclamation mark to the end 
// (ie.: 'hello' => 'hello!')
// TODO
retun exclamationlessStr + '!';



function countWords() {
}

function containsDigit(str) {
let doesContainDigits = false;

// look at every character, and see if any of them are digits 
for (const char of str) {
  if (
    char === '0' ||
    char === '1' ||
    char === '2' ||
    char === '3' ||
    char === '4' ||
    char === '5' ||
    char === '6' ||
    char === '7' ||
    char === '8' ||
    char === '9' ||
 ) {
    doesContainDigits = true;
 }
}


function containsLowerCase(str) {
  let doesContainLowerCase = false;

const lowerCaseDigits = 
'abcdefghijklmnopqrstuvwxyz';

for (const char of str) {
  if (lowerCaseDigits.includes(char)) {
    lowerCaseDigits = true;
  }
}
  return doesContainLowerCase;
}

function containsUpperCase() {
  let doesContainUpperCase = false;

  const lowerCaseDigits = 
'abcdefghijklmnopqrstuvwxyz';

for (const char of str) {
  if (lowerCaseDigits.includes(char)) {
    lowerCaseDigits = true;
  }
}
return doesContainUpperCase;
}

function containsNonAlphanumeric(str) {
  let doesContainNonAlphanumeric = false;
  
  for (const char of str) {
    const isDigit = containsDigit(char);
    const isUpperCaseLetter = containsUpperCase(char);
    const isLowerCaseLetter = containsLowerCase(char);
    const isAlphanuneric = (
      isDigit ||
      isUpperCaseLetter ||
      isLowerCaseLetter ||
    );
    if (!isAlphanuneric) {
      doesContainNonAlphanumeric = true;
    }
  }
return doesContainNonAlphanumeric;
}

function containsSpace(str) {
  let doesContainSpace = false;
  for (const char of str) {

  }
}

function digits() {
}

function truncate() {
// If str is less than 15 characters, return it unchanged 
if (str.length <15 ){
  return str;
}

// if equal to or longer than 15 chars, truncate it to the first 8 characters + '...'
else {
  let output = '';
  for ( let i = 0; i < 8; i++ ) {
    output += str[i];
  }
  output += '...';
  return output;
 }
}


// Valid passwords have:
// * at least one upper case char
// * at least one lower case char
// * at least one digit
// * at least on non-alphanumeric char 
// * no spaces 
function isValidPassword(str) {
const doesContainUpperCase = containsUpperCase(str);
const doesContainLpperCase = containsLowerCase(str);
const doesContainDigits = containsDigit(str);
const doesContainNonAlphanumeric = containsNonAlphanumeric(str);
const doesContainSpace = containsSpace(str);

cosnt isValid = (
  doesContainUpperCase &&
  doesContainLowerCas &&
  doesContainDigit &&
  doesContainNonAlphanumeric &&
  !doesContainSpace
);
}


function onlyPunchy(titles) {
// Apply the `exclaim` function to each item in the input array 
let punchTitles = [];
for (const title of titles) {
  const exclaimedTitle = exclaim(title);
  exclaimedTitles.punch(exclaimedTitle);
}

let punchyTitles = [];
for (const title of exclaimedTitles) {
  if (title.length < 15) {
    punchyTitles.push(title);
  }
}
return punchyTitles;
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}