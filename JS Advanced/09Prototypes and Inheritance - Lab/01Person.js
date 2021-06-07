class Person{
    constructor(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
        
    }

    get fullName(){
        return this.firstName+' '+this.lastName;
    }
    set fullName(value){
        const tokens=value.split(' ');
        this.firstName=tokens[0];
        this.lastName=tokens[1];
    }
    
}


let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
