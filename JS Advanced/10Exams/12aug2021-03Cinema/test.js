let expect = require('chai').expect;

const cinema = {
    showMovies: function (movieArr) {
        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }
    },
    ticketPrice: function (projectionType) {
        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }
    },
    swapSeatsInHall: function (firstPlace, secondPlace) {
        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 ||
            firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }
    }
};
 
describe('Unit test' ,function()  {
    it('empty', function()  {        
        expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');        
    });
 
    it('return string', function() {        
        expect(cinema.showMovies(['test1'])).to.equal('test1');           
        expect(cinema.showMovies(['test1','test2','test3'])).to.equal('test1, test2, test3');                                             
    });   
 
    it('ticket prices',function() {  
        expect(cinema.ticketPrice('Premiere')).to.equal(12);  
        expect(cinema.ticketPrice('Normal')).to.equal(7.5);  
        expect(cinema.ticketPrice('Discount')).to.equal(5.5); 
    })
    it('ticket throw',function() {  
        expect(() =>cinema.ticketPrice('Dimitri4ko')).to.throw();            
        expect(() =>cinema.ticketPrice([])).to.throw();            
        expect(() =>cinema.ticketPrice({})).to.throw();            
    })
    it('swapSeatsInHall',function() {
        expect(cinema.swapSeatsInHall('dimitr',2)).to.equal('Unsuccessful change of seats in the hall.'); 
        expect(cinema.swapSeatsInHall(1,'test')).to.equal('Unsuccessful change of seats in the hall.');       
        expect(cinema.swapSeatsInHall('test','test')).to.equal('Unsuccessful change of seats in the hall.');       
        expect(cinema.swapSeatsInHall(0,7)).to.equal('Unsuccessful change of seats in the hall.');       
        expect(cinema.swapSeatsInHall(7,0)).to.equal('Unsuccessful change of seats in the hall.');       
        expect(cinema.swapSeatsInHall(0,0)).to.equal('Unsuccessful change of seats in the hall.');       
        expect(cinema.swapSeatsInHall(-7,0)).to.equal('Unsuccessful change of seats in the hall.');       
        expect(cinema.swapSeatsInHall(1,-7)).to.equal('Unsuccessful change of seats in the hall.');       
        expect(cinema.swapSeatsInHall(99,0)).to.equal('Unsuccessful change of seats in the hall.');       
        expect(cinema.swapSeatsInHall(1,99)).to.equal('Unsuccessful change of seats in the hall.');       
        expect(cinema.swapSeatsInHall(-1,-5)).to.equal('Unsuccessful change of seats in the hall.');       
        expect(cinema.swapSeatsInHall(1,1)).to.equal('Unsuccessful change of seats in the hall.');       
        expect(cinema.swapSeatsInHall(99,99)).to.equal('Unsuccessful change of seats in the hall.');       
        expect(cinema.swapSeatsInHall(20,20)).to.equal('Unsuccessful change of seats in the hall.');       
        
        expect(cinema.swapSeatsInHall(1,5)).to.equal('Successful change of seats in the hall.');       
        expect(cinema.swapSeatsInHall(2,7)).to.equal('Successful change of seats in the hall.');       
        expect(cinema.swapSeatsInHall(17,5)).to.equal('Successful change of seats in the hall.');       
        expect(cinema.swapSeatsInHall(19,20)).to.equal('Successful change of seats in the hall.');       
        expect(cinema.swapSeatsInHall(20,19)).to.equal('Successful change of seats in the hall.');       
     }); 
});