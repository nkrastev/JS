class Circle{
    constructor(r){
        this.radius=r;
    }

    get diameter(){
        return this.radius*2;
    }
    set diameter(value){
        if (value<0) {
            throw new Error('Diameter cannot be negative!')
        }
        this.radius=value/2;
    }

    get area(){
        return this.radius * this.radius * Math.PI;
    }

}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
