const repeatString = function (string, numberOfRepeats) {
  let repeatedString = "";

  if (numberOfRepeats < 0) return "ERROR";

  for (let i = 0; i < numberOfRepeats; i++) {
    repeatedString += string;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
