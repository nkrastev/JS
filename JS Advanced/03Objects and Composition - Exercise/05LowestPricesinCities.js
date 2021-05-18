function solve(input) {
    
    let data = {};

    for (let index = 0; index < input.length; index++) {
        
        let [townName, productName, priceItem]=input[index].split(' | ');
        priceItem=Number(priceItem);
    
        if (data[productName]) {

            if (data[productName].price > priceItem) {
                data[productName] ;
            }            

        } else {
            data[productName] = { town:townName, price: priceItem }
        }
                
        // :( 
    }

    for (const product in data) {
        console.log(`${product} -> ${data[product].price} (${data[product].town})`)
    };
    

}

solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']
);