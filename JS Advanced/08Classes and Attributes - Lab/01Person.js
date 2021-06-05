class Person{
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    //get and set to age to go via fields
    get age(){
        return this._age;
    }
    set age(value){
        if (value<0) {
            throw new Error('Age cannot be negative!')
        }
        this._age=value;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    } 
}

let person = new Person('Anna', 'Simpson', -22, 'anna@yahoo.com');
console.log(person.toString());
