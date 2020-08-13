let assert = require('assert');
let greet = require('../greet');

describe('Greets people', function(){
    it('should greet Hilda', function(){
        assert.equal('Hello, Hilda', greet('Hilda'));
    });

    it('should greet James', function(){
        assert.equal('Hello, James', greet('James'));
    });

    it('shuld greet KG', function(){
        assert.equal('Hello, KG', greet('KG'));
    });
});