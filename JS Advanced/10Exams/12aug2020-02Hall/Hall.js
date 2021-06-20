function solveClasses(){

    class Hall{
        constructor( capacity, name ){
            this.capacity=capacity;
            this.name=name;
            this.events=[];            
        }
        hallEvent( title ){
            //TODO capacity check?
            if (this.events.includes(title)) {
                throw new Error('This event is already added!')
            }
            this.events.push(title);
            return 'Event is added.';
        }
        close(){
            this.events.length=0;
            return `${this.name} hall is closed.`;
        }
        toString(){
            let result=`${this.name} hall - ${this.capacity}\n`;
            if (this.events.length>0) {
                result+=`Events: ${this.events.join(', ')}`;
            }
            return result.trimEnd();
        }
    }

    class MovieTheater extends Hall{
        constructor( capacity, name, screenSize ){
            super(capacity, name);
            this.events=[];
            this.screenSize=screenSize;
        }
        close(){
            let result=super.close();
            return result+='Аll screenings are over.';
        }
        toString(){
            let result=super.toString();
            result+=`\n${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`;
            return result;
        }        
    }

    class ConcertHall extends Hall{
        constructor( capacity, name ){
            super(capacity,name);
            this.events=[];
            this.performers=[];
        }
        hallEvent( title, performers ) {            
            //TODO are performers connected to events?
            if (this.events.includes(title)) {
                throw new Error('This event is already added!');
            }
            this.events.push(title);
            //console.log('Adding performers ',performers);
            this.performers=this.performers.concat(this.performers,performers);
            
            return 'Event is added.';
        }
        close(){
            let result=super.close();
            return result+='Аll performances are over.';
        }
        toString(){
            let result=super.toString();
            
            if (this.performers.length>0) {
                result+=`\nPerformers: ${this.performers.join(', ')}.`;   
            }            
            return result;
        }
    }

    return {
        Hall,
        MovieTheater,
        ConcertHall
    }
}

let classes = solveClasses();
let hall = new classes.Hall(20, 'Main');
// console.log(hall.hallEvent('Breakfast Ideas'));
// console.log(hall.hallEvent('Annual Charity Ball'));
// console.log(hall.toString());
// console.log(hall.close()); 

// let movieHall = new classes.MovieTheater(10, 'Europe', '10m');
// console.log(movieHall.hallEvent('Top Gun: Maverick')); 
// console.log(movieHall.toString());

let concert = new classes.ConcertHall(5000, 'Diamond');        
console.log(concert.hallEvent('The Chromatica Ball', ['LADY GAGA']));  
console.log(concert.toString());
console.log(concert.close());
console.log(concert.toString());
