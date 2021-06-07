class Stringer{
    constructor(string, lenght){
        this.initial=string;
        this.innerString=string;
        this.innerLength=Number(lenght);
    }

    increase(length){
        if (this.innerLength+length<0) {
            this.innerLength=0;
        }else{
            this.innerLength+=length;
        }
    }

    decrease(length){
        if (this.innerLength-length<0) {
            this.innerLength=0;
        }else{
            this.innerLength-=length;
        }
    }

    toString(){
        if (this.innerString.length > this.innerLength) {
            return this.innerString.substring(0, this.innerLength) + '...';
        } else if (this.innerLength == 0) {
            return '...';
        }
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
