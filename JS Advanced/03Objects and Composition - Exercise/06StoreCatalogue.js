function solve(input=[]){

    let catalogue=[];
    let listLetters=[];

    for (let index = 0; index < input.length; index++) {
        
        let [name, price] = input[index].split(' : ');
        price=Number(price);

        catalogue.push({letter:name[0],name:name, price:price});
        listLetters.push(name[0]);
    }    

    //select unique letters
    let unique = listLetters.filter((x, i, a) => a.indexOf(x) === i).sort();
            
    unique.forEach(element=>{        
        console.log(element);
        //get all records with current letter and sort the temp array
        let currentRecords=catalogue.filter(record=>record.letter===element).sort((a, b) => a.name.localeCompare(b.name));;
        
        //print all filter results
        currentRecords.forEach(element => {
            console.log('  '+element.name+': '+element.price)
        });
    })
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);