var expect = require('chai').expect;
var findSumPairs = require('../findsumpairs');

describe('findSumPairs', function () {
  var intArr = [ 1, 2, 3, 4, 5, 6, 7 ];
  var sumTotal = 5;

  it('should exist', function () {
    expect(findSumPairs).to.not.be.null;
  });

  it('should return the right values', function() {

    var arrayOfPairs = findSumPairs(intArr, sumTotal);
    var expectedArray = [ [ 1, 4 ], [ 2, 3 ] ];

    expect(arrayOfPairs).to.eql(expectedArray);
  });
});
