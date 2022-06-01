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
