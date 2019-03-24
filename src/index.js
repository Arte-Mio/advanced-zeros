module.exports = function getZerosCount(number, base) {
  var factor = [];
  var num = [];
  var result = [];
  var original = number;

  let multiplier = 2;

  while (base > 1) {
      if (base % multiplier === 0) {
        base /= multiplier;
          factor.push(multiplier);
      } else {
          multiplier++;
      }
  }

  for (let number of factor) {
    if (num.hasOwnProperty(number)) {
      num[number]++;
    } else {
      num[number] = 1;
    }
  }

  for (let i in num) {
      let count = 0;
      number = original;

      while (number > 0) {
          number = Math.floor(number / i);
          count += number;
      }
      result.push(Math.floor(count / num[i]));
  }
  return Math.min(...result);
}