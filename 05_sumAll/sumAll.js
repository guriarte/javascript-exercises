const sumAll = function (numberA, numberB) {
  if (
    numberA < 0 ||
    numberB < 0 ||
    !Number.isInteger(numberA) ||
    !Number.isInteger(numberB)
  )
    return "ERROR";

  if (numberA > numberB) [numberA, numberB] = [numberB, numberA]; //swap if first number is higher

  let totalSum = 0;

  for (let i = 0; i <= numberB - numberA; i++) {
    totalSum += numberA + i;
  }

  return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
