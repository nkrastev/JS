class ChristmasDinner {
    constructor(budget){
        this.budget=budget;
        this.dishes=[];
        this.products=[];
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
        this._budget-=price;
        this.products.push(item);
        return `You have successfully bought ${item}!`;
    }

    recipes(recipe){        
        //check if products contains all elements of productsList
        let allFounded = recipe.productsList.every( ai => this.products.includes(ai));       

        if (allFounded) {
            // в условието е записано push an object in the following format: { recipeName, productList }
            // 6 ТЕСТ проверява името на пропертито дали е продуктСлист...
            this.dishes.push({recipeName:recipe.recipeName, productsList: recipe.productsList});
            return `${recipe.recipeName} has been successfully cooked!`;
        }else{
            throw new Error('We do not have this product');
        }
    }

    inviteGuests(name, dish){
        if (!this.dishes.some(e=>e.recipeName==dish)) {
            throw new Error('We do not have this dish');
        }
        if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }
        this.guests[name]=dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance(){
        let result='';
        //console.log(this.guests);
        for (const guest in this.guests) {
            let dishItems=this.dishes.find(e=>e.recipeName===this.guests[guest]); 
            //console.log('Search term '+this.guests[guest]);            
            result+=`${guest} will eat ${this.guests[guest]}, which consists of ${dishItems.productsList.join(', ')}\n`;
        }
        return result.trimEnd();
    }
}


//let dinner = new ChristmasDinner(300);
let dinner = new ChristmasDinner(300);


console.log(dinner.budget);
dinner.shopping(['Salt', -5]);
console.log(dinner.budget);
dinner.shopping(['Beans', 3]);
console.log(dinner.shopping(['Cabbage',7]));
console.log(dinner.budget);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

console.log(dinner.budget);

console.log(dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
}));
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});


console.log(dinner.inviteGuests('Ivan', 'Oshav'));
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
