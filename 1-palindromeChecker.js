// Method 1: Using reverse function.
// Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  return checkPalindrome(clearInputStr(str)); // return the functions.
};
// this func will return true, if the reversed str is equal to str,  Otherwise, return false.
function checkPalindrome(str) {
  return str.split("").reverse().join("") === str;
};
// this func will replace all symbols execpt alphanumeric characters.
function clearInputStr(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
};

console.log(palindrome("racecar"));

//-------------------------------*-------------------------*---------------------------------------------*------------------
// Method 2: Using for loooop.

function palindrome(str) {
  return checkPalindrome(clearInputStr(str)); // return the functions.
};
// this func will return true, if the letters from first and from last is same ,  Otherwise, return false.
function checkPalindrome(str) {
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== str[str.length-i-1]) {
      return false;
    }
  } 
  return true;
};
// this func will replace all symbols execpt alphanumeric characters.
function clearInputStr(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
};

console.log(palindrome("racecar"));

//---------------------------------------*------------------------------------*------------------------------------
// Method 3: Using while loooop.

function palindrome(str) {
  return checkPalindrome(clearInputStr(str)); // return the functions.
};
// this func will return true, if the reversed str is equal to str,  Otherwise, return false.
function checkPalindrome(str) {
  let a = 0;
  let b = str.length-1;
  while(a !== b) {
    if(str[a] !== str[b]) {
      return false;
    } 
    a++;
    b--;
  }
  return true;
};
// this func will replace all symbols execpt alphanumeric characters.
function clearInputStr(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
};

console.log(palindrome("racecar"));
