
//трябва във функцията да си декларираш класа от предишната задача: що за безумие?!
function getPersons() {
    class Person{
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }           
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        } 
    }

    let person1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let person2 = new Person('SoftUni');
    let person3 = new Person('Stephan', 'Johnson', 25);
    let person4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');

    let arr=[];
    arr.push(person1);
    arr.push(person2);
    arr.push(person3);
    arr.push(person4);

    return arr;
}

let persons = getPersons();
console.log(persons.length);

let result=getPersons();
for (const iterator of result) {
    console.log(iterator.toString());
}