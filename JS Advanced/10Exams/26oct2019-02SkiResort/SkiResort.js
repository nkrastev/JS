class SkiResort {

    constructor(name) {
        this.name = name;
        this.voters = 0;
        this.hotels = [];
    }
    get bestHotel() {
        if (this.voters === 0) {
            return "No votes yet";
        }
        let best = this.hotels.reduce((a, b) => a.points > b.points ? a : b);
        return `Best hotel is ${best.name} with grade ${best.points}. Available beds: ${best.beds}`
    }

    build(name, beds) {
        if (name === "" || beds < 1) {
            throw new Error("Invalid input");
        }
        let hotel = {
            name,
            beds,
            points: 0
        }
        this.hotels.push(hotel);
        return `Successfully built new hotel - ${name}`
    }

    book(name, beds) {
        if (name === "" || beds < 1) {
            throw new Error("Invalid input");
        }
        let hotel = this.hotels.find(hotel => hotel.name === name);
        if (!hotel) {
            throw new Error("There is no such hotel");
        }
        if (hotel.beds < beds) {
            throw new Error("There is no free space");
        }
        hotel.beds -= beds;
        return "Successfully booked";
    }

    leave(name, beds, points) {
        if (name === "" || beds < 1) {
            throw new Error("Invalid input");
        }
        let hotel = this.hotels.find(hotel => hotel.name === name);
        if (!hotel) {
            throw new Error("There is no such hotel");
        }
        hotel.points += beds * points;
        hotel.beds += beds;
        this.voters += beds;

        return `${beds} people left ${name} hotel`;
    }

    averageGrade() {
        if (this.voters === 0) {
            return "No votes yet";
        }
        let grade = this.hotels.reduce((a, b) => a + b.points, 0)/this.voters;
        return `Average grade: ${grade.toFixed(2)}`;
    }

    
}