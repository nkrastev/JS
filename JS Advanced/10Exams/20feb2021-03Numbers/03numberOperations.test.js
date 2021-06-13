const assert = require('chai').assert;
const expect = require("chai").expect;
const numberOperations = require('./numberOperations');


describe("powNumber", function() {
    it("powNumber return correct", function() {
        assert.equal(numberOperations.powNumber(2),4)
        //expect(result.powNumber(2)).to.equal(4);             
    });
    it("powNumber negative return correct", function() {
        assert.equal(numberOperations.powNumber(-3),9);
        //expect(result.powNumber(-3)).to.equal(9);             
    });        
}); 
    
describe("numberChecker", function() {
    it("numberChecker isNaN throw", function() {
        //!!!!! One common mistake is to accidentally invoke the function yourself 
        //instead of letting the throw assertion invoke the function for you.
        expect(function(){numberOperations.numberChecker('100F')}).to.throw();                   
    });
    it("numberChecker Object throw", function() {            
        expect(function(){numberOperations.numberChecker({})}).to.throw();                   
    });
    it("numberChecker array throw", function() {          
        expect(function(){numberOperations.numberChecker([1,2])}).to.throw();                   
    });
    it("numberChecker array throw", function() {          
        expect(function(){numberOperations.numberChecker('dimitrichko')}).to.throw();                   
    });

    it("numberChecker less than 100", function() {            
        expect(numberOperations.numberChecker(-1117)).to.equal('The number is lower than 100!'); 
    });
    it("numberChecker less than 100", function() {            
        expect(numberOperations.numberChecker(17)).to.equal('The number is lower than 100!'); 
    });
    it("numberChecker bigger than 100", function() {            
        expect(numberOperations.numberChecker(107)).to.equal('The number is greater or equal to 100!'); 
    });
    it("numberChecker equal 100", function() {            
        expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!'); 
    });       
    }); 

describe("sumArrays", function() {
    it("valid arrays", function() {
        let arr1=[1,2,3];
        let arr2=[7];
        expect(numberOperations.sumArrays(arr1, arr2)).to.eql([8,2,3]);                              
    });
    it("equal valid arrays", function() {
        let arr1=[1,2,3];
        let arr2=[1,1,1];
        expect(numberOperations.sumArrays(arr1, arr2)).to.eql([2,3,4]);                              
    });
    it("empty arrays", function() {
        let arr1=[];
        let arr2=[];
        expect(numberOperations.sumArrays(arr1, arr2)).to.eql([]);                              
    });
    it("string arrays", function() {
        let arr1=['a','b'];
        let arr2=['a','b'];
        expect(numberOperations.sumArrays(arr1, arr2)).to.eql(['aa','bb']);                              
    });
            
}); 
