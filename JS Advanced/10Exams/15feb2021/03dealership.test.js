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

     describe("euroCategory", function() {
        it("Low categ, no discount", function() {     
            assert.equal(dealership.euroCategory(2),'Your euro category is low, so there is no discount from the final price!');                      
        });

        it("5 categ, discount 5%", function() { 
            //method gets Audi B8? always? 
            //discount 15000 for old car total remains 15000 - 5% for category = 14250         
            //useless test!
            assert.equal(dealership.euroCategory(5),`We have added 5% discount to the final price: 14250.`);                      
        });  
        
        it("4 categ, discount 5%", function() {             
            //again useless test??? 
            assert.equal(dealership.euroCategory(4),`We have added 5% discount to the final price: 14250.`);                      
        });  
     });     
});
