class Bank {
    
    constructor(bankName){
           
        this._bankName=bankName;
        this.allCustomers=[];
        
    }


    //methods
    newCustomer(customer){
        //what if there are customers with equal names and different IDs
        //what is the definition for existing customer???
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
            target.transactions.push(`${target.firstName} ${target.lastName} made deposit of ${amount}$!`);
        }else{
            target.transactions=[];
            target.transactions.push(`${target.firstName} ${target.lastName} made deposit of ${amount}$!`);
        }        
        //console.log(target.transactions);
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
        console.log(target);
        let result='';
        result+=`Bank name: ${this._bankName}\n`;
        result+=`Customer name: ${target.firstName} ${target.lastName}\n`;
        result+=`Customer ID: ${target.personalId}\n`;
        result+=`Total Money: ${target.totalMoney}$\n`;
        result+=`Transactions:\n`;
        
        for (let index = target.transactions.length-1; index >=0; index-- ){
            result+=`${index+1}. ${target.transactions[index]}\n`;
        }
        
        return result.trimEnd();
    }
}


let bank = new Bank('SoftUni Bank');

//what is the private of this field???
bank._bankName='pesho'; 

bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 1111111 });
bank.newCustomer({ firstName: 'Svetlin', lastName: 'Kirov', personalId: 2 });

//bank.depositMoney(11, 250);
console.log(bank.depositMoney(1111111, 250));
bank.withdrawMoney(1111111, 125);

let output = bank.customerInfo(1111111);

console.log(output);