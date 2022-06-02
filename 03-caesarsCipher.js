// Method 1: 
// ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.....
function rot13(str) {
  const regularAlpha =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", ".","?", "!"];
   
  const cipherAlpha = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'," ", ".","?", "!"];
  
  let convertedCipherLetters = [];
  for(let s of str) {
    convertedCipherLetters.push(cipherAlpha[regularAlpha.indexOf(s)]); // using indexOf() func, it find str's each letters index in regularAlpha
  } // array and that index is used to set the letter in cipherAlpha.
  return convertedCipherLetters.join('');
};
console.log(rot13("SERR PBQR PNZC"));
// ------------------------------*--------------------------------*--------------------------------------------------*--------------------------------
