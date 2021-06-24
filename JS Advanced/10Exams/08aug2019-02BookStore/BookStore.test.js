const assert = require('chai').assert;
const expect = require("chai").expect;
const BookStore = require('./BookStore');

describe("Tests …", function() {
    let bookstore;
	this.beforeEach(function() {
		bookstore = new BookStore('SoftUni');
	})
    
    it("Ctor Properties", function() {
        expect(bookstore.books).to.eql([]);
        expect(bookstore.books.length).to.deep.equal(0);       
        expect(bookstore._workers).to.eql([]);
        expect(bookstore._workers.length).to.deep.equal(0);
        expect(bookstore.name).to.equal('SoftUni');
    });

    it("stockBooks(newBooks) Adding increase count", function() {
        bookstore.stockBooks(['Dimitrichko-NewBooks']);
        expect(bookstore.books.length).to.equal(1);
        bookstore.stockBooks(['Dimitrichko2-NewBooks2']);
        bookstore.stockBooks(['Dimitrichko3-NewBooks3']);
        expect(bookstore.books.length).to.equal(3);
    });
    it("stockBooks(newBooks) Adding returns array of objects", function() {
        bookstore.stockBooks(['T1-A1']);                    
        expect(bookstore.books).to.have.deep.members([{title:'T1',author:'A1'}]);
        bookstore.stockBooks(['T2-A2']);            
        bookstore.stockBooks(['T3-A3']);            
        expect(bookstore.books).to.have.deep.members([{title:'T1',author:'A1'},{title:'T2',author:'A2'},{title:'T3',author:'A3'}]);
    });

    it("hire(name, position) return string", function() {        
        expect(bookstore.hire('Dimitri4ko', 'boss')).to.equal(`Dimitri4ko started work at SoftUni as boss`);
        expect(bookstore.hire('Pesho', 'papagal')).to.equal(`Pesho started work at SoftUni as papagal`);
    });
    it("hire(name, position) Throws ", function() {        
        bookstore.hire('Dimitri4ko', 'boss');
        expect(function(){bookstore.hire('Dimitri4ko')}).to.throw(Error, 'This person is our employee'); 
    });

    it("fire(name) return string", function() {  
        bookstore.hire('Dimitri4ko', 'boss');              
        expect(bookstore.fire('Dimitri4ko')).to.equal(`Dimitri4ko is fired`);
    });

    it("fire(name) throw", function() {  
        expect(function(){bookstore.fire('Dimitri4ko')}).to.throw(Error, 'Dimitri4ko doesn\'t work here'); 
    });

    it("sellBook(title, workerName) throw out of stock", function() {  
        expect(function(){bookstore.sellBook('A1', 'Dimitri4ko')}).to.throw(Error, 'This book is out of stock'); 
        bookstore.stockBooks(['T1-A1']);
        bookstore.hire('Dimitri4ko', 'boss');
        bookstore.sellBook('T1', 'Dimitri4ko');        
        expect(function(){bookstore.sellBook('T1', 'Dimitri4ko')}).to.throw(Error, 'This book is out of stock'); 
    });
    it("sellBook(title, workerName) throw no available worker", function() {  
        expect(function(){bookstore.sellBook('A1', 'Dimitri4ko')}).to.throw(Error, 'This book is out of stock'); 
        bookstore.stockBooks(['T1-A1']);
        bookstore.hire('Dimitri4ko', 'boss');
        bookstore.sellBook('T1', 'Dimitri4ko');        
        expect(function(){bookstore.sellBook('T1', 'Pesho')}).to.throw(Error, 'This book is out of stock'); 
    });
    it("sellBook(title, workerName) valid", function() {          
        bookstore.stockBooks(['T1-A1','T2-A2']);
        bookstore.hire('Dimitri4ko', 'boss');
        let getWorker=bookstore.workers.filter(e=>e.name=='Dimitri4ko')[0];  
        
        bookstore.sellBook('T1', 'Dimitri4ko');
        expect(getWorker.booksSold).to.equal(1); 
        bookstore.sellBook('T2', 'Dimitri4ko');
        expect(getWorker.booksSold).to.equal(2); 
    });

    it("printWorkers()", function() {                  
        expect(bookstore.printWorkers()).to.equal(''); 
    });

    it("printWorkers()", function() {     
        bookstore.hire('1', '1');
        bookstore.hire('2', '2');
        expect(bookstore.printWorkers()).to.equal('Name:1 Position:1 BooksSold:0\nName:2 Position:2 BooksSold:0'); 
        bookstore.stockBooks(['T1-A1','T2-A2']);
        bookstore.sellBook('T1', '1');
        bookstore.sellBook('T2', '1');
        expect(bookstore.printWorkers()).to.equal('Name:1 Position:1 BooksSold:2\nName:2 Position:2 BooksSold:0'); 
    });




});
