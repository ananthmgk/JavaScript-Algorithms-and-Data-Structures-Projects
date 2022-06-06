function telephoneCheck(str) {
  return /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/.test(str);
}
// ^ => first letter
// (1\s|1) => 1 with space or 1, ? => optional
// (\(\d{3}\)|\d{3}) => \( => insert bracket, and 3 digit number with or without bracket
// (-|\s)? => Hyphen or space in optinal
// \d{3} => three digit numbers
// \d{4} => four digit numbers
// $ End
console.log(telephoneCheck("1 555-555-5555"));
