let assert = require('assert');
let totalPhoneBill = require('../totalPhoneBill');

describe('Calculates the total bill for calls and smses made', function(){
    it('should give the total bill for 2 calls and 3 smses', function(){
        var data = 'call, sms, call, sms, sms';
        var call = 'call';
        var sms = 'sms';

        assert.equal(totalPhoneBill(data,sms,call), 'R7.45')
    });

    it('should give the total bill for 1 call and 1 sms', function(){
        var data = 'call, sms';
        var call = 'call';
        var sms = 'sms';

        assert.equal(totalPhoneBill(data,sms,call), 'R3.40')
    });

    it('should give the total bill for 2 smses', function(){
        var data = 'sms, sms';
        var sms = 'sms';

        assert.equal(totalPhoneBill(data,sms), 'R1.30')
    });
});

