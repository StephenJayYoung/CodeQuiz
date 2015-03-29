var findSumPairs = function (intArr, sumTotal) {
  var arrayOfPairs = [];
  var n = 0;
  intArr.forEach(function (item, i, array) {
    array.forEach(function (item, i, array) {
      console.log(i)
      if (item + array[i + 1] === sumTotal && arrayOfPairs.indexOf(sumPair) === -1) {
        var sumPair = [];
        sumPair[0] = item;
        sumPair[1] = array[i + 1];
        arrayOfPairs.push(sumPair);
        sumPair = [];
      }
    });
  });
  console.log('The pairs adding to %j are: %j', sumTotal, arrayOfPairs);
  return arrayOfPairs
};

module.exports = findSumPairs;
