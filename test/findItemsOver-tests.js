let assert = require('assert');
let findItemsOver = require('../findItemsOver');

describe('Shows all the items with quantity higher than the threshold', function(){
    it("should return pears and bananas", function(){
        var qty = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}];
        var threshold = 20;

        assert.deepEqual(findItemsOver(qty,threshold), [{"name":"pears","qty":37},{"name":"bananas","qty":27}]);
    });
    it("Should return an empty list", function(){
        var qty = [{"name":"apples","qty":10},{"name":"pears","qty":19},{"name":"bananas","qty":17},{"name":"apples","qty":3}];
        var threshold = 20;

        assert.deepEqual(findItemsOver(qty,threshold), []);
    });
    it("Should return bananas and apples", function(){
       var qty = [{"name":"apples","qty":40},{"name":"pears","qty":20},{"name":"bananas","qty":23},{"name":"apples","qty":37}]
       var threshold = 20;

        assert.deepEqual(findItemsOver(qty,threshold), [{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}]);
    });
});
