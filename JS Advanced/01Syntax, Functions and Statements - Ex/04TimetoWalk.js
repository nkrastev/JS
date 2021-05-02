function timeToWalk(steps, meters, speed)
{    
    let distanceInM = steps * meters;    
    let speedPerMeterInSec=speed / 3.6;

    let minutesForBreaks = Math.floor(distanceInM / 500);
    let timeNeeded=distanceInM / speedPerMeterInSec+minutesForBreaks*60;

    let hours= Math.floor(timeNeeded / 3600);
    let minutes= Math.floor(timeNeeded / 60);
    let seconds= Math.ceil(timeNeeded % 60);

    if (hours<10){
        if (minutes<10){
            console.log(`0${hours}:0${minutes}:${seconds}`)
        }else {
            console.log(`0${hours}:${minutes}:${seconds}`)
        }            
    }else{
        if (minutes<10){
            console.log(`${hours}:0${minutes}:${seconds}`)
        }else {
            console.log(`${hours}:${minutes}:${seconds}`)
        }
    }
   
}

timeToWalk(4000,0.6,5)
timeToWalk(2564,0.7,5.5)