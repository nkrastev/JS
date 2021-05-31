const expect = require("chai").expect;
const lookupChar = require('./charLookUp');


describe("Char Tests", function () {
      
    //first exit condition

    it('undefined expected 1 param not string', () => {
        expect(lookupChar(2,2)).to.be.an('undefined');
    });
    it('undefined expected 2 param not INT', () => {
        expect(lookupChar('DimitrichkoIsValid','Dimitrichko')).to.be.an('undefined');
    });
    it('undefined expected 2 param is Floating point', () => {
        expect(lookupChar('DimitrichkoIsValid',2.2)).to.be.an('undefined');
    });

    //second exit condition
    it('negative index', () => {
        expect(lookupChar('DimitrichkoIsValid',-1)).to.equal('Incorrect index');
    });
    it('out of range index', () => {
        expect(lookupChar('DimitrichkoIsValid',1999)).to.equal('Incorrect index');
    });

    //third exit condition
    it('correct data', () => {
        expect(lookupChar('DimitrichkoIsValid',0)).to.equal('D');
        expect(lookupChar('DimitrichkoIsValid',1)).to.equal('i');
        expect(lookupChar('DimitrichkoIsValid',2)).to.equal('m');
    });      
});