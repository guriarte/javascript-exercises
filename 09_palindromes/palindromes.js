const palindromes = function (str) {
  let string = str.toLowerCase().replace(/\W/gi, "");
  let isPalindrome = true;

  for (let i = 0; i < string.length / 2; i++) {
    if (string.charAt(i) != string.charAt(string.length - i - 1)) {
      console.log(string.charAt(i), string.charAt(string.length - i));

      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
