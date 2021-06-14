class Bank {
    constructor(bankName){
        this._bankName=bankName;
        this.allCustomers=[];
    }

    get bankName(){
        return this._bankName;
    }
    set bankName(value){
        //todo validate string type?
        this._bankName=value;
    }

    //methods
    newCustomer(customer){
        if (this.allCustomers.some(e=>e.personalId==customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }                        
        this.allCustomers.push(customer);
        return customer;
    }
    depositMoney (personalId, amount){
        if (!this.allCustomers.some(e=>e.personalId==personalId)) {
            throw new Error('We have no customer with this ID!');
        }
        let target=this.allCustomers.find(e=>e.personalId==personalId);

        if (target.hasOwnProperty('totalMoney')) {
            target.totalMoney+=Number(amount);
        }else{
            target.totalMoney=Number(amount);
        }
        
        if (target.hasOwnProperty('transactions')) {
            
        }else{
            target.transactions=[];
            target.transactions.push(`${target.firstName} ${target.lastName} made deposit of ${amount}$!`);
        }        
        console.log(target.transactions);
        return `${target.totalMoney}$`;
    }

    withdrawMoney (personalId, amount){
        if (!this.allCustomers.some(e=>e.personalId==personalId)) {
            throw new Error('We have no customer with this ID!');
        }
        let target=this.allCustomers.find(e=>e.personalId==personalId);
        if (target.totalMoney<amount || !target.hasOwnProperty('totalMoney')) {
            throw new Error(`${target.firstName} ${target.lastName} does not have enough money to withdraw that amount!`);
        }

        target.totalMoney-=amount;
        if (target.hasOwnProperty('transactions')) {
            target.transactions.push(`${target.firstName} ${target.lastName} withdrew ${amount}$!`);
        }else{
            target.transactions=[];
            target.transactions.push(`${target.firstName} ${target.lastName} withdrew ${amount}$!`);
        }  
        //console.log(target.transactions);

        return `${target.totalMoney}$`;
    }

    customerInfo (personalId){
        if (!this.allCustomers.some(e=>e.personalId==personalId)) {
            throw new Error('We have no customer with this ID!');
        }
        let target=this.allCustomers.find(e=>e.personalId==personalId);
        let result='';
        result+=`Bank name: ${this.bankName}\n`;
        result+=`Customer name: ${target.firstName} ${target.lastName}\n`;
        result+=`Customer ID: ${target.personalId}\n`;
        result+=`Total Money: ${target.totalMoney}$\n`;
        result+=`Transactions:\n`;
        
        for (let index = target.transactions.length-1; index =0; index--) {
            result+=`${index}. ${target.transaction[index]}`;
        }
        return result.trimEnd();
    }
}


let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));



console.log(bank.depositMoney(6233267, 250));

console.log(bank.withdrawMoney(6233267,5));

console.log(bank.depositMoney(6233267, 250));
console.log(bank.depositMoney(4151596,555));

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

