function solve(arr=[]){

    let towns={};

    arr.forEach(element => {
        
        let [name, population] = element.split(' <-> ');
        population = Number(population);

        if (towns[name] != undefined) { population += towns[name];}
        
        towns[name] = population;
    });

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }

}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000',
'Sofia <-> 50'
]
);