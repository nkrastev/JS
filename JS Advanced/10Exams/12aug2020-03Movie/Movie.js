class Movie{
    constructor ( movieName, ticketPrice ){
        this.movieName=movieName;
        this.ticketPrice=Number(ticketPrice);
        this.screenings=[]; //array of objects
        this.totalProfit=0;
        this.totalSoldTickets=0;
    }
    newScreening(date, hall, description){
        if (this.screenings.find(e=>e.date==date && e.hall==hall)) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }
        this.screenings.push({date,hall,description});
        return `New screening of ${this.movieName} is added.`;
    }
    endScreening(date, hall, soldTickets){
        if (!this.screenings.find(e=>e.date==date && e.hall==hall)) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }
        this.totalProfit+=this.ticketPrice*soldTickets;
        this.totalSoldTickets+=soldTickets;
        
        this.screenings.splice(this.screenings.findIndex(e=>e.date==date && e.hall==hall), 1);
        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${this.ticketPrice*soldTickets}`;
    }
    toString(){
        let result=`${this.movieName} full information:\n`;
        result+=`Total profit: ${this.totalProfit.toFixed(0)}$\n`;
        result+=`Sold Tickets: ${this.totalSoldTickets}\n`;        
        if (this.screenings.length>0) {
            result+=`Remaining film screenings:\n`;
            this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));
            for (const item of this.screenings) {
                result+=`${item.hall} - ${item.date} - ${item.description}\n`;
            }
        }else{
            result+=`No more screenings!`;
        }
        return result.trimEnd();
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('1', 'A', `3D`));
console.log(m.newScreening('1', 'B', `3D`));
console.log(m.newScreening('1', 'D', `3D`));
console.log(m.newScreening('1', 'C', `3D`));

console.log(m.endScreening('1', 'A', 2));
console.log(m.endScreening('1', 'B', 3));
console.log(m.endScreening('1', 'C', 4));
//console.log(m.endScreening('1', 'D', 5));

console.log(m.toString());
