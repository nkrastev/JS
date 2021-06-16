class Vacationer {
    constructor(fullName, creditCard){
        this.fullName=fullName;
        this._idNumber = this.generateIDNumber();
        this.creditCard=creditCard;
        this.wishList=[];
    }

    get fullName(){
        return this._fullName;
    }
    set fullName(value){
        if (value.length!=3) {
            throw new Error('Name must include first name, middle name and last name');
        }
        const regex = new RegExp('^[A-Z]{1}[a-z]{1,30}$');
        for (let index = 0; index < value.length; index++) {            
            if (!regex.test(value[index])) {
                throw new Error('Invalid full name');
            }
        }
        this._fullName={firstName:value[0], middleName:value[1], lastName:value[2]};
    }
    get creditCard(){
        return this._creditCard;
    }
    set creditCard(value){
        if (value===undefined) {
            this._creditCard={cardNumber: 1111,expirationDate: '',securityNumber: 111}
        }else{
            if (value.length!=3) {
                throw new Error('Missing credit card information');
            }
            if ((typeof value[0] != 'number') || (typeof value[2] != 'number')) {
                throw new Error('Invalid credit card details');
            }
            this._creditCard={cardNumber: value[0],expirationDate: value[1],securityNumber: value[2]};
        }
    }

    get idNumber(){
        return this._idNumber;
    }
    set idNumber(value){
        this._idNumber=this.generateIDNumber();
    }
    

    generateIDNumber(){        
        let total=231*this.fullName.firstName.charCodeAt(0)+139*this.fullName.middleName.length;       
        let vowel=['a','e','o','i','u'];
        let result='';
        if (vowel.includes(this.fullName.lastName[this.fullName.lastName.length-1])) {
            result=total.toString()+'8';
        }else{
            result=total.toString()+'7';
        }
        return result;
    }

    addCreditCardInfo(input){
        if (input.length!=3) {
            throw new Error('Missing credit card information');
        }
        if ((typeof input[0] != 'number') || (typeof input[2] != 'number')) {
            throw new Error('Invalid credit card details');
        }
        this._creditCard={cardNumber: input[0],expirationDate: input[1],securityNumber: input[2]};
    }

    addDestinationToWishList(destination){
        if (this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist');
        }
        this.wishList.push(destination);
        //starting from the destination with the shortest name to the one with the longest name
        this.wishList.sort(function (a, b) {
            if (a.length < b.length) {
                return -1;
            }
            if (b.length < a.length) {
                return 1;
            }
            return 0;
        });
    }

    getVacationerInfo(){
        let wishListString='';
        if (this.wishList.length==0) {
            wishListString='empty';
        }else{
            wishListString=this.wishList.join(', ');
        }
        let result='';
        result+=`Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\n`;
        result+=`ID Number: ${this.idNumber}\n`;
        result+=`Wishlist:\n`;
        result+=`${wishListString}\n`;
        result+=`Credit Card:\n`;
        result+=`Card Number: ${this.creditCard.cardNumber}\n`;
        result+=`Expiration Date: ${this.creditCard.expirationDate}\n`;
        result+=`Security Number: ${this.creditCard.securityNumber}`;
        return result;
    }
}

// Validate instance creation 
// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"],[123456789, "10/01/2018", 777]);

vacationer1.idNumber=4;

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Spaine');
vacationer1.addDestinationToWishList('Spaiee');
vacationer1.addDestinationToWishList('Germany');

//vacationer1.wishList=4;

//vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
//console.log(vacationer2.getVacationerInfo());

