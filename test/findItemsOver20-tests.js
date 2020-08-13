let assert = require('assert');
let findItemsOver20 = require('../findItemsOver20');

describe('Shows all the items with quantity over 20', function(){
    it('should return pears and bannans', function(){
        var list = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}];
    
        assert.deepEqual(findItemsOver20(list), [{"name":"pears","qty":37},{"name":"bananas","qty":27}]);
    });

    it('should return an empty list', function(){
        var list = [{"name":"apples","qty":10},{"name":"pears","qty":19},{"name":"bananas","qty":17},{"name":"apples","qty":3}];

        assert.deepEqual(findItemsOver20(list), []);
    });

    it('should return apples and bananas', function(){
        var list = [{"name":"apples","qty":40},{"name":"pears","qty":20},{"name":"bananas","qty":23},{"name":"apples","qty":37}];

        assert.deepEqual(findItemsOver20(list), [{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}])
    });
});