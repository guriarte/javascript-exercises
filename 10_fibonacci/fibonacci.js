const fibonacci = function (num) {
  const number = Number.parseInt(num);
  let fibonacci = 0;
  const lastTwoNumbers = [0, 1];
  if (number < 0) return "OOPS";
  if (number === 0) return 0;
  if (number === 1) return 1;

  for (let i = 2; i <= num; i++) {
    fibonacci = lastTwoNumbers[0] + lastTwoNumbers[1];
    lastTwoNumbers.shift();
    lastTwoNumbers.push(fibonacci);
  }
  return fibonacci;
};

// Do not edit below this line
module.exports = fibonacci;
