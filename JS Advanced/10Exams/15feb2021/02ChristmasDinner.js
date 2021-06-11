class ChristmasDinner {
    constructor(budget){
        this.budget=Number(budget);
        this.dishes=[];
        this.product=[];
        this.guests={};
    }

    get budget(){
        return this._budget;
    }
    set budget(value){          
        if (value<0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget=value;
    }

    shopping(product){
        const item=product[0];
        const price=Number(product[1]);

        if (this._budget<price) {
            throw new Error('Not enough money to buy this product');
        }
        this.product.push(item);
        this._budget-=price;
        return `You have successfully bought ${item}!`;
    }

    recipes(recipe){        
        //check if products contains all elements of productsList
        let allFounded = recipe.productsList.every( ai => this.product.includes(ai));       

        if (allFounded) {
            this.dishes.push({recipeName:recipe.recipeName, productList: recipe.productList});
            return `${recipe.recipeName} has been successfully cooked!`;
        }else{
            throw new Error('We do not have this product');
        }
    }

    inviteGuests(name, dish){

    }

    showAttendance(){

    }
}


//let dinner = new ChristmasDinner(300);
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
console.log(dinner.shopping(['Cabbage', 4]));
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

//console.log(dinner.budget);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});/*
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());*/
