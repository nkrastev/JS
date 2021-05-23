function createSortedList() {
    
    let objectItems=[];

    let obj={
        items:[],
        add: function (element) {
            this.items.push(element);
            sortList(this.items);           
        },
        remove: function (index) {
            if (index>=0 && index<this.items.length) {
                this.items.splice(index, 1);
            }
        },
        get: function (index) {
            if (index>=0 && index<this.items.length) {
                return this.items[index];
            }  
        },
        get size() {
            return this.items.length;
        },
        printList: function () {
            console.log(this.items.join(', '));
        }

    };

    function sortList(arr=[]) {
        arr.sort(function(a, b){return a-b});
    }
    //obj.items.sort(function(a, b){return a-b});
    
    return obj;
}


let list = createSortedList();
list.add(5);
list.printList();
list.add(6);
list.printList();
list.add(7);
list.printList();
list.add(2);
list.printList();

