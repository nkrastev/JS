const assert = require("chai").assert;
const isSymmetric = require('./checkForSymmetry');

/*•	Take an array as argument
•	Return false for any input that isn’t of the correct type (first test)
•	Return true if the input array is symmetric (second)
•	Otherwise, return false (third) */


describe("Symmetry Check Tests", function () {
    it("Check if input is array", function () {
        assert(((isSymmetric('Dimitrichko'))==false));           
    });
    it("Second", function () {
        assert(((isSymmetric([1,1]))==true));           
    });
    it("Third", function () {
        assert(((isSymmetric([1,1,1]))==true));           
    });
    it("Fourth", function () {
        assert(((isSymmetric(['Ivan', 'Ivan']))==true));           
    }); 
    it("Fifth", function () {
        assert(((isSymmetric(['Dimitrichko', 'Ivan']))==false));           
    }); 
    it("Sixth", function () {
        assert(((isSymmetric([1,1,'1']))==false));           
    }); 
    it("Seventh", function () {
        assert(((isSymmetric([1,'Dimitrichko',1]))==true));           
    }); 
    it("Aman", function () {
        assert(((isSymmetric([1,'Dimitrichko',2]))==false));           
    }); 
    it("Aman 2", function () {
        assert(((isSymmetric([1,'Dimitrichko',{pesho:3}]))==false));           
    });  
    it("Fifth", function () {
        assert(((isSymmetric(['Dimitrichko', 2]))==false));           
    });   
   

});