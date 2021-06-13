class Parking{
    constructor(capacity){
        this.capacity=capacity;
        this.vehicles=[];
    }

    addCar( carModel, carNumber ){
        if (this.vehicles.length>=this.capacity) {
            throw new Error('Not enough parking space.');
        }
        //create and park the new car
        let car={carModel:carModel, carNumber:carNumber, payed:false};
        this.vehicles.push(car);
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber){
        if (!this.vehicles.some(e=>e.carNumber==carNumber)) {
            throw new Error('The car, you\'re looking for, is not found.');
        }
        //find the car :)
        let targetCar=this.vehicles.find(e=>e.carNumber==carNumber);        
        if (targetCar.payed==false) {
            throw new Error(`${targetCar.carNumber} needs to pay before leaving the parking lot.`);
        }
        let indexToRemove=this.vehicles.indexOf(targetCar);        
        this.vehicles.splice(indexToRemove,1);
        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber){
        if (!this.vehicles.some(e=>e.carNumber==carNumber)) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        let targetCar=this.vehicles.find(e=>e.carNumber==carNumber);
        if (targetCar.payed==true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }
        targetCar.payed=true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        if (carNumber==undefined) {
            //stat for the parking
            let parkingObj=this.vehicles;
            parkingObj.sort((a, b) => a.carModel > b.carModel && 1 || -1);
            
            let returnResult=`The Parking Lot has ${this.capacity-this.vehicles.length} empty spots left.\n`;
            for (const iterator of parkingObj) {
                let payedString='';
                if (iterator.payed==true) {
                    payedString='Has payed';
                }else{
                    payedString='Not payed';
                }
                returnResult+=`${iterator.carModel} == ${iterator.carNumber} - ${payedString}\n`;                
            }            
            return returnResult.trimEnd();
        }else{
            let targetCar=this.vehicles.find(e=>e.carNumber==carNumber);
            let payedString='';
            if (targetCar.payed==true) {
                payedString='Has payed';
            }else{
                payedString='Not payed';
            }
            return `${targetCar.carModel} == ${targetCar.carNumber} - ${payedString}`;
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Audi t600", "KX3691CA"));
console.log(parking.addCar("BMW t600", "TX3691CA"));
console.log(parking.getStatistics());

