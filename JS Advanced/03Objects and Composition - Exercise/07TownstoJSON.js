function solve(input=[]) {
    
    let result=[];

    for (let index = 1; index < input.length; index++) {
        //parce data
        let [town, lat, long] = input[index].split(' | ');
        town=town.replace('| ','');
        lat=Number(Number(lat).toFixed(2)); //toFixed convert it to string again
        long=+(Number(long.replace(' |','')).toFixed(2));

        // console.log(town);
        // console.log(lat);
        // console.log(long);
        
        result.push({Town:town, Latitude:lat, Longitude:long});

    }

    console.log(JSON.stringify(result));

}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);