const assert = require('chai').assert;
const expect = require("chai").expect;
const dealership = require('./dealership');

describe("Tests Global", function() {
    describe("newCarCost", function() {
        it("old car exists", function() {            
            assert.equal(dealership.newCarCost('Audi A4 B8', 15000),0);
        });
        it("old car exists", function() {            
            assert.equal(dealership.newCarCost('Audi A4 B8', 17000),2000);
        });
        it("old car dont exists return price", function() {            
            assert.equal(dealership.newCarCost('Audi A4 B9', 17000),17000);
        });
     });

     
     
});
