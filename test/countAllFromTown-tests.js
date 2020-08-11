let assert = require('assert');
let countAllFromTown = require('../countAllFromTown');

describe('Should count the total number of registration plates from each town', function(){
    it('should count the total number of registration plates from Stellies', function(){
        var townX = 'CL 124, CY 567, CL 345, CJ 456, CL 341';
        var location = 'CL';
        assert.equal(countAllFromTown(townX, location), 3);
    });

    it('should count the total number of registration plates from Bellville', function(){
        var townX = ('CL 124, CY 567, CL 345, CJ 456, CL 341');
        var location = 'CY';
        assert.equal(countAllFromTown(townX, location), 1)
    });

    it('should count the total number of registration plates from Kuils River', function(){
        var townX = ('CL 124, CY 567, CL 345, CF 456, CL 341');
        var location = 'CF';
        assert.equal(countAllFromTown(townX, location), 1)
    }); 
});