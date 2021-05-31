const expect = require("chai").expect;
const mathEnforcer = require('./mathEnforcer');


describe('Main Object', function(){

    //add 5
    it('Add 5 tests undef', () => {
        expect(mathEnforcer.addFive('Dimitrichko')).to.be.undefined;
    });
    it('Add 5 tests correct integer', () => {
        expect(mathEnforcer.addFive(5)).to.equal(10);
    });
    it('Add 5 tests correct negative', () => {
        expect(mathEnforcer.addFive(-15)).to.equal(-10);
    });
    it('Add 5 tests correct float closed to', () => {        
        expect(mathEnforcer.addFive(0.5)).to.be.closeTo(5.5, 0.01);
    });
    it('Add 5 tests correct float closed to negative', () => {        
        expect(mathEnforcer.addFive(-0.5)).to.be.closeTo(4.5, 0.01);
    });
    // sub 10
    it('subtractTen tests undef', () => {
        expect(mathEnforcer.subtractTen('Dimitrichko')).to.be.undefined;
    });
    it('subtractTen tests correct Int', () => {
        expect(mathEnforcer.subtractTen(10)).to.equal(0);        
    });
    it('subtractTen tests correct negative', () => {
        expect(mathEnforcer.subtractTen(-10)).to.equal(-20);        
    });
    it('subtractTen tests float', () => {
        expect(mathEnforcer.subtractTen(0.5)).to.be.closeTo(-9.5, 0.01);       
    });

    //sum
    it('Sum tests undef', () => {
        expect(mathEnforcer.sum('Dimitrichko',1)).to.be.undefined;
    });
    it('Sum tests undef', () => {
        expect(mathEnforcer.sum(2,'Dimitrichko')).to.be.undefined;
    });
    it('Sum tests undef invalid number of params', () => {
        expect(mathEnforcer.sum(2,'Dimitrichko',1)).to.be.undefined;
    });
    it('Sum tests undef NO params', () => {
        expect(mathEnforcer.sum()).to.be.undefined;
    });

    it('Sum tests correct Int', () => {
        expect(mathEnforcer.sum(10,5)).to.equal(15);        
    });
    it('Sum tests correct negative', () => {
        expect(mathEnforcer.sum(-10,5)).to.equal(-5);        
    });
    it('Sum tests correct float', () => {
        expect(mathEnforcer.sum(0.5,0.5)).to.be.closeTo(1,0.01);
    });
});
