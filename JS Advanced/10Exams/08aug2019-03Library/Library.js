class Library {
    constructor(libraryName){
        this.libraryName=libraryName;
        this.subscribers=[];
        this.subscriptionTypes ={
            normal:libraryName.length,
            special:libraryName.length*2,
            vip:Number.MAX_SAFE_INTEGER
        }
    }

    subscribe(name, type){
        if (type!='normal' && type!='special' && type!='vip') {
            throw new Error(`The type ${type} is invalid`);
        }
        let target={};
        if (this.subscribers.some(e=>e.name==name)) {
            target=this.subscribers.find(e=>e.name==name);
            target.type=type;
        }else{
            //new subscriber
            target={name:name, type:type, books:[]};
            this.subscribers.push(target);
        }
        return target;
    }

    unsubscribe(name){
        if (!this.subscribers.some(e=>e.name==name)) {
            throw new Error(`There is no such subscriber as ${name}`);
        }
        this.subscribers.splice(this.subscribers.findIndex(e => e.name === name), 1);
        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor){
        if (!this.subscribers.some(e=>e.name==subscriberName)) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }
        let target=this.subscribers.find(e=>e.name==subscriberName);
        let targetLimit=-1;
        if (target.type=='vip') {
            targetLimit=this.subscriptionTypes.vip;
        }else if (target.type=='special') {
            targetLimit=this.subscriptionTypes.special;
        }else{
            targetLimit=this.subscriptionTypes.normal;
        }

        if (targetLimit<=target.books.length) {
            throw new Error(`You have reached your subscription limit ${targetLimit}!`);
        }
        let bookObj={title:bookTitle, author:bookAuthor};
        target.books.push(bookObj);

        return target;
    }

    showInfo(){
        let result='';
        if (this.subscribers.length==0) {
            result=`${this.libraryName} has no information about any subscribers`;
        }else{
            for (const item of this.subscribers) {
                result+=`Subscriber: ${item.name}, Type: ${item.type}\n`;
                let bookString='';
                for (const book of item.books) {
                   bookString+=`${book.title} by ${book.author} `;
                }
                result+=`Received books: ${bookString.trimEnd()}\n`;                
            }
        }
        return result.trimEnd();
    }
}

let lib = new Library('Lib');

console.log(lib.subscriptionTypes.normal);
console.log(lib.subscriptionTypes.special);
console.log(lib.subscriptionTypes.vip);

console.log(lib.subscribe('Peter', 'normal'));
console.log(lib.subscribe('John', 'special'));
console.log(lib.subscribe('Dimitri4ko', 'special'));
//console.log(lib.unsubscribe('Peter', 'special'));

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');
lib.receiveBook('Dimitri4ko', 'Harry Potter', 'J. K. Rowling');

console.log(lib.showInfo());
