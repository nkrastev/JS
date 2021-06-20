class Movie{
    constructor ( movieName, ticketPrice ){
        this.movieName=movieName;
        this.ticketPrice=Number(ticketPrice);
        this.screenings=[];
        
        this.profit=0;
        this.totalSoldTickets=0;
    }

    newScreening(date, hall, description){
        if (this.screenings.some(e=>e.date==date && e.hall==hall)) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }
        let newScreening={date:date, hall:hall, description:description};
        this.screenings.push(newScreening);
        return `New screening of ${this.movieName} is added.`;
    }

    endScreening(date, hall, soldTickets) {
        if (!this.screenings.some(e=>e.date==date && e.hall==hall)) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }
        let targetScreening=this.screenings.find(e=>e.date==date && e.hall==hall);
        let targetIndex=this.screenings.indexOf( targetScreening);

        this.screenings.splice(targetIndex, 1);

        let currentProfit=soldTickets*this.ticketPrice;
        this.profit+=currentProfit;
        this.totalSoldTickets+=soldTickets;

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;

    }
    toString (){
        let result=`${this.movieName} full information:\n`;
        result+=`Total profit: ${this.profit.toFixed(0)}$\n`;
        result+=`Sold Tickets: ${this.totalSoldTickets}\n`;
        if (this.screenings.length>0) {
            this.screenings.sort((a,b) => (a.hall > b.hall) ? 1 : ((b.hall > a.hall) ? -1 : 0));
            result+=`Remaining film screenings:\n`;
            for (const item of this.screenings) {
                result+=`${item.hall} - ${item.date} - ${item.description}\n`;
            }
        }else{
            result+='No more screenings!';
        }
        return result.trimEnd();
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
