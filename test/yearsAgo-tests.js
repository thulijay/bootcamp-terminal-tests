let assert = require('assert');
let yearsAgo = require('../yearsAgo');

describe('Takes in a year and return how many years ago that was', function(){
    it('should tell us how many years ago it was since 1976', function(){
        var yearX = 2020 - 1976;
        
        assert.equal(yearX, 44);
    });

    it('should tell us how many years ago it was since 2000', function(){
        var yearX = 2020 - 2000;

        assert.equal(yearX, 20);
    });
});