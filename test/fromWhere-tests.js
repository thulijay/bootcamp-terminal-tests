let assert = require('assert');
let fromWhere = require('../fromWhere');

describe("Takes a registration plate and tells us from which town it's from", function(){
    it('should return the town for "CY"', function(){
        var from = 'CY';
        assert.equal(fromWhere(from), 'Bellville')
    });

    it('should return the town for "CJ"', function(){
        var from = 'CJ';
        assert.equal(fromWhere(from), 'Paarl')
    });

    it('should return the town for "CA"', function(){
        var from = 'CA';
        assert.equal(fromWhere(from), 'Cape Town')
    });
});