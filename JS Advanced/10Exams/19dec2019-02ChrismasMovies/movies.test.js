const assert = require('chai').assert;
const expect = require("chai").expect;

class ChristmasMovies {
    constructor() {
        this.movieCollection = [];
        this.watched = {};
        this.actors = [];
    }

    buyMovie(movieName, actors) {
        let movie = this.movieCollection.find(m => movieName === m.name);
        let uniqueActors = new Set(actors);

        if (movie === undefined) {
            this.movieCollection.push({ name: movieName, actors: [...uniqueActors] });
            let output = [];
            [...uniqueActors].map(actor => output.push(actor));
            return `You just got ${movieName} to your collection in which ${output.join(', ')} are taking part!`;
        } else {
            throw new Error(`You already own ${movieName} in your collection!`);
        }
    }

    discardMovie(movieName) {
        let filtered = this.movieCollection.filter(x => x.name === movieName)

        if (filtered.length === 0) {
            throw new Error(`${movieName} is not at your collection!`);
        }
        let index = this.movieCollection.findIndex(m => m.name === movieName);
        this.movieCollection.splice(index, 1);
        let { name, _ } = filtered[0];
        if (this.watched.hasOwnProperty(name)) {
            delete this.watched[name];
            return `You just threw away ${name}!`;
        } else {
            throw new Error(`${movieName} is not watched!`);
        }

    }

    watchMovie(movieName) {
        let movie = this.movieCollection.find(m => movieName === m.name);
        if (movie) {
            if (!this.watched.hasOwnProperty(movie.name)) {
                this.watched[movie.name] = 1;
            } else {
                this.watched[movie.name]++;
            }
        } else {
            throw new Error('No such movie in your collection!');
        }
    }

    favouriteMovie() {
        let favourite = Object.entries(this.watched).sort((a, b) => b[1] - a[1]);
        if (favourite.length > 0) {
            return `Your favourite movie is ${favourite[0][0]} and you have watched it ${favourite[0][1]} times!`;
        } else {
            throw new Error('You have not watched a movie yet this year!');
        }
    }

    mostStarredActor() {
        let mostStarred = {};
        if (this.movieCollection.length > 0) {
            this.movieCollection.forEach(el => {
                let { _, actors } = el;
                actors.forEach(actor => {
                    if (mostStarred.hasOwnProperty(actor)) {
                        mostStarred[actor]++;
                    } else {
                        mostStarred[actor] = 1;
                    }
                })
            });
            let theActor = Object.entries(mostStarred).sort((a, b) => b[1] - a[1]);
            return `The most starred actor is ${theActor[0][0]} and starred in ${theActor[0][1]} movies!`;
        } else {
            throw new Error('You have not watched a movie yet this year!')
        }
    }
}
//IMPORTANT module exports for classes problem

describe("Christmas movies Tests", function() {
    let christmas;
	this.beforeEach(function() {
		christmas = new ChristmasMovies();
	})
    
    it('Ctor Properties', function(){    
        expect(christmas.movieCollection).to.eql([]);
        expect(christmas.movieCollection.length).to.deep.equal(0);
        expect(christmas.watched).to.eql({});
        expect(christmas.actors).to.deep.equal([]);
        expect(christmas.actors.length).to.deep.equal(0);

    });

    //buy
    it("Buy Movie (new movie)", function() {            
        assert.equal(christmas.buyMovie('Name',['ivan','petar']), 'You just got Name to your collection in which ivan, petar are taking part!')
    });

    it("Buy Movie (existing), throws", function() {           
        christmas.buyMovie('Name',['ivan','petar']);      
        expect(function(){christmas.buyMovie('Name',['ivan','petar'])}).to.throw();              
    });
    //!!! IMPORTANT test the SET
    it("Buy Movie with same actors, adds only unique", function() {                   
        assert.equal(christmas.buyMovie('Name',['ivan','ivan']), 'You just got Name to your collection in which ivan are taking part!')
    });

    //discardMovie
    it("Discard non existing throws", function() {           
        expect(function(){christmas.discardMovie('Dimitrichko')}).to.throw();  
    });
    it("Discard watched valid result", function() {          
        christmas.buyMovie('Name',['ivan','petar']);
        christmas.watchMovie('Name') ;       
        assert.equal(christmas.discardMovie('Name'), 'You just threw away Name!');
    });
    it("Discard unwatched throws", function() {            
        christmas.buyMovie('Name',['ivan','petar']);        
        expect(function(){christmas.discardMovie('Name')}).to.throw();
    });

    //watch movie
    //TEST 7 CHECKS THE ERROR MESSAGE
    it("Watch non existing throws", function() {           
        expect(function(){christmas.watchMovie('Dimitrichko')}).to.throw(Error, 'No such movie in your collection!'); 
    });
    it("Existing movie but not watched", function() { 
        christmas.buyMovie('Name',['ivan','petar']);
        christmas.watchMovie('Name');
        console.log(christmas.watched)
        //assert.equal(christmas.watched, {['Name',1]});
        assert.equal(christmas.watched['Name'],1);        
    });
    it("Existing movie and watched 3 times", function() { 
        christmas.buyMovie('Name',['ivan','petar']);
        christmas.watchMovie('Name');
        christmas.watchMovie('Name');
        christmas.watchMovie('Name');
        assert.equal(christmas.watched['Name'],3);        
    });



    //favouriteMovie
    it("Favourite throws, no movie watched", function() {           
        expect(function(){christmas.favouriteMovie()}).to.throw();  
    });
    
    
    it("Favourite return movie with highest watch count", function() { 
        christmas.buyMovie('Name',['ivan','petar']);
        christmas.buyMovie('Movie 2',['gosho','petar']);
        christmas.watchMovie('Name');
        christmas.watchMovie('Name');
        christmas.watchMovie('Name');          
        assert.equal(christmas.favouriteMovie(),'Your favourite movie is Name and you have watched it 3 times!');  
    });
    it('same as the previous test', function() {
        christmas.buyMovie('Name', ['ivan','petar']);
        christmas.buyMovie('Movie 2', ['gosho','petar']);
        christmas.watchMovie('Name');
        christmas.watchMovie('Name');
        christmas.watchMovie('Name');
        christmas.watchMovie('Movie 2');
        expect(christmas.favouriteMovie()).to.equal('Your favourite movie is Name and you have watched it 3 times!');
    });


    //mostStarredActor
    it("mostStarredActor throws, no movie watched", function() {           
        expect(function(){christmas.mostStarredActor()}).to.throw();  
    });
    it("mostStarredActor returns petar", function() {           
        christmas.buyMovie('Name',['ivan','petar']);
        christmas.buyMovie('Movie 2',['gosho','petar']);
        christmas.watchMovie('Name');
        christmas.watchMovie('Name');
        christmas.watchMovie('Name');          
        christmas.watchMovie('Movie 2');          
        assert.equal(christmas.mostStarredActor(),'The most starred actor is petar and starred in 2 movies!');
    });    
});


