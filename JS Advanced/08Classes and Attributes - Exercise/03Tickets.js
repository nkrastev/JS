function solve(inputArray=[], criteria) {
    
    class Ticket{
        constructor(destination, price, status){
            this.destination=destination;
            this.price=Number(price);
            this.status=status;
        }
    }
    
    let listOfTickets=[]; 

    for (const item of inputArray) {        
        ticketItems=item.split('|');        
        listOfTickets.push(new Ticket(ticketItems[0], ticketItems[1], ticketItems[2]));
    }

    //thanks to Cheeso
    let byProperty = function(prop) {
        return function(a,b) {
            if (typeof a[prop] == "number") {
                return (a[prop] - b[prop]);
            } else {
                return ((a[prop] < b[prop]) ? -1 : ((a[prop] > b[prop]) ? 1 : 0));
            }
        };
    };

    listOfTickets.sort(byProperty(criteria));
    
    return listOfTickets;
}

let result=(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));

result.forEach(element => {
    console.log(element.destination+' '+element.price+' '+element.status);
});

