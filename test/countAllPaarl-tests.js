let assert = require('assert');
let countAllPaarl = require('../countAllPaarl');

describe('Returns the number of registration plates from Paarl', function(){
    it('should return the number of registration plates starting with "CJ"', function(){
        var paarlX = countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123');

        assert.equal(paarlX, 3);
    });
    it('should return the second number or registration plates with "CJ"', function(){
        var paarlX = countAllPaarl('CJ 345 123, CK 345, CJ 123');

        assert.equal(paarlX, 2);
    });
});