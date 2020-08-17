let assert = require('assert');
let regCheck = require('../regCheck');

describe('Checks if registration plate is for GP, L, EC or MP', function(){
    it('checks if registartion plate ends with "GP"', function(){
        assert.equal(false, regCheck('DC 55 YU GP'));
    });

    it('checks if registration plate ends with "L"', function(){
        assert.equal(false, regCheck('5566 L'));
    });

    it('checks if registration plate ends with "EC"', function(){
        assert.equal(false, regCheck('ERT 123 EC'));
    });

    it('checks if registration plate ends with "MP"', function(){
        assert.equal(false, regCheck('FGT 123 MP'));
    });
})