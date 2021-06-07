function ReturnClasses() {
    class Figure{
        //set default value by the ctor
        constructor(units = 'cm'){
            this.units=units;           
        }
        get area(){
            return this.multiplier;
        }        

        changeUnits(value) {
            this.units = value;
        }
        scaleParam(param) {
            switch (this.units) {
                case 'm':
                    param /= 10;
                    break;
                case 'cm':
                    break;
                case 'mm':
                    param *= 10;
                    break;
                default:
                    break;
            }
            return param;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }        
    }
    class Circle extends Figure{
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }
        get area() {
            return Math.PI * this.radius * this.radius;
        }
        get radius() {
            return this.scaleParam(this._radius);
        }
        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure{
        constructor(width, height, units){
            super(units);
            this._width=width;
            this._height=height;            
        }
        get area() {
            return this.width * this.height;
        }
        get width() {
            return this.scaleParam(this._width);
        }
        get height() {
            return this.scaleParam(this._height);
        }
        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }    

    return {
        Figure, Circle, Rectangle
    }
}

let classes = ReturnClasses();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let c = new Circle(5);
console.log(c.area);
console.log(c.toString());
//assert.equal(c.area,78.53981633974483, "1");
//assert.equal(c.toString(),"Figures units: cm Area: 78.53981633974483 - radius: 5","2"); 
    