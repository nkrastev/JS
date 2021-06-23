const assert = require('chai').assert;
const expect = require("chai").expect;

class SkiResort {

    constructor(name) {
        this.name = name;
        this.voters = 0;
        this.hotels = [];
    }
    get bestHotel() {
        if (this.voters === 0) {
            return "No votes yet";
        }
        let best = this.hotels.reduce((a, b) => a.points > b.points ? a : b);
        return `Best hotel is ${best.name} with grade ${best.points}. Available beds: ${best.beds}`
    }

    build(name, beds) {
        if (name === "" || beds < 1) {
            throw new Error("Invalid input");
        }
        let hotel = {
            name,
            beds,
            points: 0
        }
        this.hotels.push(hotel);
        return `Successfully built new hotel - ${name}`
    }

    book(name, beds) {
        if (name === "" || beds < 1) {
            throw new Error("Invalid input");
        }
        let hotel = this.hotels.find(hotel => hotel.name === name);
        if (!hotel) {
            throw new Error("There is no such hotel");
        }
        if (hotel.beds < beds) {
            throw new Error("There is no free space");
        }
        hotel.beds -= beds;
        return "Successfully booked";
    }

    leave(name, beds, points) {
        if (name === "" || beds < 1) {
            throw new Error("Invalid input");
        }
        let hotel = this.hotels.find(hotel => hotel.name === name);
        if (!hotel) {
            throw new Error("There is no such hotel");
        }
        hotel.points += beds * points;
        hotel.beds += beds;
        this.voters += beds;

        return `${beds} people left ${name} hotel`;
    }

    averageGrade() {
        if (this.voters === 0) {
            return "No votes yet";
        }
        let grade = this.hotels.reduce((a, b) => a + b.points, 0)/this.voters;
        return `Average grade: ${grade.toFixed(2)}`;
    }

    
}

describe("Tests", function() {

    let resort;
	this.beforeEach(function() {
		resort = new SkiResort('Bansko');
	})
    
    it('Ctor Properties', function(){    
        expect(resort.name).to.equal('Bansko');
        expect(resort.hotels).to.eql([]);
        expect(resort.hotels.length).to.deep.equal(0);
        expect(resort.voters).to.equal(0);       
    });

    it('Best Hotel return 0', function(){    
        expect(resort.bestHotel).to.equal('No votes yet');        
    });

    it('build throw', function(){
        expect(function(){resort.build('',7)}).to.throw(Error, 'Invalid input');
        expect(function(){resort.build('Dimitrichko',-7)}).to.throw(Error, 'Invalid input');
        expect(function(){resort.build('',0)}).to.throw(Error, 'Invalid input');
    });
    it('build valid', function(){
        expect(resort.build('HotelName',7)).to.equal('Successfully built new hotel - HotelName');
        expect(resort.build('HotelName2',57)).to.equal('Successfully built new hotel - HotelName2');        
        expect(resort.hotels.length).to.deep.equal(2);
    });

    it('Book throw', function(){
        expect(function(){resort.book('', 0)}).to.throw(Error, 'Invalid input');
        expect(function(){resort.book('fff', 0)}).to.throw(Error, 'Invalid input');
        expect(function(){resort.book('', 7)}).to.throw(Error, 'Invalid input');
        expect(function(){resort.book('Pe', -7)}).to.throw(Error, 'Invalid input');        
        
        expect(function(){resort.book('ValidName', 7)}).to.throw(Error, 'There is no such hotel'); 
        
        resort.build('ValidName',7);
        expect(function(){resort.book('ValidName', 77)}).to.throw(Error, 'There is no free space');
        
    });

    it('Book valid', function(){
        expect(resort.build('HotelName',7)).to.equal('Successfully built new hotel - HotelName');
        expect(resort.book('HotelName', 3)).to.equal('Successfully booked');
        //TODO check if beds are decreased?
    });


    it('Leave throw', function(){
        expect(function(){resort.leave('', 0,0)}).to.throw(Error, 'Invalid input');
        expect(function(){resort.leave('fff', 0,0)}).to.throw(Error, 'Invalid input');
        expect(function(){resort.leave('', 7,0)}).to.throw(Error, 'Invalid input');
        expect(function(){resort.leave('Pe', -7,0)}).to.throw(Error, 'Invalid input');        
        
        expect(function(){resort.leave('ValidName', 7)}).to.throw(Error, 'There is no such hotel');                         
    });
    it('Leave valid', function(){
        expect(resort.build('HotelName',7)).to.equal('Successfully built new hotel - HotelName');
        expect(resort.book('HotelName', 3)).to.equal('Successfully booked');
        expect(resort.leave('HotelName',3, 5)).to.equal('3 people left HotelName hotel');        
    });

    // it('Avegare grade throw', function(){
    //     console.log(resort.voters)
    //     expect(function(){resort.averageGrade()}).to.throw(Error, 'No votes yet');                                
    // });

    it('Avegare grade valid', function(){
        resort.build('HotelName',7);
        resort.book('HotelName', 3);
        resort.leave('HotelName',3, 5);        
        expect(resort.averageGrade()).to.equal('Average grade: 5.00');
        resort.build('HotelName2',7);
        resort.book('HotelName2', 3);
        resort.leave('HotelName2',3, 4);
        expect(resort.averageGrade()).to.equal('Average grade: 4.50');
    });           
}); 