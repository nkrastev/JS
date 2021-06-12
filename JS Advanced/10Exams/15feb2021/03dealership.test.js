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

     describe("carEquipment", function() {
        it("Zero wanted extras returns empty array", function() {               
            expect(dealership.carEquipment(['tyres', 'horn', 'windows'],[])).to.have.same.members([]);
        });
        it("Tyres wanted extras", function() {               
            expect(dealership.carEquipment(['tyres', 'horn', 'windows'],[0])).to.have.same.members(['tyres']);
        });
        it("All extras wanted", function() {               
            expect(dealership.carEquipment(['tyres', 'horn', 'windows'],[0,1,2])).to.have.same.members(['tyres', 'horn', 'windows']);
        });
        
     });

     
});
