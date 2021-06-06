class List{    
    constructor() {
        this.data = [];
        this.size = this.data.length;
    }    
    
    add(value){
        if (isNaN(value)) {
            throw new Error('Adding element must be a number');
        }
        this.data.push(Number(value));
        this.data.sort((a,b) => a-b);
        this.size++;
        return this;
    }
    remove(index){        
        //TODO Check if index is number
        if (index>=0 && index<this.data.length) {
        this.data.splice(index, 1);
        this.size--;
        this.data.sort((a,b) => a-b);
        }else{
            throw new Error('Remove Error: index not found');
        }  
        return this;      
    }

    get(index){
        
        if (index>=0 && index<this.data.length) {
            return this.data[index];
        }else{
            throw new Error('Get Error: index not found');
        }
    }    
      
    
}

let list = new List();

//console.log(list.hasOwnProperty('size'));
console.log('Current size '+list.size);
list.add(5);
console.log('Current size '+list.size);
list.add(6);
list.add(7);

console.log(list);
console.log(list.get(1)); 
list.remove(1);


console.log('Current size '+list.size);
console.log(list.get(1));
