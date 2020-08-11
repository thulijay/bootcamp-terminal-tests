let assert = require('assert');
let transportFee = require('../transportFee');

describe("Gives the amount of money you'll spend on transport depending on the shift", function(){
    it("should retun the transport fee for the morning shift", function(){
        var amount = transportFee('R20')
        assert.equal(amount, transportFee('R20'))
    });

    it('should return the transport fee for the afternoon shift', function(){
        var amount = transportFee('R10');
        assert.equal(amount, transportFee('R10'));
    });

    it('should return the transport fee for nightshift', function(){
        var amount = transportFee('free')
        assert.equal(amount, transportFee('free'));
    });
});