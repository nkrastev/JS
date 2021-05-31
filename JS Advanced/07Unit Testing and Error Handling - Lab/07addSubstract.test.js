const assert = require("chai").assert;
const expect = require("chai").expect;
const createCalculator = require('./addSubstract');

/*•	Return a module (object), containing the functions add(), subtract() and get() as properties
•	Keep an internal sum which can’t be modified from the outside
•	The functions add() and subtract() take a parameter that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the internal sum
•	The function get() returns the value of the internal sum
*/

describe("Calculator Tests", function () {
    
    let calculator = '';
    beforeEach(function () {
        calculator = createCalculator();
    });

    it('return 0 for get', () => {
        assert(calculator.get()==0);
    });
    it('return -5 for get', () => {
        calculator.subtract(5);
        assert(calculator.get()==-5);
    });
    it('return 7 for add', () => {
        calculator.add(7);
        assert(calculator.get()==7);
    });
    it('return Undef adding string', () => {        
        assert(calculator.add('Dimitrichko')==undefined);
    });

    it('return 7 for add string number', () => {
        calculator.add('7');
        assert(calculator.get()==7);
    });
    //pointless test
    it('return 7 for add string number', () => {
        calculator.subtract('7');
        assert(calculator.get()==-7);
    });

    //WRONG TEST
    it('return 10-2+2-4', () => { 
        calculator.add(10);                   
        calculator.subtract(2); 
        calculator.add(2); 
        calculator.subtract(4); 
        let value = calculator.get();
        assert.equal(value,6);      
    });

    //CORRECT TEST
    it("should return 6 after add(10); subtract('2'); add('2'); subtract(4)", ()=> {
        calculator.add(10);
        calculator.subtract('2');
        calculator.add('2');
        calculator.subtract(4);
        let value = calculator.get();
        expect(value).to.be.equal(6);
    });

});