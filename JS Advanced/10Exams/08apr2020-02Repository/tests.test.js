const assert = require('chai').assert;
const expect = require("chai").expect;

let { Repository } = require("./solution.js");

describe("Tests …", function () {
    describe("Class", function () {
    
        it("Get counter of data", function () {
            let prop={name:'string',age:'number'};
            let persons= new Repository(prop);
            expect(persons.count).to.equal(0);                        
        });

        it("Add entity returns ID", function () {
            let prop={name:'string',age:'number'};
            let persons= new Repository(prop);
            let entity={name:'ivan', age:7};            
            expect(persons.add(entity)).to.equal(0);                        
        });
        it("Add entity returns ID, 2 entities", function () {
            let prop={name:'string',age:'number'};
            let persons= new Repository(prop);
            let entity={name:'ivan', age:7}; 
            persons.add(entity);         
            expect(persons.add(entity)).to.equal(1);                        
        });
        it("Add invalid entity * missing property", function () {
            let prop={name:'string',age:'number'};
            let persons= new Repository(prop);
            let entity=[];             
            expect(function(){persons.add(entity)}).to.throw();                      
        });
        it("Add invalid entity * not correct type", function () {
            let prop={name:'string',age:'number'};
            let persons= new Repository(prop);
            let entity={name:'dimitri4ko',age:'age'};             
            expect(function(){persons.add(entity)}).to.throw();                      
        });
        it("Add invalid entity * NULL", function () {
            let prop={name:'string',age:'number'};
            let persons= new Repository(prop);
            let entity=null;             
            expect(function(){persons.add(entity)}).to.throw();                      
        });
        it("Add invalid entity * empty object", function () {
            let prop={name:'string',age:'number'};
            let persons= new Repository(prop);
            let entity={};             
            expect(function(){persons.add(entity)}).to.throw();                      
        });
        it("Add invalid entity * Array", function () {
            let prop={name:'string',age:'number'};
            let persons= new Repository(prop);
            let entity=['pesho',7];             
            expect(function(){persons.add(entity)}).to.throw();                      
        });

        it("getId(id) throw", function () {
            let prop={name:'string',age:'number'};
            let persons= new Repository(prop);            
            expect(function(){persons.getId(7)}).to.throw();                      
        });
        it("getId(id) valid", function () {
            let prop={name:'string',age:'number'};
            let persons= new Repository(prop);
            let entity={name:'dimitri4ko',age:7}; 
            persons.add(entity); 
            expect(persons.getId(0)).to.eql({name:'dimitri4ko',age:7});                          
        });
        it("getId(id) valid", function () {
            let prop={name:'string',age:'number'};
            let persons= new Repository(prop);
            let entity1={name:'dimitri4ko',age:7}; 
            persons.add(entity1); 
            let entity2={name:'dimitri4ko',age:8877}; 
            persons.add(entity2); 
            expect(persons.getId(1)).to.eql({name:'dimitri4ko',age:8877});                          
        });

        it("update throw", function () {
            let prop={name:'string',age:'number'};
            let persons= new Repository(prop);
            let newEntity={name:'dimitri4ko',age:7};
            expect(function (){persons.update(17, newEntity)}).to.throw();                          
        });

        it("update valid", function () {
            let prop={name:'string',age:'number'};
            let persons= new Repository(prop);
            let entity={name:'dimitri4ko',age:7}; 
            persons.add(entity); 
            let newEntity={name:'dimitri4ko',age:99}
            persons.update(0, newEntity);
            expect(persons.getId(0)).to.eql({name:'dimitri4ko',age:99});
        });

        it("delete throw", function () {
            let prop={name:'string',age:'number'};
            let persons= new Repository(prop);            
            expect(function (){persons.del(178)}).to.throw();                          
        });

        it("delete valid", function () {
            let prop={name:'string',age:'number'};
            let persons= new Repository(prop);
            let entity1={name:'dimitri4ko',age:7}; 
            let entity2={name:'pesho',age:17}; 
            persons.add(entity1);
            persons.add(entity2);            

            persons.del(0);           
            expect(persons.getId(1)).to.eql({name:'pesho',age:17});
        });

        it("class data (MAP) property", function () {
            let prop={name:'string',age:'number'};
            let persons= new Repository(prop);
            let entity1={name:'dimitri4ko',age:7}; 
            let entity2={name:'pesho',age:17}; 
            persons.add(entity1);
            persons.add(entity2);            
                 
            expect(persons.data.size).to.equal(2);
        });

        it("class data (MAP) property", function () {
            let prop={name:'string',age:'number'};
            let persons= new Repository(prop);
            let entity1={name:'dimitri4ko',age:7}; 
            let entity2={name:'pesho',age:17}; 
            persons.add(entity1);
            persons.add(entity2);            
            
            expect(persons.nextId()).to.equal(2);
        });       
        

        
    });
    
});
