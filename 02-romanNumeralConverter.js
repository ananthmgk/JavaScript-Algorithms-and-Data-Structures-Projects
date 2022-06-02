// Roman Numeral Converter, to convert the numeral numbers to Roman numbers.
// here we define the values for each one in an object, to extract....
const romanLookups = {
    1000 : 'M',
    900  : 'CM',
    500  : 'D',
    400  : 'CD',
    100  : 'C',
    90   : 'XC',
    50   : 'L',
    40   : 'XL',
    10   : 'X',
    9    : 'IX',
    5    : 'V',
    4    : 'IV',
    1    : 'I'
  };
// here we ordered the numbers to calculate in decending order.
const numberOrder = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// Object.keys(romanLookups).sort((a,b) => b-a);

// in this func, numberOrder variable is iterated and its inserted in the loop,
function convertToRoman(num) {
  let romanStr = [];
  while(num > 0) {
    for(let n of numberOrder) {
      if(n <= num) { // here first 1000 will check the condition, if true, then num is decreased as (num-1000), then the 
        num -= n;     // n value is taken from lookup, and it is pushed into the romanStr[], to continue the loop from the 
        romanStr.push(romanLookups[n]); // beginning break is used.
        break;
      }
    }
  }
  return romanStr.join(''); 
};
 
console.log(convertToRoman(3999)); //MMMCMXCIX
