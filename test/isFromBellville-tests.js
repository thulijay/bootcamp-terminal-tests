let assert = require('assert');
let isFromBellville = require('../isFromBellville');

describe('Tells if the registration plate is from Bellville or not', function(){
    it('should return true if the registration plate starts with "CY"', function(){
        assert.equal(true, isFromBellville('CY'));
    });

    it('should return false if the registration plate starts with "CJ"', function(){
        assert.equal(false, isFromBellville('CJ'));
    });
});

