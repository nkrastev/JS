const assert = require('chai').assert;
const expect = require("chai").expect;

class HolidayPackage {
    constructor(destination, season) {
        this.vacationers = [];
        this.destination = destination;
        this.season = season;
        this.insuranceIncluded = false; // Default value
    }

    showVacationers() {
        if (this.vacationers.length > 0)
            return "Vacationers:\n" + this.vacationers.join("\n");
        else
            return "No vacationers are added yet";
    }

    addVacationer(vacationerName) {
        if (typeof vacationerName !== "string" || vacationerName === ' ') {
            throw new Error("Vacationer name must be a non-empty string");
        }
        if (vacationerName.split(" ").length !== 2) {
            throw new Error("Name must consist of first name and last name");
        }
        this.vacationers.push(vacationerName);
    }

    get insuranceIncluded() {
        return this._insuranceIncluded;
    }

    set insuranceIncluded(insurance) {
        if (typeof insurance !== 'boolean') {
            throw new Error("Insurance status must be a boolean");
        }
        this._insuranceIncluded = insurance;
    }

    generateHolidayPackage() {
        if (this.vacationers.length < 1) {
            throw new Error("There must be at least 1 vacationer added");
        }
        let totalPrice = this.vacationers.length * 400;

        if (this.season === "Summer" || this.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += this.insuranceIncluded === true ? 100 : 0;

        return "Holiday Package Generated\n" +
            "Destination: " + this.destination + "\n" +
            this.showVacationers() + "\n" +
            "Price: " + totalPrice;
    }
}

//TESTS
describe("Tests", function() {

    let hp;
	this.beforeEach(function() {
		hp = new HolidayPackage('Bulgaria','Summer');
	})

    it('Ctor Properties', function(){    
        expect(hp.vacationers).to.eql([]);
        expect(hp.destination).to.equal('Bulgaria');
        expect(hp.season).to.equal('Summer');
        expect(hp.insuranceIncluded).to.deep.equal(false);       
    });  
    
    //showVacationers
    it('showVacationers empty array return string', function(){    
        expect(hp.showVacationers()).to.equal('No vacationers are added yet');        
    }); 
    it('showVacationers return string data', function(){  
        hp.addVacationer('John Doe');        
        expect(hp.showVacationers()).to.equal(`Vacationers:\nJohn Doe`);        
    }); 
    it('showVacationers 2 return string data', function(){  
        hp.addVacationer('John Doe');        
        hp.addVacationer('Ivan Ivan');        
        expect(hp.showVacationers()).to.equal(`Vacationers:\nJohn Doe\nIvan Ivan`);        
    }); 
    //addVacationer
    it('addVacationer Number throws', function(){  
        expect(function(){hp.addVacationer(7)}).to.throw(Error, 'Vacationer name must be a non-empty string');   
    }); 
    it('addVacationer empty string throws', function(){  
        expect(function(){hp.addVacationer(' ')}).to.throw(Error, 'Vacationer name must be a non-empty string');   
    });
    it('addVacationer one name string throws', function(){  
        expect(function(){hp.addVacationer('Jo')}).to.throw(Error, 'Name must consist of first name and last name');   
    });
    it('addVacationer three names string throws', function(){  
        expect(function(){hp.addVacationer('Jo Dow Second')}).to.throw(Error, 'Name must consist of first name and last name');   
    });
    it('addVacationer successful push increase count', function(){  
        hp.addVacationer('John Doe');
        hp.addVacationer('John Doe2');
        expect(hp.vacationers.length).to.be.equal(2);   
    }); 
    //insuranceIncluded getter
    it('insuranceIncluded getter', function(){          
        expect(hp.insuranceIncluded).to.be.equal(false);   
    }); 
    it('insuranceIncluded setter', function(){  
        hp.insuranceIncluded=true;        
        expect(hp.insuranceIncluded).to.be.equal(true);   
    });
    it('insuranceIncluded throw', function(){  
        expect(function(){hp.insuranceIncluded='Dimitri4ko'}).to.throw(Error, 'Insurance status must be a boolean');           
    }); 
    //generateHolidayPackage()
    it('generateHolidayPackage throw no vacationers', function(){  
        expect(function(){hp.generateHolidayPackage()}).to.throw(Error, 'There must be at least 1 vacationer added');           
    }); 
    it('generateHolidayPackage Summer, no ins', function(){ 
        hp.addVacationer('John Doe');
        expect(hp.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Bulgaria\nVacationers:\nJohn Doe\nPrice: 600');        
        hp.addVacationer('John Doe2');
        expect(hp.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Bulgaria\nVacationers:\nJohn Doe\nJohn Doe2\nPrice: 1000');        
    });
    it('generateHolidayPackage Summer, + ins', function(){ 
        hp.addVacationer('John Doe');
        hp.insuranceIncluded=true;
        expect(hp.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Bulgaria\nVacationers:\nJohn Doe\nPrice: 700');        
        hp.addVacationer('Doe John');
        expect(hp.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Bulgaria\nVacationers:\nJohn Doe\nDoe John\nPrice: 1100');        
    }); 
    it('generateHolidayPackage Winter, no ins', function(){ 
        hp.addVacationer('John Doe');
        expect(hp.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Bulgaria\nVacationers:\nJohn Doe\nPrice: 600');        
        hp.addVacationer('John Doe2');
        expect(hp.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Bulgaria\nVacationers:\nJohn Doe\nJohn Doe2\nPrice: 1000');        
    });
    it('generateHolidayPackage Season June, no ins', function(){ 
        let newHp=new HolidayPackage('Dest','June')
        newHp.addVacationer('John Doe');
        expect(newHp.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Dest\nVacationers:\nJohn Doe\nPrice: 400');        
        newHp.addVacationer('John Doe2');
        expect(newHp.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Dest\nVacationers:\nJohn Doe\nJohn Doe2\nPrice: 800');        
    });
});


