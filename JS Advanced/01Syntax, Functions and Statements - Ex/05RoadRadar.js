function solve(speed, area){
    let difference;
    let status;
    let result;
    let zoneLimit;
    
    switch (area) {
        case 'motorway':
            zoneLimit=130;
            break;
        case 'interstate':
            zoneLimit=90;
            break;
        case 'city':
            zoneLimit=50;
            break;
        case 'residential':
            zoneLimit=20;
            break;        
    }

    difference=zoneLimit-speed;

    if (difference>=0) {
        result=`Driving ${speed} km/h in a ${zoneLimit} zone`;
    }
    else{
        let speedingString;
        if (Math.abs(difference)<=20) {
            speedingString='speeding';
        }else if (Math.abs(difference)<=40) {
            speedingString='excessive speeding';
        }else{
            speedingString='reckless driving';
        }
        result=`The speed is ${Math.abs(difference)} km/h faster than the allowed speed of ${zoneLimit} - ${speedingString}`;
    }

    console.log(result);
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');