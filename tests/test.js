'use strict';

const plusOneSum = require('../jan9.js');
const expect = require('chai').expect;

describe('adds one to each number in array and sums numbers', function(){
  it('loops through array, adding 1 to each number and adding that to a sum placeholder', function(){
    expect(plusOneSum([1,2,3,4])).to.equal(14);
  });
  it('returns an error if not all elements are numbers', function(){
    expect(plusOneSum([1,'a',3,4])).to.equal('fxn needs all numbers');
  });
});
