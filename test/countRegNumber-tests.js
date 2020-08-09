let assert = require('assert');
let countRegNumber = require('../countRegNumber');

describe('Returns the number of registration plates there is in a string', function(){
    it('should count 3 registration plates in total', function(){
        var countX = countRegNumber("CA 182736, CY 523519, CJ 812328");
        assert.equal(countX, 3)
    });

    it('should count 1 registration plate', function(){
        assert.equal(countRegNumber('CA 182736'), 1)
    })
});