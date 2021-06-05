class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    get x(){
        return this._x;
    }
    set x(value){
        if (isNaN(value)) {
            throw new Error('Coordinate have to be Number');
        }
        this._x=value;
    }
    get y(){
        return this._y;
    }
    set y(value){
        if (isNaN(value)) {
            throw new Error('Coordinate have to be Number');
        }
        this._y=value;
    }

    static distance(p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }
}

let p1 = new Point('Pesho', 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
