let assert = require('assert');
let isWeekday = require('../isWeekday');

describe("Checks if it's a day of the week and not a weekend day", function(){
    it("should return true if it's a week day", function(){
        assert.equal(true, isWeekday('Monday'))
    });
    it("should return false if it's a weekend day", function(){
        assert.equal(false, isWeekday('Saturday'))
    })
})