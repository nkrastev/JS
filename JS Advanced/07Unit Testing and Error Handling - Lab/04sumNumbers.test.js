const assert = require("chai").assert;
const sum = require('./sumNumbers');

describe("Sum Numbers Tests", function (arr) {
    it("Sum of [1,1]", function () {
        assert((sum([1,1])==2), 'Not Equal Sum');           
    });
    it("Sum of [1]", function () {
        assert((sum([1])===1), 'Not Equal Sum');           
    });
    it("Sum of [9,5]", function () {
        assert((sum([9,5])===14), 'Not Equal Sum');           
    });

});
    