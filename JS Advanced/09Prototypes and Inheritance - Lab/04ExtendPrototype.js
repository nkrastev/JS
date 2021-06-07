class Person{
    constructor(name, email){
        this.name=name;
        this.email=email;
    }
    toString(){
        return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
    }
}

function extendPrototype(classToExtend) {   
    
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`;
      };    
}

extendPrototype(Person);

let p = new Person("Pesho","email@hit.bg");
console.log(p.species);
console.log(p.name);
console.log(p.toSpeciesString());