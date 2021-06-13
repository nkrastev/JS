const assert = require('chai').assert;
const expect = require("chai").expect;
const pizzUni = require('./pizza');

describe("Tests …", function() {

    describe("makeAnOrder obj ", function() {
        it("Throws if orderedPizza not provided", function() {
            expect(function(){pizzUni.makeAnOrder({})}).to.throw();
        });
        it("Only pizza order", function() {
            let obj={orderedPizza:'the name of the pizza'};            
            expect(pizzUni.makeAnOrder(obj)).to.equal('You just ordered the name of the pizza');       
        });
        it("Only pizza and drink", function() {
            let obj={orderedPizza:'pizza',orderedDrink:'drink'};            
            expect(pizzUni.makeAnOrder(obj)).to.equal('You just ordered pizza and drink.');       
        });
     });

     describe("getRemainingWork obj ", function() {
        it("all pizzas ready", function() {
            let obj=[{pizzaName: 'pizza1', status: 'ready' }, {pizzaName: 'pizza2', status: 'ready' }];
            expect(pizzUni.getRemainingWork(obj)).to.equal('All orders are complete!');   
        });
        it("pizza 1 not ready", function() {
            let obj=[{pizzaName: 'pizza1', status: 'preparing' }, {pizzaName: 'pizza2', status: 'ready' }];
            expect(pizzUni.getRemainingWork(obj)).to.equal('The following pizzas are still preparing: pizza1.');   
        });
        it("pizza 1 and 2 not ready", function() {
            let obj=[{pizzaName: 'pizza1', status: 'preparing' }, {pizzaName: 'pizza2', status: 'preparing' }];
            expect(pizzUni.getRemainingWork(obj)).to.equal('The following pizzas are still preparing: pizza1, pizza2.');   
        });
       
     });

     describe("orderType(totalSum, typeOfOrder) ", function() {
        it("Delivery, return total sum", function() {
            let result=pizzUni.orderType(10,'Delivery');
            expect(result).to.equal(10);   
        });
        it("Carry, return total sum -10%", function() {
            let result=pizzUni.orderType(10,'Carry Out');
            expect(result).to.equal(9);   
        });
        
       
     });


     
});

