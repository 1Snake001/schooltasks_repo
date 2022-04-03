 const anagramma = function (string1, string2) {
    let sorted1 = string1.split("").sort().join("");
    let sorted2 = string2.split("").sort().join("");
    if (sorted1.toLowerCase() === sorted2.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  };

module.exports = anagramma;