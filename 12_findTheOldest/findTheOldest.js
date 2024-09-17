const findTheOldest = function (arr) {
  arr.forEach((element) => {
    if (!element.yearOfDeath) element.yearOfDeath = 2024;
  });
  const sortedArray = arr.sort((personA, personB) => {
    const personAAge = personA.yearOfDeath - personA.yearOfBirth;
    const personBAge = personB.yearOfDeath - personB.yearOfBirth;
    return personAAge > personBAge ? -1 : 1;
  });
  return sortedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
